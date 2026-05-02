/*CMD
  command: /delnote
  help: Delete a saved note
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

var name = (params || message || "").trim().toLowerCase()
if (!name) {
  Bot.sendMessage("<b>❌ Uꜱᴀɢᴇ:</b> <code>/delnote name</code>", { parse_mode: "HTML" })
  return
}

var chatId = request.chat ? request.chat.id : user.telegramid
var notes = Bot.getProperty("notes_" + chatId, {})

if (notes[name]) {
  delete notes[name]
  Bot.setProperty("notes_" + chatId, notes, "json")
  Bot.sendMessage("<b>✅ Nᴏᴛᴇ ᴅᴇʟᴇᴛᴇᴅ:</b> <code>#" + name + "</code>", { parse_mode: "HTML" })
} else {
  Bot.sendMessage("<b>❌ Nᴏᴛᴇ ɴᴏᴛ ꜰᴏᴜɴᴅ:</b> <code>#" + name + "</code>", { parse_mode: "HTML" })
}
