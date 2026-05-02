/*CMD
  command: /morse
  help: Encode or decode Morse code
  need_reply: false
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>📡 Mᴏʀsᴇ Cᴏᴅᴇ Cᴏɴᴠᴇʀᴛᴇʀ</b>\n\n" +
  "Sᴇʟᴇᴄᴛ ᴏᴘᴇʀᴀᴛɪᴏɴ:" +
  adsFooter

var buttons = [
  [
    { text: "🔤 → ·− Tᴇxᴛ Tᴏ Mᴏʀsᴇ", callback_data: "morseEnc" },
    { text: "·− → 🔤 Mᴏʀsᴇ Tᴏ Tᴇxᴛ", callback_data: "morseDec" }
  ],
  [
    { text: "◁", callback_data: "/tools" },
    { text: "○", callback_data: "/start" },
    { text: "✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
