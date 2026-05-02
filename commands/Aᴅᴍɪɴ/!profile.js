/*CMD
  command: !profile
  help: View admin profile
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

var firstName = user && user.first_name
  ? "<a href='tg://user?id=" + user.telegramid + "'>" + user.first_name + "</a>"
  : "Uɴᴋɴᴏᴡɴ"

var caption = "<b>👤 Aᴅᴍɪɴ Pʀᴏғɪʟᴇ</b>\n\n" +
  "<b>👤 Fɪʀsᴛ Nᴀᴍᴇ:</b> " + firstName + "\n" +
  "<b>👥 Lᴀsᴛ Nᴀᴍᴇ:</b> " + (user.last_name || "Uɴᴋɴᴏᴡɴ") + "\n" +
  "<b>🌐 Usᴇʀɴᴀᴍᴇ:</b> " + (user.username ? "@" + user.username : "Uɴᴋɴᴏᴡɴ") + "\n" +
  "<b>🏆 Pʀᴇᴍɪᴜᴍ:</b> " + (user.is_premium ? "Yᴇs" : "Nᴏ") + "\n" +
  "<b>🏳️ Lᴀɴɢᴜᴀɢᴇ:</b> " + (user.language_code || "Uɴᴋɴᴏᴡɴ") + "\n" +
  "<b>🆔 Usᴇʀ Iᴅ:</b> <code>" + user.telegramid + "</code>\n" +
  "<b>💁 Pʀᴏғɪʟᴇ:</b> <a href='tg://user?id=" + user.telegramid + "'>Vɪᴇᴡ Pʀᴏғɪʟᴇ</a>"

var buttons = [
  [{ text: "⚠️ Dᴀɴɢᴇʀ", callback_data: "!logout" }],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "!master" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
