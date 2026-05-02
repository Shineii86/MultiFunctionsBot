/*CMD
  command: storeGet
  help: Retrieve a stored file by ID
  need_reply: true
  auto_retry_time: 
  folder: Fɪʟᴇ Sᴛᴏʀᴇ

  <<ANSWER
🔍 Sᴇɴᴅ ᴛʜᴇ ꜰɪʟᴇ ID ᴛᴏ ʀᴇᴛʀɪᴇᴠᴇ (ᴇ.ɢ. F1ABC2DEF).
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var targetId = message.trim().toUpperCase()
var storedFiles = Bot.getProperty("stored_files_" + user.telegramid, [])
var adsFooter = Libs.Helpers.getAdsFooter()

// Check own files first
var found = null
for (var i = 0; i < storedFiles.length; i++) {
  if (storedFiles[i].id === targetId) {
    found = storedFiles[i]
    break
  }
}

// Also check shared files from other users
if (!found) {
  var allUsers = Bot.getProperty("idstore", [])
  for (var u = 0; u < allUsers.length; u++) {
    var userFiles = Bot.getProperty("stored_files_" + allUsers[u], [])
    for (var i = 0; i < userFiles.length; i++) {
      if (userFiles[i].id === targetId) {
        found = userFiles[i]
        break
      }
    }
    if (found) break
  }
}

if (!found) {
  Bot.sendMessage("<b>❌ Fɪʟᴇ ɴᴏᴛ ꜰᴏᴜɴᴅ!</b>\n\nCʜᴇᴄᴋ ᴛʜᴇ ID ᴀɴᴅ ᴛʀʏ ᴀɢᴀɪɴ.", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "storeGet" }]] }
  })
  return
}

var emoji = found.type === "photo" ? "🖼️" : found.type === "video" ? "🎬" : found.type === "audio" ? "🎵" : found.type === "voice" ? "🎤" : found.type === "sticker" ? "🏷️" : "📄"

try {
  if (found.type === "photo") {
    Api.sendPhoto({ chat_id: user.telegramid, photo: found.fileId })
  } else if (found.type === "video") {
    Api.sendVideo({ chat_id: user.telegramid, video: found.fileId })
  } else if (found.type === "audio") {
    Api.sendAudio({ chat_id: user.telegramid, audio: found.fileId })
  } else if (found.type === "voice") {
    Api.sendVoice({ chat_id: user.telegramid, voice: found.fileId })
  } else if (found.type === "sticker") {
    Api.sendSticker({ chat_id: user.telegramid, sticker: found.fileId })
  } else if (found.type === "animation") {
    Api.sendAnimation({ chat_id: user.telegramid, animation: found.fileId })
  } else {
    Api.sendDocument({ chat_id: user.telegramid, document: found.fileId })
  }

  Bot.sendMessage(emoji + " <b>" + Libs.Helpers.escapeHTML(found.name) + "</b>\n\n" +
    "<b>🆔 Iᴅ:</b> <code>" + found.id + "</code>\n" +
    "<b>📤 Sᴇɴᴛ!</b>" + adsFooter, {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/store") }
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Fᴀɪʟᴇᴅ ᴛᴏ ʀᴇᴛʀɪᴇᴠᴇ ꜰɪʟᴇ.</b>\n\nIᴛ ᴍᴀʏ ʜᴀᴠᴇ ᴇxᴘɪʀᴇᴅ.", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/store") }
  })
}
