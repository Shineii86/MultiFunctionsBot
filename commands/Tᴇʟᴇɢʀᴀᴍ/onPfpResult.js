/*CMD
  command: onPfpResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

try {
  var data = options.result || options

  if (data && data.photos && data.photos.length > 0) {
    var photo = data.photos[0]
    // Get the largest size
    var largest = photo[photo.length - 1]
    var fileId = largest.file_id
    var totalPhotos = data.total_count || 1

    var caption = "<b>📷 Pʀᴏꜰɪʟᴇ Pʜᴏᴛᴏ</b>\n\n" +
      "<b>📊 Tᴏᴛᴀʟ Pʜᴏᴛᴏs:</b> " + totalPhotos + "\n" +
      "<b>📐 Sɪᴢᴇ:</b> " + largest.width + "×" + largest.height +
      adsFooter

    var buttons = [
      [
        { text: "🔄 Aɴᴏᴛʜᴇʀ", callback_data: "/pfp" },
        { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
      ],
      [
        { text: "◁", callback_data: "/tools" },
        { text: "○", callback_data: "/start" },
        { text: "✕", callback_data: "/close" }
      ]
    ]

    Api.sendPhoto({
      chat_id: user.telegramid,
      photo: fileId,
      caption: caption,
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: buttons }
    })
  } else {
    Bot.sendMessage("<b>❌ Nᴏ ᴘʀᴏꜰɪʟᴇ ᴘʜᴏᴛᴏ ꜰᴏᴜɴᴅ.</b>", {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/pfp" }]]
      }
    })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Cᴏᴜʟᴅ ꜰᴇᴛᴄʜ ᴘʀᴏꜰɪʟᴇ ᴘʜᴏᴛᴏ.</b>", { parse_mode: "HTML" })
}
