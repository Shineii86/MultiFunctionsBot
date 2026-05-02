/*CMD
  command: /reminders
  help: View your active reminders
  need_reply: false
  auto_retry_time: 
  folder: Rᴇᴍɪɴᴅᴇʀs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var reminders = Bot.getProperty("reminders_" + user.telegramid, [])
var adsFooter = Libs.Helpers.getAdsFooter()

if (reminders.length === 0) {
  Bot.sendMessage("<b⏰ Nᴏ ᴀᴄᴛɪᴠᴇ ʀᴇᴍɪɴᴅᴇʀs.</b>\n\nUsᴇ <code>/remind 30m message</code> ᴛᴏ sᴇᴛ ᴏɴᴇ." + adsFooter, {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "⏰ Sᴇᴛ Rᴇᴍɪɴᴅᴇʀ", callback_data: "/remind" }]] }
  })
  return
}

var caption = "<b>⏰ Yᴏᴜʀ Rᴇᴍɪɴᴅᴇʀs (" + reminders.length + ")</b>\n\n"
for (var i = 0; i < reminders.length; i++) {
  var r = reminders[i]
  var remaining = r.time - Date.now()
  var timeLeft = ""
  if (remaining > 0) {
    var mins = Math.floor(remaining / 60000)
    if (mins < 60) timeLeft = mins + "m ʟᴇꜰᴛ"
    else if (mins < 1440) timeLeft = Math.floor(mins / 60) + "h ʟᴇꜰᴛ"
    else timeLeft = Math.floor(mins / 1440) + "d ʟᴇꜰᴛ"
  } else {
    timeLeft = "Oᴠᴇʀᴅᴜᴇ"
  }
  caption += (i + 1) + ". <b>" + r.text + "</b> — " + timeLeft + "\n"
}
caption += adsFooter

var buttons = [
  [{ text: "🗑️ Cʟᴇᴀʀ Aʟʟ", callback_data: "clearReminders" }],
  [{ text: "⏰ Sᴇᴛ Nᴇᴡ", callback_data: "/remind" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]
]

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: buttons }
})
