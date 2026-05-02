/*CMD
  command: storeDelete
  help: Delete a stored file
  need_reply: true
  auto_retry_time: 
  folder: Fɪʟᴇ Sᴛᴏʀᴇ

  <<ANSWER
🗑️ Sᴇɴᴅ ᴛʜᴇ ꜰɪʟᴇ ID ᴛᴏ ᴅᴇʟᴇᴛᴇ (ᴇ.ɢ. F1ABC2DEF).
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var targetId = message.trim().toUpperCase()
var storedFiles = Bot.getProperty("stored_files_" + user.telegramid, [])

var found = false
var newFiles = []
for (var i = 0; i < storedFiles.length; i++) {
  if (storedFiles[i].id === targetId) {
    found = true
  } else {
    newFiles.push(storedFiles[i])
  }
}

if (!found) {
  Bot.sendMessage("<b>❌ Fɪʟᴇ ɴᴏᴛ ꜰᴏᴜɴᴅ!</b>", { parse_mode: "HTML" })
  return
}

Bot.setProperty("stored_files_" + user.telegramid, newFiles, "json")

Bot.sendMessage("<b>✅ Fɪʟᴇ Dᴇʟᴇᴛᴇᴅ!</b>\n\n" +
  "<b>🆔 Iᴅ:</b> <code>" + targetId + "</code>\n" +
  "<b>📋 Rᴇᴍᴀɪɴɪɴɢ:</b> " + newFiles.length + " ꜰɪʟᴇꜱ", {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/store") }
})
