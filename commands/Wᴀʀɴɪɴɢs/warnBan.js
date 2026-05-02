/*CMD
  command: warnBan
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Wᴀʀɴɪɴɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var targetId = parseInt(params) || 0
var chatId = request.chat ? request.chat.id : user.telegramid

Api.kickChatMember({
  chat_id: chatId,
  user_id: targetId
})

Bot.setProperty("warns_" + chatId + "_" + targetId, 0, "integer")

Bot.sendMessage("<b>🚫 Usᴇʀ ʙᴀɴɴᴇᴅ.</b>", { parse_mode: "HTML" })
