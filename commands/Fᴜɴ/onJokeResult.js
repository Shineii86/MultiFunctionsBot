/*CMD
  command: onJokeResult
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

  if (data && data.setup) {
    var caption = "<b>😂 Jᴏᴋᴇ</b>\n\n" +
      "<b>" + data.setup + "</b>\n\n" +
      "||" + data.punchline + "||"
  } else if (data && data.joke) {
    var caption = "<b>😂 Jᴏᴋᴇ</b>\n\n" + data.joke
  } else {
    var caption = "<b>❌ Cᴏᴜʟᴅ ꜰᴇᴛᴄʜ ᴀ ᴊᴏᴋᴇ.</b>"
  }
} catch (e) {
  var caption = "<b>❌ Eʀʀᴏʀ ꜰᴇᴛᴄʜɪɴɢ ᴊᴏᴋᴇ.</b>"
}

caption += adsFooter

var buttons = [
  [
    { text: "😂 Aɴᴏᴛʜᴇʀ Jᴏᴋᴇ", callback_data: "/joke" },
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
