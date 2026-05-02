/*CMD
  command: hexDec
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
0x Sᴇɴᴅ ʜᴇx ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴛᴏ ᴛᴇxᴛ (sᴇᴘᴀʀᴀᴛᴇ ʙʏ sᴘᴀᴄᴇs).
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var hex = message.trim().replace(/[^0-9a-fA-F\s]/g, "")
var bytes = hex.match(/.{1,2}/g) || []
var result = ""
for (var i = 0; i < bytes.length; i++) {
  result += String.fromCharCode(parseInt(bytes[i], 16))
}

var adsFooter = Libs.Helpers.getAdsFooter()
Bot.sendMessage("<b>🔢 Hᴇx Dᴇᴄᴏᴅᴇᴅ</b>\n\n<b>📥 Iɴᴘᴜᴛ:</b>\n<code>" + message + "</code>\n\n<b>📤 Oᴜᴛᴘᴜᴛ:</b>\n<code>" + result + "</code>" + adsFooter, {
  parse_mode: "HTML", disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "🔤 Eɴᴄᴏᴅᴇ", callback_data: "hexEnc" }, { text: "0x Dᴇᴄᴏᴅᴇ Mᴏʀᴇ", callback_data: "hexDec" }], [{ text: "◁", callback_data: "/tools" }, { text: "○", callback_data: "/start" }, { text: "✕", callback_data: "/close" }]] }
})
