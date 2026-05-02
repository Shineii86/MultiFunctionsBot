/*CMD
  command: !logs
  help: View activity logs
  need_reply: false
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: !activity
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var cmdUsage = Bot.getProperty("cmd_usage", {})
var totalCmds = Bot.getProperty("cmd_count", 0)
var todayCmds = Bot.getProperty("cmds_today", 0)
var feedbacks = Bot.getProperty("feedbacks", [])
var recentUsers = Bot.getProperty("recent_users", [])
var banLog = Bot.getProperty("ban_log", [])

var ist = Libs.Helpers.getISTDate()
var today = ist.toISOString().slice(0, 10)
var cmdsDate = Bot.getProperty("cmds_date", "")
if (cmdsDate !== today) { todayCmds = 0 }

// Top 10 commands
var topCmds = Object.keys(cmdUsage).sort(function(a, b) { return cmdUsage[b] - cmdUsage[a] }).slice(0, 10)
var topCmdList = ""
for (var i = 0; i < topCmds.length; i++) {
  var rank = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟"][i]
  topCmdList += rank + " <code>" + topCmds[i] + "</code> — " + Libs.Helpers.formatNumber(cmdUsage[topCmds[i]]) + "x\n"
}

// Recent feedbacks (last 3)
var fbList = ""
if (feedbacks.length > 0) {
  var recent = feedbacks.slice(-3).reverse()
  for (var j = 0; j < recent.length; j++) {
    var fb = recent[j]
    fbList += "• <b>" + Libs.Helpers.escapeHTML(fb.name || "Anon") + "</b>: " + Libs.Helpers.truncate(fb.text, 50) + "\n"
  }
}

// Recent activity (last 5 users)
var activityList = ""
if (recentUsers.length > 0) {
  var recentActs = recentUsers.slice(-5).reverse()
  for (var k = 0; k < recentActs.length; k++) {
    var u = recentActs[k]
    activityList += "• " + Libs.Helpers.escapeHTML(u.name || "Unknown") + " (<code>" + u.id + "</code>)\n"
  }
}

var caption = "<b>╭━━ 📋 Aᴄᴛɪᴠɪᴛʏ Lᴏɢꜱ ━━╮</b>\n\n" +
  "<b>⚡ Cᴏᴍᴍᴀɴᴅ Sᴛᴀᴛꜱ:</b>\n" +
  "├ Tᴏᴛᴀʟ: <b>" + Libs.Helpers.formatNumber(totalCmds) + "</b>\n" +
  "├ Tᴏᴅᴀʏ: <b>" + Libs.Helpers.formatNumber(todayCmds) + "</b>\n" +
  "└ UɴɪQᴜᴇ: <b>" + Object.keys(cmdUsage).length + "</b> Cᴍᴅꜱ Usᴇᴅ\n\n"

if (topCmdList) {
  caption += "<b>🏆 Tᴏᴘ 10 Cᴏᴍᴍᴀɴᴅꜱ:</b>\n" + topCmdList + "\n"
}

if (activityList) {
  caption += "<b>👤 Rᴇᴄᴇɴᴛ Aᴄᴛɪᴠɪᴛʏ:</b>\n" + activityList + "\n"
}

if (fbList) {
  caption += "<b>📬 Lᴀᴛᴇꜱᴛ Fᴇᴇᴅʙᴀᴄᴋ:</b>\n" + fbList + "\n"
}

caption += "<b>╰━━━━━━━━━━━━━━━━━━╯</b>"

var buttons = [
  [
    { text: "🔄 Rᴇꜰʀᴇꜱʜ", callback_data: "!logs" },
    { text: "📊 Fᴜʟʟ Aɴᴀʟʏᴛɪᴄꜱ", callback_data: "/analytics" }
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
