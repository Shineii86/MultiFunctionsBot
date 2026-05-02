/*CMD
  command: /mock
  help: Convert text to mocking sPoNgEbOb case
  need_reply: true
  auto_retry_time: 
  folder: Fᴜɴ

  <<ANSWER
🧽 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴛᴏ ᴍᴏᴄᴋɪɴɢ ᴄᴀsᴇ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /spongebob
  group: 
CMD*/

var result = ""
for (var i = 0; i < message.length; i++) {
  result += i % 2 === 0 ? message[i].toLowerCase() : message[i].toUpperCase()
}

var adsFooter = Libs.Helpers.getAdsFooter()
Bot.sendMessage("<b>🧽 Mᴏᴄᴋɪɴɢ Tᴇxᴛ</b>\n\n<b>📥 Iɴᴘᴜᴛ:</b>\n" + message + "\n\n<b>📤 Oᴜᴛᴘᴜᴛ:</b>\n" + result + adsFooter, {
  parse_mode: "HTML", disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "🧽 Mᴏᴄᴋ Aɢᴀɪɴ", callback_data: "/mock" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }], [{ text: "◁", callback_data: "/tools" }, { text: "○", callback_data: "/start" }, { text: "✕", callback_data: "/close" }]] }
})
