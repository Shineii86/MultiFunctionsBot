/*CMD
  command: _M_start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: _M_restart
  group: 
CMD*/

// XP & Analytics middleware - runs on every command
var xp = User.getProperty("xp", 0)
var newXP = xp + 5
User.setProperty("xp", newXP, "integer")

// Command counting
var cmdCount = Bot.getProperty("cmd_count", 0)
Bot.setProperty("cmd_count", cmdCount + 1, "integer")

// Daily command count
var ist = Libs.Helpers.getISTDate()
var today = ist.toISOString().slice(0, 10)
var todayDate = Bot.getProperty("cmds_date", "")
if (todayDate !== today) {
  Bot.setProperty("cmds_today", 1, "integer")
  Bot.setProperty("cmds_date", today, "string")
} else {
  var todayCmds = Bot.getProperty("cmds_today", 0)
  Bot.setProperty("cmds_today", todayCmds + 1, "integer")
}

// Track command usage
var cmdUsage = Bot.getProperty("cmd_usage", {})
var currentCmd = message ? message.split(" ")[0] : "unknown"
cmdUsage[currentCmd] = (cmdUsage[currentCmd] || 0) + 1
Bot.setProperty("cmd_usage", cmdUsage, "json")

// Track recent users (name, username, id)
var recentUsers = Bot.getProperty("recent_users", [])
var userId = String(user.telegramid)
var alreadyTracked = false
for (var i = 0; i < recentUsers.length; i++) {
  if (String(recentUsers[i].id) === userId) {
    recentUsers[i].name = user.first_name || "Unknown"
    recentUsers[i].username = user.username || ""
    recentUsers[i].last_seen = Date.now()
    alreadyTracked = true
    break
  }
}
if (!alreadyTracked) {
  recentUsers.push({
    id: userId,
    name: user.first_name || "Unknown",
    username: user.username || "",
    last_seen: Date.now()
  })
}
// Keep only last 100 users
if (recentUsers.length > 100) {
  recentUsers = recentUsers.slice(-100)
}
Bot.setProperty("recent_users", recentUsers, "json")

// Level up check
var oldLevel = Math.floor(xp / 100) + 1
var newLevel = Math.floor(newXP / 100) + 1
if (newLevel > oldLevel) {
  Bot.sendMessage("<b>🎉 Lᴇᴠᴇʟ Uᴘ!</b>\n\n" +
    "<b>Nᴇᴡ Lᴇᴠᴇʟ:</b> " + newLevel + " ⭐\n" +
    "+10 $REACT ʙᴏɴᴜꜱ!", {
    parse_mode: "HTML"
  })
  var balance = Libs.ResourcesLib.userRes("balance")
  balance.add(10)
}
