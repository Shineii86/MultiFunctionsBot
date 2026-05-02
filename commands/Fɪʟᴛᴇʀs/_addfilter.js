/*CMD
  command: /addfilter
  help: Add an auto-reply filter (trigger | response)
  need_reply: true
  auto_retry_time: 
  folder: Fɪʟᴛᴇʀs

  <<ANSWER
🔔 Sᴇɴᴅ ꜰɪʟᴛᴇʀ ɪɴ ꜰᴏʀᴍᴀᴛ: <code>trigger | response</code>
  
Exᴀᴍᴘʟᴇ: <code>hello | Hi there! 👋</code>
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var parts = message.split("|")
if (parts.length < 2) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ ꜰᴏʀᴍᴀᴛ.</b>\n\nUsᴇ: <code>trigger | response</code>", { parse_mode: "HTML" })
  return
}

var trigger = parts[0].trim().toLowerCase()
var response = parts.slice(1).join("|").trim()

if (!trigger || !response) {
  Bot.sendMessage("<b❌ Bᴏᴛʜ ᴛʀɪɢɢᴇʀ ᴀɴᴅ ʀᴇsᴘᴏɴsᴇ ʀᴇǫᴜɪʀᴇᴅ.</b>", { parse_mode: "HTML" })
  return
}

var chatId = request.chat ? request.chat.id : user.telegramid
var filterList = Bot.getProperty("filters_" + chatId, [])

// Check if trigger already exists
for (var i = 0; i < filterList.length; i++) {
  if (filterList[i].trigger === trigger) {
    filterList[i].response = response
    Bot.setProperty("filters_" + chatId, filterList, "json")
    Bot.sendMessage("<b>✅ Fɪʟᴛᴇʀ ᴜᴘᴅᴀᴛᴇᴅ!</b>\n\n<b>🔹 Tʀɪɢɢᴇʀ:</b> <code>" + trigger + "</code>\n<b>💬 Rᴇsᴘᴏɴsᴇ:</b> " + response, { parse_mode: "HTML" })
    return
  }
}

// Add new filter
filterList.push({ trigger: trigger, response: response })
Bot.setProperty("filters_" + chatId, filterList, "json")

Bot.sendMessage("<b>✅ Fɪʟᴛᴇʀ ᴀᴅᴅᴇᴅ!</b>\n\n<b>🔹 Tʀɪɢɢᴇʀ:</b> <code>" + trigger + "</code>\n<b>💬 Rᴇsᴘᴏɴsᴇ:</b> " + response, {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [[{ text: "➕ Aᴅᴅ Mᴏʀᴇ", callback_data: "addFilterPrompt" }, { text: "◁ Bᴀᴄᴋ", callback_data: "/filters" }]] }
})
