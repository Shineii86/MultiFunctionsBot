/*CMD
  command: b64dec
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
🔓 Sᴇɴᴅ ᴛʜᴇ Bᴀsᴇ64 ᴛᴇxᴛ ᴛᴏ ᴅᴇᴄᴏᴅᴇ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var decoded = ""
try {
  decoded = Utilities.base64Decode(message)
} catch (e) {
  try {
    decoded = decodeURIComponent(escape(atob(message)))
  } catch (e2) {
    decoded = ""
  }
}

if (!decoded) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ Bᴀsᴇ64 Iɴᴘᴜᴛ.</b>", {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "b64dec" }]]
    }
  })
  return
}

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>🔓 Bᴀsᴇ64 Dᴇᴄᴏᴅᴇᴅ</b>\n\n" +
  "<b>📥 Iɴᴘᴜᴛ:</b>\n<code>" + message + "</code>\n\n" +
  "<b>📤 Oᴜᴛᴘᴜᴛ:</b>\n<code>" + decoded + "</code>" +
  adsFooter

var buttons = [
  [
    { text: "🔒 Eɴᴄᴏᴅᴇ", callback_data: "b64enc" },
    { text: "🔓 Dᴇᴄᴏᴅᴇ Mᴏʀᴇ", callback_data: "b64dec" }
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
