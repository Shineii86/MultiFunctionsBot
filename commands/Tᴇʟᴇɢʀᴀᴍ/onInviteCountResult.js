/*CMD
  command: onInviteCountResult
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
var count = options.result || options || 0

var caption = "<b>📨 Iɴᴠɪᴛᴇ Lɪɴᴋ Cᴏᴜɴᴛ</b>\n\n" +
  "<b>📊 Tᴏᴛᴀʟ Lɪɴᴋs:</b> " + count +
  adsFooter

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
})
