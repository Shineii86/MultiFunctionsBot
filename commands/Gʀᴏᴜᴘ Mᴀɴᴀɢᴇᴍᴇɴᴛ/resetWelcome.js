/*CMD
  command: resetWelcome
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
var defaultMsg = "👋 Wᴇʟᴄᴏᴍᴇ {name} ᴛᴏ {group}!\n\nYᴏᴜ ᴀʀᴇ ᴍᴇᴍʙᴇʀ #{count}."
Bot.setProperty("welcome_msg_" + chatId, defaultMsg, "string")
Bot.setProperty("welcome_enabled_" + chatId, true, "boolean")

Libs.Helpers.editOrSend({
  text: "<b>🔄 Wᴇʟᴄᴏᴍᴇ ᴍᴇꜱꜱᴀɢᴇ ʀᴇꜱᴇᴛ ᴛᴏ ᴅᴇꜰᴀᴜʟᴛ!</b>",
  reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/welcome") }
})
