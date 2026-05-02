/*CMD
  command: /mention
  help: Generate a mention link for any user
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /mentionlink
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

// If replying to someone
if (request.reply_to_message && request.reply_to_message.from) {
  var from = request.reply_to_message.from
  var name = (from.first_name || "User")
  var link = "tg://user?id=" + from.id
  var htmlLink = "<a href='" + link + "'>" + name + "</a>"
  var markdownLink = "[" + name + "](tg://user?id=" + from.id + ")"

  var caption = "<b>🔗 Mᴇɴᴛɪᴏɴ Lɪɴᴋ</b>\n\n" +
    "<b>👤 Nᴀᴍᴇ:</b> " + name + "\n" +
    "<b>🆔 ID:</b> <code>" + from.id + "</code>\n\n" +
    "<b>📎 HTML:</b>\n<code>" + htmlLink + "</code>\n\n" +
    "<b>📎 Mᴀʀᴋᴅᴏᴡɴ:</b>\n<code>" + markdownLink + "</code>\n\n" +
    "<b>📎 Pʟᴀɪɴ:</b>\n<code>" + link + "</code>" +
    adsFooter

  Bot.sendMessage(caption, {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: [[{ text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
  })
} else {
  // Generate for self
  var link = "tg://user?id=" + user.telegramid
  var htmlLink = "<a href='" + link + "'>" + user.first_name + "</a>"

  var caption = "<b>🔗 Yᴏᴜʀ Mᴇɴᴛɪᴏɴ Lɪɴᴋ</b>\n\n" +
    "<b>👤 Nᴀᴍᴇ:</b> " + user.first_name + "\n" +
    "<b>🆔 ID:</b> <code>" + user.telegramid + "</code>\n\n" +
    "<b>📎 HTML:</b>\n<code>" + htmlLink + "</code>\n\n" +
    "<b>📎 Pʟᴀɪɴ:</b>\n<code>" + link + "</code>" +
    adsFooter

  Bot.sendMessage(caption, {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: [[{ text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
  })
}
