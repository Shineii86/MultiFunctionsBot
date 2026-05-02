/*CMD
  command: /chatbot
  help: Talk to the built-in AI chatbot
  need_reply: true
  auto_retry_time: 
  folder: Aɪ

  <<ANSWER
🤖 Sᴇɴᴅ ᴀ ᴍᴇssᴀɢᴇ ᴛᴏ ᴄʜᴀᴛ ᴡɪᴛʜ ᴛʜᴇ Aɪ ʙᴏᴛ!
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ai /ask
  group: 
CMD*/

var input = message.trim().toLowerCase()
var adsFooter = Libs.Helpers.getAdsFooter()

// Greeting patterns
var greetings = ["hello", "hi", "hey", "hola", "howdy", "sup", "yo", "greetings", "good morning", "good afternoon", "good evening", "good night"]
var farewells = ["bye", "goodbye", "see you", "farewell", "take care", "later", "cya", "gn"]
var thanks = ["thanks", "thank you", "thx", "ty", "appreciate", "grateful"]
var howAreYou = ["how are you", "how r u", "how you doing", "what's up", "whats up", "how's it going"]
var whoAreYou = ["who are you", "what are you", "your name", "what's your name", "who r u"]
var loveYou = ["i love you", "love you", "ily", "i luv u"]

// Response pools
var greetingResponses = [
  "Hᴇʟʟᴏ! 👋 Hᴏᴡ ᴄᴀɴ I ʜᴇʟᴘ ʏᴏᴜ ᴛᴏᴅᴀʏ?",
  "Hᴇʏ ᴛʜᴇʀᴇ! 😊 Wʜᴀᴛ's ᴏɴ ʏᴏᴜʀ ᴍɪɴᴅ?",
  "Hɪ! 🌟 Rᴇᴀᴅʏ ᴛᴏ ʜᴇʟᴘ!",
  "Hᴇʟʟᴏ! 🎉 Gʀᴇᴀᴛ ᴛᴏ sᴇᴇ ʏᴏᴜ!",
  "Hᴇʏ! 👋 Wʜᴀᴛ ᴄᴀɴ I ᴅᴏ ꜰᴏʀ ʏᴏᴜ?"
]
var farewellResponses = [
  "Gᴏᴏᴅʙʏᴇ! 👋 Hᴀᴠᴇ ᴀ ᴡᴏɴᴅᴇʀꜰᴜʟ ᴅᴀʏ!",
  "Sᴇᴇ ʏᴏᴜ ʟᴀᴛᴇʀ! 🌟",
  "Bʏᴇ! 😊 Tᴀᴋᴇ ᴄᴀʀᴇ!",
  "Fᴀʀᴇᴡᴇʟʟ! ✨ Uɴᴛɪʟ ɴᴇxᴛ ᴛɪᴍᴇ!"
]
var thanksResponses = [
  "Yᴏᴜ'ʀᴇ ᴡᴇʟᴄᴏᴍᴇ! 😊",
  "Aɴʏᴛɪᴍᴇ! 🌟",
  "Hᴀᴘᴘʏ ᴛᴏ ʜᴇʟᴘ! ✨",
  "Nᴏ ᴘʀᴏʙʟᴇᴍ! 👍",
  "Gʟᴀᴅ I ᴄᴏᴜʟᴅ ʜᴇʟᴘ! 🎉"
]
var howAreResponses = [
  "I'ᴍ ᴅᴏɪɴɢ ɢʀᴇᴀᴛ, ᴛʜᴀɴᴋs ꜰᴏʀ ᴀsᴋɪɴɢ! 😊 Hᴏᴡ ᴀʀᴇ ʏᴏᴜ?",
  "Aʟʟ sʏsᴛᴇᴍs ᴏᴘᴇʀᴀᴛɪᴏɴᴀʟ! 🤖 Hᴏᴡ ᴀʙᴏᴜᴛ ʏᴏᴜ?",
  "I'ᴍ ꜰᴀɴᴛᴀsᴛɪᴄ! 🌟 Jᴜsᴛ ʀᴇᴀᴅʏ ᴛᴏ ʜᴇʟᴘ!",
  "Dᴏɪɴɢ ᴡᴇʟʟ! ✨ Wʜᴀᴛ ᴄᴀɴ I ᴅᴏ ꜰᴏʀ ʏᴏᴜ?"
]
var whoAmIResponses = [
  "I'ᴍ <b>Mᴜʟᴛɪ Fᴜɴᴄᴛɪᴏɴs Bᴏᴛ</b>! 🤖 Yᴏᴜʀ ᴀʟʟ-ɪɴ-ᴏɴᴇ Tᴇʟᴇɢʀᴀᴍ ᴜᴛɪʟɪᴛʏ ʙᴏᴛ ᴡɪᴛʜ 40+ ꜰᴇᴀᴛᴜʀᴇs!",
  "I'ᴍ <b>ᴍᴜʟᴛɪFᴜɴᴄᴛɪᴏɴsBᴏᴛ</b>! 🌟 A ᴘᴏᴡᴇʀꜰᴜʟ ᴛᴇʟᴇɢʀᴀᴍ ʙᴏᴛ ᴄʀᴀꜰᴛᴇᴅ ʙʏ Sʜɪɴᴇɪ Nᴏᴜᴢᴇɴ!",
  "I'ᴍ ʏᴏᴜʀ ꜰʀɪᴇɴᴅʟʏ ᴛᴇʟᴇɢʀᴀᴍ ʙᴏᴛ! 🤖 Wɪᴛʜ ᴛᴏᴏʟs ꜰᴏʀ ᴇᴠᴇʀʏᴛʜɪɴɢ!"
]
var loveResponses = [
  "Aᴡᴡ, ᴛʜᴀɴᴋs! 😊💕 I ᴀᴘᴘʀᴇᴄɪᴀᴛᴇ ᴛʜᴇ ʟᴏᴠᴇ!",
  "Tʜᴀᴛ's sᴏ sᴡᴇᴇᴛ! 🥰 Yᴏᴜ'ʀᴇ ᴀᴡᴇsᴏᴍᴇ ᴛᴏᴏ!",
  "💛 Rɪɢʜᴛ ʙᴀᴄᴋ ᴀᴛ ʏᴏᴜ! 😊",
  "I ᴀᴘᴘʀᴇᴄɪᴀᴛᴇ ɪᴛ! 🌟 Yᴏᴜ'ʀᴇ ᴛʜᴇ ʙᴇsᴛ!"
]

