/*CMD
  command: onForecastResult
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

  if (data && data.weather && data.weather.length > 0) {
    var area = data.nearest_area && data.nearest_area[0]
    var cityName = area ? (area.areaName && area.areaName[0] ? area.areaName[0].value : "") : ""
    var country = area ? (area.country && area.country[0] ? area.country[0].value : "") : ""
    var location = cityName + (country ? ", " + country : "")

    var days = ["Sᴜɴᴅᴀʏ", "Mᴏɴᴅᴀʏ", "Tᴜᴇsᴅᴀʏ", "Wᴇᴅɴᴇsᴅᴀʏ", "Tʜᴜʀsᴅᴀʏ", "Fʀɪᴅᴀʏ", "Sᴀᴛᴜʀᴅᴀʏ"]

    var caption = "<b>📅 3-Dᴀʏ Fᴏʀᴇᴄᴀsᴛ ꜰᴏʀ " + location + "</b>\n\n"

    for (var i = 0; i < Math.min(3, data.weather.length); i++) {
      var day = data.weather[i]
      var date = new Date(day.date)
      var dayName = days[date.getDay()]
      var maxC = day.maxtempC || "N/A"
      var minC = day.mintempC || "N/A"
      var sunrise = day.astronomy && day.astronomy[0] ? day.astronomy[0].sunrise : ""
      var sunset = day.astronomy && day.astronomy[0] ? day.astronomy[0].sunset : ""

      var emoji = "📅"
      if (i === 0) emoji = "📌"
      else if (i === 1) emoji = "📆"
      else emoji = "🗓️"

      caption += emoji + " <b>" + dayName + " (" + day.date + ")</b>\n"
      caption += "   🌡️ " + minC + "°C ~ " + maxC + "°C\n"
      if (sunrise) caption += "   🌅 Sᴜɴʀɪsᴇ: " + sunrise + "\n"
      if (sunset) caption += "   🌇 Sᴜɴsᴇᴛ: " + sunset + "\n"

      // Hourly summary
      if (day.hourly) {
        var morning = day.hourly[2] || day.hourly[0]
        var afternoon = day.hourly[4] || day.hourly[3]
        var evening = day.hourly[6] || day.hourly[5]
        var mDesc = morning && morning.weatherDesc && morning.weatherDesc[0] ? morning.weatherDesc[0].value : ""
        var aDesc = afternoon && afternoon.weatherDesc && afternoon.weatherDesc[0] ? afternoon.weatherDesc[0].value : ""
        var eDesc = evening && evening.weatherDesc && evening.weatherDesc[0] ? evening.weatherDesc[0].value : ""
        if (mDesc || aDesc || eDesc) {
          caption += "   🌅 " + (mDesc || "?") + " | ☀️ " + (aDesc || "?") + " | 🌙 " + (eDesc || "?") + "\n"
        }
      }
      caption += "\n"
    }

    caption += adsFooter

    var buttons = [
      [
        { text: "🔄 Rᴇꜰʀᴇsʜ", callback_data: "/forecast" },
        { text: "☀️ Cᴜʀʀᴇɴᴛ", callback_data: "/weather" }
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
    Bot.sendMessage("<b>❌ Cɪᴛʏ ɴᴏᴛ ꜰᴏᴜɴᴅ.</b>", { parse_mode: "HTML" })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ ꜰᴇᴛᴄʜɪɴɢ ꜰᴏʀᴇᴄᴀsᴛ.</b>", { parse_mode: "HTML" })
}
