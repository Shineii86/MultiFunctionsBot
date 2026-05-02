/*CMD
  command: !
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var adsFooter = Libs.Helpers.getAdsFooter()

// Notify user
var caption = "<b>⚠️ Eʀʀᴏʀ Aʟᴇʀᴛ</b>\n\n" +
  "Sᴏᴍᴇᴛʜɪɴɢ ᴡᴇɴᴛ ᴡʀᴏɴɢ ᴡʜɪʟᴇ ᴘʀᴏᴄᴇꜱꜱɪɴɢ ʏᴏᴜʀ ʀᴇQᴜᴇꜱᴛ.\n" +
  "Pʟᴇᴀꜱᴇ ᴛʀʏ ᴀɢᴀɪɴ ᴏʀ ʀᴇᴘᴏʀᴛ ᴛʜɪꜱ ᴛᴏ ᴛʜᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ." +
  adsFooter

var buttons = [
  [
    { text: "🧑‍💻 Dᴇᴠᴇʟᴏᴘᴇʀ", url: "t.me/Shineii86" },
    { text: "💬 Sᴜᴘᴘᴏʀᴛ", url: "t.me/MaximXGroup" }
  ],
  [
    { text: "🔄 Rᴇꜱᴛᴀʀᴛ", callback_data: "/start" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

Api.sendMessage({
  chat_id: user.telegramid,
  text: caption,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: buttons }
})

// Notify admin with details
if (admin) {
  var firstName = Libs.Helpers.getUserMention()
  var username = user.username ? "@" + user.username : "N/A"

  var errorMessage = "<b>⚠️ Eʀʀᴏʀ Rᴇᴘᴏʀᴛ</b>\n" +
    Libs.Helpers.separator() + "\n\n" +
    "<b>👤 Uꜱᴇʀ:</b> " + firstName + "\n" +
    "<b>🌐 Uꜱᴇʀɴᴀᴍᴇ:</b> " + username + "\n" +
    "<b>🆔 Iᴅ:</b> <code>" + user.telegramid + "</code>\n" +
    "<b>💎 Pʀᴇᴍɪᴜᴍ:</b> " + (user.is_premium ? "Yᴇꜱ" : "Nᴏ") + "\n\n" +
    "<b>📝 Mᴇꜱꜱᴀɢᴇ:</b> " + Libs.Helpers.truncate(message || "N/A", 200)

  Api.sendMessage({
    chat_id: admin,
    text: errorMessage,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: [[{ text: "👤 Vɪᴇᴡ Pʀᴏꜰɪʟᴇ", url: "tg://user?id=" + user.telegramid }]] }
  })
}
