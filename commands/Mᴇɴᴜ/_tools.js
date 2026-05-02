/*CMD
  command: /tools
  help: Access bot tools
  need_reply: false
  auto_retry_time: 
  folder: Mᴇɴᴜ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>Sᴇʟᴇᴄᴛ A Tᴏᴏʟ Fʀᴏᴍ Tʜᴇ Mᴇɴᴜ</b>" + adsFooter

var buttons = [
  [
    { text: "🔗 Sʜᴏʀᴛᴇɴᴇʀ", callback_data: "/shortener" },
    { text: "🆔 Tᴇʟᴇɢʀᴀᴍ Iᴅ", callback_data: "/telegramId" }
  ],
  [
    { text: "🔐 Pᴀssᴡᴏʀᴅ", callback_data: "/password" },
    { text: "🌍 Tʀᴀɴsʟᴀᴛᴇ", callback_data: "/translate" }
  ],
  [
    { text: "📱 QR Cᴏᴅᴇ", callback_data: "/qrcode" },
    { text: "🔤 Bᴀsᴇ64", callback_data: "/base64" }
  ],
  [
    { text: " #  Hᴀsʜ", callback_data: "/hash" },
    { text: "📝 Wᴏʀᴅ Cᴏᴜɴᴛ", callback_data: "/wordcount" }
  ],
  [
    { text: "🎲 Uᴜɪᴅ", callback_data: "/uuid" },
    { text: "🕐 Dᴀᴛᴇ/Tɪᴍᴇ", callback_data: "/datetime" }
  ],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
