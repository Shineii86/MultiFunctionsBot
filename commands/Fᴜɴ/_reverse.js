/*CMD
  command: /reverse
  help: Reverse any text
  need_reply: true
  auto_retry_time: 
  folder: Fᴜɴ

  <<ANSWER
🔄 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ʀᴇᴠᴇʀsᴇ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /backwards
  group: 
CMD*/

var reversed = message.split("").reverse().join("")
var adsFooter = Libs.Helpers.getAdsFooter()

Bot.sendMessage("<b>🔄 Rᴇᴠᴇʀsᴇᴅ Tᴇxᴛ</b>\n\n<b>📥 Iɴᴘᴜᴛ:</b>\n<code>" + message + "</code>\n\n<b>📤 Oᴜᴛᴘᴜᴛ:</b>\n<code>" + reversed + "</code>" + adsFooter, {
  parse_mode: "HTML", disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "🔄 Rᴇᴠᴇʀsᴇ Aɢᴀɪɴ", callback_data: "/reverse" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }], [{ text: "◁", callback_data: "/tools" }, { text: "○", callback_data: "/start" }, { text: "✕", callback_data: "/close" }]] }
})
