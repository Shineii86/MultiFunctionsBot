/*CMD
  command: !ZeroTwo
  help: Claim admin access
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

if (!admin) {
  Bot.setProperty("admin", user.telegramid, "string")

  Api.sendMessage({
    chat_id: user.telegramid,
    text: "<b>✅ Yᴏᴜ Aʀᴇ Nᴏᴡ Tʜᴇ Aᴅᴍɪɴ!</b>\n\n<b>Yᴏᴜʀ Iᴅ:</b> <code>" + user.telegramid + "</code>\n\n<b>Yᴏᴜ Hᴀᴠᴇ Fᴜʟʟ Cᴏɴᴛʀᴏʟ Oᴠᴇʀ Tʜɪs Bᴏᴛ.</b>",
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
  Api.sendMessage({
    chat_id: user.telegramid,
    text: "<b>⚠️ Yᴏᴜ Aʀᴇ Aʟʀᴇᴀᴅʏ Tʜᴇ Aᴅᴍɪɴ!</b>\n\n<b>Yᴏᴜʀ Iᴅ:</b> <code>" + user.telegramid + "</code>",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [{ text: "🔐 Lᴏɢɪɴ Tᴏ Pᴀɴᴇʟ", callback_data: "!master" }],
        [
          { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
          { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
        ]
      ]
    }
  })
} else {
  Api.sendMessage({
    chat_id: user.telegramid,
    text: "<b>🚷 Aᴄᴄᴇss Dᴇɴɪᴇᴅ!</b> Aɴ Aᴅᴍɪɴ Is Aʟʀᴇᴀᴅʏ Sᴇᴛ.",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/start") }
  })
}
