/*CMD
  command: /crypto
  help: Get live cryptocurrency prices
  need_reply: false
  auto_retry_time: 
  folder: Cʀʏᴘᴛᴏ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /price /btc
  group: 
CMD*/

var query = (params || "").trim().toUpperCase() || "BTC"
var adsFooter = Libs.Helpers.getAdsFooter()

var coinMap = {
  "BTC": "bitcoin", "ETH": "ethereum", "BNB": "binancecoin",
  "SOL": "solana", "XRP": "ripple", "DOGE": "dogecoin",
  "ADA": "cardano", "AVAX": "avalanche-2", "DOT": "polkadot",
  "MATIC": "matic-network", "LINK": "chainlink", "UNI": "uniswap",
  "SHIB": "shiba-inu", "LTC": "litecoin", "ATOM": "cosmos",
  "NEAR": "near", "FTM": "fantom", "ARB": "arbitrum"
}

var coinId = coinMap[query] || query.toLowerCase()

HTTP.get({
  url: "https://api.coingecko.com/api/v3/simple/price?ids=" + coinId + "&vs_currencies=usd&include_24hr_change=true&include_market_cap=true",
  success: "onCryptoResult"
})

User.setProperty("cryptoQuery", query, "string")
