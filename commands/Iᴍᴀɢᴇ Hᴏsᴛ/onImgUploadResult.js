/*CMD
  command: onImgUploadResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Iᴍᴀɢᴇ Hᴏsᴛ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

try {
  var data = JSON.parse(content)
  if (data && data[0] && data[0].src) {
    var imageUrl = "https://telegra.ph" + data[0].src

    Bot.sendMessage("<b>🖼️ Iᴍᴀɢᴇ Uᴘʟᴏᴀᴅᴇᴅ!</b>\n\n" +
      "<b>🔗 Dɪʀᴇᴄᴛ Lɪɴᴋ:</b>\n<code>" + imageUrl + "</code>\n\n" +
      "<b>📋 BB Cᴏᴅᴇ:</b>\n<code>[img]" + imageUrl + "[/img]</code>\n\n" +
      "<b>📋 Mᴀʀᴋᴅᴏᴡɴ:</b>\n<code>![](" + imageUrl + ")</code>" +
      adsFooter, {
      parse_mode: "HTML",
      disable_web_page_preview: false,
      reply_markup: {
        inline_keyboard: [
          [{ text: "📤 Sʜᴀʀᴇ", url: "https://t.me/share/url?url=" + encodeURIComponent(imageUrl) }],
          [
            { text: "🖼️ Uᴘʟᴏᴀᴅ Aɢᴀɪɴ", callback_data: "/img" },
            { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
          ]
        ]
      }
    })
  } else {
    Bot.sendMessage("<b>❌ Uᴘʟᴏᴀᴅ ꜰᴀɪʟᴇᴅ.</b>\n\nTʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ.", { parse_mode: "HTML" })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Uᴘʟᴏᴀᴅ ᴇʀʀᴏʀ.</b>", { parse_mode: "HTML" })
}
