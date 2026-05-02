/*CMD
  command: onApiResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Dᴇᴠᴇʟᴏᴘᴇʀ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var method = User.getProperty("apiMethod", "GET")
var url = User.getProperty("apiUrl", "")

try {
  var response = content
  // Try to pretty-print JSON
  try {
    var json = JSON.parse(content)
    response = JSON.stringify(json, null, 2)
  } catch (e) {}

  if (response.length > 3000) response = response.substring(0, 3000) + "\n... (truncated)"

  Bot.sendMessage("<b>🌐 API Rᴇꜱᴘᴏɴꜱᴇ</b>\n\n" +
    "<b>Mᴇᴛʜᴏᴅ:</b> " + method + "\n" +
    "<b>URL:</b> " + Libs.Helpers.escapeHTML(url) + "\n\n" +
    "<code>" + Libs.Helpers.escapeHTML(response) + "</code>" +
    adsFooter, {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🌐 Nᴇxᴛ RᴇQᴜᴇꜱᴛ", callback_data: "/api" }]] }
  })
} catch (e) {
  Bot.sendMessage("<b>❌ RᴇQᴜᴇꜱᴛ ꜰᴀɪʟᴇᴅ.</b>", { parse_mode: "HTML" })
}
