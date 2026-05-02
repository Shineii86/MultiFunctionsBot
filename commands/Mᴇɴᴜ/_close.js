/*CMD
  command: /close
  help: Close the current menu
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

if (request.data) {
  Api.deleteMessage({
    chat_id: request.message.chat.id,
    message_id: request.message.message_id
  })
}
