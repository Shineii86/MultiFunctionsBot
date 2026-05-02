/*CMD
  command: /keyword
  help: Extract keywords from text
  need_reply: true
  auto_retry_time: 
  folder: Aɪ

  <<ANSWER
🔑 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴇxᴛʀᴀᴄᴛ ᴋᴇʏᴡᴏʀᴅs ꜰʀᴏᴍ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /keywords
  group: 
CMD*/

var text = message.trim()
var words = text.toLowerCase().replace(/[^a-z0-9\s]/g, "").split(/\s+/)

// Stop words (common words to exclude)
var stopWords = [
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "i",
  "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
  "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
  "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
  "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
  "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
  "people", "into", "year", "your", "good", "some", "could", "them", "see",
  "other", "than", "then", "now", "look", "only", "come", "its", "over",
  "think", "also", "back", "after", "use", "two", "how", "our", "work",
  "first", "well", "way", "even", "new", "want", "because", "any", "these",
  "give", "day", "most", "us", "is", "are", "was", "were", "been", "being",
  "has", "had", "did", "does", "am", "said", "each", "may", "should",
  "very", "much", "too", "here", "where", "why", "how", "still", "those",
  "such", "own", "same", "made", "found", "long", "great", "before", "must",
  "through", "being", "both", "between", "never", "down", "should", "while"
]

// Count word frequencies
var freq = {}
for (var i = 0; i < words.length; i++) {
  var w = words[i]
  if (w.length > 2 && stopWords.indexOf(w) === -1) {
    freq[w] = (freq[w] || 0) + 1
  }
}

// Sort by frequency
var sorted = Object.keys(freq).sort(function(a, b) { return freq[b] - freq[a] })
var topKeywords = sorted.slice(0, 15)

var adsFooter = Libs.Helpers.getAdsFooter()

var keywordList = ""
for (var i = 0; i < topKeywords.length; i++) {
  var kw = topKeywords[i]
  var bar = ""
  var barLen = Math.min(10, freq[kw])
  for (var j = 0; j < barLen; j++) bar += "█"
  keywordList += (i + 1) + ". <b>" + kw + "</b> — " + freq[kw] + "x " + bar + "\n"
}

var caption = "<b>🔑 Kᴇʏᴡᴏʀᴅ Exᴛʀᴀᴄᴛᴏʀ</b>\n\n" +
  "<b>📊 Tᴏᴘ Kᴇʏᴡᴏʀᴅs:</b>\n" + keywordList + "\n" +
  "<b>📝 Tᴏᴛᴀʟ ᴡᴏʀᴅs:</b> " + words.length + " | <b>Uɴɪǫᴜᴇ:</b> " + Object.keys(freq).length +
  adsFooter

var buttons = [
  [
    { text: "🔑 Exᴛʀᴀᴄᴛ Aɢᴀɪɴ", callback_data: "/keyword" },
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
