/*CMD
  command: logSetChannel
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Lᴏɢs

  <<ANSWER
📢 Sᴇɴᴅ ᴛʜᴇ ʟᴏɢ ᴄʜᴀɴɴᴇʟ ID ᴏʀ @username (ᴇ.ɢ. @MyLogs ᴏʀ -100123456789).
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var channel = message.trim()
Bot.setProperty("log_channel", channel, "string")

Bot.sendMessage("<b>✅ Lᴏɢ ᴄʜᴀɴɴᴇʟ sᴇᴛ ᴛᴏ:</b> <code>" + channel + "</code>\n\nAll logged events will be sent here.", {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [[{ text: "◁ Bᴀᴄᴋ", callback_data: "/logs" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
})
