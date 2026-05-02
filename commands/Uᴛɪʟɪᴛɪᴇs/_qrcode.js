/*CMD
  command: /qrcode
  help: Generate a QR code from text or URL
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
📱 Sᴇɴᴅ ᴛʜᴇ ᴛᴇxᴛ ᴏʀ Uʀʟ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ɪɴᴛᴏ ᴀ QR Cᴏᴅᴇ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var text = encodeURIComponent(message)
var qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=" + text

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>📱 Yᴏᴜʀ QR Cᴏᴅᴇ</b>\n\n" +
  "<b>📝 Dᴀᴛᴀ:</b> <code>" + message + "</code>" +
  adsFooter

var buttons = [
  [
    { text: "🔄 Nᴇᴡ QR Cᴏᴅᴇ", callback_data: "/qrcode" },
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
  photo: qrUrl,
  caption: caption,
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: buttons }
})
