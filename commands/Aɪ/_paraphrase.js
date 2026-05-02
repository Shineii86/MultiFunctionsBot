/*CMD
  command: /paraphrase
  help: Paraphrase text using synonym replacement
  need_reply: true
  auto_retry_time: 
  folder: Aɪ

  <<ANSWER
✏️ Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴘᴀʀᴀᴘʜʀᴀsᴇ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /rewrite
  group: 
CMD*/

var text = message.trim()

// Synonym dictionary for common words
var synonyms = {
  "good": ["great", "excellent", "fine", "wonderful", "superb"],
  "bad": ["poor", "terrible", "awful", "dreadful", "unpleasant"],
  "big": ["large", "huge", "enormous", "vast", "massive"],
  "small": ["tiny", "little", "miniature", "compact", "slight"],
  "happy": ["glad", "joyful", "cheerful", "delighted", "pleased"],
  "sad": ["unhappy", "sorrowful", "melancholy", "gloomy", "downcast"],
  "fast": ["quick", "rapid", "swift", "speedy", "hasty"],
  "slow": ["sluggish", "gradual", "unhurried", "leisurely", "languid"],
  "important": ["significant", "crucial", "vital", "essential", "key"],
  "beautiful": ["gorgeous", "stunning", "lovely", "elegant", "charming"],
  "ugly": ["unattractive", "unsightly", "hideous", "plain", "grotesque"],
  "smart": ["intelligent", "clever", "brilliant", "wise", "sharp"],
  "stupid": ["foolish", "ignorant", "dull", "dense", "obtuse"],
  "rich": ["wealthy", "affluent", "prosperous", "opulent", "well-off"],
  "poor": ["impoverished", "destitute", "needy", "broke", "penniless"],
  "strong": ["powerful", "mighty", "robust", "sturdy", "tough"],
  "weak": ["feeble", "frail", "fragile", "delicate", "flimsy"],
  "old": ["ancient", "elderly", "aged", "vintage", "mature"],
  "new": ["fresh", "recent", "modern", "novel", "innovative"],
  "hot": ["warm", "scorching", "blazing", "boiling", "fiery"],
  "cold": ["chilly", "freezing", "frigid", "icy", "frosty"],
  "help": ["assist", "aid", "support", "guide", "facilitate"],
  "make": ["create", "produce", "generate", "construct", "build"],
  "show": ["display", "reveal", "demonstrate", "exhibit", "present"],
  "tell": ["inform", "notify", "communicate", "state", "convey"],
  "think": ["believe", "consider", "ponder", "reflect", "contemplate"],
  "want": ["desire", "wish", "crave", "seek", "aspire"],
  "use": ["utilize", "employ", "apply", "leverage", "harness"],
  "get": ["obtain", "acquire", "receive", "gain", "secure"],
  "give": ["provide", "offer", "supply", "deliver", "present"],
  "say": ["state", "declare", "express", "articulate", "mention"],
  "very": ["extremely", "highly", "greatly", "immensely", "remarkably"],
  "really": ["truly", "genuinely", "indeed", "certainly", "absolutely"],
  "many": ["numerous", "several", "abundant", "plentiful", "ample"],
  "often": ["frequently", "regularly", "commonly", "repeatedly", "habitually"],
  "start": ["begin", "commence", "initiate", "launch", "embark"],
  "end": ["conclude", "finish", "terminate", "complete", "cease"],
  "fix": ["repair", "mend", "resolve", "correct", "rectify"],
  "try": ["attempt", "endeavor", "strive", "aim", "venture"],
  "need": ["require", "demand", "necessitate", "call for", "warrant"],
  "change": ["modify", "alter", "adjust", "transform", "revise"],
  "move": ["relocate", "shift", "transfer", "proceed", "advance"],
  "keep": ["retain", "maintain", "preserve", "sustain", "hold"],
  "let": ["allow", "permit", "enable", "authorize", "grant"],
  "seem": ["appear", "look", "feel", "sound", "come across"],
  "find": ["discover", "locate", "uncover", "detect", "identify"]
}

var words = text.split(/\s+/)
var changed = 0

for (var i = 0; i < words.length; i++) {
  var w = words[i]
  var clean = w.toLowerCase().replace(/[^a-z]/g, "")
  var punct = w.replace(/[a-zA-Z]/g, "")

  if (synonyms[clean] && Math.random() > 0.5) {
    var options = synonyms[clean]
    var replacement = options[Math.floor(Math.random() * options.length)]
    // Preserve capitalization
    if (w[0] === w[0].toUpperCase()) {
      replacement = replacement.charAt(0).toUpperCase() + replacement.slice(1)
    }
    words[i] = replacement + punct
    changed++
  }
}

var result = words.join(" ")
var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>✏️ Pᴀʀᴀᴘʜʀᴀsᴇᴅ Tᴇxᴛ</b>\n\n" +
  "<blockquote>" + result + "</blockquote>\n\n" +
  "<b>📊 Cʜᴀɴɢᴇᴅ:</b> " + changed + " ᴡᴏʀᴅs ʀᴇᴘʟᴀᴄᴇᴅ ᴡɪᴛʜ sʏɴᴏɴʏᴍs" +
  adsFooter

var buttons = [
  [
    { text: "✏️ Rᴇᴘʜʀᴀsᴇ Aɢᴀɪɴ", callback_data: "/paraphrase" },
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
