/*CMD
  command: delAllFilters
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Fɪʟᴛᴇʀs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var chatId = request.chat ? request.chat.id : user.telegramid
Bot.setProperty("filters_" + chatId, [], "json")

Bot.sendMessage("<b>✅ Aʟʟ ꜰɪʟᴛᴇʀs ʀᴇᴍᴏᴠᴇᴅ.</b>", {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [[{ text: "◁ Bᴀᴄᴋ", callback_data: "/filters" }]] }
})
