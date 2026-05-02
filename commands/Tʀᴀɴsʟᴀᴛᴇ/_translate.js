/*CMD
  command: /translate
  help: 
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

// Bot Advertising
var ads = [
  "@MaximXEmojis - Dive into a collection of expressive emojis for every mood! Join now and add flair to your conversations.",
  "@MaximXSticker - Discover vibrant and diverse sticker packs to enhance your messaging experience. Join us for a visual delight!",
  "@MaximXBots - Engage with cutting-edge bots designed for fun, utility, and more. Join the bot revolution and elevate your Telegram experience!",
  "@MaximXWallpaper - Immerse yourself in a gallery of stunning wallpapers to revamp your device's look. Join for a daily dose of aesthetic inspiration.",
  "@MaximXIcons - Upgrade your profile with unique and stylish icons. Join now and make your profile stand out!",
  "@MaximXAnime - Dive into the world of anime with curated recommendations and community discussions. Join us and elevate your anime experience!"
]
var randomAd = ads[Math.floor(Math.random() * ads.length)]

// Bot Caption Message
var caption = `<b>🌍 Sᴇʟᴇᴄᴛ A Lᴀɴɢᴜᴀɢᴇ Tᴏ Tʀᴀɴsʟᴀᴛᴇ To</b> 

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

// Bot Menu Buttons
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

// Check If The Message Exists
if (request.message && request.message.message_id) {
  Api.editMessageText({
    // chat_id: request.chat.id,
    message_id: request.message.message_id,
    text: caption,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: buttons }
  })
} else {
  Api.sendMessage({
    chat_id: request.chat.id,
    text: caption,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: buttons }
  })
}

