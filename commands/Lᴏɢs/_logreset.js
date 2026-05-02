/*CMD
  command: /logreset
  help: Reset all logging settings
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

Bot.setProperty("log_channel", "", "string")
Bot.setProperty("log_joins", "On", "string")
Bot.setProperty("log_leaves", "On", "string")
Bot.setProperty("log_deleted", "On", "string")
Bot.setProperty("log_edited", "On", "string")
Bot.setProperty("log_pinned", "On", "string")

var adsFooter = Libs.Helpers.getAdsFooter()

Bot.sendMessage("<b>✅ Lᴏɢɢɪɴɢ Rᴇsᴇᴛ</b>\n\nAll logging settings have been reset to defaults.\nUsᴇ /logs ᴛᴏ ʀᴇᴄᴏɴꜰɪɢᴜʀᴇ." + adsFooter, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "◁ Sᴇᴛᴜᴘ", callback_data: "/logs" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
})
