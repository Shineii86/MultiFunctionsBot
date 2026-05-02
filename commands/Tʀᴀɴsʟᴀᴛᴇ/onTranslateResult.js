/*CMD
  command: onTranslateResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Tʀᴀɴsʟᴀᴛᴇ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

try {
  var data = JSON.parse(content)

  if (data && data[0] && data[0][0]) {
    var translatedText = ""
    for (var i = 0; i < data[0].length; i++) {
      if (data[0][i][0]) {
        translatedText += data[0][i][0]
      }
    }

    var sourceLang = data[2] || "Aᴜᴛᴏ"
    var targetLang = User.getProperty("selectedLang") || "?"

    var caption = "<b>✅ Tʀᴀɴsʟᴀᴛɪᴏɴ Cᴏᴍᴘʟᴇᴛᴇ</b>\n\n" +
      "<b>📤 Fʀᴏᴍ:</b> " + sourceLang + "\n" +
      "<b>📥 Tᴏ:</b> " + targetLang + "\n" +
      "▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬\n\n" +
      translatedText +
      adsFooter

    var buttons = [
      [
        { text: "🔄 Tʀᴀɴsʟᴀᴛᴇ Aɢᴀɪɴ", callback_data: "/translate" },
        { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
      ]
    ]

    Bot.sendMessage(caption, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: buttons }
    })
  } else {
    Bot.sendMessage("<b>❌ Tʀᴀɴsʟᴀᴛɪᴏɴ Fᴀɪʟᴇᴅ.</b> Pʟᴇᴀsᴇ Tʀʏ Aɢᴀɪɴ.", {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/translate" }]]
      }
    })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ Pʀᴏᴄᴇssɪɴɢ Tʀᴀɴsʟᴀᴛɪᴏɴ.</b>", { parse_mode: "HTML" })
}
