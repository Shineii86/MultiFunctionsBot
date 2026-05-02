/*CMD
  command: /save
  help: Save a note (e.g. /save rules Be nice)
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

var input = (params || message || "").trim()
var spaceIdx = input.indexOf(" ")

if (spaceIdx === -1 || !input) {
  Bot.sendMessage("<b❌ Uꜱᴀɢᴇ:</b> <code>/save name text</code>", { parse_mode: "HTML" })
  return
}

var name = input.substring(0, spaceIdx).toLowerCase().trim()
var content = input.substring(spaceIdx + 1).trim()

if (!name || !content) {
  Bot.sendMessage("<b❌ Bᴏᴛʜ ɴᴀᴍᴇ ᴀɴᴅ ᴄᴏɴᴛᴇɴᴛ ʀᴇǫᴜɪʀᴇᴅ.</b>", { parse_mode: "HTML" })
  return
}

var chatId = request.chat ? request.chat.id : user.telegramid
var notes = Bot.getProperty("notes_" + chatId, {})
notes[name] = content
Bot.setProperty("notes_" + chatId, notes, "json")

Bot.sendMessage("<b>✅ Nᴏᴛᴇ sᴀᴠᴇᴅ!</b>\n\n<b>📛 Nᴀᴍᴇ:</b> <code>#" + name + "</code>\n<b>📝 Cᴏɴᴛᴇɴᴛ:</b> " + content.substring(0, 100), {
  parse_mode: "HTML"
})
