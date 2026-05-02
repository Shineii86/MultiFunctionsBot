/*CMD
  command: binDec
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
01 Sᴇɴᴅ ʙɪɴᴀʀʏ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴛᴏ ᴛᴇxᴛ (separate bytes with spaces).
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var bytes = message.trim().split(/\s+/)
var result = ""
for (var i = 0; i < bytes.length; i++) {
  var num = parseInt(bytes[i], 2)
  if (isNaN(num)) {
    result += "?"
  } else {
    result += String.fromCharCode(num)
  }
}

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>💻 Bɪɴᴀʀʏ Dᴇᴄᴏᴅᴇᴅ</b>\n\n" +
  "<b>📥 Iɴᴘᴜᴛ:</b>\n<code>" + message + "</code>\n\n" +
  "<b>📤 Oᴜᴛᴘᴜᴛ:</b>\n<code>" + result + "</code>" +
  adsFooter

var buttons = [
  [
    { text: "🔤 Eɴᴄᴏᴅᴇ", callback_data: "binEnc" },
    { text: "01 Dᴇᴄᴏᴅᴇ Mᴏʀᴇ", callback_data: "binDec" }
  ],
  [
    { text: "◁", callback_data: "/tools" },
    { text: "○", callback_data: "/start" },
    { text: "✕", callback_data: "/close" }
  ]
]

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: buttons }
})
