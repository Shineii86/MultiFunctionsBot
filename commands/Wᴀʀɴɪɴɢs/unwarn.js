/*CMD
  command: unwarn
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Wᴀʀɴɪɴɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var targetId = parseInt(params) || 0
var chatId = request.chat ? request.chat.id : user.telegramid
var warnKey = "warns_" + chatId + "_" + targetId
var warns = Bot.getProperty(warnKey, 0)

if (warns > 0) {
  Bot.setProperty(warnKey, warns - 1, "integer")
  Bot.sendMessage("<b>✅ Wᴀʀɴɪɴɢ ʀᴇᴍᴏᴠᴇᴅ.</b> Rᴇᴍᴀɪɴɪɴɢ: " + (warns - 1), { parse_mode: "HTML" })
} else {
  Bot.sendMessage("<b>ℹ️ Usᴇʀ ʜᴀs ɴᴏ ᴡᴀʀɴɪɴɢs.</b>", { parse_mode: "HTML" })
}
