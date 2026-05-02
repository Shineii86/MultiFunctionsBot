/*CMD
  command: /analytics
  help: View bot analytics and statistics
  need_reply: false
  auto_retry_time: 
  folder: Aɴᴀʟʏᴛɪᴄs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /stats2 /insights
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var totalUsers = Libs.ResourcesLib.anotherChatRes("totalusers", "global")
var idstore = Bot.getProperty("idstore", [])
var cmdCount = Bot.getProperty("cmd_count", 0)
var todayCmds = Bot.getProperty("cmds_today", 0)
var todayDate = Bot.getProperty("cmds_date", "")

// Reset daily count if new day
var ist = Libs.Helpers.getISTDate()
var today = ist.toISOString().slice(0, 10)
if (todayDate !== today) {
  Bot.setProperty("cmds_today", 0, "integer")
  Bot.setProperty("cmds_date", today, "string")
  todayCmds = 0
}

// Most used commands tracking
var cmdUsage = Bot.getProperty("cmd_usage", {})
var topCmds = Object.keys(cmdUsage).sort(function(a, b) { return cmdUsage[b] - cmdUsage[a] }).slice(0, 8)

var topCmdList = ""
for (var i = 0; i < topCmds.length; i++) {
  topCmdList += (i + 1) + ". " + topCmds[i] + " — " + cmdUsage[topCmds[i]] + "x\n"
}

var userBar = Libs.Helpers.getProgressBar(totalUsers.value() || 0, 10000, 10)
var cmdBar = Libs.Helpers.getProgressBar(todayCmds, 1000, 10)

var caption = "<b>╭━━ 📊 Bᴏᴛ Aɴᴀʟʏᴛɪᴄꜱ ━━╮</b>\n\n" +
  "<b>👥 Uꜱᴇʀꜱ:</b>\n" +
  "├ Tᴏᴛᴀʟ: <b>" + Libs.Helpers.formatNumber(totalUsers.value() || 0) + "</b>\n" +
  "├ Sᴛᴏʀᴇᴅ: <b>" + Libs.Helpers.formatNumber(idstore.length) + "</b>\n" +
  "└ " + userBar + "\n\n" +
  "<b>⚡ Cᴏᴍᴍᴀɴᴅꜱ:</b>\n" +
  "├ Tᴏᴛᴀʟ: <b>" + Libs.Helpers.formatNumber(cmdCount) + "</b>\n" +
  "├ Tᴏᴅᴀʏ: <b>" + Libs.Helpers.formatNumber(todayCmds) + "</b>\n" +
  "└ " + cmdBar + "\n\n"

if (topCmdList) {
  caption += "<b>🏆 Mᴏꜱᴛ Uꜱᴇᴅ:</b>\n" + topCmdList + "\n"
}

caption += "<b>📅 Dᴀᴛᴇ:</b> " + today + "\n" +
  "<b>╰━━━━━━━━━━━━━━━━━━╯</b>" +
  adsFooter

var buttons = [
  [
    { text: "🔄 Rᴇꜰʀᴇꜱʜ", callback_data: "/analytics" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
