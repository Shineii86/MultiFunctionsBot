/*CMD
  command: onText
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Tʀᴀɴsʟᴀᴛᴇ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var waitingForText = User.getProperty("waitingForText")

if (!waitingForText) {
  return // Ignore if the user didn't select a language first
}

var text = encodeURIComponent(message)
var targetLang = User.getProperty("selectedLang")

// Enable text waiting mode
User.setProperty("waitingForText", true, "boolean")

if (!targetLang) {
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
  var caption = `<b>❌ Pʟᴇᴀsᴇ Sᴇʟᴇᴄᴛ A Lᴀɴɢᴜᴀɢᴇ Fɪʀsᴛ.</b> 

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

  // Bot Menu Buttons
  var buttons = [
    [{ text: "🌐 Sᴇᴛ Lᴀɴɢᴜᴀɢᴇ", callback_data: "/translate" }],
    [
      { text: "◁", callback_data: "/tools" },
      { text: "○", callback_data: "/start" },
      { text: "✕", callback_data: "/close" }
    ]
  ]

  // Check If The Message Exists
  if (request.message && request.message.message_id) {
    Api.editMessageText({
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
  return
}

var url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${text}`

HTTP.get({
  url: url,
  success: "onTranslateResult"
})

