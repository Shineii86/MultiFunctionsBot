/*CMD
  command: onIpResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

try {
  var data = JSON.parse(content)

  if (data.status === "success") {
    var caption = "<b>🌐 IP Lᴏᴏᴋᴜᴘ Rᴇsᴜʟᴛ</b>\n\n" +
      "<b>📡 IP:</b> <code>" + data.query + "</code>\n" +
      "<b>🌍 Cᴏᴜɴᴛʀʏ:</b> " + data.country + " (" + data.countryCode + ")\n" +
      "<b>📍 Rᴇɢɪᴏɴ:</b> " + data.regionName + "\n" +
      "<b>🏙️ Cɪᴛʏ:</b> " + data.city + "\n" +
      "<b>📮 Zɪᴘ:</b> " + (data.zip || "N/A") + "\n" +
      "<b>📌 Cᴏᴏʀᴅs:</b> " + data.lat + ", " + data.lon + "\n" +
      "<b>🕐 Tɪᴍᴇᴢᴏɴᴇ:</b> " + data.timezone + "\n" +
      "<b>🏢 ISP:</b> " + data.isp + "\n" +
      "<b>🏗️ Oʀɢ:</b> " + (data.org || "N/A") + "\n" +
      "<b>🔗 AS:</b> " + (data.as || "N/A") +
      adsFooter
  } else {
    var caption = "<b>❌ Lᴏᴏᴋᴜᴘ Fᴀɪʟᴇᴅ</b>\n\n" +
      "Invalid IP address or API error." +
      adsFooter
  }

  var buttons = [
    [
      { text: "🔄 Lᴏᴏᴋ Uᴘ Aɢᴀɪɴ", callback_data: "/iplookup" },
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
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ Pʀᴏᴄᴇssɪɴɢ Rᴇsᴜʟᴛ.</b>", { parse_mode: "HTML" })
}
