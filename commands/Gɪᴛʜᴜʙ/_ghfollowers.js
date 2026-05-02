/*CMD
  command: /ghfollowers
  help: List GitHub user's followers
  need_reply: true
  auto_retry_time: 
  folder: Gɪᴛʜᴜʙ

  <<ANSWER
👥 Sᴇɴᴅ ᴀ Gɪᴛʜᴜʙ ᴜsᴇʀɴᴀᴍᴇ ᴛᴏ ʟɪsᴛ ꜰᴏʟʟᴏᴡᴇʀs.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var username = encodeURIComponent(message.trim().replace("@", ""))
var url = "https://api.github.com/users/" + username + "/followers?per_page=15"

HTTP.get({
  url: url,
  success: "onGhFollowersResult"
})
