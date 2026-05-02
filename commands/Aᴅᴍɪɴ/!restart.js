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

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

Bot.sendMessage("<b>🔄 Rᴇꜱᴛᴀʀᴛɪɴɢ Bᴏᴛ Fᴏʀ Aʟʟ Uꜱᴇʀꜱ...</b>", { parse_mode: "HTML" })
Bot.runAll({ command: "/start" })
