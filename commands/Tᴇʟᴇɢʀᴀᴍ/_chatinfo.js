/*CMD
  command: /chatinfo
  help: Get info about current chat or a chat ID
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /chatid
  group: 
CMD*/

var chatId = params || (request.chat ? request.chat.id : user.telegramid)
var adsFooter = Libs.Helpers.getAdsFooter()

// Try to get chat info via API
Api.getChat({
  chat_id: chatId,
  on_result: "onChatInfoResult"
})
