/*CMD
  command: /invitecount
  help: Count invite links in current group
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /invites
  group: 
CMD*/

Api.getChatInvitelinkCount({
  chat_id: request.chat.id,
  on_result: "onInviteCountResult"
})
