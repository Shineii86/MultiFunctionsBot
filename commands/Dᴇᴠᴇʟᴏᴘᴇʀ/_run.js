/*CMD
  command: /run
  help: Execute code snippets
  need_reply: true
  auto_retry_time: 
  folder: Dᴇᴠᴇʟᴏᴘᴇʀ

  <<ANSWER
💻 Sᴇɴᴅ ᴄᴏᴅᴇ ᴛᴏ ʀᴜɴ.
Fᴏʀᴍᴀᴛ: <code>language\ncode</code>
Sᴜᴘᴘᴏʀᴛᴇᴅ: python, javascript, nodejs, go, rust, bash, ruby, php
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /exec /code
  group: 
CMD*/

var input = message.trim()
var adsFooter = Libs.Helpers.getAdsFooter()

// Parse language and code
var lines = input.split("\n")
var lang = "javascript"
var code = input

var langMap = {
  "python": "python3", "py": "python3", "javascript": "node", "js": "node",
  "nodejs": "node", "node": "node", "go": "go", "golang": "go",
  "rust": "rust", "bash": "bash", "sh": "bash", "ruby": "ruby",
  "rb": "ruby", "php": "php", "java": "java", "c": "c", "cpp": "cpp"
}

// Check if first line is a language specifier
var firstLine = lines[0].trim().toLowerCase()
if (langMap[firstLine]) {
  lang = firstLine
  code = lines.slice(1).join("\n")
}

if (!code.trim()) {
  Bot.sendMessage("<b>❌ Nᴏ ᴄᴏᴅᴇ ᴘʀᴏᴠɪᴅᴇᴅ.</b>", { parse_mode: "HTML" })
  return
}

// Use Piston API for code execution
HTTP.post({
  url: "https://emkc.org/api/v2/piston/execute",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    language: langMap[lang] || lang,
    version: "*",
    files: [{ content: code }]
  }),
  success: "onRunResult"
})

User.setProperty("runLang", lang, "string")
Bot.sendMessage("<b>⏳ Exᴇᴄᴜᴛɪɴɢ " + lang + " ᴄᴏᴅᴇ...</b>", { parse_mode: "HTML" })
