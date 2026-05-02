/*CMD
  command: addPriceAlert
  help: Add a price alert
  need_reply: true
  auto_retry_time: 
  folder: Pʀɪᴄᴇ Aʟᴇʀᴛꜱ

  <<ANSWER
🔔 Sᴇɴᴅ ᴀʟᴇʀᴛ ɪɴ ᴛʜɪꜱ ꜰᴏʀᴍᴀᴛ:
<code>SIMBL PRICE direction</code>
E.g: <code>BTC 60000 above</code>
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var input = message.trim().split(/\s+/)
var adsFooter = Libs.Helpers.getAdsFooter()

if (input.length < 3) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ ꜰᴏʀᴍᴀᴛ!</b>\n\n<code>BTC 60000 above</code>", { parse_mode: "HTML" })
  return
}

var symbol = input[0].toUpperCase()
var price = parseFloat(input[1])
var direction = input[2].toLowerCase()

if (isNaN(price) || price <= 0) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ ᴘʀɪᴄᴇ!</b>", { parse_mode: "HTML" })
  return
}

if (direction !== "above" && direction !== "below") {
  Bot.sendMessage("<b>❌ Dɪʀᴇᴄᴛɪᴏɴ ᴍᴜꜱᴛ ʙᴇ 'above' ᴏʀ 'below'!</b>", { parse_mode: "HTML" })
  return
}

var alerts = Bot.getProperty("price_alerts_" + user.telegramid, [])
alerts.push({
  symbol: symbol,
  price: price,
  direction: direction,
  active: true,
  time: Date.now()
})
Bot.setProperty("price_alerts_" + user.telegramid, alerts, "json")

var emoji = direction === "above" ? "📈" : "📉"

Bot.sendMessage("<b>🔔 Pʀɪᴄᴇ Aʟᴇʀᴛ Sᴇᴛ!</b>\n\n" +
  emoji + " <b>" + symbol + "</b> " + direction + " <b>$" + Libs.Helpers.formatNumber(price) + "</b>\n\n" +
  "Yᴏᴜ'ʟʟ ʙᴇ ɴᴏᴛɪꜰɪᴇᴅ ᴡʜᴇɴ ᴄᴏɴᴅɪᴛɪᴏɴ ɪꜱ ᴍᴇᴛ." +
  adsFooter, {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/pricealert") }
})
