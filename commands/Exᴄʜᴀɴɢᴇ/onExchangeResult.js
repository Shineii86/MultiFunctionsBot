/*CMD
  command: onExchangeResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Exᴄʜᴀɴɢᴇ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var amount = User.getProperty("exchangeAmount") || 1
var from = User.getProperty("exchangeFrom") || "USD"
var to = User.getProperty("exchangeTo") || "EUR"

try {
  var data = JSON.parse(content)

  if (data && data.rates && data.rates[to]) {
    var rate = data.rates[to]
    var result = (amount * rate).toFixed(2)

    var caption = "<b>💱 Cᴜʀʀᴇɴᴄʏ Cᴏɴᴠᴇʀsɪᴏɴ</b>\n\n" +
      "<b>📥 Aᴍᴏᴜɴᴛ:</b> " + amount + " " + from + "\n" +
      "<b>📤 Rᴇsᴜʟᴛ:</b> <b>" + result + " " + to + "</b>\n\n" +
      "<b>📊 Rᴀᴛᴇ:</b> 1 " + from + " = " + rate.toFixed(4) + " " + to + "\n" +
      "<b>📅 Dᴀᴛᴇ:</b> " + (data.date || "Today") +
      adsFooter
  } else {
    var caption = "<b>❌ Cᴏɴᴠᴇʀsɪᴏɴ Fᴀɪʟᴇᴅ</b>\n\n" +
      "Invalid currency code or API error.\n" +
      "<b>Sᴜᴘᴘᴏʀᴛᴇᴅ:</b> USD, EUR, GBP, JPY, CNY, INR, etc." +
      adsFooter
  }
} catch (e) {
  var caption = "<b>❌ Eʀʀᴏʀ ꜰᴇᴛᴄʜɪɴɢ ᴇxᴄʜᴀɴɢᴇ ʀᴀᴛᴇs.</b>" + adsFooter
}

var buttons = [
  [
    { text: "🔄 Cᴏɴᴠᴇʀᴛ Aɢᴀɪɴ", callback_data: "/exchange" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ],
  [
    { text: "◁", callback_data: "/tools" },
    { text: "○", callback_data: "/start" },
    { text: "✕", callback_data: "/close" }
  ]
]

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: buttons }
})
