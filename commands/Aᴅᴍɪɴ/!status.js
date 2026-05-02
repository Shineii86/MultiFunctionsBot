/*CMD
  command: !status
  help: Bot statistics dashboard
  need_reply: false
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: !dashboard
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
var cmdCount = Bot.getProperty("cmd_count", 0)
var todayCmds = Bot.getProperty("cmds_today", 0)
var feedbacks = Bot.getProperty("feedbacks", [])
var fbCount = feedbacks ? feedbacks.length : 0
var mode = Bot.getProperty("maintenance", "Off")
var statusEmoji = Libs.Helpers.getStatusEmoji(mode === "On" ? "maintenance" : "online")

var ist = Libs.Helpers.getISTDate()
var today = ist.toISOString().slice(0, 10)
var cmdsDate = Bot.getProperty("cmds_date", "")
if (cmdsDate !== today) {
  Bot.setProperty("cmds_today", 0, "integer")
  Bot.setProperty("cmds_date", today, "string")
  todayCmds = 0
}

var days = ["Sᴜɴ", "Mᴏɴ", "Tᴜᴇ", "Wᴇᴅ", "Tʜᴜ", "Fʀɪ", "Sᴀᴛ"]
var months = ["Jᴀɴ", "Fᴇʙ", "Mᴀʀ", "Aᴘʀ", "Mᴀʏ", "Jᴜɴ", "Jᴜʟ", "Aᴜɢ", "Sᴇᴘ", "Oᴄᴛ", "Nᴏᴠ", "Dᴇᴄ"]
var dateStr = ("0" + ist.getUTCDate()).slice(-2) + " " + months[ist.getUTCMonth()] + " " + ist.getUTCFullYear()
var timeStr = ("0" + ist.getUTCHours()).slice(-2) + ":" + ("0" + ist.getUTCMinutes()).slice(-2) + ":" + ("0" + ist.getUTCSeconds()).slice(-2)
var dayStr = days[ist.getUTCDay()]

var avgCmds = userCount > 0 ? (cmdCount / userCount).toFixed(1) : "0"
var userBar = Libs.Helpers.getProgressBar(userCount, 10000, 10)
var cmdBar = Libs.Helpers.getProgressBar(todayCmds, 1000, 10)

// Most used commands
var cmdUsage = Bot.getProperty("cmd_usage", {})
var topCmds = Object.keys(cmdUsage).sort(function(a, b) { return cmdUsage[b] - cmdUsage[a] }).slice(0, 5)
var topCmdList = ""
for (var i = 0; i < topCmds.length; i++) {
  var rank = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"][i]
  topCmdList += rank + " <code>" + topCmds[i] + "</code> — " + Libs.Helpers.formatNumber(cmdUsage[topCmds[i]]) + "x\n"
}

// Recent users (last 5)
var recentUsers = Bot.getProperty("recent_users", [])
var recentList = ""
if (recentUsers.length > 0) {
  var recent = recentUsers.slice(-5).reverse()
  for (var j = 0; j < recent.length; j++) {
    var u = recent[j]
    recentList += "• " + (u.name || "Unknown") + " (<code>" + u.id + "</code>)\n"
  }
}

var caption = "<b>╭━━ 📊 Aᴅᴍɪɴ Dᴀꜱʜʙᴏᴀʀᴅ ━━╮</b>\n\n" +
  "<b>📡 Sʏꜱᴛᴇᴍ Sᴛᴀᴛᴜꜱ:</b> " + statusEmoji + " " + (mode === "On" ? "Mᴀɪɴᴛᴇɴᴀɴᴄᴇ" : "Oᴘᴇʀᴀᴛɪᴏɴᴀʟ") + "\n\n" +

  "<b>👥 Uꜱᴇʀꜱ:</b>\n" +
  "├ Tᴏᴛᴀʟ: <b>" + Libs.Helpers.formatNumber(userCount) + "</b>\n" +
  "├ Sᴛᴏʀᴇᴅ: <b>" + Libs.Helpers.formatNumber(storeCount) + "</b>\n" +
  "└ " + userBar + " " + Libs.Helpers.formatNumber(userCount) + "/10K\n\n" +

  "<b>⚡ Cᴏᴍᴍᴀɴᴅꜱ:</b>\n" +
  "├ Tᴏᴛᴀʟ: <b>" + Libs.Helpers.formatNumber(cmdCount) + "</b>\n" +
  "├ Tᴏᴅᴀʏ: <b>" + Libs.Helpers.formatNumber(todayCmds) + "</b>\n" +
  "├ Aᴠɢ/Uꜱᴇʀ: <b>" + avgCmds + "</b>\n" +
  "└ " + cmdBar + " " + Libs.Helpers.formatNumber(todayCmds) + "/1K\n\n" +

  "<b>📬 Fᴇᴇᴅʙᴀᴄᴋꜱ:</b> " + fbCount + " Tᴏᴛᴀʟ\n\n"

if (topCmdList) {
  caption += "<b>🏆 Tᴏᴘ Cᴏᴍᴍᴀɴᴅꜱ:</b>\n" + topCmdList + "\n"
}

if (recentList) {
  caption += "<b>👤 Rᴇᴄᴇɴᴛ Uꜱᴇʀꜱ:</b>\n" + recentList + "\n"
}

caption += "<b>🕐 Sᴇʀᴠᴇʀ Tɪᴍᴇ (IST):</b>\n" +
  "├ " + dateStr + " • " + dayStr + "\n" +
  "└ " + timeStr + "\n\n" +
  "<b>📅 Lᴀᴜɴᴄʜᴇᴅ:</b> 25 Jᴀɴ 2025\n" +
  "<b>🚀 Vᴇʀꜱɪᴏɴ:</b> 3.3.0\n" +
  "<b>╰━━━━━━━━━━━━━━━━━━╯</b>"

var buttons = [
  [
    { text: "🔄 Rᴇꜰʀᴇꜱʜ", callback_data: "!status" },
    { text: "📊 Aɴᴀʟʏᴛɪᴄꜱ", callback_data: "/analytics" }
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
