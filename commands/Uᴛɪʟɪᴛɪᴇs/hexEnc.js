/*CMD
  command: hexEnc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
🔤 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴛᴏ ʜᴇx.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var result = ""
for (var i = 0; i < message.length; i++) {
  result += ("0" + message.charCodeAt(i).toString(16)).slice(-2) + " "
}
result = result.trim().toUpperCase()

var adsFooter = Libs.Helpers.getAdsFooter()
Bot.sendMessage("<b>🔢 Hᴇx Eɴᴄᴏᴅᴇᴅ</b>\n\n<b>📥 Iɴᴘᴜᴛ:</b>\n<code>" + message + "</code>\n\n<b>📤 Oᴜᴛᴘᴜᴛ:</b>\n<code>" + result + "</code>" + adsFooter, {
  parse_mode: "HTML", disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "🔢 Eɴᴄᴏᴅᴇ Mᴏʀᴇ", callback_data: "hexEnc" }, { text: "0x Dᴇᴄᴏᴅᴇ", callback_data: "hexDec" }], [{ text: "◁", callback_data: "/tools" }, { text: "○", callback_data: "/start" }, { text: "✕", callback_data: "/close" }]] }
})
