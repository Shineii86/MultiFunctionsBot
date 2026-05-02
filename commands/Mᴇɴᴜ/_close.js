/*CMD
  command: /close
  help: Close the current message
  need_reply: false
  auto_retry_time: 
  folder: Mᴇɴᴜ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: !close
  group: 
CMD*/

try {
  Api.deleteMessage({
    chat_id: request.chat.id,
    message_id: request.message.message_id
  })
} catch (e) {
  // Silent fail
}
