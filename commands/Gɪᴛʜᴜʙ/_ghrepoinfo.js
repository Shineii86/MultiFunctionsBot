/*CMD
  command: /ghrepoinfo
  help: Get detailed info about a GitHub repo
  need_reply: true
  auto_retry_time: 
  folder: Gɪᴛʜᴜʙ

  <<ANSWER
📂 Sᴇɴᴅ ᴛʜᴇ ʀᴇᴘᴏ ᴘᴀᴛʜ (ᴇ.ɢ. Shineii86/MultiFunctionsBot)
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /repoinfo /ri
  group: 
CMD*/

var repo = message.trim().replace("https://github.com/", "").replace(/\/$/, "")
var url = "https://api.github.com/repos/" + repo

HTTP.get({
  url: url,
  success: "onGhRepoInfoResult"
})
