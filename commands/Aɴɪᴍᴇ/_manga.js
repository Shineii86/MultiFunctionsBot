/*CMD
  command: /manga
  help: Search for manga information
  need_reply: true
  auto_retry_time: 
  folder: Aɴɪᴍᴇ

  <<ANSWER
📖 Sᴇɴᴅ ᴀ ᴍᴀɴɢᴀ ɴᴀᴍᴇ ᴛᴏ sᴇᴀʀᴄʜ (ᴇ.ɢ. Berserk, Vagabond)
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var query = encodeURIComponent(message.trim())
var url = "https://api.jikan.moe/v4/manga?q=" + query + "&limit=1"

HTTP.get({
  url: url,
  success: "onMangaResult"
})
