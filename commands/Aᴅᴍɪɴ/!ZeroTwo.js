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
    text: "<b>✅ Aᴅᴍɪɴ Aᴄᴄᴇꜱꜱ Gʀᴀɴᴛᴇᴅ!</b>\n\n" +
      "<b>🆔 Yᴏᴜʀ Iᴅ:</b> <code>" + user.telegramid + "</code>\n\n" +
      "Yᴏᴜ Nᴏᴡ Hᴀᴠᴇ Fᴜʟʟ Cᴏɴᴛʀᴏʟ Oᴠᴇʀ Tʜɪꜱ Bᴏᴛ.\n" +
      "Uꜱᴇ Tʜᴇ Pᴀɴᴇʟ Bᴇʟᴏᴡ Tᴏ Mᴀɴᴀɢᴇ Eᴠᴇʀʏᴛʜɪɴɢ.",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [{ text: "👑 Oᴘᴇɴ Aᴅᴍɪɴ Pᴀɴᴇʟ", callback_data: "!master" }],
        [
          { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
          { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
        ]
      ]
    }
  })
} else if (user.telegramid == admin) {
  Api.sendMessage({
    chat_id: user.telegramid,
    text: "<b>ℹ️ Yᴏᴜ Aʀᴇ Aʟʀᴇᴀᴅʏ Tʜᴇ Aᴅᴍɪɴ!</b>\n\n" +
      "<b>🆔 Yᴏᴜʀ Iᴅ:</b> <code>" + user.telegramid + "</code>",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [{ text: "👑 Oᴘᴇɴ Aᴅᴍɪɴ Pᴀɴᴇʟ", callback_data: "!master" }],
        [
          { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
          { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
        ]
      ]
    }
  })
} else {
  Api.sendMessage({
    chat_id: user.telegramid,
    text: "<b>🚷 Aᴄᴄᴇꜱꜱ Dᴇɴɪᴇᴅ!</b>\n\nAɴ Aᴅᴍɪɴ Iꜱ Aʟʀᴇᴀᴅʏ Sᴇᴛ.",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/start") }
  })
}
