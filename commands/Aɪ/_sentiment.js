/*CMD
  command: /sentiment
  help: Analyze sentiment of text
  need_reply: true
  auto_retry_time: 
  folder: Aɪ

  <<ANSWER
💬 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴀɴᴀʟʏᴢᴇ sᴇɴᴛɪᴍᴇɴᴛ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /mood
  group: 
CMD*/

var text = message.trim().toLowerCase()
var words = text.split(/\s+/)

// Positive and negative word lists
var positive = [
  "good", "great", "awesome", "excellent", "happy", "love", "wonderful",
  "fantastic", "amazing", "beautiful", "best", "brilliant", "cheerful",
  "delightful", "elegant", "fabulous", "glorious", "graceful", "incredible",
  "joyful", "magnificent", "marvelous", "outstanding", "perfect", "pleasant",
  "remarkable", "splendid", "superb", "terrific", "thankful", "thrilled",
  "victorious", "wonderful", "nice", "cool", "fun", "enjoy", "liked",
  "loved", "exciting", "excited", "kind", "generous", "helpful", "hopeful",
  "inspired", "motivated", "proud", "satisfied", "successful", "sweet",
  "thanks", "thank", "yes", "yay", "wow", "super", "wow", "fire", "lit",
  "goat", "king", "queen", "legend", "slay", "based", "chad", "w", "win"
]

var negative = [
  "bad", "terrible", "awful", "horrible", "sad", "hate", "ugly", "worst",
  "boring", "angry", "annoying", "disgusting", "dreadful", "evil", "fearful",
  "ghastly", "horrific", "horrid", "lousy", "miserable", "nasty", "offensive",
  "painful", "poor", "repulsive", "rotten", "rude", "shocking", "stupid",
  "tragic", "unpleasant", "vile", "wicked", "wrong", "dislike", "suck",
  "sucks", "hate", "hated", "boring", "dumb", "fail", "failed", "failure",
  "trash", "garbage", "waste", "cringe", "L", "loss", "lose", "loser",
  "dead", "die", "kill", "hurt", "pain", "cry", "crying", "depressed",
  "depressing", "disappointed", "disappointing", "pathetic", "useless"
]

var posCount = 0
var negCount = 0
var posWords = []
var negWords = []

for (var i = 0; i < words.length; i++) {
  var w = words[i].replace(/[^a-z]/g, "")
  if (positive.indexOf(w) !== -1) {
    posCount++
    if (posWords.indexOf(w) === -1) posWords.push(w)
  }
  if (negative.indexOf(w) !== -1) {
    negCount++
    if (negWords.indexOf(w) === -1) negWords.push(w)
  }
}

var total = posCount + negCount
var score = total > 0 ? ((posCount - negCount) / total * 100).toFixed(0) : 0
var confidence = total > 0 ? Math.min(100, Math.round((total / words.length) * 100 * 3)) : 0

var emoji, label
if (score > 30) { emoji = "😊"; label = "Pᴏsɪᴛɪᴠᴇ" }
else if (score > 10) { emoji = "🙂"; label = "Sʟɪɢʜᴛʟʏ Pᴏsɪᴛɪᴠᴇ" }
else if (score < -30) { emoji = "😢"; label = "Nᴇɢᴀᴛɪᴠᴇ" }
else if (score < -10) { emoji = "😐"; label = "Sʟɪɢʜᴛʟʏ Nᴇɢᴀᴛɪᴠᴇ" }
else { emoji = "😐"; label = "Nᴇᴜᴛʀᴀʟ" }

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = emoji + " <b>Sᴇɴᴛɪᴍᴇɴᴛ Aɴᴀʟʏsɪs</b>\n\n" +
  "<b>🎯 Rᴇsᴜʟᴛ:</b> " + label + "\n" +
  "<b>📊 Sᴄᴏʀᴇ:</b> " + score + "/100\n" +
  "<b>🔍 Cᴏɴꜰɪᴅᴇɴᴄᴇ:</b> " + confidence + "%\n\n" +
  "<b>📈 Dᴇᴛᴀɪʟs:</b>\n" +
  "» ✅ Pᴏsɪᴛɪᴠᴇ ᴡᴏʀᴅs: " + posCount + (posWords.length > 0 ? " (" + posWords.slice(0, 5).join(", ") + ")" : "") + "\n" +
  "» ❌ Nᴇɢᴀᴛɪᴠᴇ ᴡᴏʀᴅs: " + negCount + (negWords.length > 0 ? " (" + negWords.slice(0, 5).join(", ") + ")" : "") + "\n" +
  "» 📝 Tᴏᴛᴀʟ ᴡᴏʀᴅs: " + words.length +
  adsFooter

var buttons = [
  [
    { text: "💬 Aɴᴀʟʏᴢᴇ Aɢᴀɪɴ", callback_data: "/sentiment" },
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
