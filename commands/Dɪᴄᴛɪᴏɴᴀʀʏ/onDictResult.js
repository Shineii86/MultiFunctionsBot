/*CMD
  command: onDictResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Dɪᴄᴛɪᴏɴᴀʀʏ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var word = User.getProperty("dictWord", "")

try {
  var data = JSON.parse(content)

  if (Array.isArray(data) && data.length > 0) {
    var entry = data[0]
    var phonetic = entry.phonetic || ""
    var meanings = entry.meanings || []

    var caption = "<b>📖 " + Libs.Helpers.escapeHTML(word.toUpperCase()) + "</b>\n"
    if (phonetic) caption += "<b>🔊 Pʜᴏɴᴇᴛɪᴄ:</b> " + phonetic + "\n"
    caption += "\n"

    for (var m = 0; m < Math.min(3, meanings.length); m++) {
      var meaning = meanings[m]
      caption += "<b>" + Libs.Helpers.escapeHTML(meaning.partOfSpeech || "") + "</b>\n"
      var defs = meaning.definitions || []
      for (var d = 0; d < Math.min(3, defs.length); d++) {
        caption += (d + 1) + ". " + Libs.Helpers.escapeHTML(defs[d].definition) + "\n"
        if (defs[d].example) caption += "   <i>E.g: " + Libs.Helpers.escapeHTML(defs[d].example) + "</i>\n"
      }

      var synonyms = meaning.synonyms || []
      if (synonyms.length > 0) {
        caption += "<b>Sʏɴᴏɴʏᴍꜱ:</b> " + Libs.Helpers.truncate(synonyms.join(", "), 100) + "\n"
      }
      caption += "\n"
    }

    caption += adsFooter

    var buttons = [
      [
        { text: "📖 Lᴏᴏᴋ Uᴘ Aɢᴀɪɴ", callback_data: "/dict" },
        { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
      ]
    ]

    Bot.sendMessage(caption, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: buttons }
    })
  } else {
    Bot.sendMessage("<b>❌ Wᴏʀᴅ ɴᴏᴛ ꜰᴏᴜɴᴅ!</b>\n\nCʜᴇᴄᴋ ꜱᴘᴇʟʟɪɴɢ ᴀɴᴅ ᴛʀʏ ᴀɢᴀɪɴ.", {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/dict" }]] }
    })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Dɪᴄᴛɪᴏɴᴀʀʏ ᴇʀʀᴏʀ.</b>", { parse_mode: "HTML" })
}
