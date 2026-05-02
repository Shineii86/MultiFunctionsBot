/*CMD
  command: onSynonymResult
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
var word = User.getProperty("synonymWord", "")

try {
  var data = JSON.parse(content)
  if (data && data.length > 0) {
    var words = data.slice(0, 20).map(function(d) { return d.word })
    var caption = "<b>🔤 Sʏɴᴏɴʏᴍꜱ ꜰᴏʀ \"" + Libs.Helpers.escapeHTML(word) + "\"</b>\n\n"
    caption += words.join(", ") + "\n\n"
    caption += "<b>Fᴏᴜɴᴅ:</b> " + data.length + " ʀᴇꜱᴜʟᴛꜱ" + adsFooter

    Bot.sendMessage(caption, {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [[{ text: "🔤 Sᴇᴀʀᴄʜ Aɢᴀɪɴ", callback_data: "/synonym" }]] }
    })
  } else {
    Bot.sendMessage("<b>❌ Nᴏ ꜱʏɴᴏɴʏᴍꜱ ꜰᴏᴜɴᴅ ꜰᴏʀ \"" + Libs.Helpers.escapeHTML(word) + "\"</b>", { parse_mode: "HTML" })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ.</b>", { parse_mode: "HTML" })
}
