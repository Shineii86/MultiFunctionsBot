/*CMD
  command: /chatbot
  help: Talk to the built-in AI chatbot
  need_reply: true
  auto_retry_time: 
  folder: Aɪ

  <<ANSWER
🤖 Sᴇɴᴅ ᴀ ᴍᴇꜱꜱᴀɢᴇ ᴛᴏ ᴄʜᴀᴛ ᴡɪᴛʜ ᴛʜᴇ Aɪ ʙᴏᴛ!
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ai /ask
  group: 
CMD*/

var input = message.trim().toLowerCase()
var adsFooter = Libs.Helpers.getAdsFooter()

var greetings = ["hello", "hi", "hey", "hola", "howdy", "sup", "yo", "greetings", "good morning", "good afternoon", "good evening", "good night"]
var farewells = ["bye", "goodbye", "see you", "farewell", "take care", "later", "cya", "gn"]
var thanks = ["thanks", "thank you", "thx", "ty", "appreciate", "grateful"]
var howAreYou = ["how are you", "how r u", "how you doing", "what's up", "whats up", "how's it going"]
var whoAreYou = ["who are you", "what are you", "your name", "what's your name", "who r u"]
var loveYou = ["i love you", "love you", "ily", "i luv u"]

var greetingResponses = [
  "Hᴇʟʟᴏ! 👋 Hᴏᴡ ᴄᴀɴ I ʜᴇʟᴘ ʏᴏᴜ ᴛᴏᴅᴀʏ?",
  "Hᴇʏ ᴛʜᴇʀᴇ! 😊 Wʜᴀᴛ'ꜱ ᴏɴ ʏᴏᴜʀ ᴍɪɴᴅ?",
  "Hɪ! 🌟 Rᴇᴀᴅʏ ᴛᴏ ʜᴇʟᴘ!",
  "Hᴇʟʟᴏ! 🎉 Gʀᴇᴀᴛ ᴛᴏ ꜱᴇᴇ ʏᴏᴜ!",
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
  "Nᴏ ᴘʀᴏʙʟᴇᴍ! 👍"
]
var howAreResponses = [
  "I'ᴍ ᴅᴏɪɴɢ ɢʀᴇᴀᴛ, ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴀꜱᴋɪɴɢ! 😊 Hᴏᴡ ᴀʀᴇ ʏᴏᴜ?",
  "Aʟʟ ꜱʏꜱᴛᴇᴍꜱ ᴏᴘᴇʀᴀᴛɪᴏɴᴀʟ! 🤖 Hᴏᴡ ᴀʙᴏᴜᴛ ʏᴏᴜ?",
  "I'ᴍ ꜰᴀɴᴛᴀꜱᴛɪᴄ! 🌟 Jᴜꜱᴛ ʀᴇᴀᴅʏ ᴛᴏ ʜᴇʟᴘ!"
]
var whoAmIResponses = [
  "I'ᴍ <b>Mᴜʟᴛɪ Fᴜɴᴄᴛɪᴏɴꜱ Bᴏᴛ</b>! 🤖 Yᴏᴜʀ ᴀʟʟ-ɪɴ-ᴏɴᴇ Tᴇʟᴇɢʀᴀᴍ ᴜᴛɪʟɪᴛʏ ʙᴏᴛ ᴡɪᴛʜ 50+ ꜰᴇᴀᴛᴜʀᴇꜱ!",
  "I'ᴍ <b>MᴜʟᴛɪFᴜɴᴄᴛɪᴏɴꜱBᴏᴛ</b>! 🌟 A ᴘᴏᴡᴇʀꜰᴜʟ ᴛᴇʟᴇɢʀᴀᴍ ʙᴏᴛ ᴄʀᴀꜰᴛᴇᴅ ʙʏ Sʜɪɴᴇɪ Nᴏᴜᴢᴇɴ!",
  "I'ᴍ ʏᴏᴜʀ ꜰʀɪᴇɴᴅʟʏ ᴛᴇʟᴇɢʀᴀᴍ ʙᴏᴛ! 🤖 Wɪᴛʜ ᴛᴏᴏʟꜱ ꜰᴏʀ ᴇᴠᴇʀʏᴛʜɪɴɢ!"
]
var loveResponses = [
  "Aᴡᴡ, ᴛʜᴀɴᴋꜱ! 😊💕 I ᴀᴘᴘʀᴇᴄɪᴀᴛᴇ ᴛʜᴇ ʟᴏᴠᴇ!",
  "Tʜᴀᴛ'ꜱ ꜱᴏ ꜱᴡᴇᴇᴛ! 🥰 Yᴏᴜ'ʀᴇ ᴀᴡᴇꜱᴏᴍᴇ ᴛᴏᴏ!",
  "💛 Rɪɢʜᴛ ʙᴀᴄᴋ ᴀᴛ ʏᴏᴜ! 😊"
]

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

