/*CMD
  command: morseDec
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
·− Sᴇɴᴅ Mᴏʀsᴇ ᴄᴏᴅᴇ ᴛᴏ ᴅᴇᴄᴏᴅᴇ (use spaces between letters, / between words).
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var MORSE_REV = {
  ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F",
  "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L",
  "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R",
  "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X",
  "-.--": "Y", "--..": "Z", "-----": "0", ".----": "1", "..---": "2",
  "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7",
  "---..": "8", "----.": "9", ".-.-.-": ".", "--..--": ",", "..--..": "?",
  "-.-.--": "!", "-..-.": "/", "-.--.": "(", "-.--.-": ")", ".-...": "&",
  "---...": ":", "-.-.-.": ";", "-...-": "=", ".-.-.": "+", "-....-": "-",
  "..--.-": "_", ".-..-.": '"', ".----.": "'", ".--.-.": "@"
}

var codes = message.trim().split(" ")
var result = ""
for (var i = 0; i < codes.length; i++) {
  if (codes[i] === "/") {
    result += " "
  } else if (MORSE_REV[codes[i]]) {
    result += MORSE_REV[codes[i]]
  } else {
    result += "?"
  }
}

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>📡 Mᴏʀsᴇ Cᴏᴅᴇ Dᴇᴄᴏᴅᴇᴅ</b>\n\n" +
  "<b>📥 Iɴᴘᴜᴛ:</b>\n<code>" + message + "</code>\n\n" +
  "<b>📤 Oᴜᴛᴘᴜᴛ:</b>\n<code>" + result + "</code>" +
  adsFooter

var buttons = [
  [
    { text: "🔤 Eɴᴄᴏᴅᴇ", callback_data: "morseEnc" },
    { text: "·− Dᴇᴄᴏᴅᴇ Mᴏʀᴇ", callback_data: "morseDec" }
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
