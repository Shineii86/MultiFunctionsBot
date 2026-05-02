/*CMD
  command: /stock
  help: Get stock market prices
  need_reply: false
  auto_retry_time: 
  folder: Sᴛᴏᴄᴋ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /stocks /market
  group: 
CMD*/

var symbol = (params || "").trim().toUpperCase() || "AAPL"
var adsFooter = Libs.Helpers.getAdsFooter()

HTTP.get({
  url: "https://query1.finance.yahoo.com/v8/finance/chart/" + symbol + "?interval=1d&range=5d",
  success: "onStockResult"
})

User.setProperty("stockSymbol", symbol, "string")
