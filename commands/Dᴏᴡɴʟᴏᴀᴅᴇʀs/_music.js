/*CMD
  command: /music
  help: Search and play music from YouTube
  need_reply: true
  auto_retry_time: 
  folder: Dᴏᴡɴʟᴏᴀᴅᴇʀs

  <<ANSWER
🎵 Sᴇɴᴅ ᴍᴜꜱɪᴄ ɴᴀᴍᴇ ᴛᴏ ꜱᴇᴀʀᴄʜ.
E.g: Blinding Lights
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /play /song
  group: 
CMD*/

var query = encodeURIComponent(message.trim())
var adsFooter = Libs.Helpers.getAdsFooter()

// Use YouTube search
var searchUrl = "https://www.youtube.com/results?search_query=" + query

HTTP.get({
  url: "https://pipedapi.kavin.rocks/search?q=" + query + "&filter=music_songs",
  success: "onMusicSearchResult"
})

User.setProperty("musicQuery", message.trim(), "string")
Bot.sendMessage("<b>🎵 Sᴇᴀʀᴄʜɪɴɢ...</b>", { parse_mode: "HTML" })
