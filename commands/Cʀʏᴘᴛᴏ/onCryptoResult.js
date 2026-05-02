/*CMD
  command: onCryptoResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Cʀʏᴘᴛᴏ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var query = User.getProperty("cryptoQuery", "BTC")

try {
  var data = JSON.parse(content)
  var coinId = Object.keys(data)[0]

  if (data[coinId]) {
    var d = data[coinId]
    var price = d.usd || 0
    var change = d.usd_24h_change || 0
    var mcap = d.usd_market_cap || 0

    var changeEmoji = change >= 0 ? "🟢" : "🔴"
    var changeStr = change >= 0 ? "+" + change.toFixed(2) : change.toFixed(2)

    var bar = Libs.Helpers.getProgressBar(Math.abs(change), 20, 10)

    var caption = "<b>💰 " + query + " Pʀɪᴄᴇ</b>\n\n" +
      "<b>💵 Pʀɪᴄᴇ:</b> $" + Libs.Helpers.formatNumber(price.toFixed(2)) + "\n" +
      "<b>📊 24ʜ Cʜᴀɴɢᴇ:</b> " + changeEmoji + " " + changeStr + "%\n" +
      bar + "\n" +
      "<b>📈 Mᴀʀᴋᴇᴛ Cᴀᴘ:</b> $" + Libs.Helpers.formatNumber(Math.round(mcap)) +
      adsFooter

    var buttons = [
      [
        { text: "🔄 Rᴇꜰʀᴇꜱʜ", callback_data: "/crypto " + query },
        { text: "📊 Bᴛᴄ", callback_data: "/crypto BTC" }
      ],
      [
        { text: "Eᴛʜ", callback_data: "/crypto ETH" },
        { text: "Sᴏʟ", callback_data: "/crypto SOL" },
        { text: "Dᴏɢᴇ", callback_data: "/crypto DOGE" }
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
    Bot.sendMessage("<b>❌ Cᴏɪɴ ɴᴏᴛ ꜰᴏᴜɴᴅ!</b>\n\nTʀʏ: BTC, ETH, SOL, DOGE, etc.", { parse_mode: "HTML" })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Fᴀɪʟᴇᴅ ᴛᴏ ꜰᴇᴛᴄʜ ᴘʀɪᴄᴇ.</b>", { parse_mode: "HTML" })
}
