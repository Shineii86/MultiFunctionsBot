/*CMD
  command: /logexport
  help: Export recent activity log as text
  need_reply: false
  auto_retry_time: 
  folder: Lᴏɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /exportlogs
  group: 
CMD*/

var logChannel = Bot.getProperty("log_channel", "Nᴏᴛ Sᴇᴛ")
var logJoins = Bot.getProperty("log_joins", "On")
var logLeaves = Bot.getProperty("log_leaves", "On")
var logDeleted = Bot.getProperty("log_deleted", "On")
var logEdited = Bot.getProperty("log_edited", "On")
var logPinned = Bot.getProperty("log_pinned", "On")

var now = new Date().toISOString().slice(0, 19).replace("T", " ")

var export = "═══════════════════\n" +
  "  Lᴏɢ Cᴏɴꜰɪɢ Exᴘᴏʀᴛ\n" +
  "═══════════════════\n\n" +
  "Dᴀᴛᴇ: " + now + " UTC\n" +
  "Gʀᴏᴜᴘ: " + (request.chat ? request.chat.title : "N/A") + "\n" +
  "Cʜᴀᴛ ID: " + (request.chat ? request.chat.id : "N/A") + "\n\n" +
  "─── Sᴇᴛᴛɪɴɢs ───\n" +
  "Lᴏɢ Cʜᴀɴɴᴇʟ: " + logChannel + "\n" +
  "Jᴏɪɴs: " + logJoins + "\n" +
  "Lᴇᴀᴠᴇs: " + logLeaves + "\n" +
  "Dᴇʟᴇᴛᴇᴅ: " + logDeleted + "\n" +
  "Eᴅɪᴛᴇᴅ: " + logEdited + "\n" +
  "Pɪɴɴᴇᴅ: " + logPinned + "\n\n" +
  "═══════════════════\n"

var adsFooter = Libs.Helpers.getAdsFooter()

Bot.sendMessage("<b>📋 Lᴏɢ Cᴏɴꜰɪɢ Exᴘᴏʀᴛ</b>\n\n<code>" + export + "</code>" + adsFooter, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "◁ Bᴀᴄᴋ", callback_data: "/logs" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
})
