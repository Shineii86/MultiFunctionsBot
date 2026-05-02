/*CMD
  command: /roman
  help: Convert numbers to/from Roman numerals
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

var caption = "<b>🏛️ Rᴏᴍᴀɴ Nᴜᴍᴇʀᴀʟ Cᴏɴᴠᴇʀᴛᴇʀ</b>\n\n" +
  "Sᴇʟᴇᴄᴛ ᴏᴘᴇʀᴀᴛɪᴏɴ:" +
  adsFooter

var buttons = [
  [
    { text: "# → I V X Nᴜᴍʙᴇʀ Tᴏ Rᴏᴍᴀɴ", callback_data: "romanEnc" },
    { text: "I V X → # Rᴏᴍᴀɴ Tᴏ Nᴜᴍʙᴇʀ", callback_data: "romanDec" }
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
