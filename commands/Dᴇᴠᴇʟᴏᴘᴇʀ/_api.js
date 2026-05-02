/*CMD
  command: /api
  help: Make HTTP requests (API tester)
  need_reply: true
  auto_retry_time: 
  folder: Dᴇᴠᴇʟᴏᴘᴇʀ

  <<ANSWER
🌐 Sᴇɴᴅ HTTP ʀᴇQᴜᴇꜱᴛ:
<code>GET https://api.example.com</code>
<code>POST https://api.example.com {"key":"value"}</code>
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /http /curl
  group: 
CMD*/

var input = message.trim()
var adsFooter = Libs.Helpers.getAdsFooter()

var method = "GET"
var url = input
var body = null

// Parse method and body
var match = input.match(/^(GET|POST|PUT|DELETE|PATCH)\s+(\S+)\s*(.*)?$/i)
if (match) {
  method = match[1].toUpperCase()
  url = match[2]
  if (match[3]) {
    try { body = JSON.parse(match[3]) } catch (e) { body = match[3] }
  }
}

if (!url.match(/^https?:\/\//)) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ URL.</b>", { parse_mode: "HTML" })
  return
}

Bot.sendMessage("<b>⏳ Sᴇɴᴅɪɴɢ " + method + " ʀᴇQᴜᴇꜱᴛ...</b>", { parse_mode: "HTML" })

var opts = { url: url, success: "onApiResult" }
if (body && method !== "GET") {
  opts.headers = { "Content-Type": "application/json" }
  opts.body = typeof body === "string" ? body : JSON.stringify(body)
}

if (method === "GET") {
  HTTP.get(opts)
} else {
  HTTP.post(opts)
}

User.setProperty("apiMethod", method, "string")
User.setProperty("apiUrl", url, "string")
