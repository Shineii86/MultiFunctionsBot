/*CMD
  command: /alert
  help: Set weather alerts for a city
  need_reply: true
  auto_retry_time: 
  folder: Wᴇᴀᴛʜᴇʀ

  <<ANSWER
🌡️ Sᴇɴᴅ ᴀʟᴇʀᴛ ɪɴ ꜰᴏʀᴍᴀᴛ:
<code>city threshold</code>
E.g: <code>Tokyo 35</code> (alert when temp > 35°C)
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /weatheralert
  group: 
CMD*/

var input = message.trim().split(/\s+/)
var adsFooter = Libs.Helpers.getAdsFooter()

if (input.length < 2) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ ꜰᴏʀᴍᴀᴛ!</b>\n\n<code>city threshold</code>", { parse_mode: "HTML" })
  return
}

var threshold = parseInt(input[input.length - 1])
var city = input.slice(0, -1).join(" ")

if (isNaN(threshold)) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ ᴛʜʀᴇꜱʜᴏʟᴅ!</b>", { parse_mode: "HTML" })
  return
}

var alerts = Bot.getProperty("weather_alerts_" + user.telegramid, [])
alerts.push({ city: city, threshold: threshold, active: true, time: Date.now() })
Bot.setProperty("weather_alerts_" + user.telegramid, alerts, "json")

Bot.sendMessage("<b>🌡️ Wᴇᴀᴛʜᴇʀ Aʟᴇʀᴛ Sᴇᴛ!</b>\n\n" +
  "<b>📍 Cɪᴛʏ:</b> " + city + "\n" +
  "<b>🌡️ Tʜʀᴇꜱʜᴏʟᴅ:</b> > " + threshold + "°C\n\n" +
  "Yᴏᴜ'ʟʟ ʙᴇ ɴᴏᴛɪꜰɪᴇᴅ ᴡʜᴇɴ ᴛᴇᴍᴘᴇʀᴀᴛᴜʀᴇ ᴇxᴄᴇᴇᴅꜱ ᴛʜʀᴇꜱʜᴏʟᴅ." +
  adsFooter, {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
})
