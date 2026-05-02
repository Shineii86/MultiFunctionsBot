/*CMD
  command: /grammar
  help: Basic grammar and spelling check
  need_reply: true
  auto_retry_time: 
  folder: Aɪ

  <<ANSWER
✍️ Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴄʜᴇᴄᴋ ꜰᴏʀ ɢʀᴀᴍᴍᴀʀ ɪssᴜᴇs.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /spellcheck
  group: 
CMD*/

var text = message.trim()
var issues = []
var suggestions = []

// Common misspellings
var misspellings = {
  "teh": "the", "adn": "and", "taht": "that", "thier": "their",
  "recieve": "receive", "seperate": "separate", "occured": "occurred",
  "untill": "until", "definately": "definitely", "accomodate": "accommodate",
  "occurence": "occurrence", "wierd": "weird", "freind": "friend",
  "beleive": "believe", "acheive": "achieve", "neccessary": "necessary",
  "succesful": "successful", "begining": "beginning", "existance": "existence",
  "occurance": "occurrence", "independant": "independent", "goverment": "government",
  "enviroment": "environment", "arguement": "argument", "jelous": "jealous",
  "knowlege": "knowledge", "liason": "liaison", "millenium": "millennium",
  "noticable": "noticeable", "persistant": "persistent", "questionaire": "questionnaire",
  "recomend": "recommend", "refered": "referred", "rythm": "rhythm",
  "tounge": "tongue", "truely": "truly", "vaccuum": "vacuum",
  "whereever": "wherever", "wich": "which", "writting": "writing",
  "alot": "a lot", "infact": "in fact", "incase": "in case",
  "inorder": "in order", "aswell": "as well", "atleast": "at least",
  "eachother": "each other", "noone": "no one", "alright": "all right",
  "dont": "don't", "doesnt": "doesn't", "didnt": "didn't",
  "isnt": "isn't", "wasnt": "wasn't", "wont": "won't",
  "cant": "can't", "couldnt": "couldn't", "shouldnt": "shouldn't",
  "wouldnt": "wouldn't", "havent": "haven't", "hasnt": "hasn't",
  "arent": "aren't", "werent": "weren't", "hadnt": "hadn't"
}

// Grammar patterns to check
var words = text.split(/\s+/)

// Check for misspellings
for (var i = 0; i < words.length; i++) {
  var clean = words[i].toLowerCase().replace(/[^a-z']/g, "")
  if (misspellings[clean]) {
    issues.push("❌ <b>\"" + words[i] + "\"</b> → <b>\"" + misspellings[clean] + "\"</b>")
    suggestions.push(misspellings[clean])
  }
}

// Check for double spaces
if (text.indexOf("  ") !== -1) {
  issues.push("⚠️ Dᴏᴜʙʟᴇ sᴘᴀᴄᴇs ꜰᴏᴜɴᴅ")
}

// Check for missing capitalization at start
if (text.length > 0 && text[0] !== text[0].toUpperCase() && text[0].match(/[a-z]/)) {
  issues.push("⚠️ Sᴇɴᴛᴇɴᴄᴇ sʜᴏᴜʟᴅ sᴛᴀʀᴛ ᴡɪᴛʜ ᴄᴀᴘɪᴛᴀʟ ʟᴇᴛᴛᴇʀ")
}

// Check for repeated words
for (var i = 1; i < words.length; i++) {
  if (words[i].toLowerCase() === words[i - 1].toLowerCase() && words[i].length > 2) {
    issues.push("⚠️ Rᴇᴘᴇᴀᴛᴇᴅ ᴡᴏʀᴅ: <b>\"" + words[i] + "\"</b>")
  }
}

// Check for missing period at end
var lastChar = text.charAt(text.length - 1)
if (text.length > 20 && lastChar !== "." && lastChar !== "!" && lastChar !== "?" && lastChar !== ":") {
  issues.push("⚠️ Mɪssɪɴɢ ᴘᴇʀɪᴏᴅ ᴀᴛ ᴇɴᴅ ᴏꜰ sᴇɴᴛᴇɴᴄᴇ")
}

// Check common grammar mistakes
var lowerText = text.toLowerCase()
if (lowerText.indexOf(" your welcome") !== -1) {
  issues.push("❌ <b>\"your welcome\"</b> → <b>\"you're welcome\"</b>")
}
if (lowerText.indexOf(" their is") !== -1 || lowerText.indexOf(" their are") !== -1) {
  issues.push("❌ <b>\"their\"</b> → <b>\"there\"</b> (location, not possession)")
}
if (lowerText.indexOf(" would of") !== -1) {
  issues.push("❌ <b>\"would of\"</b> → <b>\"would have\"</b>")
}
if (lowerText.indexOf(" could of") !== -1) {
  issues.push("❌ <b>\"could of\"</b> → <b>\"could have\"</b>")
}
if (lowerText.indexOf(" should of") !== -1) {
  issues.push("❌ <b>\"should of\"</b> → <b>\"should have\"</b>")
}
if (lowerText.indexOf(" its a ") !== -1 || lowerText.match(/^its a /)) {
  issues.push("⚠️ <b>\"its\"</b> → <b>\"it's\"</b> (contraction of \"it is\")")
}

var adsFooter = Libs.Helpers.getAdsFooter()

if (issues.length === 0) {
  var caption = "<b>✅ Gʀᴀᴍᴍᴀʀ Cʜᴇᴄᴋ Pᴀssᴇᴅ!</b>\n\n" +
    "Nᴏ ɪssᴜᴇs ꜰᴏᴜɴᴅ ɪɴ ʏᴏᴜʀ ᴛᴇxᴛ. Gʀᴇᴀᴛ ᴊᴏʙ! 🎉" +
    adsFooter
} else {
  var caption = "<b>✍️ Gʀᴀᴍᴍᴀʀ Cʜᴇᴄᴋ Rᴇsᴜʟᴛs</b>\n\n" +
    "<b>🔍 Fᴏᴜɴᴅ " + issues.length + " ɪssᴜᴇ(s):</b>\n\n"
  for (var i = 0; i < issues.length; i++) {
    caption += issues[i] + "\n"
  }
  caption += adsFooter
}

var buttons = [
  [
    { text: "✍️ Cʜᴇᴄᴋ Aɢᴀɪɴ", callback_data: "/grammar" },
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
