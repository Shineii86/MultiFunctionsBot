/*CMD
  command: /advice
  help: Get random life advice
  need_reply: false
  auto_retry_time: 
  folder: Fᴜɴ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

HTTP.get({
  url: "https://api.adviceslip.com/advice",
  success: "onAdviceResult"
})
