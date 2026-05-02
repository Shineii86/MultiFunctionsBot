/*CMD
  command: caseTitle
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
📝 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴛᴏ Tɪᴛʟᴇ Cᴀsᴇ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var result = message.toLowerCase().replace(/\b\w/g, function(c) { return c.toUpperCase() })
var adsFooter = Libs.Helpers.getAdsFooter()

Bot.sendMessage("<b>📝 Tɪᴛʟᴇ Cᴀsᴇ</b>\n\n<code>" + result + "</code>" + adsFooter, {
  parse_mode: "HTML", disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "🔤 Mᴏʀᴇ Cᴏɴᴠᴇʀᴛs", callback_data: "/textcase" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }], [{ text: "◁", callback_data: "/tools" }, { text: "○", callback_data: "/start" }, { text: "✕", callback_data: "/close" }]] }
})
