/*CMD
  command: /ghsearch
  help: Search GitHub repositories
  need_reply: true
  auto_retry_time: 
  folder: Gɪᴛʜᴜʙ

  <<ANSWER
🔍 Sᴇɴᴅ ᴀ sᴇᴀʀᴄʜ ᴛᴇʀᴍ ᴛᴏ ꜰɪɴᴅ Gɪᴛʜᴜʙ ʀᴇᴘᴏs (ᴇ.ɢ. telegram bot)
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /repossearch
  group: 
CMD*/

var query = encodeURIComponent(message.trim())
var url = "https://api.github.com/search/repositories?q=" + query + "&sort=stars&per_page=8"

HTTP.get({
  url: url,
  success: "onGhSearchResult"
})
