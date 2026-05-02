/*CMD
  command: !maintenance
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

var mode = Bot.getProperty("maintenance", "Nᴏᴛ Sᴇᴛ")

// Function to convert the text to fancy format
function fancyText(text) {
  if (text === "On") {
    return "Oɴ"
  } else if (text === "Off") {
    return "Oғғ"
  }
  return text
}
var Mode = fancyText(mode)

// Bot Caption Message
var caption = `<b>⚙️ Sᴇʟᴇᴄᴛ Yᴏᴜʀ Cʜᴏɪᴄᴇ Tᴏ Oɴ/Oғғ Tʜᴇ Mᴀɪɴᴛᴀɪɴᴀᴄᴇ Mᴏᴅᴇ.

⚡ Cᴜʀʀᴇɴᴛ Mᴏᴅᴇ:</b> ${Mode}`

var buttons = [
  [
    { text: "🪫 Oɴ", callback_data: "!On" },
    { text: "Oғғ 🔋", callback_data: "!Off" }
  ],
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

