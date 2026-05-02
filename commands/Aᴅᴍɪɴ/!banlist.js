/*CMD
  command: !banlist
  help: View banned users
  need_reply: false
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER

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

var bannedUsers = Bot.getProperty("banned_users", [])

var caption = "<b>╭━━ 🚫 Bᴀɴɴᴇᴅ Uꜱᴇʀꜱ ━━╮</b>\n\n"

if (bannedUsers.length === 0) {
  caption += "Nᴏ ʙᴀɴɴᴇᴅ ᴜꜱᴇʀꜱ.\n\n"
} else {
  caption += "<b>📋 Tᴏᴛᴀʟ:</b> " + bannedUsers.length + "\n\n"
  var show = bannedUsers.slice(-20)
  for (var i = 0; i < show.length; i++) {
    var u = show[i]
    caption += (i + 1) + ". " + Libs.Helpers.escapeHTML(u.name || "Unknown") + " <code>" + u.id + "</code>\n"
  }
  if (bannedUsers.length > 20) {
    caption += "\n<i>Aɴᴅ " + (bannedUsers.length - 20) + " ᴍᴏʀᴇ...</i>"
  }
  caption += "\n"
}

caption += "<b>╰━━━━━━━━━━━━━━━━━━╯</b>"

var buttons = [
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "!users" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
