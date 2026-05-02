/*CMD
  command: onQuoteResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

try {
  var data = JSON.parse(content)
  var quote = data.content || "Stay motivated!"
  var author = data.author || "Unknown"

  var caption = "<b>💡 Rᴀɴᴅᴏᴍ Qᴜᴏᴛᴇ</b>\n\n" +
    "<blockquote>" + quote + "</blockquote>\n\n" +
    "<b>— " + author + "</b>" +
    adsFooter
} catch (e) {
  var caption = "<b>❌ Cᴏᴜʟᴅ ꜰᴇᴛᴄʜ Qᴜᴏᴛᴇ.</b>" + adsFooter
}

var buttons = [
  [
    { text: "🔄 Nᴇxᴛ Qᴜᴏᴛᴇ", callback_data: "/quote" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
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
