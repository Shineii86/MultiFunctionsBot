/*CMD
  command: /textstats
  help: Get detailed text statistics
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
📝 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ɢᴇᴛ ᴅᴇᴛᴀɪʟᴇᴅ sᴛᴀᴛɪsᴛɪᴄs.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var text = message
var chars = text.length
var charsNoSpaces = text.replace(/\s/g, "").length
var words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length
var lines = text.split("\n").length
var sentences = text.split(/[.!?]+/).filter(function(s) { return s.trim().length > 0 }).length
var paragraphs = text.split(/\n\s*\n/).filter(function(s) { return s.trim().length > 0 }).length
var digits = (text.match(/\d/g) || []).length
var uppercase = (text.match(/[A-Z]/g) || []).length
var lowercase = (text.match(/[a-z]/g) || []).length
var spaces = (text.match(/\s/g) || []).length
var special = chars - digits - uppercase - lowercase - spaces

// Average word length
var wordArr = text.trim().split(/\s+/)
var totalWordLen = 0
for (var i = 0; i < wordArr.length; i++) {
  totalWordLen += wordArr[i].length
}
var avgWordLen = words > 0 ? (totalWordLen / words).toFixed(1) : 0

// Reading time (200 wpm)
var readMin = Math.ceil(words / 200)

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>📊 Tᴇxᴛ Sᴛᴀᴛɪsᴛɪᴄs</b>\n\n" +
  "<b>📝 Oᴠᴇʀᴠɪᴇᴡ:</b>\n" +
  "» Cʜᴀʀᴀᴄᴛᴇʀs: <b>" + chars + "</b>\n" +
  "» Wɪᴛʜᴏᴜᴛ Sᴘᴀᴄᴇs: <b>" + charsNoSpaces + "</b>\n" +
  "» Wᴏʀᴅs: <b>" + words + "</b>\n" +
  "» Lɪɴᴇs: <b>" + lines + "</b>\n" +
  "» Sᴇɴᴛᴇɴᴄᴇs: <b>" + sentences + "</b>\n" +
  "» Pᴀʀᴀɢʀᴀᴘʜs: <b>" + paragraphs + "</b>\n\n" +
  "<b>🔍 Dᴇᴛᴀɪʟ:</b>\n" +
  "» Uᴘᴘᴇʀᴄᴀsᴇ: <b>" + uppercase + "</b>\n" +
  "» Lᴏᴡᴇʀᴄᴀsᴇ: <b>" + lowercase + "</b>\n" +
  "» Dɪɢɪᴛs: <b>" + digits + "</b>\n" +
  "» Sᴘᴀᴄᴇs: <b>" + spaces + "</b>\n" +
  "» Sᴘᴇᴄɪᴀʟ: <b>" + special + "</b>\n\n" +
  "<b>📐 Mᴇᴛʀɪᴄs:</b>\n" +
  "» Aᴠɢ Wᴏʀᴅ Lᴇɴɢᴛʜ: <b>" + avgWordLen + "</b>\n" +
  "» Rᴇᴀᴅɪɴɢ Tɪᴍᴇ: <b>~" + readMin + " ᴍɪɴ</b>" +
  adsFooter

var buttons = [
  [
    { text: "📊 Aɴᴀʟʏᴢᴇ Aɢᴀɪɴ", callback_data: "/textstats" },
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
