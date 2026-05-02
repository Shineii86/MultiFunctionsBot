/*CMD
  command: onStockResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Sᴛᴏᴄᴋ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var symbol = User.getProperty("stockSymbol", "AAPL")

try {
  var data = JSON.parse(content)
  if (data.chart && data.chart.result && data.chart.result[0]) {
    var result = data.chart.result[0]
    var meta = result.meta
    var price = meta.regularMarketPrice || 0
    var prevClose = meta.previousClose || price
    var change = price - prevClose
    var changePct = prevClose > 0 ? (change / prevClose * 100) : 0
    var currency = meta.currency || "USD"

    var changeEmoji = change >= 0 ? "🟢" : "🔴"
    var arrow = change >= 0 ? "📈" : "📉"

    var caption = arrow + " <b>" + symbol + " Sᴛᴏᴄᴋ</b>\n\n" +
      "<b>💵 Pʀɪᴄᴇ:</b> " + Libs.Helpers.formatNumber(price.toFixed(2)) + " " + currency + "\n" +
      "<b>📊 Cʜᴀɴɢᴇ:</b> " + changeEmoji + " " + (change >= 0 ? "+" : "") + change.toFixed(2) + " (" + changePct.toFixed(2) + "%)\n" +
      "<b>📋 Pʀᴇᴠ Cʟᴏꜱᴇ:</b> " + Libs.Helpers.formatNumber(prevClose.toFixed(2)) + "\n" +
      "<b>🏷️ Mᴀʀᴋᴇᴛ:</b> " + (meta.market || "N/A") +
      adsFooter

    var buttons = [
      [
        { text: "🔄 Rᴇꜰʀᴇꜱʜ", callback_data: "/stock " + symbol },
        { text: "Aᴀᴘʟ", callback_data: "/stock AAPL" }
      ],
      [
        { text: "Gᴏᴏɢ", callback_data: "/stock GOOGL" },
        { text: "Tꜱʟᴀ", callback_data: "/stock TSLA" },
        { text: "Mꜱꜰᴛ", callback_data: "/stock MSFT" }
      ],
      [
        { text: "◁", callback_data: "/tools" },
        { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
      ]
    ]

    Libs.Helpers.editOrSend({
      text: caption,
      reply_markup: { inline_keyboard: buttons }
    })
  } else {
    Bot.sendMessage("<b>❌ Sᴛᴏᴄᴋ ɴᴏᴛ ꜰᴏᴜɴᴅ!</b>", { parse_mode: "HTML" })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Fᴀɪʟᴇᴅ ᴛᴏ ꜰᴇᴛᴄʜ ꜱᴛᴏᴄᴋ ᴅᴀᴛᴀ.</b>", { parse_mode: "HTML" })
}
