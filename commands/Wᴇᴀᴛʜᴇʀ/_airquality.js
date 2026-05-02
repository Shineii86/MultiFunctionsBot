/*CMD
  command: /airquality
  help: Check air quality for a city
  need_reply: true
  auto_retry_time: 
  folder: Wᴇᴀᴛʜᴇʀ

  <<ANSWER
🌫️ Sᴇɴᴅ ᴀ ᴄɪᴛʏ ɴᴀᴍᴇ ᴛᴏ ᴄʜᴇᴄᴋ ᴀɪʀ ǫᴜᴀʟɪᴛʏ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /aqi
  group: 
CMD*/

var city = encodeURIComponent(message.trim())
HTTP.get({
  url: "https://api.waqi.info/feed/" + city + "/?token=demo",
  success: "onAqiResult"
})
