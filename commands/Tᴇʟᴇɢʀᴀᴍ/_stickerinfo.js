/*CMD
  command: /stickerinfo
  help: Get info about a sticker (reply to any sticker)
  need_reply: true
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER
🏷️ Rᴇᴘʟʏ ᴛᴏ ᴀɴʏ sᴛɪᴄᴋᴇʀ ᴏʀ ꜰᴏʀᴡᴀʀᴅ ᴏɴᴇ ᴛᴏ ɢᴇᴛ ɪɴꜰᴏ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /si
  group: 
CMD*/

if (!request.reply_to_message && !request.sticker) {
  Bot.sendMessage("<b>❌ Pʟᴇᴀsᴇ ʀᴇᴘʟʏ ᴛᴏ ᴀ sᴛɪᴄᴋᴇʀ ᴏʀ ꜰᴏʀᴡᴀʀᴅ ᴏɴᴇ.</b>", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/stickerinfo" }]] }
  })
  return
}

var sticker = null
if (request.reply_to_message && request.reply_to_message.sticker) {
  sticker = request.reply_to_message.sticker
} else if (request.sticker) {
  sticker = request.sticker
}

if (!sticker) {
  Bot.sendMessage("<b>❌ Nᴏ sᴛɪᴄᴋᴇʀ ꜰᴏᴜɴᴅ ɪɴ ᴛʜɪs ᴍᴇssᴀɢᴇ.</b>", { parse_mode: "HTML" })
  return
}

var adsFooter = Libs.Helpers.getAdsFooter()
var setName = sticker.set_name || "N/A"
var emoji = sticker.emoji || "N/A"
var fileId = sticker.file_id || "N/A"
var fileUniqueId = sticker.file_unique_id || "N/A"
var width = sticker.width || "N/A"
var height = sticker.height || "N/A"
var isAnimated = sticker.is_animated ? "Yᴇs ✅" : "Nᴏ ❌"
var isVideo = sticker.is_video ? "Yᴇs ✅" : "Nᴏ ❌"
var type = sticker.type || "N/A"
var fileSize = sticker.file_size ? (sticker.file_size / 1024).toFixed(1) + " KB" : "N/A"
var premium = sticker.premium_animation ? "Yᴇs ⭐" : "Nᴏ"

var caption = "<b>🏷️ Sᴛɪᴄᴋᴇʀ Iɴꜰᴏ</b>\n\n" +
  "<b>😊 Eᴍᴏᴊɪ:</b> " + emoji + "\n" +
  "<b>📦 Sᴇᴛ:</b> " + (setName !== "N/A" ? "<a href='https://t.me/addstickers/" + setName + "'>" + setName + "</a>" : "N/A") + "\n" +
  "<b>📐 Dɪᴍᴇɴsɪᴏɴs:</b> " + width + "×" + height + "\n" +
  "<b>🎬 Aɴɪᴍᴀᴛᴇᴅ:</b> " + isAnimated + "\n" +
  "<b>📹 Vɪᴅᴇᴏ:</b> " + isVideo + "\n" +
  "<b>⭐ Pʀᴇᴍɪᴜᴍ:</b> " + premium + "\n" +
  "<b>💾 Fɪʟᴇ Sɪᴢᴇ:</b> " + fileSize + "\n" +
  "<b>🆔 Fɪʟᴇ ID:</b>\n<code>" + fileId + "</code>\n" +
  "<b>🔑 Uɴɪǫᴜᴇ ID:</b>\n<code>" + fileUniqueId + "</code>" +
  adsFooter

var buttons = [
  [
    { text: "🔍 Aɴᴏᴛʜᴇʀ Sᴛɪᴄᴋᴇʀ", callback_data: "/stickerinfo" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ],
  [
    { text: "◁", callback_data: "/tools" },
    { text: "○", callback_data: "/start" },
    { text: "✕", callback_data: "/close" }
  ]
]

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: buttons }
})
