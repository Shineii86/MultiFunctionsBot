/*CMD
  command: onAdviceResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Fᴜɴ

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
  var advice = data.slip && data.slip.advice ? data.slip.advice : "Always keep learning!"

  var caption = "<b>💡 Aᴅᴠɪᴄᴇ</b>\n\n" +
    "<blockquote>" + advice + "</blockquote>" +
    adsFooter
} catch (e) {
  var caption = "<b>❌ Cᴏᴜʟᴅ ꜰᴇᴛᴄʜ ᴀᴅᴠɪᴄᴇ.</b>" + adsFooter
}

var buttons = [
  [
    { text: "💡 Mᴏʀᴇ Aᴅᴠɪᴄᴇ", callback_data: "/advice" },
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
