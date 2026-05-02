/*CMD
  command: clearReminders
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Rᴇᴍɪɴᴅᴇʀs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.setProperty("reminders_" + user.telegramid, [], "json")
Bot.sendMessage("<b>✅ Aʟʟ ʀᴇᴍɪɴᴅᴇʀs ᴄʟᴇᴀʀᴇᴅ.</b>", { parse_mode: "HTML" })
