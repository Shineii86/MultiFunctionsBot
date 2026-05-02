/*CMD
  command: storeStart
  help: Handle deep links for file access
  need_reply: false
  auto_retry_time: 
  folder: Fɪʟᴇ Sᴛᴏʀᴇ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Handle deep link: /start file_ABC123
if (!params || params.indexOf("file_") !== 0) return

var fileId = params.replace("file_", "").toUpperCase()
var adsFooter = Libs.Helpers.getAdsFooter()

// Search all users' files
var allUsers = Bot.getProperty("idstore", [])
var found = null
var ownerName = "someone"

for (var u = 0; u < allUsers.length; u++) {
  var userFiles = Bot.getProperty("stored_files_" + allUsers[u], [])
  for (var i = 0; i < userFiles.length; i++) {
    if (userFiles[i].id === fileId) {
      found = userFiles[i]
      break
    }
  }
  if (found) break
}

if (!found) {
  Bot.sendMessage("<b>❌ Fɪʟᴇ ɴᴏᴛ ꜰᴏᴜɴᴅ!</b>\n\nTʜɪꜱ ꜰɪʟᴇ ᴍᴀʏ ʜᴀᴠᴇ ʙᴇᴇɴ ᴅᴇʟᴇᴛᴇᴅ.", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
  })
  return
}

var emoji = found.type === "photo" ? "🖼️" : found.type === "video" ? "🎬" : found.type === "audio" ? "🎵" : found.type === "voice" ? "🎤" : found.type === "sticker" ? "🏷️" : "📄"
var size = found.size > 0 ? Libs.Helpers.formatNumber(Math.round(found.size / 1024)) + " KB" : "N/A"

try {
  if (found.type === "photo") {
    Api.sendPhoto({ chat_id: user.telegramid, photo: found.fileId, caption: emoji + " " + found.name })
  } else if (found.type === "video") {
    Api.sendVideo({ chat_id: user.telegramid, video: found.fileId, caption: emoji + " " + found.name })
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

  Bot.sendMessage("<b>📤 Fɪʟᴇ Sᴇɴᴛ!</b>\n\n" +
    emoji + " " + Libs.Helpers.escapeHTML(found.name) + "\n" +
    "<b>📦 Sɪᴢᴇ:</b> " + size +
    adsFooter, {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Fᴀɪʟᴇᴅ ᴛᴏ ꜱᴇɴᴅ ꜰɪʟᴇ.</b>", { parse_mode: "HTML" })
}
