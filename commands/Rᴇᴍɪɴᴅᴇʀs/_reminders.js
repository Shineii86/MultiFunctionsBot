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

var caption = "<b>📋 Yᴏᴜʀ Rᴇᴍɪɴᴅᴇʀꜱ</b>\n\n"

if (reminders.length === 0) {
  caption += "Nᴏ ᴀᴄᴛɪᴠᴇ ʀᴇᴍɪɴᴅᴇʀꜱ.\n\n"
  caption += "<b>💡 Uꜱᴀɢᴇ:</b> <code>/remind 30m Mᴇꜱꜱᴀɢᴇ</code>"
} else {
  caption += "<b>Tᴏᴛᴀʟ:</b> " + reminders.length + "\n\n"
  for (var i = 0; i < reminders.length; i++) {
    var r = reminders[i]
    var remaining = Math.max(0, r.time - Date.now())
    var mins = Math.ceil(remaining / 60000)
    var timeLabel = mins > 60 ? Math.ceil(mins / 60) + "ʜ" : mins + "ᴍ"
    caption += (i + 1) + ". " + r.text + " — <i>" + timeLabel + " ʀᴇᴍᴀɪɴɪɴɢ</i>\n"
  }
}

caption += adsFooter

var buttons = [
  [
    { text: "⏰ Nᴇᴡ Rᴇᴍɪɴᴅᴇʀ", callback_data: "/remind" },
    { text: "🗑️ Cʟᴇᴀʀ Aʟʟ", callback_data: "/clearreminders" }
  ],
  [
    { text: "◁", callback_data: "/tools" },
    { text: "○", callback_data: "/start" },
    { text: "✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
