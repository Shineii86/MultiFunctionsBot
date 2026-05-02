/*CMD
  command: /wordgame
  help: Word scramble game
  need_reply: false
  auto_retry_time: 
  folder: Gᴀᴍᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /scramble
  group: 
CMD*/

var words = [
  "python", "javascript", "telegram", "computer", "keyboard", "internet",
  "program", "algorithm", "database", "network", "browser", "software",
  "developer", "function", "variable", "constant", "library", "framework",
  "application", "security", "encryption", "firewall", "bandwidth", "protocol"
]

var word = words[Math.floor(Math.random() * words.length)]
var scrambled = word.split("")
for (var i = scrambled.length - 1; i > 0; i--) {
  var j = Math.floor(Math.random() * (i + 1))
  var temp = scrambled[i]; scrambled[i] = scrambled[j]; scrambled[j] = temp
}
scrambled = scrambled.join("")

User.setProperty("scrambleAnswer", word, "string")

var caption = "<b>🔤 Wᴏʀᴅ Sᴄʀᴀᴍʙʟᴇ</b>\n\n" +
  "Uɴsᴄʀᴀᴍʙʟᴇ ᴛʜɪs ᴡᴏʀᴅ:\n\n" +
  "<b><code>" + scrambled.toUpperCase() + "</code></b>\n\n" +
  "<b>Hɪɴᴛ:</b> " + word.length + " ʟᴇᴛᴛᴇʀꜱ"

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [
    [
      { text: "💡 Rᴇᴠᴇᴀʟ", callback_data: "revealScramble" },
      { text: "🔤 Nᴇxᴛ", callback_data: "/wordgame" }
    ],
    [{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]
  ]}
})
