/*CMD
  command: /binary
  help: Convert text to/from binary
  need_reply: false
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /bin
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>💻 Bɪɴᴀʀʏ Cᴏɴᴠᴇʀᴛᴇʀ</b>\n\n" +
  "Sᴇʟᴇᴄᴛ ᴏᴘᴇʀᴀᴛɪᴏɴ:" +
  adsFooter

var buttons = [
  [
    { text: "🔤 → 01 Tᴇxᴛ Tᴏ Bɪɴᴀʀʏ", callback_data: "binEnc" },
    { text: "01 → 🔤 Bɪɴᴀʀʏ Tᴏ Tᴇxᴛ", callback_data: "binDec" }
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
