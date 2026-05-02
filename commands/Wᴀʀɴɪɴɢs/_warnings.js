/*CMD
  command: /warnings
  help: Check warnings for a user
  need_reply: false
  auto_retry_time: 
  folder: Wᴀʀɴɪɴɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /warns
  group: 
CMD*/

var targetId = user.telegramid
if (request.reply_to_message && request.reply_to_message.from) {
  targetId = request.reply_to_message.from.id
} else if (params) {
  targetId = parseInt(params)
}

var chatId = request.chat ? request.chat.id : user.telegramid
var warnKey = "warns_" + chatId + "_" + targetId
var warns = Bot.getProperty(warnKey, 0)
var maxWarns = Bot.getProperty("max_warns", 3)

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>⚠️ Wᴀʀɴɪɴɢs</b>\n\n" +
  "<b>🆔 Usᴇʀ ID:</b> <code>" + targetId + "</code>\n" +
  "<b>📊 Wᴀʀɴs:</b> " + warns + "/" + maxWarns + "\n" +
  "<b>📉 Rᴇᴍᴀɪɴɪɴɢ:</b> " + (maxWarns - warns) + " ʙᴇꜰᴏʀᴇ ʙᴀɴ" +
  adsFooter

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
})
