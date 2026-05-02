/*CMD
  command: !master
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

// Admin Menu Message
var message = `👋 <b>Wᴇʟᴄᴏᴍᴇ, Tᴏ Ҩᴜɪɴx Aᴅᴍɪɴ ᴄPᴀɴᴇʟ Hᴇʀᴇ Yᴏᴜ Cᴀɴ Mᴀɴᴀɢᴇ Yᴏᴜʀ Bᴏᴛ Wɪᴛʜ ᴀ Sɪɴɢʟᴇ Oᴘᴛɪᴏɴs.</>
  
🚷 Hᴇʀᴇ Aʀᴇ Sᴏᴍᴇ Oᴘᴛɪᴏɴs Yᴏᴜ Nᴇᴇᴅ Tᴏ Sᴇᴛ Fᴏʀ Tʜɪs Bᴏᴛ Eʟsᴇ Bᴏᴛ Wᴏɴ'ᴛ Wᴏʀᴋ Pʀᴏᴘᴇʀʟʏ.

<b>🤖 Bᴏᴛ Nᴀᴍᴇ:</> @${bot.name}

<tg-spoiler>Wᴀʀɴɪɴɢ Wʜᴇɴ Usɪɴɢ Tʜɪs Pᴀɴᴇʟ Pʟᴇᴀsᴇ Dᴏɴ'ᴛ Sᴇɴᴅ Aɴʏ Oᴛʜᴇʀ Cᴏᴍᴍᴀɴᴅ Oʀ Iᴛ Mᴀʏ Sᴘᴏɪʟ Yᴏᴜʀ Wᴏʀᴋ</tg-spoiler>`

// Admin Menu buttons
var buttons = [
  [
    { text: "👤 Pʀᴏғɪʟᴇ", callback_data: "!profile" },
    { text: `Sᴇᴛᴛɪɴɢs ⚙️`, callback_data: "!maintenance " }
  ],
  [
    { text: "📢 Bʀᴏᴀᴅᴄᴀsᴛ", callback_data: "!broadcast" },
    { text: "Sᴛᴀᴛɪsᴛɪᴄs 🤖", callback_data: "!status" }
  ],
  [{ text: "Lᴏɢᴏᴜᴛ 𝘤Pᴀɴᴇʟ", callback_data: "/start" }]
]

// Check If The Message Exists
if (request.message && request.message.message_id) {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: message,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: buttons }
  })
} else {
  Api.sendMessage({
    chat_id: request.chat.id,
    text: message,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: buttons }
  })
}

