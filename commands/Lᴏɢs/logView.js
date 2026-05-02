/*CMD
  command: logView
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Lᴏɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var logChannel = Bot.getProperty("log_channel", "")
var adsFooter = Libs.Helpers.getAdsFooter()

if (!logChannel || logChannel === "Nᴏᴛ Sᴇᴛ") {
  Bot.sendMessage("<b>❌ Nᴏ ʟᴏɢ ᴄʜᴀɴɴᴇʟ ᴄᴏɴꜰɪɢᴜʀᴇᴅ.</b>\n\nUsᴇ /logs ᴛᴏ sᴇᴛ ᴏɴᴇ ꜰɪʀsᴛ." + adsFooter, {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "◁ Sᴇᴛᴜᴘ", callback_data: "/logs" }]] }
  })
  return
}

// Show current config
var logJoins = Bot.getProperty("log_joins", "On")
var logLeaves = Bot.getProperty("log_leaves", "On")
var logDeleted = Bot.getProperty("log_deleted", "On")
var logEdited = Bot.getProperty("log_edited", "On")
var logPinned = Bot.getProperty("log_pinned", "On")

var caption = "<b>📊 Lᴏɢɢɪɴɢ Sᴛᴀᴛᴜs</b>\n\n" +
  "<b>📢 Lᴏɢ Cʜᴀɴɴᴇʟ:</b> <code>" + logChannel + "</code>\n\n" +
  "<b>🔔 Eᴠᴇɴᴛs:</b>\n" +
  (logJoins === "On" ? "✅" : "❌") + " Jᴏɪɴs\n" +
  (logLeaves === "On" ? "✅" : "❌") + " Lᴇᴀᴠᴇs\n" +
  (logDeleted === "On" ? "✅" : "❌") + " Dᴇʟᴇᴛᴇᴅ Mᴇssᴀɢᴇs\n" +
  (logEdited === "On" ? "✅" : "❌") + " Eᴅɪᴛᴇᴅ Mᴇssᴀɢᴇs\n" +
  (logPinned === "On" ? "✅" : "❌") + " Pɪɴɴᴇᴅ Mᴇssᴀɢᴇs\n" +
  adsFooter

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "◁ Bᴀᴄᴋ", callback_data: "/logs" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
})
