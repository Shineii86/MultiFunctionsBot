/*CMD
  command: /bitly
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Sʜᴏʀᴛᴇɴᴇʀ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var token = Bot.getProperty("bitly_token")

if (!token) {
  Bot.sendMessage(
    "<b>⚠️ Bɪᴛʟʏ Aᴘɪ ᴛᴏᴋᴇɴ ɪs ɴᴏᴛ ᴄᴏɴꜰɪɢᴜʀᴇᴅ.</b>\n\nPʟᴇᴀsᴇ ᴀsᴋ ᴛʜᴇ ᴀᴅᴍɪɴ ᴛᴏ sᴇᴛ ɪᴛ ᴜsɪɴɢ:\n<code>Bot.setProperty(\"bitly_token\", \"YOUR_TOKEN\", \"string\")</code>",
    { parse_mode: "HTML" }
  )
  return
}

User.setProperty("longlink", message, "string")

HTTP.post({
  url: "https://api-ssl.bitly.com/v4/shorten",
  headers: {
    Authorization: "Bearer " + token,
    "Content-type": "application/json"
  },
  body: JSON.stringify({ long_url: message }),
  success: "/bitlyShort"
})
