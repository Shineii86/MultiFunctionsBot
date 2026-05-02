/*CMD
  command: /feedback
  help: Send feedback to the developer
  need_reply: true
  auto_retry_time: 
  folder: Fᴇᴇᴅʙᴀᴄᴋ

  <<ANSWER
💬 Sᴇɴᴅ ʏᴏᴜʀ ꜰᴇᴇᴅʙᴀᴄᴋ, ꜱᴜɢɢᴇꜱᴛɪᴏɴ, ᴏʀ ʙᴜɢ ʀᴇᴘᴏʀᴛ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var adsFooter = Libs.Helpers.getAdsFooter()
var text = message.trim()

if (!text || text.length < 5) {
  Bot.sendMessage("<b>❌ Pʟᴇᴀꜱᴇ ᴡʀɪᴛᴇ ᴀ ᴍᴇᴀɴɪɴɢꜰᴜʟ ꜰᴇᴇᴅʙᴀᴄᴋ.</b>", { parse_mode: "HTML" })
  return
}

// Store feedback
var feedbacks = Bot.getProperty("feedbacks", [])
feedbacks.push({
  name: user.first_name || "Aɴᴏɴʏᴍᴏᴜꜱ",
  id: user.telegramid,
  text: text,
  time: new Date().toISOString()
})
if (feedbacks.length > 100) feedbacks = feedbacks.slice(-100)
Bot.setProperty("feedbacks", feedbacks, "json")

// Notify admin
if (admin) {
  Api.sendMessage({
    chat_id: admin,
    text: "<b>📬 Nᴇᴡ Fᴇᴇᴅʙᴀᴄᴋ</b>\n\n" +
      "<b>👤 Fʀᴏᴍ:</b> " + Libs.Helpers.getUserMention() + "\n" +
      "<b>🆔 Iᴅ:</b> <code>" + user.telegramid + "</code>\n\n" +
      "<b>📝 Mᴇꜱꜱᴀɢᴇ:</b>\n<blockquote>" + Libs.Helpers.escapeHTML(text) + "</blockquote>",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: [[{ text: "💬 Rᴇᴘʟʏ", url: "tg://user?id=" + user.telegramid }]] }
  })
}

Bot.sendMessage("<b>✅ Fᴇᴇᴅʙᴀᴄᴋ Sᴇɴᴛ!</b>\n\n" +
  "Tʜᴀɴᴋ ʏᴏᴜ ꜰᴏʀ ʏᴏᴜʀ ꜰᴇᴇᴅʙᴀᴄᴋ! Tʜᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ ᴡɪʟʟ ʀᴇᴠɪᴇᴡ ɪᴛ ꜱᴏᴏɴ. 🙏" +
  adsFooter, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
})
