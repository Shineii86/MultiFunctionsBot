/*CMD
  command: /forecast
  help: Get 3-day weather forecast
  need_reply: true
  auto_retry_time: 
  folder: Wᴇᴀᴛʜᴇʀ

  <<ANSWER
📅 Sᴇɴᴅ ᴀ ᴄɪᴛʏ ɴᴀᴍᴇ ꜰᴏʀ ᴀ 3-ᴅᴀʏ ꜰᴏʀᴇᴄᴀsᴛ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var city = encodeURIComponent(message.trim())
var url = "https://wttr.in/" + city + "?format=j1"

HTTP.get({
  url: url,
  success: "onForecastResult"
})
