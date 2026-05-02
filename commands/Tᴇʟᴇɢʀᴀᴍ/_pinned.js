/*CMD
  command: /pinned
  help: Get pinned message in current chat
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /pin
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

if (request.chat && request.chat.pinned_message) {
  var pinned = request.chat.pinned_message
  var text = pinned.text || pinned.caption || "[Media/No text]"
  var from = pinned.from ? (pinned.from.first_name || "Unknown") : "Unknown"
  var msgId = pinned.message_id

  var caption = "<b>📌 Pɪɴɴᴇᴅ Mᴇssᴀɢᴇ</b>\n\n" +
    "<b>👤 Fʀᴏᴍ:</b> " + from + "\n" +
    "<b>💬 Mᴇssᴀɢᴇ:</b>\n<blockquote>" + text + "</blockquote>" +
    adsFooter

  Bot.sendMessage(caption, {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: [[{ text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
  })
} else {
  Bot.sendMessage("<b>📌 Nᴏ ᴘɪɴɴᴇᴅ ᴍᴇssᴀɢᴇ ꜰᴏᴜɴᴅ.</b>", { parse_mode: "HTML" })
}
