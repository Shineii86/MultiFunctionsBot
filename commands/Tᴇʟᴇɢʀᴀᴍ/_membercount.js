/*CMD
  command: /membercount
  help: Get member count of current group
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /members /count
  group: 
CMD*/

Api.getChatMemberCount({
  chat_id: request.chat.id,
  on_result: "onMemberCountResult"
})
