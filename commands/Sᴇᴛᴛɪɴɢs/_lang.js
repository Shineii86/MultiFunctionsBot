/*CMD
  command: /lang
  help: Set your preferred language
  need_reply: false
  auto_retry_time: 
  folder: Sᴇᴛᴛɪɴɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /language
  group: 
CMD*/

var currentLang = User.getProperty("lang", "en")
var adsFooter = Libs.Helpers.getAdsFooter()

var languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "id", name: "Indonesia", flag: "🇮🇩" },
  { code: "it", name: "Italiano", flag: "🇮🇹" }
]

var buttons = []
for (var i = 0; i < languages.length; i += 2) {
  var row = []
  var lang1 = languages[i]
  var label1 = lang1.flag + " " + lang1.name
  if (lang1.code === currentLang) label1 = "✅ " + label1
  row.push({ text: label1, callback_data: "setLang " + lang1.code })

  if (i + 1 < languages.length) {
    var lang2 = languages[i + 1]
    var label2 = lang2.flag + " " + lang2.name
    if (lang2.code === currentLang) label2 = "✅ " + label2
    row.push({ text: label2, callback_data: "setLang " + lang2.code })
  }
  buttons.push(row)
}
buttons.push([
  { text: "◁ Bᴀᴄᴋ", callback_data: "/settings" },
  { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
])

Libs.Helpers.editOrSend({
  text: "<b>🌐 Lᴀɴɢᴜᴀɢᴇ Sᴇᴛᴛɪɴɢꜱ</b>\n\n" +
    "<b>Cᴜʀʀᴇɴᴛ:</b> " + currentLang.toUpperCase() + "\n\n" +
    "Sᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴘʀᴇꜰᴇʀʀᴇᴅ ʟᴀɴɢᴜᴀɢᴇ:" +
    adsFooter,
  reply_markup: { inline_keyboard: buttons }
})
