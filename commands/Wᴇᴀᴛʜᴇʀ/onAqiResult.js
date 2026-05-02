/*CMD
  command: onAqiResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Wᴇᴀᴛʜᴇʀ

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
  if (data && data.status === "ok" && data.data) {
    var d = data.data
    var aqi = d.aqi || "N/A"
    var city = d.city ? d.city.name : "Unknown"
    var time = d.time ? d.time.s : "N/A"

    var level, emoji, color
    if (aqi <= 50) { level = "Gᴏᴏᴅ"; emoji = "🟢" }
    else if (aqi <= 100) { level = "Mᴏᴅᴇʀᴀᴛᴇ"; emoji = "🟡" }
    else if (aqi <= 150) { level = "Uɴʜᴇᴀʟᴛʜʏ ꜰᴏʀ Sᴇɴsɪᴛɪᴠᴇ"; emoji = "🟠" }
    else if (aqi <= 200) { level = "Uɴʜᴇᴀʟᴛʜʏ"; emoji = "🔴" }
    else if (aqi <= 300) { level = "Vᴇʀʏ Uɴʜᴇᴀʟᴛʜʏ"; emoji = "🟣" }
    else { level = "Hᴀᴢᴀʀᴅᴏᴜs"; emoji = "⚫" }

    var iaqi = d.iaqi || {}
    var pm25 = iaqi.pm25 ? iaqi.pm25.v : "N/A"
    var pm10 = iaqi.pm10 ? iaqi.pm10.v : "N/A"
    var o3 = iaqi.o3 ? iaqi.o3.v : "N/A"
    var no2 = iaqi.no2 ? iaqi.no2.v : "N/A"
    var so2 = iaqi.so2 ? iaqi.so2.v : "N/A"
    var co = iaqi.co ? iaqi.co.v : "N/A"

    var caption = emoji + " <b>Aɪʀ Qᴜᴀʟɪᴛʏ Iɴᴅᴇx</b>\n\n" +
      "<b>📍 Cɪᴛʏ:</b> " + city + "\n" +
      "<b>📊 AQI:</b> " + aqi + " — " + level + "\n" +
      "<b>🕐 Tɪᴍᴇ:</b> " + time + "\n\n" +
      "<b>🧪 Pᴏʟʟᴜᴛᴀɴᴛs:</b>\n" +
      "» PM2.5: <b>" + pm25 + "</b>\n" +
      "» PM10: <b>" + pm10 + "</b>\n" +
      "» O₃: <b>" + o3 + "</b>\n" +
      "» NO₂: <b>" + no2 + "</b>\n" +
      "» SO₂: <b>" + so2 + "</b>\n" +
      "» CO: <b>" + co + "</b>" +
      adsFooter
  } else {
    var caption = "<b>❌ Cɪᴛʏ ɴᴏᴛ ꜰᴏᴜɴᴅ.</b>" + adsFooter
  }
} catch (e) {
  var caption = "<b>❌ Eʀʀᴏʀ ꜰᴇᴛᴄʜɪɴɢ AQI.</b>" + adsFooter
}

Bot.sendMessage(caption, {
  parse_mode: "HTML", disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "🔄 Rᴇꜰʀᴇsʜ", callback_data: "/airquality" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }], [{ text: "◁", callback_data: "/tools" }, { text: "○", callback_data: "/start" }, { text: "✕", callback_data: "/close" }]] }
})
