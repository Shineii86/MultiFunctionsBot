/*CMD
  command: !master
  help: Admin control panel
  need_reply: false
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: !admin, !panel
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var mode = Bot.getProperty("maintenance", "Off")
var statusEmoji = Libs.Helpers.getStatusEmoji(mode === "On" ? "maintenance" : "online")
var statusText = mode === "On" ? "Mᴀɪɴᴛᴇɴᴀɴᴄᴇ" : "Oᴘᴇʀᴀᴛɪᴏɴᴀʟ"

var totalUsers = Libs.ResourcesLib.anotherChatRes("totalusers", "global")
var userCount = totalUsers.value() || 0
var idstore = Bot.getProperty("idstore", [])
var storeCount = idstore ? idstore.length : 0
var cmdCount = Bot.getProperty("cmd_count", 0)
var todayCmds = Bot.getProperty("cmds_today", 0)
var feedbacks = Bot.getProperty("feedbacks", [])
var fbCount = feedbacks ? feedbacks.length : 0

var today = Libs.Helpers.getISTDate().toISOString().slice(0, 10)
var cmdsDate = Bot.getProperty("cmds_date", "")
if (cmdsDate !== today) { todayCmds = 0 }

var userBar = Libs.Helpers.getProgressBar(userCount, 10000, 8)
var cmdBar = Libs.Helpers.getProgressBar(todayCmds, 1000, 8)

var caption = "<b>╭━━ 👑 Aᴅᴍɪɴ Cᴇɴᴛᴇʀ ━━╮</b>\n\n" +
  "<b>🤖 @" + bot.name + "</b>\n" +
  "<b>📡 Sᴛᴀᴛᴜꜱ:</b> " + statusEmoji + " " + statusText + "\n\n" +
  "<b>📊 Qᴜɪᴄᴋ Sᴛᴀᴛꜱ:</b>\n" +
  "├ 👥 " + Libs.Helpers.formatNumber(userCount) + " Uꜱᴇʀꜱ " + userBar + "\n" +
  "├ ⚡ " + Libs.Helpers.formatNumber(todayCmds) + " Cᴍᴅꜱ Tᴏᴅᴀʏ " + cmdBar + "\n" +
  "├ 📋 " + Libs.Helpers.formatNumber(cmdCount) + " Tᴏᴛᴀʟ Cᴍᴅꜱ\n" +
  "├ 📬 " + fbCount + " Fᴇᴇᴅʙᴀᴄᴋꜱ\n" +
  "└ 🗄️ " + Libs.Helpers.formatNumber(storeCount) + " Sᴛᴏʀᴇᴅ Iᴅꜱ\n\n" +
  "<b>╰━━━━━━━━━━━━━━━━━━╯</b>"

var buttons = [
  [
    { text: "📊 Dᴀꜱʜʙᴏᴀʀᴅ", callback_data: "!status" },
    { text: "👤 Uꜱᴇʀꜱ", callback_data: "!users" }
  ],
  [
    { text: "📢 Bʀᴏᴀᴅᴄᴀꜱᴛ", callback_data: "!broadcast" },
    { text: "📬 Fᴇᴇᴅʙᴀᴄᴋꜱ", callback_data: "/feedbacks" }
  ],
  [
    { text: "📝 Nᴏᴛᴇꜱ", callback_data: "/notes" },
    { text: "📋 Aᴄᴛɪᴠɪᴛʏ", callback_data: "!logs" }
  ],
  [
    { text: "⚙️ Sᴇᴛᴛɪɴɢꜱ", callback_data: "!settings" },
    { text: "🔧 Mᴀɪɴᴛᴇɴᴀɴᴄᴇ", callback_data: "!maintenance" }
  ],
  [
    { text: "🔄 Rᴇꜱᴛᴀʀᴛ", callback_data: "!restart" },
    { text: "🚪 Lᴏɢᴏᴜᴛ", callback_data: "!logout" }
  ],
  [
    { text: "◁ Bᴀᴄᴋ Tᴏ Bᴏᴛ", callback_data: "/start" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
