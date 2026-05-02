/*CMD
  command: onTranslateResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Tʀᴀɴsʟᴀᴛᴇ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var data = JSON.parse(content)

if (data[0] && data[0][0]) {
  var translatedText = data[0][0][0]
  Bot.sendMessage("✅ Translated Text: \n" + translatedText)
} else {
  Bot.sendMessage("❌ Translation failed.")
}