function getTimeResponse() {
  var ist = Libs.Helpers.getISTDate()
  var utcH = new Date().getUTCHours()
  var utcM = new Date().getUTCMinutes()
  return "🕐 <b>UTC:</b> " + ("0" + utcH).slice(-2) + ":" + ("0" + utcM).slice(-2) +
    "\n🇮🇳 <b>IST:</b> " + ("0" + ist.getUTCHours()).slice(-2) + ":" + ("0" + ist.getUTCMinutes()).slice(-2)
}

var jokeResponses = [
  "𝙒𝙝𝙮 𝙙𝙤𝙣'𝙩 𝙨𝙘𝙞𝙚𝙣𝙩𝙞𝙨𝙩𝙨 𝙩𝙧𝙪𝙨𝙩 𝙖𝙩𝙤𝙢𝙨? Bᴇᴄᴀᴜꜱᴇ ᴛʜᴇʏ ᴍᴀᴋᴇ ᴜᴘ ᴇᴠᴇʀʏᴛʜɪɴɢ! 😂",
  "𝙒𝙝𝙖𝙩 𝙙𝙤 𝙮𝙤𝙪 𝙘𝙖𝙡𝙡 𝙖 𝙛𝙖𝙠𝙚 𝙣𝙤𝙤𝙙𝙡𝙚? Aɴ <b>ɪᴍᴘᴀꜱᴛᴀ</b>! 🍝😂",
  "𝙒𝙝𝙮 𝙙𝙞𝙙 𝙩𝙝𝙚 𝙨𝙘𝙖𝙧𝙚𝙘𝙧𝙤𝙬 𝙬𝙞𝙣 𝙖𝙣 𝙖𝙬𝙖𝙧𝙙? Bᴇᴄᴀᴜꜱᴇ ʜᴇ ᴡᴀꜱ ᴏᴜᴛꜱᴛᴀɴᴅɪɴɢ ɪɴ ʜɪꜱ ꜰɪᴇʟᴅ! 🌾😂"
]

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

var response = ""

