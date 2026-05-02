/*CMD
  command: /choose
  help: Choose randomly from a list (e.g. /choose pizza, burger, sushi)
  need_reply: false
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /pick
  group: 
CMD*/

var input = params || message
if (!input || input.trim() === "") {
  Bot.sendMessage("<b>❌ Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴏᴘᴛɪᴏɴs.</b>\n\n<b>Uꜱᴀɢᴇ:</b> <code>/choose pizza, burger, sushi</code>", {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/choose" }]]
    }
  })
  return
}

var options = input.split(",").map(function(s) { return s.trim() }).filter(function(s) { return s.length > 0 })

if (options.length < 2) {
  Bot.sendMessage("<b>❌ Pʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀᴛ ʟᴇᴀsᴛ 2 ᴏᴘᴛɪᴏɴs (sᴇᴘᴀʀᴀᴛᴇᴅ ʙʏ ᴄᴏᴍᴍᴀs).</b>", {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/choose" }]]
    }
  })
  return
}

var chosen = options[Math.floor(Math.random() * options.length)]
var adsFooter = Libs.Helpers.getAdsFooter()

var optionsList = ""
for (var i = 0; i < options.length; i++) {
  optionsList += (options[i] === chosen ? "✅ " : "• ") + options[i] + "\n"
}

var caption = "<b>🎯 Rᴀɴᴅᴏᴍ Cʜᴏɪᴄᴇ</b>\n\n" +
  "<b>📋 Oᴘᴛɪᴏɴs:</b>\n" + optionsList + "\n" +
  "<b>🏆 Cʜᴏsᴇɴ:</b> <b>" + chosen + "</b>" +
  adsFooter

var buttons = [
  [
    { text: "🎯 Cʜᴏᴏsᴇ Aɢᴀɪɴ", callback_data: "/choose" },
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
