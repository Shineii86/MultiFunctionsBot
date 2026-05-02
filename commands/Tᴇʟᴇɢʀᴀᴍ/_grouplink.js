/*CMD
  command: /grouplink
  help: Get invite link of current group
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /invitelink
  group: 
CMD*/

Api.exportChatInviteLink({
  chat_id: request.chat.id,
  on_result: "onGroupLinkResult"
})
