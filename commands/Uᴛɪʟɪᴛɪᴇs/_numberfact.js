/*CMD
  command: /numberfact
  help: Get interesting facts about a number
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
🔢 Sᴇɴᴅ ᴀ ɴᴜᴍʙᴇʀ ᴛᴏ ɢᴇᴛ ᴀɴ ɪɴᴛᴇʀᴇsᴛɪɴɢ ꜰᴀᴄᴛ (ᴇ.ɢ. 42)
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /numfact
  group: 
CMD*/

var num = message.trim()
var url = "http://numbersapi.com/" + num + "/trivia"

HTTP.get({
  url: url,
  success: "onNumberFact"
})
