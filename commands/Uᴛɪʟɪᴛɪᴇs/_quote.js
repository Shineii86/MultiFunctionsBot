/*CMD
  command: /quote
  help: Get a random inspirational quote
  need_reply: false
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /randomquote
  group: 
CMD*/

HTTP.get({
  url: "https://api.quotable.io/random",
  success: "onQuoteResult"
})
