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

User.setProperty("longlink", message, "string")
var token = "aa42e205d8c25dccb5fbe5e99b8049340e01dfc2"
var dlink = message
var url = "https://api-ssl.bitly.com/v4/shorten"

HTTP.post({
  url: url,
  headers: {
    Authorization: "Bearer " + token,
    "Content-type": "application/json"
  },

  body: JSON.stringify({ long_url: dlink }),
  success: "/bitlyShort"
})

