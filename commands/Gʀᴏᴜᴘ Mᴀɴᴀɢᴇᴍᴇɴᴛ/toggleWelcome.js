/*CMD
  command: toggleWelcome
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Gʀᴏᴜᴘ Mᴀɴᴀɢᴇᴍᴇɴᴛ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var chatId = request.chat ? request.chat.id : user.telegramid
var current = Bot.getProperty("welcome_enabled_" + chatId, true)
Bot.setProperty("welcome_enabled_" + chatId, !current, "boolean")

Libs.Helpers.editOrSend({
  text: "<b>✅ Wᴇʟᴄᴏᴍᴇ ᴍᴇꜱꜱᴀɢᴇ " + (!current ? "ᴇɴᴀʙʟᴇᴅ" : "ᴅɪꜱᴀʙʟᴇᴅ") + "!</b>",
  reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/welcome") }
})
