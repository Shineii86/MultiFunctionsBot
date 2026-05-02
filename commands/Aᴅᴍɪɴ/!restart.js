/*CMD
  command: !restart
  help: Restart bot for all users
  need_reply: false
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.sendMessage("<b>🔄 Rᴇsᴛᴀʀᴛɪɴɢ Bᴏᴛ Fᴏʀ Aʟʟ Usᴇʀs...</b>", { parse_mode: "HTML" })
Bot.runAll({ command: "/start" })
