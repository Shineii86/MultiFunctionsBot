/*CMD
  command: onMemberCountResult
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
var count = options.result || options
var chatName = request.chat.title || "this group"

var caption = "<b>👥 Mᴇᴍʙᴇʀ Cᴏᴜɴᴛ</b>\n\n" +
  "<b>📛 Gʀᴏᴜᴘ:</b> " + chatName + "\n" +
  "<b>👥 Mᴇᴍʙᴇʀs:</b> <b>" + count + "</b>" +
  adsFooter

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "🔄 Rᴇꜰʀᴇsʜ", callback_data: "/membercount" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
})
