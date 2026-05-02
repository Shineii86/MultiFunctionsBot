/*CMD
  command: confirmDelData
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Sᴇᴛᴛɪɴɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Clear user data
User.setProperty("lang", "en", "string")
User.setProperty("timezone", "IST", "string")
User.setProperty("afk", {}, "json")
User.setProperty("lastDaily", 0, "integer")
User.setProperty("dailyStreak", 0, "integer")
Bot.setProperty("reminders_" + user.telegramid, [], "json")

// Reset balance
var balance = Libs.ResourcesLib.userRes("balance")
balance.set(0)

Libs.Helpers.editOrSend({
  text: "<b>✅ Dᴀᴛᴀ Dᴇʟᴇᴛᴇᴅ</b>\n\n" +
    "Aʟʟ ʏᴏᴜʀ ᴅᴀᴛᴀ ʜᴀꜱ ʙᴇᴇɴ ʀᴇᴍᴏᴠᴇᴅ.\n" +
    "Yᴏᴜ ᴄᴀɴ ꜱᴛᴀʀᴛ ꜰʀᴇꜱʜ ɴᴏᴡ.",
  reply_markup: { inline_keyboard: [[{ text: "🔄 Rᴇꜱᴛᴀʀᴛ", callback_data: "/start" }]] }
})
