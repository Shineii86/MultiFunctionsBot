/*CMD
  command: onAiChatResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Aɪ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var input = User.getProperty("ai_last_input", "")

try {
  var response = content.trim()

  if (!response || response.length < 2) {
    response = "I couldn't generate a response. Try rephrasing your question."
  }

  // Store assistant response in history
  var history = User.getProperty("ai_history", [])
  history.push({ role: "assistant", content: response })
  if (history.length > 10) history = history.slice(-10)
  User.setProperty("ai_history", history, "json")

  // Truncate if too long
  if (response.length > 3000) response = response.substring(0, 3000) + "\n..."

  var caption = "<b>🤖 Aɪ Rᴇꜱᴘᴏɴꜱᴇ</b>\n\n" +
    response + "\n\n" +
    "<i>💡 Sᴇɴᴅ ᴀɴᴏᴛʜᴇʀ ᴍᴇꜱꜱᴀɢᴇ ᴛᴏ ᴄᴏɴᴛɪɴᴜᴇ ᴄʜᴀᴛ.</i>" +
    adsFooter

  var buttons = [
    [
      { text: "🔄 Nᴇᴡ Cʜᴀᴛ", callback_data: "aiReset" },
      { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
    ],
    [
      { text: "◁", callback_data: "/tools" },
      { text: "○", callback_data: "/start" },
      { text: "✕", callback_data: "/close" }
    ]
  ]

  Bot.sendMessage(caption, {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: buttons }
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Aɪ ᴇʀʀᴏʀ.</b>\n\nTʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ.", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/ai" }]] }
  })
}
