/*CMD
  command: !usersearch
  help: Search for a user by ID
  need_reply: true
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER
🔍 Sᴇɴᴅ ᴛʜᴇ Uꜱᴇʀ Iᴅ ᴛᴏ ꜱᴇᴀʀᴄʜ:
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var searchId = request.text ? request.text.trim() : ""
if (!searchId || !/^\d+$/.test(searchId)) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ Iᴅ. Pʟᴇᴀꜱᴇ ꜱᴇɴᴅ ᴀ ɴᴜᴍᴇʀɪᴄ Tᴇʟᴇɢʀᴀᴍ Iᴅ.</b>", { parse_mode: "HTML" })
  return
}

var idstore = Bot.getProperty("idstore", [])
var recentUsers = Bot.getProperty("recent_users", [])
var bannedUsers = Bot.getProperty("banned_users", [])

var found = idstore.indexOf(searchId) !== -1
var banned = false
var userInfo = null

for (var i = 0; i < bannedUsers.length; i++) {
  if (String(bannedUsers[i].id) === searchId) {
    banned = true
    break
  }
}

for (var j = 0; j < recentUsers.length; j++) {
  if (String(recentUsers[j].id) === searchId) {
    userInfo = recentUsers[j]
    break
  }
}

var caption = "<b>╭━━ 🔍 Uꜱᴇʀ Sᴇᴀʀᴄʜ ━━╮</b>\n\n" +
  "<b>🆔 Iᴅ:</b> <code>" + searchId + "</code>\n" +
  "<b>📋 Rᴇɢɪꜱᴛᴇʀᴇᴅ:</b> " + (found ? "✅ Yᴇꜱ" : "❌ Nᴏ") + "\n" +
  "<b>🚫 Bᴀɴɴᴇᴅ:</b> " + (banned ? "🔴 Yᴇꜱ" : "🟢 Nᴏ") + "\n"

if (userInfo) {
  caption += "<b>👤 Nᴀᴍᴇ:</b> " + Libs.Helpers.escapeHTML(userInfo.name || "Unknown") + "\n"
  if (userInfo.username) {
    caption += "<b>🌐 Uꜱᴇʀɴᴀᴍᴇ:</b> @" + userInfo.username + "\n"
  }
}

caption += "\n<b>╰━━━━━━━━━━━━━━━━━━╯</b>"

var buttons = [
  [
    { text: "🔍 Sᴇᴀʀᴄʜ Aɢᴀɪɴ", callback_data: "!usersearch" },
    { text: "◁ Bᴀᴄᴋ", callback_data: "!users" }
  ]
]

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: buttons }
})
