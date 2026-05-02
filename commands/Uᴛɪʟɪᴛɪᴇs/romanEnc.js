/*CMD
  command: romanEnc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
# Sᴇɴᴅ ᴀ ɴᴜᴍʙᴇʀ (1-3999) ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴛᴏ Rᴏᴍᴀɴ ɴᴜᴍᴇʀᴀʟs.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var num = parseInt(message.trim())
if (isNaN(num) || num < 1 || num > 3999) {
  Bot.sendMessage("<b>❌ Pʟᴇᴀsᴇ sᴇɴᴅ ᴀ ɴᴜᴍʙᴇʀ ʙᴇᴛᴡᴇᴇɴ 1 ᴀɴᴅ 3999.</b>", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "romanEnc" }]] }
  })
  return
}

var vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
var syms = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
var result = ""
for (var i = 0; i < vals.length; i++) {
  while (num >= vals[i]) {
    result += syms[i]
    num -= vals[i]
  }
}

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>🏛️ Rᴏᴍᴀɴ Nᴜᴍᴇʀᴀʟ Cᴏɴᴠᴇʀᴛᴇᴅ</b>\n\n" +
  "<b>📥 Iɴᴘᴜᴛ:</b> <code>" + message.trim() + "</code>\n" +
  "<b>📤 Oᴜᴛᴘᴜᴛ:</b> <code>" + result + "</code>" +
  adsFooter

var buttons = [
  [
    { text: "# Cᴏɴᴠᴇʀᴛ Mᴏʀᴇ", callback_data: "romanEnc" },
    { text: "I V X Dᴇᴄᴏᴅᴇ", callback_data: "romanDec" }
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
