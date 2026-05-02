/*CMD
  command: /wordcount
  help: Count words and characters in text
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
📝 Sᴇɴᴅ ᴛʜᴇ ᴛᴇxᴛ ᴛᴏ ᴄᴏᴜɴᴛ ᴡᴏʀᴅs ᴀɴᴅ ᴄʜᴀʀᴀᴄᴛᴇʀs.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /wc
  group: 
CMD*/

var text = message
var chars = text.length
var charsNoSpaces = text.replace(/\s/g, "").length
var words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
var lines = text.split("\n").length
var sentences = text.split(/[.!?]+/).filter(function(s) { return s.trim().length > 0 }).length

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>📝 Wᴏʀᴅ Cᴏᴜɴᴛ Rᴇsᴜʟᴛs</b>\n\n" +
  "<b>📊 Sᴛᴀᴛɪsᴛɪᴄs:</b>\n" +
  "» Wᴏʀᴅs: <b>" + words + "</b>\n" +
  "» Cʜᴀʀᴀᴄᴛᴇʀs: <b>" + chars + "</b>\n" +
  "» Cʜᴀʀs (ɴᴏ sᴘᴀᴄᴇs): <b>" + charsNoSpaces + "</b>\n" +
  "» Lɪɴᴇs: <b>" + lines + "</b>\n" +
  "» Sᴇɴᴛᴇɴᴄᴇs: <b>" + sentences + "</b>\n\n" +
  "<b>📝 Iɴᴘᴜᴛ:</b>\n<blockquote>" + (text.length > 200 ? text.substring(0, 200) + "..." : text) + "</blockquote>" +
  adsFooter

var buttons = [
  [
    { text: "🔄 Cᴏᴜɴᴛ Aɢᴀɪɴ", callback_data: "/wordcount" },
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
