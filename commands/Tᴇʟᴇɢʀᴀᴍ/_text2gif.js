/*CMD
  command: /text2gif
  help: Convert text to animated GIF
  need_reply: true
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER
✍️ Sᴇɴᴅ ᴛʜᴇ ᴛᴇxᴛ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ɪɴᴛᴏ ᴀ ɢɪꜰ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /gif
  group: 
CMD*/

var text = encodeURIComponent(message.trim())
if (!text) {
  Bot.sendMessage("<b>❌ Pʟᴇᴀsᴇ sᴇɴᴅ sᴏᴍᴇ ᴛᴇxᴛ.</b>", { parse_mode: "HTML" })
  return
}

// Use text-to-gif API
var url = "https://latex.codecogs.com/gif.latex?" + text

Api.sendAnimation({
  chat_id: user.telegramid,
  animation: url,
  caption: "<b>🎬 Tᴇxᴛ Tᴏ Gɪꜰ</b>\n\n<b>📝 Tᴇxᴛ:</b> " + message,
  parse_mode: "HTML"
})
