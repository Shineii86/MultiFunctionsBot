/*CMD
  command: /plagiarism
  help: Check text similarity and repetition
  need_reply: true
  auto_retry_time: 
  folder: Aɪ

  <<ANSWER
🔍 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴄʜᴇᴄᴋ ꜰᴏʀ ʀᴇᴘᴇᴛɪᴛɪᴏɴ ᴀɴᴅ sɪᴍɪʟᴀʀɪᴛʏ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /duplicate
  group: 
CMD*/

var text = message.trim()
var sentences = text.match(/[^.!?]+[.!?]+/g) || [text]
var words = text.toLowerCase().split(/\s+/)

// Check for duplicate sentences
var duplicates = []
var seen = {}
for (var i = 0; i < sentences.length; i++) {
  var s = sentences[i].trim().toLowerCase()
  if (s.length > 10) {
    if (seen[s]) {
      duplicates.push(sentences[i].trim())
    }
    seen[s] = true
  }
}

// Check for repeated phrases (2-grams, 3-grams)
var bigrams = {}
var trigrams = {}
var repeatedPhrases = []

for (var i = 0; i < words.length - 1; i++) {
  var bg = words[i] + " " + words[i + 1]
  if (bg.trim().length > 4) {
    bigrams[bg] = (bigrams[bg] || 0) + 1
  }
}
for (var i = 0; i < words.length - 2; i++) {
  var tg = words[i] + " " + words[i + 1] + " " + words[i + 2]
  if (tg.trim().length > 8) {
    trigrams[tg] = (trigrams[tg] || 0) + 1
  }
}

// Find repeated bigrams
var repeatedBg = []
for (var bg in bigrams) {
  if (bigrams[bg] > 2) {
    repeatedBg.push(bg + " (×" + bigrams[bg] + ")")
  }
}

// Word frequency analysis (for keyword density)
var wordFreq = {}
for (var i = 0; i < words.length; i++) {
  var w = words[i].replace(/[^a-z0-9]/g, "")
  if (w.length > 3) {
    wordFreq[w] = (wordFreq[w] || 0) + 1
  }
}
var topWords = Object.keys(wordFreq).sort(function(a, b) { return wordFreq[b] - wordFreq[a] }).slice(0, 5)

var adsFooter = Libs.Helpers.getAdsFooter()
var issues = 0

var caption = "<b>🔍 Tᴇxᴛ Aɴᴀʟʏsɪs Rᴇᴘᴏʀᴛ</b>\n\n"

// Duplicate sentences
if (duplicates.length > 0) {
  issues += duplicates.length
  caption += "<b>❌ Dᴜᴘʟɪᴄᴀᴛᴇ Sᴇɴᴛᴇɴᴄᴇs (" + duplicates.length + "):</b>\n"
  for (var i = 0; i < Math.min(3, duplicates.length); i++) {
    caption += "» <i>" + duplicates[i].substring(0, 80) + "...</i>\n"
  }
  caption += "\n"
}

// Repeated phrases
if (repeatedBg.length > 0) {
  issues += repeatedBg.length
  caption += "<b>⚠️ Rᴇᴘᴇᴀᴛᴇᴅ Pʜʀᴀsᴇs:</b>\n"
  for (var i = 0; i < Math.min(5, repeatedBg.length); i++) {
    caption += "» " + repeatedBg[i] + "\n"
  }
  caption += "\n"
}

// Keyword density
caption += "<b>📊 Kᴇʏᴡᴏʀᴅ Dᴇɴsɪᴛʏ:</b>\n"
for (var i = 0; i < topWords.length; i++) {
  var w = topWords[i]
  var density = ((wordFreq[w] / words.length) * 100).toFixed(1)
  caption += "» <b>" + w + "</b>: " + wordFreq[w] + "x (" + density + "%)\n"
}

// Overall score
var originalityScore = Math.max(0, 100 - (issues * 10))
var grade = originalityScore >= 90 ? "🟢 Exᴄᴇʟʟᴇɴᴛ" : originalityScore >= 70 ? "🟡 Gᴏᴏᴅ" : originalityScore >= 50 ? "🟠 Fᴀɪʀ" : "🔴 Nᴇᴇᴅs Iᴍᴘʀᴏᴠᴇᴍᴇɴᴛ"

caption += "\n<b>🎯 Oʀɪɢɪɴᴀʟɪᴛʏ Sᴄᴏʀᴇ:</b> " + originalityScore + "% " + grade
caption += adsFooter

var buttons = [
  [
    { text: "🔍 Aɴᴀʟʏᴢᴇ Aɢᴀɪɴ", callback_data: "/plagiarism" },
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
