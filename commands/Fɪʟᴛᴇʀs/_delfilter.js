/*CMD
  command: /delfilter
  help: Remove an auto-reply filter
  need_reply: true
  auto_retry_time: 
  folder: Fɪʟᴛᴇʀs

  <<ANSWER
🗑️ Sᴇɴᴅ ᴛʜᴇ ᴛʀɪɢɢᴇʀ ᴡᴏʀᴅ ᴛᴏ ʀᴇᴍᴏᴠᴇ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /removefilter
  group: 
CMD*/

var trigger = message.trim().toLowerCase()
var chatId = request.chat ? request.chat.id : user.telegramid
var filterList = Bot.getProperty("filters_" + chatId, [])

var found = false
var newList = []
for (var i = 0; i < filterList.length; i++) {
  if (filterList[i].trigger === trigger) {
    found = true
  } else {
    newList.push(filterList[i])
  }
}

if (found) {
  Bot.setProperty("filters_" + chatId, newList, "json")
  Bot.sendMessage("<b>✅ Fɪʟᴛᴇʀ ʀᴇᴍᴏᴠᴇᴅ:</b> <code>" + trigger + "</code>", { parse_mode: "HTML" })
} else {
  Bot.sendMessage("<b>❌ Fɪʟᴛᴇʀ ɴᴏᴛ ꜰᴏᴜɴᴅ:</b> <code>" + trigger + "</code>", { parse_mode: "HTML" })
}
