/*CMD
  command: /ai
  help: AI chat with multi-turn conversation
  need_reply: true
  auto_retry_time: 
  folder: Aɪ

  <<ANSWER
🤖 Sᴇɴᴅ ʏᴏᴜʀ ᴍᴇꜱꜱᴀɢᴇ ᴛᴏ ᴄʜᴀᴛ ᴡɪᴛʜ Aɪ.
Sᴜᴘᴘᴏʀᴛꜱ ᴍᴜʟᴛɪ-ᴛᴜʀɴ ᴄᴏɴᴠᴇʀꜱᴀᴛɪᴏɴ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /gpt /chat
  group: 
CMD*/

var input = message.trim()
var adsFooter = Libs.Helpers.getAdsFooter()

if (!input || input.length < 2) {
  Bot.sendMessage("<b>❌ Pʟᴇᴀꜱᴇ 걄ᴇɴᴅ ᴀ ᴍᴇꜱꜱᴀɢᴇ.</b>", { parse_mode: "HTML" })
  return
}

// Store conversation history
var history = User.getProperty("ai_history", [])
history.push({ role: "user", content: input })

// Keep last 10 messages
if (history.length > 10) history = history.slice(-10)
User.setProperty("ai_history", history, "json")

// Use Pollinations.ai text API
var prompt = encodeURIComponent(input)
var systemContext = encodeURIComponent("You are MultiFunctionsBot, a helpful Telegram assistant. Keep responses concise and useful. Use emojis naturally. Be friendly but direct.")

HTTP.get({
  url: "https://text.pollinations.ai/" + prompt + "?system=" + systemContext + "&model=openai&json=false",
  success: "onAiChatResult"
})

User.setProperty("ai_last_input", input, "string")
Bot.sendMessage("<b>🤖 Tʜɪɴᴋɪɴɢ...</b>", { parse_mode: "HTML" })
