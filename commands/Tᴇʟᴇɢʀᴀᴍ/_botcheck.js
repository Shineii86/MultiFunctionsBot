/*CMD
  command: /botcheck
  help: Check if a user is a bot
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /isbot
  group: 
CMD*/

var targetId = params || ""

// If replying to someone
if (request.reply_to_message && request.reply_to_message.from) {
  var from = request.reply_to_message.from
  var isBot = from.is_bot ? "Yᴇs 🤖" : "Nᴏ 👤"
  var name = (from.first_name || "") + " " + (from.last_name || "")

  var adsFooter = Libs.Helpers.getAdsFooter()
  var caption = "<b>🤖 Bᴏᴛ Cʜᴇᴄᴋ</b>\n\n" +
    "<b>👤 Nᴀᴍᴇ:</b> " + name.trim() + "\n" +
    "<b>🆔 ID:</b> <code>" + from.id + "</code>\n" +
    "<b>🤖 Is Bᴏᴛ:</b> " + isBot +
    adsFooter

  Bot.sendMessage(caption, {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: [[{ text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
  })
} else if (targetId) {
  Api.getChat({
    chat_id: targetId,
    on_result: "onBotCheckResult"
  })
} else {
  Bot.sendMessage("<b>❌ Rᴇᴘʟʏ ᴛᴏ ᴀ ᴜsᴇʀ ᴏʀ sᴇɴᴅ ᴛʜᴇɪʀ ID.</b>", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/botcheck" }]] }
  })
}
