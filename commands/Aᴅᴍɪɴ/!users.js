/*CMD
  command: !users
  help: User management panel
  need_reply: false
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: !userlist
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var totalUsers = Libs.ResourcesLib.anotherChatRes("totalusers", "global")
var userCount = totalUsers.value() || 0
var idstore = Bot.getProperty("idstore", [])
var storeCount = idstore ? idstore.length : 0
var bannedUsers = Bot.getProperty("banned_users", [])
var banCount = bannedUsers ? bannedUsers.length : 0

// Get last 10 users
var recentUsers = Bot.getProperty("recent_users", [])
var recentList = ""
if (recentUsers.length > 0) {
  var recent = recentUsers.slice(-10).reverse()
  for (var i = 0; i < recent.length; i++) {
    var u = recent[i]
    var name = Libs.Helpers.escapeHTML(u.name || "Unknown")
    var username = u.username ? " @" + u.username : ""
    recentList += (i + 1) + ". " + name + username + " <code>" + u.id + "</code>\n"
  }
} else {
  recentList = "Nᴏ ʀᴇᴄᴇɴᴛ ᴜꜱᴇʀꜱ ᴛʀᴀᴄᴋᴇᴅ ʏᴇᴛ.\n"
}

var userBar = Libs.Helpers.getProgressBar(userCount, 10000, 10)

var caption = "<b>╭━━ 👑 Uꜱᴇʀ Mᴀɴᴀɢᴇᴍᴇɴᴛ ━━╮</b>\n\n" +
  "<b>📊 Oᴠᴇʀᴠɪᴇᴡ:</b>\n" +
  "├ 👥 Tᴏᴛᴀʟ: <b>" + Libs.Helpers.formatNumber(userCount) + "</b>\n" +
  "├ 🗄️ Sᴛᴏʀᴇᴅ: <b>" + Libs.Helpers.formatNumber(storeCount) + "</b>\n" +
  "├ 🚫 Bᴀɴɴᴇᴅ: <b>" + banCount + "</b>\n" +
  "└ " + userBar + "\n\n" +
  "<b>👤 Lᴀꜱᴛ 10 Uꜱᴇʀꜱ:</b>\n" +
  recentList + "\n" +
  "<b>╰━━━━━━━━━━━━━━━━━━╯</b>"

var buttons = [
  [
    { text: "🔍 Sᴇᴀʀᴄʜ Usᴇʀ", callback_data: "!usersearch" },
    { text: "🚫 Bᴀɴɴᴇᴅ Lɪꜱᴛ", callback_data: "!banlist" }
  ],
  [
    { text: "📤 Exᴘᴏʀᴛ Iᴅꜱ", callback_data: "!exportids" },
    { text: "🔄 Rᴇꜰʀᴇꜱʜ", callback_data: "!users" }
  ],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "!master" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
