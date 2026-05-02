/*CMD
  command: !status
  help: Bot statistics
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

var totalUsers = Libs.ResourcesLib.anotherChatRes("totalusers", "global")
var userCount = totalUsers.value() || 0
var idstore = Bot.getProperty("idstore", [])
var storeCount = idstore ? idstore.length : 0

var ist = Libs.Helpers.getISTDate()
var days = ["Sᴜɴᴅᴀʏ", "Mᴏɴᴅᴀʏ", "Tᴜᴇsᴅᴀʏ", "Wᴇᴅɴᴇsᴅᴀʏ", "Tʜᴜʀsᴅᴀʏ", "Fʀɪᴅᴀʏ", "Sᴀᴛᴜʀᴅᴀʏ"]
var months = ["Jᴀɴ", "Fᴇʙ", "Mᴀʀ", "Aᴘʀ", "Mᴀʏ", "Jᴜɴ", "Jᴜʟ", "Aᴜɢ", "Sᴇᴘ", "Oᴄᴛ", "Nᴏᴠ", "Dᴇᴄ"]

var dateStr = ("0" + ist.getUTCDate()).slice(-2) + " " + months[ist.getUTCMonth()] + " " + ist.getUTCFullYear()
var timeStr = ("0" + ist.getUTCHours()).slice(-2) + ":" + ("0" + ist.getUTCMinutes()).slice(-2) + ":" + ("0" + ist.getUTCSeconds()).slice(-2)
var dayStr = days[ist.getUTCDay()]

var userBar = Libs.Helpers.getProgressBar(userCount, 10000, 10)

var caption = "<b>╭━━ 📊 Bᴏᴛ Sᴛᴀᴛɪꜱᴛɪᴄꜱ ━━╮</b>\n\n" +
  "<b>👥 Uꜱᴇʀꜱ:</b>\n" +
  "├ Tᴏᴛᴀʟ: <b>" + Libs.Helpers.formatNumber(userCount) + "</b>\n" +
  "├ Sᴛᴏʀᴇᴅ: <b>" + Libs.Helpers.formatNumber(storeCount) + "</b>\n" +
  "└ " + userBar + " " + userCount + "/10K\n\n" +
  "<b>📡 Sʏꜱᴛᴇᴍ:</b>\n" +
  "├ Sᴛᴀᴛᴜꜱ: 🟢 Oᴘᴇʀᴀᴛɪᴏɴᴀʟ\n" +
  "├ Mᴀɪɴᴛᴇɴᴀɴᴄᴇ: " + Libs.Helpers.fancyOnOff(Bot.getProperty("maintenance", "Off")) + "\n" +
  "└ Vᴇʀꜱɪᴏɴ: 3.0.0\n\n" +
  "<b>🕐 Sᴇʀᴠᴇʀ Tɪᴍᴇ (IST):</b>\n" +
  "├ Dᴀᴛᴇ: " + dateStr + "\n" +
  "├ Tɪᴍᴇ: " + timeStr + "\n" +
  "└ Dᴀʏ: " + dayStr + "\n\n" +
  "<b>📅 Lᴀᴜɴᴄʜᴇᴅ:</b> 25 Jᴀɴᴜᴀʀʏ 2025\n" +
  "<b>╰━━━━━━━━━━━━━━━━━━╯</b>"

var buttons = [
  [{ text: "🔄 Rᴇꜰʀᴇꜱʜ", callback_data: "!status" }],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "!master" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
