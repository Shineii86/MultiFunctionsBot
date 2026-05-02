/*CMD
  command: unwarn
  help: Remove a warning from a user
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

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var chatId = request.chat ? request.chat.id : user.telegramid
var targetId = parseInt(params) || 0

if (!targetId) {
  var replyTo = request.reply_to_message
  if (replyTo && replyTo.from) {
    targetId = replyTo.from.id
  }
}

if (!targetId) {
  Bot.sendMessage("<b>❌ Uꜱᴀɢᴇ:</b> Rᴇᴘʟʏ ᴛᴏ ᴀ ᴜꜱᴇʀ ᴏʀ ᴘʀᴏᴠɪᴅᴇ ᴜꜱᴇʀ Iᴅ.", { parse_mode: "HTML" })
  return
}

var warnKey = "warns_" + chatId + "_" + targetId
var warns = Bot.getProperty(warnKey, 0)

if (warns > 0) {
  Bot.setProperty(warnKey, warns - 1, "integer")
  Bot.sendMessage("<b>✅ Wᴀʀɴɪɴɢ ʀᴇᴍᴏᴠᴇᴅ.</b> Rᴇᴍᴀɪɴɪɴɢ: " + (warns - 1), { parse_mode: "HTML" })
} else {
  Bot.sendMessage("<b>ℹ️ Uꜱᴇʀ ʜᴀꜱ ɴᴏ ᴡᴀʀɴɪɴɢꜱ.</b>", { parse_mode: "HTML" })
}
