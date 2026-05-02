/*CMD
  command: onSetTitleResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ok = options.result || options
if (ok) {
  Bot.sendMessage("<b>✅ Gʀᴏᴜᴘ ᴛɪᴛʟᴇ ᴜᴘᴅᴀᴛᴇᴅ!</b>", { parse_mode: "HTML" })
} else {
  Bot.sendMessage("<b>❌ Fᴀɪʟᴇᴅ ᴛᴏ sᴇᴛ ᴛɪᴛʟᴇ.</b>\nMᴀᴋᴇ sᴜʀᴇ ᴛʜᴇ ʙᴏᴛ ɪs ᴀᴅᴍɪɴ.", { parse_mode: "HTML" })
}
