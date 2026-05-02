/*CMD
  command: /readability
  help: Check text readability score (Flesch-Kincaid)
  need_reply: true
  auto_retry_time: 
  folder: Aɪ

  <<ANSWER
📖 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴄʜᴇᴄᴋ ʀᴇᴀᴅᴀʙɪʟɪᴛʏ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /reading
  group: 
CMD*/

var text = message.trim()
var sentences = text.match(/[^.!?]+[.!?]+/g) || [text]
var words = text.split(/\s+/)
var syllables = 0

function countSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, "")
  if (word.length <= 3) return 1
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, "")
  word = word.replace(/^y/, "")
  var matches = word.match(/[aeiouy]{1,2}/g)
  return matches ? matches.length : 1
}

for (var i = 0; i < words.length; i++) {
  syllables += countSyllables(words[i])
}

var sentenceCount = sentences.length
var wordCount = words.length

// Flesch Reading Ease
var fre = 206.835 - (1.015 * (wordCount / sentenceCount)) - (84.6 * (syllables / wordCount))
fre = Math.max(0, Math.min(100, fre))

// Flesch-Kincaid Grade Level
var fkgl = (0.39 * (wordCount / sentenceCount)) + (11.8 * (syllables / wordCount)) - 15.59
fkgl = Math.max(0, fkgl)

var level, emoji
if (fre >= 90) { level = "Vᴇʀʏ Eᴀsʏ"; emoji = "🟢" }
else if (fre >= 80) { level = "Eᴀsʏ"; emoji = "🟢" }
else if (fre >= 70) { level = "Fᴀɪʀʟʏ Eᴀsʏ"; emoji = "🟡" }
else if (fre >= 60) { level = "Sᴛᴀɴᴅᴀʀᴅ"; emoji = "🟡" }
else if (fre >= 50) { level = "Fᴀɪʀʟʏ Dɪꜰꜰɪᴄᴜʟᴛ"; emoji = "🟠" }
else if (fre >= 30) { level = "Dɪꜰꜰɪᴄᴜʟᴛ"; emoji = "🔴" }
else { level = "Vᴇʀʏ Dɪꜰꜰɪᴄᴜʟᴛ"; emoji = "🔴" }

var grade = Math.round(fkgl)
var gradeLabel = grade <= 5 ? "Eʟᴇᴍᴇɴᴛᴀʀʏ" : grade <= 8 ? "Mɪᴅᴅʟᴇ Sᴄʜᴏᴏʟ" : grade <= 12 ? "Hɪɢʜ Sᴄʜᴏᴏʟ" : "Cᴏʟʟᴇɢᴇ"

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>📖 Rᴇᴀᴅᴀʙɪʟɪᴛʏ Aɴᴀʟʏsɪs</b>\n\n" +
  emoji + " <b>Lᴇᴠᴇʟ:</b> " + level + "\n" +
  "<b>📊 Fʟᴇsᴄʜ Sᴄᴏʀᴇ:</b> " + fre.toFixed(1) + "/100\n" +
  "<b>🎓 Gʀᴀᴅᴇ Lᴇᴠᴇʟ:</b> " + grade + " (" + gradeLabel + ")\n\n" +
  "<b>📝 Sᴛᴀᴛs:</b>\n" +
  "» Sᴇɴᴛᴇɴᴄᴇs: " + sentenceCount + "\n" +
  "» Wᴏʀᴅs: " + wordCount + "\n" +
  "» Sʏʟʟᴀʙʟᴇs: " + syllables + "\n" +
  "» Aᴠɢ Wᴏʀᴅs/Sᴇɴᴛ: " + (wordCount / sentenceCount).toFixed(1) + "\n" +
  "» Aᴠɢ Sʏʟʟᴀʙʟᴇs/Wᴏʀᴅ: " + (syllables / wordCount).toFixed(1) +
  adsFooter

var buttons = [
  [
    { text: "📖 Aɴᴀʟʏᴢᴇ Aɢᴀɪɴ", callback_data: "/readability" },
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
