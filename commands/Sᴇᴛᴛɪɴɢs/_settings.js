/*CMD
  command: /settings
  help: User settings panel
  need_reply: false
  auto_retry_time: 
  folder: Sᴇᴛᴛɪɴɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /config
  group: 
CMD*/

var currentLang = User.getProperty("lang", "en")
var currentTz = User.getProperty("timezone", "IST")
var adsFooter = Libs.Helpers.getAdsFooter()

var langNames = {
  "en": "English 🇬🇧", "hi": "हिन्दी 🇮🇳", "es": "Español 🇪🇸",
  "fr": "Français 🇫🇷", "de": "Deutsch 🇩🇪", "ar": "العربية 🇸🇦",
  "pt": "Português 🇧🇷", "ru": "Русский 🇷🇺", "ja": "日本語 🇯🇵",
  "ko": "한국어 🇰🇷", "zh": "中文 🇨🇳", "tr": "Türkçe 🇹🇷",
  "id": "Indonesia 🇮🇩", "it": "Italiano 🇮🇹"
}

var caption = "<b>⚙️ Uꜱᴇʀ Sᴇᴛᴛɪɴɢꜱ</b>\n\n" +
  "<b>🌐 Lᴀɴɢᴜᴀɢᴇ:</b> " + (langNames[currentLang] || currentLang) + "\n" +
  "<b>🕐 Tɪᴍᴇᴢᴏɴᴇ:</b> " + currentTz + "\n\n" +
  "Sᴇʟᴇᴄᴛ ᴀɴ ᴏᴘᴛɪᴏɴ ᴛᴏ ᴄʜᴀɴɢᴇ:" +
  adsFooter

var buttons = [
  [
    { text: "🌐 Lᴀɴɢᴜᴀɢᴇ", callback_data: "/lang" },
    { text: "🕐 Tɪᴍᴇᴢᴏɴᴇ", callback_data: "/timezone" }
  ],
  [
    { text: "📊 Mʏ Sᴛᴀᴛꜱ", callback_data: "/mystats" },
    { text: "🗑️ Dᴇʟᴇᴛᴇ Mʏ Dᴀᴛᴀ", callback_data: "/deldata" }
  ],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
