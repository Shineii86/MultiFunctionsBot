/*CMD
  command: /joke
  help: Get a random joke
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
  url: "https://official-joke-api.appspot.com/random_joke",
  success: "onJokeResult"
})
