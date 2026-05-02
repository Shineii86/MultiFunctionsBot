/*CMD
  command: previewWelcome
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
var welcomeMsg = Bot.getProperty("welcome_msg_" + chatId, "👋 Wᴇʟᴄᴏᴍᴇ {name} ᴛᴏ {group}!\n\nYᴏᴜ ᴀʀᴇ ᴍᴇᴍʙᴇʀ #{count}.")

var preview = welcomeMsg
  .replace(/\{name\}/g, Libs.Helpers.getUserMention())
  .replace(/\{username\}/g, user.username ? "@" + user.username : "N/A")
  .replace(/\{group\}/g, request.chat ? request.chat.title : "this group")
  .replace(/\{count\}/g, "42")
  .replace(/\{id\}/g, user.telegramid)

Libs.Helpers.editOrSend({
  text: "<b>👁️ Wᴇʟᴄᴏᴍᴇ Mᴇꜱꜱᴀɢᴇ Pʀᴇᴠɪᴇᴡ</b>\n\n" + preview,
  reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/welcome") }
})
