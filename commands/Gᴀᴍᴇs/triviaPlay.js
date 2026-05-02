/*CMD
  command: triviaPlay
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Gᴀᴍᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var category = params || "random"
var adsFooter = Libs.Helpers.getAdsFooter()

// Trivia questions bank
var questions = {
  "science": [
    { q: "What planet is known as the Red Planet?", a: ["Mars", "Venus", "Jupiter", "Saturn"], c: 0 },
    { q: "What is the chemical symbol for gold?", a: ["Au", "Ag", "Fe", "Cu"], c: 0 },
    { q: "How many bones are in the human body?", a: ["206", "208", "204", "210"], c: 0 },
    { q: "What is the speed of light in km/s?", a: ["300,000", "150,000", "500,000", "200,000"], c: 0 },
    { q: "What gas do plants absorb?", a: ["CO2", "O2", "N2", "H2"], c: 0 }
  ],
  "history": [
    { q: "Who was the first President of the USA?", a: ["George Washington", "John Adams", "Thomas Jefferson", "Benjamin Franklin"], c: 0 },
    { q: "In which year did World War II end?", a: ["1945", "1944", "1946", "1943"], c: 0 },
    { q: "Who built the Great Wall of China?", a: ["Qin Shi Huang", "Kublai Khan", "Genghis Khan", "Sun Tzu"], c: 0 },
    { q: "What year did the Titanic sink?", a: ["1912", "1914", "1910", "1916"], c: 0 }
  ],
  "pop_culture": [
    { q: "Who played Iron Man in the MCU?", a: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"], c: 0 },
    { q: "What is the best-selling video game of all time?", a: ["Minecraft", "Tetris", "GTA V", "Wii Sports"], c: 0 },
    { q: "Who sang 'Shape of You'?", a: ["Ed Sheeran", "Justin Bieber", "Shawn Mendes", "Bruno Mars"], c: 0 }
  ],
  "sports": [
    { q: "How many players are on a soccer team?", a: ["11", "10", "12", "9"], c: 0 },
    { q: "Which country won the 2022 FIFA World Cup?", a: ["Argentina", "France", "Brazil", "Germany"], c: 0 },
    { q: "How many Grand Slam titles does Serena Williams have?", a: ["23", "22", "24", "21"], c: 0 }
  ],
  "technology": [
    { q: "Who founded Apple?", a: ["Steve Jobs", "Bill Gates", "Elon Musk", "Jeff Bezos"], c: 0 },
    { q: "What does HTML stand for?", a: ["HyperText Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "HyperText Modern Language"], c: 0 },
    { q: "What year was the first iPhone released?", a: ["2007", "2006", "2008", "2005"], c: 0 }
  ]
}

var pool = questions[category] || questions["science"]
if (!pool) {
  var allKeys = Object.keys(questions)
  pool = questions[allKeys[Math.floor(Math.random() * allKeys.length)]]
}

var q = pool[Math.floor(Math.random() * pool.length)]
var correct = q.a[q.c]

// Shuffle answers
var shuffled = q.a.slice()
for (var i = shuffled.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1))
  var temp = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = temp
}

var correctIdx = shuffled.indexOf(correct)
var emojis = ["🇦", "🇧", "🇨", "🇩"]

var caption = "<b>🎯 Tʀɪᴠɪᴀ Qᴜᴇꜱᴛɪᴏɴ</b>\n\n" +
  "<b>" + q.q + "</b>\n\n"
for (var i = 0; i < shuffled.length; i++) {
  caption += emojis[i] + " " + shuffled[i] + "\n"
}

// Store correct answer
User.setProperty("triviaAnswer", correctIdx, "integer")

var buttons = []
var row = []
for (var i = 0; i < shuffled.length; i++) {
  row.push({ text: emojis[i], callback_data: "triviaAnswer " + i + " " + correctIdx })
}
buttons.push(row)
buttons.push([
  { text: "🎯 Nᴇxᴛ Qᴜᴇꜱᴛɪᴏɴ", callback_data: "triviaPlay " + category },
  { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
])

Bot.sendMessage(caption + adsFooter, {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: buttons }
})
