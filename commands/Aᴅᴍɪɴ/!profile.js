/*CMD
  command: !profile
  help: 
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

// Define All Dynamic Message Values
var firstName =
  user && user.first_name
    ? `<a href='tg://user?id=${user.telegramid}'>${user.first_name}</a>`
    : "Uɴᴋɴᴏᴡɴ"

var userId = user.telegramid
var username = user.username ? `@${user.username}` : "Uɴᴋɴᴏᴡɴ"
var lastName = user.last_name || "Uɴᴋɴᴏᴡɴ"
var isPremium = user.is_premium ? "Yᴇs" : "Nᴏ"
var languageCode = user.language_code || "Uɴᴋɴᴏᴡɴ"
var userProfileLink = `<a href='tg://user?id=${userId}'>Vɪᴇᴡ Pʀᴏғɪʟᴇ</a>`

// Bot Caption Message
var caption = `<b>👤 Fɪʀsᴛ Nᴀᴍᴇ:</> ${firstName}
<b>👥 Lᴀsᴛ Nᴀᴍᴇ:</> ${lastName}
<b>🌐 Usᴇʀɴᴀᴍᴇ:</> ${username}
<b>🏆 Pʀᴇᴍɪᴜᴍ:</> ${isPremium}
<b>🏳️ Lᴀɴɢᴜᴀɢᴇ:</> ${languageCode}
<b>🆔 Usᴇʀ Iᴅ:</> <code>${user.telegramid}</>
<b>💁 Pʀᴏғɪʟᴇ:</> ${userProfileLink}`

// Bot Menu Buttons
var buttons = [
  [{ text: "⚠️ Dᴀɴɢᴇʀ", callback_data: "!logout" }],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "!master" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "!close" }
  ]
]

// Check If The Message Exists
if (request.message && request.message.message_id) {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: caption,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: buttons }
  })
} else {
  Api.sendMessage({
    chat_id: request.chat.id,
    text: caption,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: buttons }
  })
}

