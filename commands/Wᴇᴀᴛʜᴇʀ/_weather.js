/*CMD
  command: /weather
  help: Get current weather for any city
  need_reply: true
  auto_retry_time: 
  folder: Wᴇᴀᴛʜᴇʀ

  <<ANSWER
🌤️ Sᴇɴᴅ ᴀ ᴄɪᴛʏ ɴᴀᴍᴇ ᴛᴏ ɢᴇᴛ ᴡᴇᴀᴛʜᴇʀ (ᴇ.ɢ. Tokyo, London, New York)
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /wt
  group: 
CMD*/

var city = encodeURIComponent(message.trim())
var url = "https://wttr.in/" + city + "?format=j1"

HTTP.get({
  url: url,
  success: "onWeatherResult"
})