var mathResult = tryMath(input)
if (mathResult !== null && input.match(/\d/)) {
  response = "<b>🔢 Rᴇꜱᴜʟᴛ:</b> <code>" + mathResult + "</code>"
}
else if (input.indexOf("time") !== -1 || input.indexOf("date") !== -1 || input.indexOf("day") !== -1) {
  response = getTimeResponse()
}
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
  response = "I ᴄᴀɴ ʜᴇʟᴘ ᴡɪᴛʜ ʟᴏᴛꜱ ᴏꜰ ᴛʜɪɴɢꜱ! 🌟\n\nTʀʏ /help ᴛᴏ ꜱᴇᴇ ᴀʟʟ ᴍʏ ᴄᴏᴍᴍᴀɴᴅꜱ, ᴏʀ ᴀꜱᴋ ᴍᴇ ᴀ Qᴜᴇꜱᴛɪᴏɴ!"
}
else if (input.match(/\?$/)) {
  response = randomPick([
    "Tʜᴀᴛ'ꜱ ᴀ ɢʀᴇᴀᴛ Qᴜᴇꜱᴛɪᴏɴ! 🤔 Lᴇᴛ ᴍᴇ ᴛʜɪɴᴋ...",
    "Hᴍᴍ, ɪɴᴛᴇʀᴇꜱᴛɪɴɢ Qᴜᴇꜱᴛɪᴏɴ! 💭",
    "I'ᴅ ʟᴏᴠᴇ ᴛᴏ ᴀɴꜱᴡᴇʀ ᴛʜᴀᴛ! Tʀʏ ᴜꜱɪɴɢ ꜱᴘᴇᴄɪꜰɪᴄ ᴄᴏᴍᴍᴀɴᴅꜱ ꜰᴏʀ ʙᴇᴛᴛᴇʀ ʜᴇʟᴘ.",
    "Gᴏᴏᴅ Qᴜᴇꜱᴛɪᴏɴ! 🌟 Cʜᴇᴄᴋ /help ꜰᴏʀ ᴍʏ ꜰᴜʟʟ ᴄᴀᴘᴀʙɪʟɪᴛɪᴇꜱ!"
  ])
}
else if (input.length < 3) {
  response = "🤔 Cᴏᴜʟᴅ ʏᴏᴜ ꜱᴀʏ ᴍᴏʀᴇ? I'ᴅ ʟᴏᴠᴇ ᴛᴏ ʜᴇʟᴘ!"
}
else {
  response = randomPick([
    "I ᴜɴᴅᴇʀꜱᴛᴀɴᴅ! 🤔 Tᴇʟʟ ᴍᴇ ᴍᴏʀᴇ ᴏʀ ᴜꜱᴇ /help ꜰᴏʀ ꜱᴘᴇᴄɪꜰɪᴄ ᴛᴏᴏʟꜱ.",
    "Iɴᴛᴇʀᴇꜱᴛɪɴɢ! 💭 Iꜰ ʏᴏᴜ ɴᴇᴇᴅ ꜱᴘᴇᴄɪꜰɪᴄ ʜᴇʟᴘ, ᴛʀʏ /help.",
    "I ʜᴇᴀʀ ʏᴏᴜ! 😊 Cʜᴇᴄᴋ ᴏᴜᴛ /help ꜰᴏʀ ᴀʟʟ ᴍʏ ꜰᴇᴀᴛᴜʀᴇꜱ!",
    "Gᴏᴛ ɪᴛ! 🌟 Iꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀ ꜱᴘᴇᴄɪꜰɪᴄ ᴛᴀꜱᴋ, ᴜꜱᴇ ᴏɴᴇ ᴏꜰ ᴍʏ ᴄᴏᴍᴍᴀɴᴅꜱ!",
    "Tʜᴀɴᴋꜱ ꜰᴏʀ ꜱʜᴀʀɪɴɢ! 😊 I'ᴍ ʜᴇʀᴇ ɪꜰ ʏᴏᴜ ɴᴇᴇᴅ ᴀɴʏᴛʜɪɴɢ!",
    "Hᴍᴍ, ɪɴᴛᴇʀᴇꜱᴛɪɴɢ! 💡 Tʀʏ /tools ꜰᴏʀ ᴀʟʟ ᴍʏ ᴜᴛɪʟɪᴛɪᴇꜱ!"
  ])
}

var caption = "<b>🤖 Aɪ Cʜᴀᴛʙᴏᴛ</b>\n\n" + response + "\n\n" +
  "<i>💡 Tɪᴘ: I ᴄᴀɴ ʜᴀɴᴅʟᴇ ɢʀᴇᴇᴛɪɴɢꜱ, ᴍᴀᴛʜ, ᴛɪᴍᴇ, Qᴜᴇꜱᴛɪᴏɴꜱ, ᴀɴᴅ ᴍᴏʀᴇ!</i>" +
  adsFooter

var buttons = [
  [
    { text: "🤖 Tᴀʟᴋ Aɢᴀɪɴ", callback_data: "/chatbot" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
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
