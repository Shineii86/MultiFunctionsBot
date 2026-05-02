/*CMD
  command: /warnings
  help: Check warnings for a user
  need_reply: false
  auto_retry_time: 
  folder: Wᴀʀɴɪɴɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /warns
  group: 
CMD*/

var chatId = request.chat ? request.chat.id : user.telegramid
var targetId = user.telegramid

// If replying to someone, check their warns
var replyTo = request.reply_to_message
if (replyTo && replyTo.from) {
  targetId = replyTo.from.id
}

var warnKey = "warns_" + chatId + "_" + targetId
var warns = Bot.getProperty(warnKey, 0)
var maxWarns = Bot.getProperty("max_warns", 3)
var bar = Libs.Helpers.getProgressBar(warns, maxWarns, maxWarns)

var caption = "<b>⚠️ Wᴀʀɴɪɴɢꜱ Sᴛᴀᴛᴜꜱ</b>\n\n" +
  "<b>👤 Uꜱᴇʀ Iᴅ:</b> <code>" + targetId + "</code>\n" +
  "<b>📊 Wᴀʀɴɪɴɢꜱ:</b> " + warns + "/" + maxWarns + "\n" +
  "<b>ᴘʀᴏɢʀᴇꜱꜱ:</b> " + bar + "\n\n"

if (warns === 0) {
  caption += "✅ Nᴏ ᴡᴀʀɴɪɴɢꜱ. Cʟᴇᴀɴ ʀᴇᴄᴏʀᴅ!"
} else if (warns >= maxWarns) {
  caption += "🚫 Uꜱᴇʀ ꜱʜᴏᴜʟᴅ ʙᴇ ʙᴀɴɴᴇᴅ."
} else {
  caption += "⚡ " + (maxWarns - warns) + " ᴡᴀʀɴɪɴɢꜱ ʀᴇᴍᴀɪɴɪɴɢ ʙᴇꜰᴏʀᴇ ʙᴀɴ."
}

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
})
