/*CMD
  command: /github
  help: Look up a GitHub user profile
  need_reply: true
  auto_retry_time: 
  folder: Gɪᴛʜᴜʙ

  <<ANSWER
🐙 Sᴇɴᴅ ᴀ Gɪᴛʜᴜʙ ᴜsᴇʀɴᴀᴍᴇ ᴛᴏ ʟᴏᴏᴋ ᴜᴘ (ᴇ.ɢ. Shineii86)
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /gh
  group: 
CMD*/

var username = encodeURIComponent(message.trim().replace("@", ""))
var url = "https://api.github.com/users/" + username

HTTP.get({
  url: url,
  success: "onGithubResult"
})
