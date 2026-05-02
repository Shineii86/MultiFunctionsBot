/*CMD
  command: !logout
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

// Retrieve (Developer) Telegram IDs
var admin = Bot.getProperty("admin")

// Check if the user is either the admin (Owner) or the developer (Master)
if (user.telegramid == admin) {
  Bot.setProperty("admin", "", "integer") // Reset Admin

  // Message
  var caption = `<b>👤 Bᴏᴛ Aᴅᴍɪɴ Hᴀs Bᴇᴇɴ Rᴇᴍᴏᴠᴇᴅ.</b>`

  // Initialize the adminButton array
  var buttons = [
    //    [
    //      { text: "", callback_data: "" },
    //      { text: "", callback_data: "" }
    //    ],
    [{ text: "Lᴏɢᴏᴜᴛ 𝘤Pᴀɴᴇʟ", callback_data: "/start" }]
  ]

  // If the message is a callback query, edit it
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
      chat_id: user.telegramid,
      text: caption,
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: buttons }
    })
  }
} else {
  // Send this message only if the admin is set
  if (admin) {
    Api.sendMessage({
      chat_id: user.telegramid,
      text: `<b>🚷 Yᴏᴜ Aʀᴇ Nᴏᴛ Aᴜᴛʜᴏʀɪᴢᴇᴅ Tᴏ Aᴄᴄᴇss Tʜɪs Pᴀɴᴇʟ.</b>`,
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: {
        inline_keyboard: [
          [
            { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
            { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
          ]
        ]
      }
    })
  }
}

