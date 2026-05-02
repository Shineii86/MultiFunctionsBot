/*CMD
  command: b64enc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
🔒 Sᴇɴᴅ ᴛʜᴇ ᴛᴇxᴛ ᴛᴏ ᴇɴᴄᴏᴅᴇ ɪɴᴛᴏ Bᴀsᴇ64.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var encoded = ""
try {
  encoded = Utilities.base64Encode(message)
} catch (e) {
  encoded = ""
}

if (!encoded) {
  // Fallback for BB platform
  try {
    encoded = btoa(unescape(encodeURIComponent(message)))
  } catch (e2) {
    encoded = "Error encoding text"
  }
}

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>🔒 Bᴀsᴇ64 Eɴᴄᴏᴅᴇᴅ</b>\n\n" +
  "<b>📥 Iɴᴘᴜᴛ:</b>\n<code>" + message + "</code>\n\n" +
  "<b>📤 Oᴜᴛᴘᴜᴛ:</b>\n<code>" + encoded + "</code>" +
  adsFooter

var buttons = [
  [
    { text: "🔒 Eɴᴄᴏᴅᴇ Mᴏʀᴇ", callback_data: "b64enc" },
    { text: "🔓 Dᴇᴄᴏᴅᴇ", callback_data: "b64dec" }
  ],
  [
    { text: "◁", callback_data: "/tools" },
    { text: "○", callback_data: "/start" },
    { text: "✕", callback_data: "/close" }
  ]
]

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: buttons }
})
