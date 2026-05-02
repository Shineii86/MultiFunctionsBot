/*CMD
  command: /clearreminders
  help: Clear all your reminders
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

Bot.sendMessage("<b>🗑️ Aʟʟ Rᴇᴍɪɴᴅᴇʀꜱ Cʟᴇᴀʀᴇᴅ!</b>\n\n" +
  "Yᴏᴜ ᴡɪʟʟ ɴᴏ ʟᴏɴɢᴇʀ ʀᴇᴄᴇɪᴠᴇ ᴀɴʏ ʀᴇᴍɪɴᴅᴇʀꜱ.", {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [[{ text: "⏰ Nᴇᴡ Rᴇᴍɪɴᴅᴇʀ", callback_data: "/remind" }]] }
})
