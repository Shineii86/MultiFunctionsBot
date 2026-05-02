/*CMD
  command: /ghrepos
  help: List GitHub user's repositories
  need_reply: true
  auto_retry_time: 
  folder: Gɪᴛʜᴜʙ

  <<ANSWER
📦 Sᴇɴᴅ ᴀ Gɪᴛʜᴜʙ ᴜsᴇʀɴᴀᴍᴇ ᴛᴏ ʟɪsᴛ ᴛʜᴇɪʀ ʀᴇᴘᴏs (ᴇ.ɢ. Shineii86)
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /repos
  group: 
CMD*/

var username = encodeURIComponent(message.trim().replace("@", ""))
var url = "https://api.github.com/users/" + username + "/repos?sort=updated&per_page=10"

HTTP.get({
  url: url,
  success: "onGhReposResult"
})
