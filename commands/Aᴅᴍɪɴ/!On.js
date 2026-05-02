/*CMD
  command: !On
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
Bot.setProperty("maintenance", "On", "string")

// Bot Caption Message
var caption = `<b>🔴 Mᴀɪɴᴛᴇɴᴀɴᴄᴇ Mᴏᴅᴇ:</b> Aᴄᴛɪᴠᴀᴛᴇᴅ
𝘚𝘤𝘩𝘦𝘥𝘶𝘭𝘦𝘥 𝘔𝘢𝘪𝘯𝘵𝘦𝘯𝘢𝘯𝘤𝘦 𝘐𝘯 𝘗𝘳𝘰𝘨𝘳𝘦𝘴𝘴. 𝘚𝘦𝘳𝘷𝘪𝘤𝘦𝘴 𝘞𝘪𝘭𝘭 𝘙𝘦𝘴𝘶𝘮𝘦 𝘚𝘩𝘰𝘳𝘵𝘭𝘺.

<b>Sᴛᴀᴛᴜs:</b> 𝗧𝗘𝗠𝗣𝗢𝗥𝗔𝗥𝗜𝗟𝗬 𝗢𝗙𝗙𝗟𝗜𝗡𝗘`

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

