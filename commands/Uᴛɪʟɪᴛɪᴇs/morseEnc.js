/*CMD
  command: morseEnc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
🔤 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ɪɴᴛᴏ Mᴏʀsᴇ ᴄᴏᴅᴇ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var MORSE = {
  A: ".-", B: "-...", C: "-.-.", D: "-..", E: ".", F: "..-.",
  G: "--.", H: "....", I: "..", J: ".---", K: "-.-", L: ".-..",
  M: "--", N: "-.", O: "---", P: ".--.", Q: "--.-", R: ".-.",
  S: "...", T: "-", U: "..-", V: "...-", W: ".--", X: "-..-",
  Y: "-.--", Z: "--..", 0: "-----", 1: ".----", 2: "..---",
  3: "...--", 4: "....-", 5: ".....", 6: "-....", 7: "--...",
  8: "---..", 9: "----.", ".": ".-.-.-", ",": "--..--", "?": "..--..",
  "!": "-.-.--", "/": "-..-.", "(": "-.--.", ")": "-.--.-", "&": ".-...",
  ":": "---...", ";": "-.-.-.", "=": "-...-", "+": ".-.-.", "-": "-....-",
  "_": "..--.-", '"': ".-..-.", "'": ".----.", "@": ".--.-.", " ": "/"
}

var text = message.toUpperCase()
var result = ""
for (var i = 0; i < text.length; i++) {
  var ch = text[i]
  if (MORSE[ch]) {
    result += MORSE[ch] + " "
  } else {
    result += ch + " "
  }
}
result = result.trim()

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>📡 Mᴏʀsᴇ Cᴏᴅᴇ Eɴᴄᴏᴅᴇᴅ</b>\n\n" +
  "<b>📥 Iɴᴘᴜᴛ:</b>\n<code>" + message + "</code>\n\n" +
  "<b>📤 Oᴜᴛᴘᴜᴛ:</b>\n<code>" + result + "</code>" +
  adsFooter

var buttons = [
  [
    { text: "🔤 Eɴᴄᴏᴅᴇ Mᴏʀᴇ", callback_data: "morseEnc" },
    { text: "·− Dᴇᴄᴏᴅᴇ", callback_data: "morseDec" }
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
