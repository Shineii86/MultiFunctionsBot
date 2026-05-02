/*CMD
  command: /wiki
  help: Search Wikipedia articles
  need_reply: true
  auto_retry_time: 
  folder: Wɪᴋɪᴘᴇᴅɪᴀ

  <<ANSWER
📚 Sᴇɴᴅ ᴀ ᴛᴏᴘɪᴄ ᴛᴏ sᴇᴀʀᴄʜ Wɪᴋɪᴘᴇᴅɪᴀ (ᴇ.ɢ. Quantum Physics)
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /wikipedia
  group: 
CMD*/

var query = encodeURIComponent(message.trim())
var url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + query

HTTP.get({
  url: url,
  success: "onWikiResult"
})
