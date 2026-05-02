/*CMD
  command: onGroupLinkResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var link = options.result || options

if (link) {
  var chatName = request.chat.title || "this group"
  var caption = "<b>🔗 Gʀᴏᴜᴘ Iɴᴠɪᴛᴇ Lɪɴᴋ</b>\n\n" +
    "<b>📛 Gʀᴏᴜᴘ:</b> " + chatName + "\n" +
    "<b>🔗 Lɪɴᴋ:</b>\n<code>" + link + "</code>" +
    adsFooter

  Bot.sendMessage(caption, {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: [[{ text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
  })
} else {
  Bot.sendMessage("<b>❌ Cᴏᴜʟᴅ ɴᴏᴛ ɢᴇᴛ ɪɴᴠɪᴛᴇ ʟɪɴᴋ.</b>\nMᴀᴋᴇ sᴜʀᴇ ᴛʜᴇ ʙᴏᴛ ɪs ᴀᴅᴍɪɴ.", { parse_mode: "HTML" })
}
