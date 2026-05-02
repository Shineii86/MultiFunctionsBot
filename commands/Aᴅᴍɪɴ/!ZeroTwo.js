/*CMD
  command: !ZeroTwo
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

var admin = Bot.getProperty("admin")

// If no admin is set, the first user becomes the admin
if (!admin) {
  Bot.setProperty("admin", user.telegramid, "string")

  Api.sendMessage({
    chat_id: user.telegramid,
    text: `<b>✅ Yᴏᴜ Aʀᴇ Nᴏᴡ Tʜᴇ Aᴅᴍɪɴ!</b>

<b>Yᴏᴜʀ Iᴅ:</b> <code>${user.telegramid}</code>

<b>Yᴏᴜ Hᴀᴠᴇ Fᴜʟʟ Cᴏɴᴛʀᴏʟ Oᴠᴇʀ Tʜɪs Bᴏᴛ.</b>`,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [{ text: "🧑‍💻 Oᴘᴇɴ Cᴏɴᴛʀᴏʟ Pᴀɴᴇʟ ⚙️", callback_data: "!master" }],
        [
          { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
          { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
        ]
      ]
    }
  })
} else if (user.telegramid == admin) {
  // If user is already the admin
  Api.sendMessage({
    chat_id: user.telegramid,
    text: `<b>⚠️ Yᴏᴜ Aʀᴇ Aʟʀᴇᴀᴅʏ Tʜᴇ Aᴅᴍɪɴ!</b>

<b>Yᴏᴜʀ Iᴅ:</b> <code>${user.telegramid}</code>`,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔐 Lᴏɢɪɴ Tᴏ Cᴏɴᴛʀᴏʟ Pᴀɴᴇʟ", callback_data: "!master" }],
        [
          { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
          { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
        ]
      ]
    }
  })
} else {
  // If another user tries to claim admin
  Api.sendMessage({
    chat_id: user.telegramid,
    text: `<b>🚷 Aᴄᴄᴇss Dᴇɴɪᴇᴅ!</b> Aɴ Aᴅᴍɪɴ Is Aʟʀᴇᴀᴅʏ Sᴇᴛ. Yᴏᴜ Cᴀɴɴᴏᴛ Cʟᴀɪᴍ Tʜɪs Rᴏʟᴇ.`,
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

