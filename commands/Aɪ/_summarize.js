/*CMD
  command: /summarize
  help: Summarize long text (extractive, no API needed)
  need_reply: true
  auto_retry_time: 
  folder: Aɪ

  <<ANSWER
📝 Sᴇɴᴅ ᴀ ʟᴏɴɢ ᴛᴇxᴛ ᴛᴏ sᴜᴍᴍᴀʀɪᴢᴇ (ʙᴇsᴛ ᴡɪᴛʜ ᴍᴜʟᴛɪᴘʟᴇ sᴇɴᴛᴇɴᴄᴇs).
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /tldr
  group: 
CMD*/

var text = message.trim()
var sentences = text.match(/[^.!?]+[.!?]+/g) || [text]

if (sentences.length < 3) {
  Bot.sendMessage("<b>📝 Tᴇxᴛ ɪs ᴛᴏᴏ sʜᴏʀᴛ ᴛᴏ sᴜᴍᴍᴀʀɪᴢᴇ.</b>\n\nSᴇɴᴅ ᴀ ʟᴏɴɢᴇʀ ᴛᴇxᴛ ᴡɪᴛʜ ᴍᴜʟᴛɪᴘʟᴇ sᴇɴᴛᴇɴᴄᴇs.", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/summarize" }]] }
  })
  return
}

// Extractive summarization: score sentences by word frequency
var words = text.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/)
var wordFreq = {}
for (var i = 0; i < words.length; i++) {
  var w = words[i]
  if (w.length > 3) {
    wordFreq[w] = (wordFreq[w] || 0) + 1
  }
}

// Score each sentence
var scored = []
for (var i = 0; i < sentences.length; i++) {
  var s = sentences[i].trim()
  if (!s) continue
  var score = 0
  var sWords = s.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/)
  for (var j = 0; j < sWords.length; j++) {
    if (wordFreq[sWords[j]]) score += wordFreq[sWords[j]]
  }
  // Normalize by length to avoid always picking long sentences
  score = sWords.length > 0 ? score / sWords.length : 0
  scored.push({ sentence: s, score: score, index: i })
}

// Sort by score, pick top sentences, then re-sort by original order
scored.sort(function(a, b) { return b.score - a.score })
var count = Math.max(1, Math.ceil(sentences.length * 0.3))
var selected = scored.slice(0, count)
selected.sort(function(a, b) { return a.index - b.index })

var summary = ""
for (var i = 0; i < selected.length; i++) {
  summary += selected[i].sentence.trim() + " "
}
summary = summary.trim()

var adsFooter = Libs.Helpers.getAdsFooter()
var ratio = Math.round((summary.length / text.length) * 100)

var caption = "<b>📝 Tᴇxᴛ Sᴜᴍᴍᴀʀʏ</b>\n\n" +
  "<blockquote>" + summary + "</blockquote>\n\n" +
  "<b>📊 Sᴛᴀᴛs:</b>\n" +
  "» Oʀɪɢɪɴᴀʟ: " + text.length + " ᴄʜᴀʀs, " + sentences.length + " sᴇɴᴛᴇɴᴄᴇs\n" +
  "» Sᴜᴍᴍᴀʀʏ: " + summary.length + " ᴄʜᴀʀs, " + selected.length + " sᴇɴᴛᴇɴᴄᴇs\n" +
  "» Rᴇᴅᴜᴄᴇᴅ ᴛᴏ: " + ratio + "%" +
  adsFooter

var buttons = [
  [
    { text: "📝 Sᴜᴍᴍᴀʀɪᴢᴇ Aɢᴀɪɴ", callback_data: "/summarize" },
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
