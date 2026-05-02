/*CMD
  command: /json
  help: Format, validate, or extract from JSON
  need_reply: true
  auto_retry_time: 
  folder: Dᴇᴠᴇʟᴏᴘᴇʀ

  <<ANSWER
📋 Sᴇɴᴅ JSON ᴛᴇxᴛ ᴛᴏ ꜰᴏʀᴍᴀᴛ ᴏʀ ᴠᴀʟɪᴅᴀᴛᴇ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /jsonfmt
  group: 
CMD*/

var input = message.trim()
var adsFooter = Libs.Helpers.getAdsFooter()

try {
  var parsed = JSON.parse(input)
  var formatted = JSON.stringify(parsed, null, 2)

  if (formatted.length > 3000) formatted = formatted.substring(0, 3000) + "\n... (truncated)"

  Bot.sendMessage("<b>✅ Vᴀʟɪᴅ JSON</b>\n\n" +
    "<code>" + Libs.Helpers.escapeHTML(formatted) + "</code>\n\n" +
    "<b>📊 Sɪᴢᴇ:</b> " + input.length + " ᴄʜᴀʀꜱ | Dᴇᴘᴛʜ: " + (input.match(/{/g) || []).length +
    adsFooter, {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "📋 Fᴏʀᴍᴀᴛ Aɢᴀɪɴ", callback_data: "/json" }]] }
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ JSON!</b>\n\n" +
    "<b>Eʀʀᴏʀ:</b> " + Libs.Helpers.escapeHTML(e.message) +
    adsFooter, {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/json" }]] }
  })
}
