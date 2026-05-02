/*CMD
  command: /counting
  help: Group counting game - count together!
  need_reply: false
  auto_retry_time: 
  folder: Gᴀᴍᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /count
  group: 
CMD*/

var chatId = request.chat ? request.chat.id : user.telegramid
var count = Bot.getProperty("count_" + chatId, 0)
var lastUser = Bot.getProperty("count_user_" + chatId, 0)
var highScore = Bot.getProperty("count_high_" + chatId, 0)

var caption = "<b>🔢 Cᴏᴜɴᴛɪɴɢ Gᴀᴍᴇ</b>\n\n" +
  "<b>📊 Cᴜʀʀᴇɴᴛ:</b> " + count + "\n" +
  "<b>🏆 Hɪɢʜ Sᴄᴏʀᴇ:</b> " + highScore + "\n\n" +
  "<b>Rᴜʟᴇꜱ:</b>\n" +
  "├ Eᴠᴇʀʏᴏɴᴇ ᴛᴀᴋᴇꜱ ᴛᴜʀɴꜱ ᴄᴏᴜɴᴛɪɴɢ\n" +
  "├ Sᴇɴᴅ ᴛʜᴇ ɴᴇxᴛ ɴᴜᴍʙᴇʀ ɪɴ ꜱᴇQᴜᴇɴᴄᴇ\n" +
  "├ Sᴀᴍᴇ ᴜꜱᴇʀ ᴄᴀɴ'ᴛ ᴄᴏᴜɴᴛ ᴛᴡɪᴄᴇ ɪɴ ᴀ ʀᴏᴡ\n" +
  "└ Wʀᴏɴɢ ɴᴜᴍʙᴇʀ ʀᴇꜱᴇᴛꜱ ᴛᴏ 0!\n\n" +
  "Sᴛᴀʀᴛ ᴄᴏᴜɴᴛɪɴɢ ꜰʀᴏᴍ 1!"

var buttons = [
  [
    { text: "🔄 Rᴇꜱᴇᴛ", callback_data: "resetCount" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
