/*CMD
  command: /baninfo
  help: Get ban list of current chat
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /banlist
  group: 
CMD*/

Api.getChatBanned({
  chat_id: request.chat.id,
  on_result: "onBanInfoResult"
})
