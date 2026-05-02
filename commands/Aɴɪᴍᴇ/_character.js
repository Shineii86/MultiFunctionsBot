/*CMD
  command: /character
  help: Search for anime/manga character info
  need_reply: true
  auto_retry_time: 
  folder: Aɴɪᴍᴇ

  <<ANSWER
👤 Sᴇɴᴅ ᴀ ᴄʜᴀʀᴀᴄᴛᴇʀ ɴᴀᴍᴇ ᴛᴏ sᴇᴀʀᴄʜ (ᴇ.ɢ. Levi, Gojo)
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /char
  group: 
CMD*/

var query = encodeURIComponent(message.trim())
var url = "https://api.jikan.moe/v4/characters?q=" + query + "&limit=1"

HTTP.get({
  url: url,
  success: "onCharResult"
})
