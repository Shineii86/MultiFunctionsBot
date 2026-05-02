/*CMD
  command: onText
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Tʀᴀɴsʟᴀᴛᴇ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var waitingForText = User.getProperty("waitingForText")
if (!waitingForText) {
  return
}

// Reset waiting flag
User.setProperty("waitingForText", false, "boolean")

var targetLang = User.getProperty("selectedLang")
if (!targetLang) {
  Bot.sendMessage(
    "<b>❌ Pʟᴇᴀsᴇ Sᴇʟᴇᴄᴛ A Lᴀɴɢᴜᴀɢᴇ Fɪʀsᴛ.</b>",
    {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🌐 Sᴇᴛ Lᴀɴɢᴜᴀɢᴇ", callback_data: "/translate" }],
          [
            { text: "◁", callback_data: "/tools" },
            { text: "○", callback_data: "/start" },
            { text: "✕", callback_data: "/close" }
          ]
        ]
      }
    }
  )
  return
}

var text = encodeURIComponent(message)
var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=" + targetLang + "&dt=t&q=" + text

HTTP.get({
  url: url,
  success: "onTranslateResult"
})
