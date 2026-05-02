/*CMD
  command: storeUpload
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Fɪʟᴇ Sᴛᴏʀᴇ

  <<ANSWER
📤 Sᴇɴᴅ ᴀ ꜰɪʟᴇ, ᴘʜᴏᴛᴏ, ᴠɪᴅᴇᴏ, ᴀᴜᴅɪᴏ, ᴏʀ ᴅᴏᴄᴜᴍᴇɴᴛ ᴛᴏ ꜱᴛᴏʀᴇ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var fileId = null
var fileName = "file"
var fileType = "document"
var fileSize = 0

if (request.photo && request.photo[0]) {
  fileId = request.photo[request.photo.length - 1].file_id
  fileName = "photo_" + Date.now()
  fileType = "photo"
  fileSize = request.photo[request.photo.length - 1].file_size || 0
} else if (request.video) {
  fileId = request.video.file_id
  fileName = request.video.file_name || "video_" + Date.now()
  fileType = "video"
  fileSize = request.video.file_size || 0
} else if (request.audio) {
  fileId = request.audio.file_id
  fileName = request.audio.file_name || request.audio.title || "audio_" + Date.now()
  fileType = "audio"
  fileSize = request.audio.file_size || 0
} else if (request.voice) {
  fileId = request.voice.file_id
  fileName = "voice_" + Date.now()
  fileType = "voice"
  fileSize = request.voice.file_size || 0
} else if (request.document) {
  fileId = request.document.file_id
  fileName = request.document.file_name || "document_" + Date.now()
  fileType = "document"
  fileSize = request.document.file_size || 0
} else if (request.sticker) {
  fileId = request.sticker.file_id
  fileName = "sticker_" + (request.sticker.emoji || "") + "_" + Date.now()
  fileType = "sticker"
  fileSize = request.sticker.file_size || 0
} else if (request.animation) {
  fileId = request.animation.file_id
  fileName = request.animation.file_name || "gif_" + Date.now()
  fileType = "animation"
  fileSize = request.animation.file_size || 0
} else {
  Bot.sendMessage("<b>❌ Uɴꜱᴜᴘᴘᴏʀᴛᴇᴅ ꜰɪʟᴇ ᴛʏᴘᴇ.</b>\n\nSᴇɴᴅ ᴀ ᴘʜᴏᴛᴏ, ᴠɪᴅᴇᴏ, ᴀᴜᴅɪᴏ, ᴅᴏᴄᴜᴍᴇɴᴛ, ꜱᴛɪᴄᴋᴇʀ, ᴏʀ Gɪꜰ.", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "storeUpload" }]] }
  })
  return
}

// Generate unique ID
var storeId = "F" + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 5).toUpperCase()

// Store file reference
var storedFiles = Bot.getProperty("stored_files_" + user.telegramid, [])
storedFiles.push({
  id: storeId,
  fileId: fileId,
  name: fileName,
  type: fileType,
  size: fileSize,
  time: Date.now()
})
Bot.setProperty("stored_files_" + user.telegramid, storedFiles, "json")

// Generate shareable link
var shareLink = "https://t.me/" + bot.name + "?start=file_" + storeId

var sizeStr = fileSize > 0 ? Libs.Helpers.formatNumber(Math.round(fileSize / 1024)) + " KB" : "N/A"

var typeEmoji = fileType === "photo" ? "🖼️" : fileType === "video" ? "🎬" : fileType === "audio" ? "🎵" : fileType === "voice" ? "🎤" : fileType === "sticker" ? "🏷️" : fileType === "animation" ? "🎞️" : "📄"

Bot.sendMessage("<b>✅ Fɪʟᴇ Sᴛᴏʀᴇᴅ!</b>\n\n" +
  typeEmoji + " <b>" + Libs.Helpers.escapeHTML(fileName) + "</b>\n\n" +
  "<b>🆔 Iᴅ:</b> <code>" + storeId + "</code>\n" +
  "<b>📦 Sɪᴢᴇ:</b> " + sizeStr + "\n" +
  "<b>🔗 Lɪɴᴋ:</b>\n<code>" + shareLink + "</code>\n\n" +
  "<b>💡 Sʜᴀʀᴇ ᴛʜɪꜱ ʟɪɴᴋ ᴛᴏ ʟᴇᴛ ᴏᴛʜᴇʀꜱ ᴀᴄᴄᴇꜱꜱ ʏᴏᴜʀ ꜰɪʟᴇ!" +
  adsFooter, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [{ text: "📤 Sʜᴀʀᴇ Lɪɴᴋ", url: "https://t.me/share/url?url=" + encodeURIComponent(shareLink) }],
      [
        { text: "📁 Mʏ Fɪʟᴇꜱ", callback_data: "/store" },
        { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
      ]
    ]
  }
})
