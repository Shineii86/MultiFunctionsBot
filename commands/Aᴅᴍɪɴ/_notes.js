/*CMD
  command: /notes
  help: Manage saved notes for this group
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

var chatId = request.chat ? request.chat.id : user.telegramid
var notes = Bot.getProperty("notes_" + chatId, {})
var noteKeys = Object.keys(notes)
var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>📝 Sᴀᴠᴇᴅ Nᴏᴛᴇs</b>\n\n"

if (noteKeys.length === 0) {
  caption += "Nᴏ ɴᴏᴛᴇs sᴀᴠᴇᴅ ʏᴇᴛ.\n\n"
} else {
  caption += "<b>📋 Aᴠᴀɪʟᴀʙʟᴇ Nᴏᴛᴇs (" + noteKeys.length + "):</b>\n"
  for (var i = 0; i < noteKeys.length; i++) {
    caption += "» <code>#" + noteKeys[i] + "</code>\n"
  }
  caption += "\n"
}

caption += "<b>💡 Cᴏᴍᴍᴀɴᴅs:</b>\n" +
  "» <code>/save name text</code> — Sᴀᴠᴇ ᴀ ɴᴏᴛᴇ\n" +
  "» <code>#name</code> — Gᴇᴛ ᴀ ɴᴏᴛᴇ\n" +
  "» <code>/delnote name</code> — Dᴇʟᴇᴛᴇ ᴀ ɴᴏᴛᴇ" +
  adsFooter

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
})
