/*CMD
  command: /pricealert
  help: Set crypto/stock price alerts
  need_reply: false
  auto_retry_time: 
  folder: Pʀɪᴄᴇ Aʟᴇʀᴛꜱ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /alert2 /pricealarm
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var alerts = Bot.getProperty("price_alerts_" + user.telegramid, [])

var caption = "<b>🔔 Pʀɪᴄᴇ Aʟᴇʀᴛꜱ</b>\n\n"

if (alerts.length === 0) {
  caption += "Nᴏ ᴀᴄᴛɪᴠᴇ ᴀʟᴇʀᴛꜱ.\n\n"
} else {
  caption += "<b>Aᴄᴛɪᴠᴇ Aʟᴇʀᴛꜱ (" + alerts.length + "):</b>\n"
  for (var i = 0; i < alerts.length; i++) {
    var a = alerts[i]
    var dir = a.direction === "above" ? "📈" : "📉"
    caption += (i + 1) + ". " + dir + " <b>" + a.symbol + "</b> " + a.direction + " $" + Libs.Helpers.formatNumber(a.price) + "\n"
  }
  caption += "\n"
}

caption += "<b>Cᴏᴍᴍᴀɴᴅꜱ:</b>\n" +
  "├ /pricealert add BTC 60000 above — Aʟᴇʀᴛ ᴡʜᴇɴ BTC > $60K\n" +
  "├ /pricealert add AAPL 150 below — Aʟᴇʀᴛ ᴡʜᴇɴ AAPʟ < $150\n" +
  "├ /pricealert remove N — Rᴇᴍᴏᴠᴇ ᴀʟᴇʀᴛ #N\n" +
  "└ /pricealert list — Lɪꜱᴛ ᴀʟʟ" +
  adsFooter

var buttons = [
  [
    { text: "➕ Aᴅᴅ Aʟᴇʀᴛ", callback_data: "addPriceAlert" },
    { text: "📋 Lɪꜱᴛ", callback_data: "/pricealert" }
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
