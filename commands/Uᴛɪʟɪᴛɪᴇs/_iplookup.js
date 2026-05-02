/*CMD
  command: /iplookup
  help: Look up IP address information
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
🌐 Sᴇɴᴅ ᴀɴ Iᴘ ᴀᴅᴅʀᴇss ᴛᴏ ʟᴏᴏᴋ ᴜᴘ (ᴇ.ɢ. 8.8.8.8)
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ip
  group: 
CMD*/

var ip = message.trim()
var url = "http://ip-api.com/json/" + ip + "?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,timezone,isp,org,as,query"

HTTP.get({
  url: url,
  success: "onIpResult"
})