// Math evaluation
function tryMath(text) {
  var mathStr = text.replace(/[^0-9+\-*/().%\s]/g, "").trim()
  if (mathStr.length < 2) return null
  try {
    var result = Function('"use strict"; return (' + mathStr + ')')()
    if (typeof result === "number" && isFinite(result)) {
      return result
    }
  } catch (e) {}
  return null
}

// Time/date response
function getTimeResponse() {
  var now = new Date()
  var utcH = now.getUTCHours()
  var utcM = now.getUTCMinutes()
  var istH = (utcH + 5) % 24
  var istM = utcM + 30
  if (istM >= 60) { istH++; istM -= 60 }
  istH = istH % 24
  return "🕐 Cᴜʀʀᴇɴᴛ UTC Tɪᴍᴇ: <b>" + ("0" + utcH).slice(-2) + ":" + ("0" + utcM).slice(-2) + "</b>\n🇮🇳 IST Tɪᴍᴇ: <b>" + ("0" + istH).slice(-2) + ":" + ("0" + istM).slice(-2) + "</b>"
}

// Joke responses
var jokeResponses = [
  "𝙒𝙝𝙮 𝙙𝙤𝙣'𝙩 𝙨𝙘𝙞𝙚𝙣𝙩𝙞𝙨𝙩𝙨 𝙩𝙧𝙪𝙨𝙩 𝙖𝙩𝙤𝙢𝙨? Bᴇᴄᴀᴜsᴇ ᴛʜᴇʏ ᴍᴀᴋᴇ ᴜᴘ ᴇᴠᴇʀʏᴛʜɪɴɢ! 😂",
  "𝙒𝙝𝙖𝙩 𝙙𝙤 𝙮𝙤𝙪 𝙘𝙖𝙡𝙡 𝙖 𝙛𝙖𝙠𝙚 𝙣𝙤𝙤𝙙𝙡𝙚? Aɴ <b>ɪᴍᴘᴀsᴛᴀ</b>! 🍝😂",
  "𝙒𝙝𝙮 𝙙𝙞𝙙 𝙩𝙝𝙚 𝙨𝙘𝙖𝙧𝙚𝙘𝙧𝙤𝙬 𝙬𝙞𝙣 𝙖𝙣 𝙖𝙬𝙖𝙧𝙙? Bᴇᴄᴀᴜsᴇ ʜᴇ ᴡᴀs ᴏᴜᴛsᴛᴀɴᴅɪɴɢ ɪɴ ʜɪs ꜰɪᴇʟᴅ! 🌾😂",
  "𝙄'𝙢 𝙣𝙤𝙩 𝙡𝙖𝙯𝙮, 𝙄'𝙢 𝙤𝙣 𝙚𝙣𝙚𝙧𝙜𝙮-𝙨𝙖𝙫𝙞𝙣𝙜 𝙢𝙤𝙙𝙚. 🔋😎",
  "𝙏𝙖𝙡𝙠𝙞𝙣𝙜 𝙩𝙤 𝙮𝙤𝙪 𝙞𝙨 𝙢𝙮 𝙛𝙖𝙫𝙤𝙧𝙞𝙩𝙚 𝙩𝙝𝙞𝙣𝙜 𝙩𝙤 𝙙𝙤! 💬😊"
]

