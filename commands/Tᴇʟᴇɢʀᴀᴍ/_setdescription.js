/*CMD
  command: /setdescription
  help: Set group description (admin only)
  need_reply: true
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER
📝 Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ ɢʀᴏᴜᴘ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ (ᴍᴀx 255 ᴄʜᴀʀs).
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /setdesc
  group: 
CMD*/

var text = message.trim()
if (text.length > 255) {
  Bot.sendMessage("<b>❌ Dᴇsᴄʀɪᴘᴛɪᴏɴ ᴍᴜsᴛ ʙᴇ 255 ᴄʜᴀʀᴀᴄᴛᴇʀs ᴏʀ ʟᴇss.</b>\n\nYᴏᴜʀs: " + text.length + " ᴄʜᴀʀs.", { parse_mode: "HTML" })
  return
}

Api.setChatDescription({
  chat_id: request.chat.id,
  description: text,
  on_result: "onSetDescResult"
})
