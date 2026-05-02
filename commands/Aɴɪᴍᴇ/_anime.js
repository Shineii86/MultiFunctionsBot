/*CMD
  command: /anime
  help: Search for anime information
  need_reply: true
  auto_retry_time: 
  folder: Aɴɪᴍᴇ

  <<ANSWER
🎌 Sᴇɴᴅ ᴀɴ ᴀɴɪᴍᴇ ɴᴀᴍᴇ ᴛᴏ sᴇᴀʀᴄʜ (ᴇ.ɢ. Naruto, One Piece)
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var query = encodeURIComponent(message.trim())
var url = "https://api.jikan.moe/v4/anime?q=" + query + "&limit=1"

HTTP.get({
  url: url,
  success: "onAnimeResult"
})
