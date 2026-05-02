/*CMD
  command: /settitle
  help: Set group title (admin only)
  need_reply: true
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER
📛 Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ ɢʀᴏᴜᴘ ᴛɪᴛʟᴇ (ᴍᴀx 128 ᴄʜᴀʀs).
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var text = message.trim()
if (text.length > 128) {
  Bot.sendMessage("<b>❌ Tɪᴛʟᴇ ᴍᴜsᴛ ʙᴇ 128 ᴄʜᴀʀᴀᴄᴛᴇʀs ᴏʀ ʟᴇss.</b>", { parse_mode: "HTML" })
  return
}

Api.setChatTitle({
  chat_id: request.chat.id,
  title: text,
  on_result: "onSetTitleResult"
})
