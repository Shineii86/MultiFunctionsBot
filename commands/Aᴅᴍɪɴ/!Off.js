/*CMD
  command: !Off
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

// Set Maintenance Mode to On
Bot.setProperty("maintenance", "Off", "string")

// Bot Caption Message
var caption = `<b>🟢 Mᴀɪɴᴛᴇɴᴀɴᴄᴇ Mᴏᴅᴇ:</b> Dᴇᴀᴄᴛɪᴠᴀᴛᴇᴅ
𝘈𝘭𝘭 𝘚𝘺𝘴𝘵𝘦𝘮𝘴 𝘖𝘱𝘦𝘳𝘢𝘵𝘪𝘰𝘯𝘢𝘭. 𝘔𝘢𝘪𝘯𝘵𝘦𝘯𝘢𝘯𝘤𝘦 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺 𝘊𝘰𝘯𝘤𝘭𝘶𝘥𝘦𝘥.

<b>Sᴛᴀᴛᴜs:</b> 𝗙𝗨𝗟𝗟𝗬 𝗢𝗣𝗘𝗥𝗔𝗧𝗜𝗢𝗡𝗔𝗟`

var buttons = [
  [
    { text: "◁ Bᴀᴄᴋ ", callback_data: "!master" },
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

