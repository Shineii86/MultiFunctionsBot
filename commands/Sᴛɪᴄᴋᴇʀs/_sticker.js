/*CMD
  command: /sticker
  help: Convert a photo to sticker format
  need_reply: true
  auto_retry_time: 
  folder: Sᴛɪᴄᴋᴇʀs

  <<ANSWER
🏷️ Sᴇɴᴅ ᴏʀ ꜰᴏʀᴡᴀʀᴅ ᴘʜᴏᴛᴏ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴛᴏ ꜱᴛɪᴄᴋᴇʀ ꜰᴏʀᴍᴀᴛ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /stickerize
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

if (request.photo && request.photo[0]) {
  // Photo received - send as sticker
  var fileId = request.photo[request.photo.length - 1].file_id
  try {
    Api.sendSticker({
      chat_id: request.chat.id,
      sticker: fileId,
      reply_to_message_id: request.message_id
    })
    Bot.sendMessage("<b>✅ Sᴛɪᴄᴋᴇʀ Sᴇɴᴛ!</b>\n\n" +
      "💡 Tɪᴘ: Aᴅᴅ ɪᴛ ᴛᴏ ʏᴏᴜʀ ꜱᴛɪᴄᴋᴇʀ ᴘᴀᴄᴋ ʙʏ ꜰᴏʀᴡᴀʀᴅɪɴɢ ᴛᴏ @Stickers." + adsFooter, {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
    })
  } catch (e) {
    Bot.sendMessage("<b>❌ Cᴏɴᴠᴇʀꜱɪᴏɴ ꜰᴀɪʟᴇᴅ.</b>", { parse_mode: "HTML" })
  }
} else if (request.sticker) {
  // Sticker received - get info
  var s = request.sticker
  var caption = "<b>🏷️ Sᴛɪᴄᴋᴇʀ Iɴꜰᴏ</b>\n\n" +
    "<b>🆔 Fɪʟᴇ Iᴅ:</b>\n<code>" + s.file_id + "</code>\n\n" +
    "<b>📐 Sɪᴢᴇ:</b> " + s.width + "x" + s.height + "\n" +
    "<b>📦 Fɪʟᴇ Sɪᴢᴇ:</b> " + (s.file_size ? Math.round(s.file_size / 1024) + " KB" : "N/A") + "\n" +
    "<b>🎭 Eᴍᴏᴊɪ:</b> " + (s.emoji || "N/A") + "\n" +
    "<b>🎨 Sᴇᴛ:</b> " + (s.set_name || "N/A") + "\n" +
    "<b>🎬 Aɴɪᴍᴀᴛᴇᴅ:</b> " + (s.is_animated ? "Yᴇꜱ" : "Nᴏ") + "\n" +
    "<b>📹 Vɪᴅᴇᴏ:</b> " + (s.is_video ? "Yᴇꜱ" : "Nᴏ")

  Bot.sendMessage(caption + adsFooter, {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
  })
} else {
  Bot.sendMessage("<b>❌ Pʟᴇᴀꜱᴇ ꜱᴇɴᴅ ᴏʀ ꜰᴏʀᴡᴀʀᴅ ᴘʜᴏᴛᴏ/ꜱᴛɪᴄᴋᴇʀ.</b>", { parse_mode: "HTML" })
}
