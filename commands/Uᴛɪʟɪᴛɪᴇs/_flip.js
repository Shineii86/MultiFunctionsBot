/*CMD
  command: /flip
  help: Flip a coin
  need_reply: false
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /coinflip
  group: 
CMD*/

var result = Math.random() < 0.5 ? "Hᴇᴀᴅs 🪙" : "Tᴀɪʟs 🪙"
var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>🪙 Cᴏɪɴ Fʟɪᴘ</b>\n\n" +
  "<b>Rᴇsᴜʟᴛ:</b> " + result +
  adsFooter

var buttons = [
  [
    { text: "🪙 Fʟɪᴘ Aɢᴀɪɴ", callback_data: "/flip" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
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
