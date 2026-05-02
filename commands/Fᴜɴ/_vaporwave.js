/*CMD
  command: /vaporwave
  help: Convert text to vaporwave ｗｉｄｅ text
  need_reply: true
  auto_retry_time: 
  folder: Fᴜɴ

  <<ANSWER
ｖ Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴛᴏ ᴠᴀᴘᴏʀᴡᴀᴠᴇ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /wide
  group: 
CMD*/

var result = ""
for (var i = 0; i < message.length; i++) {
  var c = message.charCodeAt(i)
  if (c >= 33 && c <= 126) {
    result += String.fromCharCode(c + 65248)
  } else if (c === 32) {
    result += "\u3000"
  } else {
    result += message[i]
  }
}

var adsFooter = Libs.Helpers.getAdsFooter()
Bot.sendMessage("<b>ｖ Ｖａｐｏｒｗａｖｅ Ｔｅｘｔ</b>\n\n" + result + adsFooter, {
  parse_mode: "HTML", disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "ｖ Aɢᴀɪɴ", callback_data: "/vaporwave" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }], [{ text: "◁", callback_data: "/tools" }, { text: "○", callback_data: "/start" }, { text: "✕", callback_data: "/close" }]] }
})
