/*CMD
  command: romanDec
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
I V X Sᴇɴᴅ ᴀ Rᴏᴍᴀɴ ɴᴜᴍᴇʀᴀʟ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴛᴏ ᴀ ɴᴜᴍʙᴇʀ (ᴇ.ɢ. XIV).
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var roman = message.trim().toUpperCase()
var map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
var result = 0
var valid = true

for (var i = 0; i < roman.length; i++) {
  var curr = map[roman[i]]
  var next = map[roman[i + 1]]
  if (!curr) { valid = false; break }
  if (next && curr < next) {
    result += next - curr
    i++
  } else {
    result += curr
  }
}

var adsFooter = Libs.Helpers.getAdsFooter()

if (!valid || result < 1 || result > 3999) {
  var caption = "<b>❌ Iɴᴠᴀʟɪᴅ Rᴏᴍᴀɴ Nᴜᴍᴇʀᴀʟ</b>\n\n" +
    "Usᴇ I, V, X, L, C, D, M (ᴇ.ɢ. XIV, MMXXV)" +
    adsFooter
} else {
  var caption = "<b>🏛️ Rᴏᴍᴀɴ Nᴜᴍᴇʀᴀʟ Dᴇᴄᴏᴅᴇᴅ</b>\n\n" +
    "<b>📥 Iɴᴘᴜᴛ:</b> <code>" + roman + "</code>\n" +
    "<b>📤 Oᴜᴛᴘᴜᴛ:</b> <code>" + result + "</code>" +
    adsFooter
}

var buttons = [
  [
    { text: "# Eɴᴄᴏᴅᴇ", callback_data: "romanEnc" },
    { text: "I V X Dᴇᴄᴏᴅᴇ Mᴏʀᴇ", callback_data: "romanDec" }
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
