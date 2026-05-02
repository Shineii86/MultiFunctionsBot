/*CMD
  command: /adminlist
  help: List all admins in a group/channel
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /admins
  group: 
CMD*/

Api.getChatAdministrators({
  chat_id: request.chat.id,
  on_result: "onAdminListResult"
})
