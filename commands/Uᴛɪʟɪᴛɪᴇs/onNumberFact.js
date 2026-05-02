/*CMD
  command: onNumberFact
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

var fact = content || "No fact found."

var caption = "<b>🔢 Nᴜᴍʙᴇʀ Fᴀᴄᴛ</b>\n\n" +
  "<blockquote>" + fact + "</blockquote>" +
  adsFooter

var buttons = [
  [
    { text: "🔢 Aɴᴏᴛʜᴇʀ Fᴀᴄᴛ", callback_data: "/numberfact" },
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