// Pick random from array
function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Main logic
var response = ""

// Check for math
var mathResult = tryMath(input)
if (mathResult !== null && input.match(/\d/)) {
  response = "<b>🔢 Rᴇsᴜʟᴛ:</b> <code>" + mathResult + "</code>"
}
// Check for time
else if (input.indexOf("time") !== -1 || input.indexOf("date") !== -1 || input.indexOf("day") !== -1) {
  response = getTimeResponse()
}
// Check patterns
else if (greetings.some(function(g) { return input.indexOf(g) !== -1 })) {
  response = randomPick(greetingResponses)
}
else if (farewells.some(function(f) { return input.indexOf(f) !== -1 })) {
  response = randomPick(farewellResponses)
}
else if (thanks.some(function(t) { return input.indexOf(t) !== -1 })) {
  response = randomPick(thanksResponses)
}
else if (howAreYou.some(function(h) { return input.indexOf(h) !== -1 })) {
  response = randomPick(howAreResponses)
}
else if (whoAreYou.some(function(w) { return input.indexOf(w) !== -1 })) {
  response = randomPick(whoAmIResponses)
}
else if (loveYou.some(function(l) { return input.indexOf(l) !== -1 })) {
  response = randomPick(loveResponses)
}
else if (input.indexOf("joke") !== -1 || input.indexOf("funny") !== -1) {
  response = randomPick(jokeResponses)
}
else if (input.indexOf("help") !== -1) {
  response = "I ᴄᴀɴ ʜᴇʟᴘ ᴡɪᴛʜ ʟᴏᴛs ᴏꜰ ᴛʜɪɴɢs! 🌟\n\nTʀʏ /help ᴛᴏ sᴇᴇ ᴀʟʟ ᴍʏ ᴄᴏᴍᴍᴀɴᴅs, ᴏʀ ᴀsᴋ ᴍᴇ ᴀ ǫᴜᴇsᴛɪᴏɴ!"
}
else if (input.indexOf("bot") !== -1 && (input.indexOf("best") !== -1 || input.indexOf("good") !== -1)) {
  response = "Aᴡᴡ, ʏᴏᴜ'ʀᴇ ᴛʜᴇ ʙᴇsᴛ! 🥰💕 Tʜᴀɴᴋs ꜰᴏʀ ᴛʜᴇ ᴋɪɴᴅ ᴡᴏʀᴅs!"
}
else if (input.match(/\?$/)) {
  var qResponses = [
    "Tʜᴀᴛ's ᴀ ɢʀᴇᴀᴛ ǫᴜᴇsᴛɪᴏɴ! 🤔 Lᴇᴛ ᴍᴇ ᴛʜɪɴᴋ...",
    "Hᴍᴍ, ɪɴᴛᴇʀᴇsᴛɪɴɢ ǫᴜᴇsᴛɪᴏɴ! 💭",
    "I'ᴅ ʟᴏᴠᴇ ᴛᴏ ᴀɴsᴡᴇʀ ᴛʜᴀᴛ ɪɴ ᴅᴇᴘᴛʜ! Tʀʏ ᴜsɪɴɢ sᴘᴇᴄɪꜰɪᴄ ᴄᴏᴍᴍᴀɴᴅs ꜰᴏʀ ʙᴇᴛᴛᴇʀ ʜᴇʟᴘ.",
    "Gᴏᴏᴅ ǫᴜᴇsᴛɪᴏɴ! 🌟 Cʜᴇᴄᴋ /help ꜰᴏʀ ᴍʏ 갱ᴜʟʟ ᴄᴀᴘᴀʙɪʟɪᴛɪᴇs!"
  ]
  response = randomPick(qResponses)
}
else if (input.length < 3) {
  response = "🤔 Cᴏᴜʟᴅ ʏᴏᴜ sᴀʏ ᴍᴏʀᴇ? I'ᴅ ʟᴏᴠᴇ ᴛᴏ ʜᴇʟᴘ!"
}
else {
  // General responses
  var generalResponses = [
    "I ᴜɴᴅᴇʀsᴛᴀɴᴅ! 🤔 Tᴇʟʟ ᴍᴇ ᴍᴏʀᴇ ᴏʀ ᴜsᴇ /help ꜰᴏʀ sᴘᴇᴄɪꜰɪᴄ ᴛᴏᴏʟs.",
    "Iɴᴛᴇʀᴇsᴛɪɴɢ! 💭 Iꜰ ʏᴏᴜ ɴᴇᴇᴅ sᴘᴇᴄɪꜰɪᴄ ʜᴇʟᴘ, ᴛʀʏ /help.",
    "I ʜᴇᴀʀ ʏᴏᴜ! 😊 Cʜᴇᴄᴋ ᴏᴜᴛ /help ꜰᴏʀ ᴀʟʟ ᴍʏ 갱ᴇᴀᴛᴜʀᴇs!",
    "Gᴏᴛ ɪᴛ! 🌟 Iꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀ sᴘᴇᴄɪꜰɪᴄ ᴛᴀsᴋ, ᴜsᴇ ᴏɴᴇ ᴏꜰ ᴍʏ ᴄᴏᴍᴍᴀɴᴅs!",
    "Tʜᴀɴᴋs ꜰᴏʀ sʜᴀʀɪɴɢ! 😊 I'ᴍ ʜᴇʀᴇ ɪꜰ ʏᴏᴜ ɴᴇᴇᴅ ᴀɴʏᴛʜɪɴɢ!",
    "Hᴍᴍ, ɪɴᴛᴇʀᴇsᴛɪɴɢ! 💡 Tʀʏ /tools ꜰᴏʀ ᴀʟʟ ᴍʏ ᴜᴛɪʟɪᴛɪᴇs!"
  ]
  response = randomPick(generalResponses)
}

var caption = "<b>🤖 Aɪ Cʜᴀᴛʙᴏᴛ</b>\n\n" + response + "\n\n" +
  "<i>💡 Tɪᴘ: I ᴄᴀɴ ʜᴀɴᴅʟᴇ ɢʀᴇᴇᴛɪɴɢs, ᴍᴀᴛʜ, ᴛɪᴍᴇ, ǫᴜᴇsᴛɪᴏɴs, ᴀɴᴅ ᴍᴏʀᴇ!</i>" +
  adsFooter

var buttons = [
  [
    { text: "🤖 Tᴀʟᴋ Aɢᴀɪɴ", callback_data: "/chatbot" },
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
