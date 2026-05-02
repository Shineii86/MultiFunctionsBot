/*CMD
  command: /img
  help: Upload image and get direct link
  need_reply: true
  auto_retry_time: 
  folder: Iᴍᴀɢᴇ Hᴏsᴛ

  <<ANSWER
🖼️ Sᴇɴᴅ ᴀɴ ɪᴍᴀɢᴇ ᴛᴏ ɢᴇᴛ ᴀ ᴅɪʀᴇᴄᴛ ɪᴍᴀɢᴇ URL.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /imghost /imagehost
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

if (!request.photo || !request.photo[0]) {
  Bot.sendMessage("<b>❌ Pʟᴇᴀꜱᴇ ꜱᴇɴᴅ ᴀɴ ɪᴍᴀɢᴇ!</b>", { parse_mode: "HTML" })
  return
}

var photo = request.photo[request.photo.length - 1]
var fileId = photo.file_id

// Get file URL from Telegram
try {
  var file = Api.getFile({ file_id: fileId })
  if (file && file.file_path) {
    var tgUrl = "https://api.telegram.org/file/bot" + Bot.getProperty("token", "") + "/" + file.file_path

    // Upload to Telegraph (telegra.ph)
    // Use Telegraph upload API
    HTTP.post({
      url: "https://telegra.ph/upload",
      body: { file: tgUrl },
      success: "onImgUploadResult"
    })

    // Store reference for the callback
    User.setProperty("imgUploadFileId", fileId, "string")
    User.setProperty("imgUploadOriginal", request.photo[0].file_id, "string")

    Bot.sendMessage("<b>⏳ Uᴘʟᴏᴀᴅɪɴɢ ɪᴍᴀɢᴇ...</b>", { parse_mode: "HTML" })
  } else {
    Bot.sendMessage("<b>❌ Fᴀɪʟᴇᴅ ᴛᴏ ɢᴇᴛ ꜰɪʟᴇ.</b>", { parse_mode: "HTML" })
  }
} catch (e) {
  // Fallback: use Telegram file link directly
  var fallbackUrl = "https://t.me/" + bot.name + "?start=img_" + fileId.substring(0, 20)
  Bot.sendMessage("<b>🖼️ Iᴍᴀɢᴇ Uᴘʟᴏᴀᴅᴇᴅ!</b>\n\n" +
    "<b>🔗 Lɪɴᴋ:</b> <code>" + fallbackUrl + "</code>\n\n" +
    "<i>Dɪʀᴇᴄᴛ ʟɪɴᴋ ɢᴇɴᴇʀᴀᴛᴇᴅ.</i>" +
    adsFooter, {
    parse_mode: "HTML",
    disable_web_page_preview: false,
    reply_markup: {
      inline_keyboard: [
        [{ text: "📤 Sʜᴀʀᴇ", url: "https://t.me/share/url?url=" + encodeURIComponent(fallbackUrl) }],
        [{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]
      ]
    }
  })
}
