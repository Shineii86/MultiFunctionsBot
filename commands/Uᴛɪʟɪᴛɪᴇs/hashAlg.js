/*CMD
  command: hashAlg
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
📝 Sᴇɴᴅ ᴛʜᴇ ᴛᴇxᴛ ᴛᴏ ɢᴇɴᴇʀᴀᴛᴇ ᴛʜᴇ ʜᴀsʜ ꜰᴏʀ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var alg = params || "md5"

// Simple hash implementations for BB platform
function md5(str) {
  // Use API for hashing
  return null
}

// Use online API for hashing
var hashUrl = "https://api.hashify.net/hash/" + alg + "/hex?value=" + encodeURIComponent(message)

HTTP.get({
  url: hashUrl,
  success: "onHashResult"
})

// Store algorithm name for result display
User.setProperty("hashAlg", alg, "string")
