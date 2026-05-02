/*CMD
  command: /pfp
  help: Get user's profile photo
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /avatar /profilepic
  group: 
CMD*/

var targetId = params || user.telegramid

// If replying to someone
if (request.reply_to_message && request.reply_to_message.from) {
  targetId = request.reply_to_message.from.id
}

Api.getUserProfilePhotos({
  user_id: targetId,
  limit: 1,
  on_result: "onPfpResult"
})
