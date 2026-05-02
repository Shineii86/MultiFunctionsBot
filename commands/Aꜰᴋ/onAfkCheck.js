/*CMD
  command: onAfkCheck
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Aꜰᴋ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Check if user is AFK and remove status
var afkReason = User.getProperty("afk")
if (afkReason) {
  User.setProperty("afk", "", "string")
  User.setProperty("afk_time", "", "string")
  
  var name = Libs.Helpers.getUserMention()
  Bot.sendMessage("<b>👋 Wᴇʟᴄᴏᴍᴇ ʙᴀᴄᴋ!</b> " + name + " ɪs ɴᴏ ʟᴏɴɢᴇʀ AFK.", {
    parse_mode: "HTML",
    disable_web_page_preview: true
  })
}

// Check if mentioned user is AFK
if (request.reply_to_message && request.reply_to_message.from) {
  var targetId = request.reply_to_message.from.id
  var targetAfk = User.getProperty({
    name: "afk",
    user_id: targetId
  })
  if (targetAfk) {
    var afkTime = User.getProperty({
      name: "afk_time",
      user_id: targetId
    }) || ""
    var name = (request.reply_to_message.from.first_name || "User")
    var timeStr = ""
    if (afkTime) {
      var diff = Math.floor((new Date() - new Date(afkTime)) / 60000)
      if (diff < 60) timeStr = diff + " ᴍɪɴᴜᴛᴇs ᴀɢᴏ"
      else timeStr = Math.floor(diff / 60) + " ʜᴏᴜʀs ᴀɢᴏ"
    }
    Bot.sendMessage("😴 <b>" + name + "</b> ɪs AFK.\n<b>📝 Rᴇᴀsᴏɴ:</b> " + targetAfk + (timeStr ? "\n<b>🕐 Sɪɴᴄᴇ:</b> " + timeStr : ""), {
      parse_mode: "HTML",
      disable_web_page_preview: true
    })
  }
}
