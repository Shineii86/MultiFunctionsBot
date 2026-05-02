/*CMD
  command: /exchange
  help: Convert currency (e.g. /exchange 100 USD to EUR)
  need_reply: false
  auto_retry_time: 
  folder: Exᴄʜᴀɴɢᴇ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /convert
  group: 
CMD*/

var input = params || message || ""

// Parse: "100 USD to EUR" or "100 USD EUR"
var match = input.match(/(\d+(?:\.\d+)?)\s+([a-zA-Z]{3})\s+(?:to\s+)?([a-zA-Z]{3})/i)

if (!match) {
  var adsFooter = Libs.Helpers.getAdsFooter()
  var caption = "<b>💱 Cᴜʀʀᴇɴᴄʏ Cᴏɴᴠᴇʀᴛᴇʀ</b>\n\n" +
    "<b>Uꜱᴀɢᴇ:</b> <code>/exchange 100 USD to EUR</code>\n\n" +
    "<b>Pᴏᴘᴜʟᴀʀ Cᴜʀʀᴇɴᴄɪᴇs:</b>\n" +
    "» USD, EUR, GBP, JPY, CNY, INR\n" +
    "» AUD, CAD, CHF, KRW, BRL, RUB" +
    adsFooter

  var buttons = [
    [
      { text: "🔄 Tʀʏ Aɢᴀɪɴ", callback_data: "/exchange" },
      { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
    ],
    [
      { text: "◁", callback_data: "/tools" },
      { text: "○", callback_data: "/start" },
      { text: "✕", callback_data: "/close" }
    ]
  ]

  Libs.Helpers.editOrSend({
    text: caption,
    reply_markup: { inline_keyboard: buttons }
  })
  return
}

var amount = parseFloat(match[1])
var from = match[2].toUpperCase()
var to = match[3].toUpperCase()

var url = "https://api.exchangerate-api.com/v4/latest/" + from

HTTP.get({
  url: url,
  success: "onExchangeResult"
})

User.setProperty("exchangeAmount", amount, "float")
User.setProperty("exchangeFrom", from, "string")
User.setProperty("exchangeTo", to, "string")
