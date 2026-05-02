/*CMD
  command: onNoteGet
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Check if message starts with #
if (!message || message.charAt(0) !== "#") return

var name = message.substring(1).toLowerCase().trim()
if (!name) return

var chatId = request.chat ? request.chat.id : user.telegramid
var notes = Bot.getProperty("notes_" + chatId, {})

if (notes[name]) {
  Bot.sendMessage(notes[name], { parse_mode: "HTML" })
}
