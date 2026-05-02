/*CMD
  command: /help
  help: Show all available commands
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

var caption = "<b>👮 Hᴇʟᴘ - Aᴠᴀɪʟᴀʙʟᴇ Cᴏᴍᴍᴀɴᴅs</b>\n\n" +
  "<b>📌 Mᴇɴᴜ</b>\n" +
  "» /start - Sᴛᴀʀᴛ ᴛʜᴇ ʙᴏᴛ\n" +
  "» /help - Sʜᴏᴡ ᴛʜɪs ʜᴇʟᴘ\n" +
  "» /about - Aʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ\n\n" +
  "<b>⚙️ Tᴏᴏʟs</b>\n" +
  "» /shortener - Sʜᴏʀᴛᴇɴ Uʀʟs\n" +
  "» /telegramId - Yᴏᴜʀ Tᴇʟᴇɢʀᴀᴍ Iɴғᴏ\n" +
  "» /password - Gᴇɴᴇʀᴀᴛᴇ Pᴀssᴡᴏʀᴅ\n" +
  "» /translate - Tʀᴀɴsʟᴀᴛᴇ Tᴇxᴛ\n" +
  "» /qrcode - Gᴇɴᴇʀᴀᴛᴇ QR Cᴏᴅᴇ\n" +
  "» /base64 - Bᴀsᴇ64 Eɴᴄᴏᴅᴇ/Dᴇᴄᴏᴅᴇ\n" +
  "» /hash - Gᴇɴᴇʀᴀᴛᴇ Hᴀsʜ\n" +
  "» /wordcount - Cᴏᴜɴᴛ Wᴏʀᴅs/Cʜᴀʀs\n" +
  "» /uuid - Gᴇɴᴇʀᴀᴛᴇ Uᴜɪᴅ\n" +
  "» /datetime - Cᴜʀʀᴇɴᴛ Dᴀᴛᴇ/Tɪᴍᴇ\n\n" +
  "<b>👑 Aᴅᴍɪɴ</b>\n" +
  "» /ZeroTwo - Cʟᴀɪᴍ Aᴅᴍɪɴ\n" +
  "» /master - Aᴅᴍɪɴ Pᴀɴᴇʟ\n" +
  "» /restart - Rᴇsᴛᴀʀᴛ Bᴏᴛ\n\n" +
  "<b>💡 Tɪᴘ:</b> Yᴏᴜ ᴄᴀɴ ᴀʟsᴏ ᴜsᴇ ᴛʜᴇ ʙᴜᴛᴛᴏɴs ɪɴsᴛᴇᴀᴅ ᴏғ ᴄᴏᴍᴍᴀɴᴅs!" +
  adsFooter

var buttons = [
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
