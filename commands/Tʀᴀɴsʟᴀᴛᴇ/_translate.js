/*CMD
  command: /translate
  help: Translate text to another language
  need_reply: false
  auto_retry_time: 
  folder: Tʀᴀɴsʟᴀᴛᴇ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>🌍 Sᴇʟᴇᴄᴛ A Lᴀɴɢᴜᴀɢᴇ Tᴏ Tʀᴀɴsʟᴀᴛᴇ Tᴏ</b>" + adsFooter

var buttons = [
  [
    { text: "🇬🇧 English", callback_data: "setLang en" },
    { text: "🇪🇸 Español", callback_data: "setLang es" },
    { text: "🇫🇷 Français", callback_data: "setLang fr" }
  ],
  [
    { text: "🇩🇪 Deutsch", callback_data: "setLang de" },
    { text: "🇷🇺 Русский", callback_data: "setLang ru" },
    { text: "🇵🇹 Português", callback_data: "setLang pt" }
  ],
  [
    { text: "🇨🇳 中文", callback_data: "setLang zh" },
    { text: "🇯🇵 日本語", callback_data: "setLang ja" },
    { text: "🇰🇷 한국어", callback_data: "setLang ko" }
  ],
  [
    { text: "🇮🇹 Italiano", callback_data: "setLang it" },
    { text: "🇳🇱 Nederlands", callback_data: "setLang nl" },
    { text: "🇹🇷 Türkçe", callback_data: "setLang tr" }
  ],
  [
    { text: "🇸🇦 العربية", callback_data: "setLang ar" },
    { text: "🇮🇳 हिन्दी", callback_data: "setLang hi" },
    { text: "🇮🇩 Bahasa", callback_data: "setLang id" }
  ],
  [
    { text: "🇵🇱 Polski", callback_data: "setLang pl" },
    { text: "🇺🇦 Українська", callback_data: "setLang uk" },
    { text: "🇻🇳 Tiếng Việt", callback_data: "setLang vi" }
  ],
  [
    { text: "🇹🇭 ไทย", callback_data: "setLang th" },
    { text: "🇬🇷 Ελληνικά", callback_data: "setLang el" },
    { text: "🇨🇿 Čeština", callback_data: "setLang cs" }
  ],
  [
    { text: "◁", callback_data: "/tools" },
    { text: "○", callback_data: "/start" },
    { text: "✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
