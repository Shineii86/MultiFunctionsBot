/*CMD
  command: !profile
  help: View admin profile
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

var firstName = user && user.first_name
  ? "<a href='tg://user?id=" + user.telegramid + "'>" + Libs.Helpers.escapeHTML(user.first_name) + "</a>"
  : "Uɴᴋɴᴏᴡɴ"

var totalUsers = Libs.ResourcesLib.anotherChatRes("totalusers", "global")
var userCount = totalUsers.value() || 0
var cmdCount = Bot.getProperty("cmd_count", 0)
var idstore = Bot.getProperty("idstore", [])

var ist = Libs.Helpers.getISTDate()
var months = ["Jᴀɴ", "Fᴇʙ", "Mᴀʀ", "Aᴘʀ", "Mᴀʏ", "Jᴜɴ", "Jᴜʟ", "Aᴜɢ", "Sᴇᴘ", "Oᴄᴛ", "Nᴏᴠ", "Dᴇᴄ"]
var dateStr = ("0" + ist.getUTCDate()).slice(-2) + " " + months[ist.getUTCMonth()] + " " + ist.getUTCFullYear()
var timeStr = ("0" + ist.getUTCHours()).slice(-2) + ":" + ("0" + ist.getUTCMinutes()).slice(-2)

var caption = "<b>╭━━ 👤 Aᴅᴍɪɴ Pʀᴏꜰɪʟᴇ ━━╮</b>\n\n" +
  "<b>👤 Nᴀᴍᴇ:</b> " + firstName + "\n" +
  "<b>👥 Lᴀꜱᴛ Nᴀᴍᴇ:</b> " + (user.last_name || "N/A") + "\n" +
  "<b>🌐 Uꜱᴇʀɴᴀᴍᴇ:</b> " + (user.username ? "@" + user.username : "N/A") + "\n" +
  "<b>💎 Pʀᴇᴍɪᴜᴍ:</b> " + (user.is_premium ? "Yᴇꜱ ⭐" : "Nᴏ") + "\n" +
  "<b>🗣️ Lᴀɴɢᴜᴀɢᴇ:</b> " + (user.language_code || "N/A") + "\n" +
  "<b>🆔 Iᴅ:</b> <code>" + user.telegramid + "</code>\n\n" +
  "<b>📊 Bᴏᴛ Oᴡɴᴇʀ Sᴛᴀᴛꜱ:</b>\n" +
  "├ 👥 " + Libs.Helpers.formatNumber(userCount) + " Tᴏᴛᴀʟ Uꜱᴇʀꜱ\n" +
  "├ ⚡ " + Libs.Helpers.formatNumber(cmdCount) + " Tᴏᴛᴀʟ Cᴏᴍᴍᴀɴᴅꜱ\n" +
  "├ 🗄️ " + Libs.Helpers.formatNumber(idstore.length) + " Sᴛᴏʀᴇᴅ Iᴅꜱ\n" +
  "└ 🕐 " + dateStr + " • " + timeStr + " IST\n\n" +
  "<b>╰━━━━━━━━━━━━━━━━━━╯</b>"

var buttons = [
  [
    { text: "👑 Pᴀɴᴇʟ", callback_data: "!master" },
    { text: "📊 Dᴀꜱʜʙᴏᴀʀᴅ", callback_data: "!status" }
  ],
  [
    { text: "⚠️ Dᴀɴɢᴇʀ Zᴏɴᴇ — Lᴏɢᴏᴜᴛ", callback_data: "!logout" }
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
