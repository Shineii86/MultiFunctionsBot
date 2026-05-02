/*CMD
  command: onWeatherResult
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

  if (data && data.current_condition && data.current_condition.length > 0) {
    var cur = data.current_condition[0]
    var area = data.nearest_area && data.nearest_area[0]
    var cityName = area ? (area.areaName && area.areaName[0] ? area.areaName[0].value : "") : ""
    var region = area ? (area.region && area.region[0] ? area.region[0].value : "") : ""
    var country = area ? (area.country && area.country[0] ? area.country[0].value : "") : ""

    var tempC = cur.temp_C || "N/A"
    var tempF = cur.temp_F || "N/A"
    var feelsC = cur.FeelsLikeC || "N/A"
    var feelsF = cur.FeelsLikeF || "N/A"
    var humidity = cur.humidity || "N/A"
    var windKmph = cur.windspeedKmph || "N/A"
    var windDir = cur.winddir16Point || ""
    var visibility = cur.visibility || "N/A"
    var uvIndex = cur.uvIndex || "N/A"
    var cloudCover = cur.cloudcover || "N/A"
    var pressure = cur.pressure || "N/A"
    var desc = cur.weatherDesc && cur.weatherDesc[0] ? cur.weatherDesc[0].value : "N/A"

    // Weather emoji
    var weatherEmoji = "🌤️"
    var descLower = desc.toLowerCase()
    if (descLower.indexOf("sun") !== -1 || descLower.indexOf("clear") !== -1) weatherEmoji = "☀️"
    else if (descLower.indexOf("cloud") !== -1) weatherEmoji = "☁️"
    else if (descLower.indexOf("rain") !== -1) weatherEmoji = "🌧️"
    else if (descLower.indexOf("snow") !== -1) weatherEmoji = "❄️"
    else if (descLower.indexOf("thunder") !== -1) weatherEmoji = "⛈️"
    else if (descLower.indexOf("fog") !== -1 || descLower.indexOf("mist") !== -1) weatherEmoji = "🌫️"
    else if (descLower.indexOf("wind") !== -1) weatherEmoji = "💨"

    // UV level
    var uvLevel = ""
    var uv = parseInt(uvIndex)
    if (uv <= 2) uvLevel = "Lᴏᴡ"
    else if (uv <= 5) uvLevel = "Mᴏᴅᴇʀᴀᴛᴇ"
    else if (uv <= 7) uvLevel = "Hɪɢʜ"
    else if (uv <= 10) uvLevel = "Vᴇʀʏ Hɪɢʜ"
    else uvLevel = "Exᴛʀᴇᴍᴇ"

    var location = cityName
    if (region) location += ", " + region
    if (country) location += ", " + country

    // Forecast
    var forecast = ""
    if (data.weather) {
      var days = ["Sᴜɴ", "Mᴏɴ", "Tᴜᴇ", "Wᴇᴅ", "Tʜᴜ", "Fʀɪ", "Sᴀᴛ"]
      for (var i = 0; i < Math.min(3, data.weather.length); i++) {
        var day = data.weather[i]
        var date = new Date(day.date)
        var dayName = days[date.getDay()]
        var maxC = day.maxtempC || "N/A"
        var minC = day.mintempC || "N/A"
        var dayDesc = day.hourly && day.hourly[4] && day.hourly[4].weatherDesc && day.hourly[4].weatherDesc[0] ? day.hourly[4].weatherDesc[0].value : ""
        forecast += "» " + dayName + ": " + minC + "°C ~ " + maxC + "°C"
        if (dayDesc) forecast += " (" + dayDesc + ")"
        forecast += "\n"
      }
    }

    var caption = weatherEmoji + " <b>Wᴇᴀᴛʜᴇʀ ɪɴ " + location + "</b>\n\n" +
      "<b>🌡️ Tᴇᴍᴘᴇʀᴀᴛᴜʀᴇ:</b> " + tempC + "°C / " + tempF + "°F\n" +
      "<b>🤔 Fᴇᴇʟs Lɪᴋᴇ:</b> " + feelsC + "°C / " + feelsF + "°F\n" +
      "<b>☁️ Cᴏɴᴅɪᴛɪᴏɴ:</b> " + desc + "\n" +
      "<b>💧 Hᴜᴍɪᴅɪᴛʏ:</b> " + humidity + "%\n" +
      "<b>💨 Wɪɴᴅ:</b> " + windKmph + " ᴋᴍ/ʜ " + windDir + "\n" +
      "<b>👁️ Vɪsɪʙɪʟɪᴛʏ:</b> " + visibility + " ᴋᴍ\n" +
      "<b>☀️ UV Iɴᴅᴇx:</b> " + uvIndex + " (" + uvLevel + ")\n" +
      "<b>☁️ Cʟᴏᴜᴅ Cᴏᴠᴇʀ:</b> " + cloudCover + "%\n" +
      "<b>📊 Pʀᴇssᴜʀᴇ:</b> " + pressure + " ᴍʙ\n"

    if (forecast) {
      caption += "\n<b>📅 Fᴏʀᴇᴄᴀsᴛ:</b>\n" + forecast
    }

    caption += adsFooter

    var buttons = [
      [
        { text: "🔄 Rᴇꜰʀᴇsʜ", callback_data: "/weather" },
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
  } else {
    Bot.sendMessage("<b>❌ Cɪᴛʏ ɴᴏᴛ ꜰᴏᴜɴᴅ.</b> Tʀʏ ᴀ ᴅɪꜰꜰᴇʀᴇɴᴛ ɴᴀᴍᴇ.", {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/weather" }]]
      }
    })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ ꜰᴇᴛᴄʜɪɴɢ ᴡᴇᴀᴛʜᴇʀ ᴅᴀᴛᴀ.</b>", { parse_mode: "HTML" })
}
