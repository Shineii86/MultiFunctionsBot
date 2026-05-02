/*CMD
  command: /zalgo
  help: Convert text to z̸a̶l̷g̵o̸ glitch text
  need_reply: true
  auto_retry_time: 
  folder: Fᴜɴ

  <<ANSWER
👹 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴛᴏ ᴢᴀʟɢᴏ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /glitch
  group: 
CMD*/

var zalgo = ["\u0300", "\u0301", "\u0302", "\u0303", "\u0304", "\u0305", "\u0306", "\u0307", "\u0308", "\u0309", "\u030A", "\u030B", "\u030C", "\u030D", "\u030E", "\u030F", "\u0310", "\u0311", "\u0312", "\u0313", "\u0314", "\u0315", "\u031A", "\u033D", "\u0340", "\u0341", "\u0342", "\u0343", "\u0344", "\u0346", "\u034A", "\u034B", "\u034C"]

var result = ""
for (var i = 0; i < message.length; i++) {
  result += message[i]
  var num = Math.floor(Math.random() * 5) + 1
  for (var j = 0; j < num; j++) {
    result += zalgo[Math.floor(Math.random() * zalgo.length)]
  }
}

var adsFooter = Libs.Helpers.getAdsFooter()
Bot.sendMessage("<b>👹 Zᴀʟɢᴏ Tᴇxᴛ</b>\n\n" + result + adsFooter, {
  parse_mode: "HTML", disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "👹 Zᴀʟɢᴏ Aɢᴀɪɴ", callback_data: "/zalgo" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }], [{ text: "◁", callback_data: "/tools" }, { text: "○", callback_data: "/start" }, { text: "✕", callback_data: "/close" }]] }
})
