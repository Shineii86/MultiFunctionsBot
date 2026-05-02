/*CMD
  command: /shortener
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Sʜᴏʀᴛᴇɴᴇʀ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /short
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
var caption = `<b>🔗 Sᴇɴᴅ Aɴʏ Lᴏɴɢ Lɪɴᴋ Aɴᴅ I'ʟʟ Sʜᴏʀᴛᴇɴ Iᴛ Fᴏʀ Yᴏᴜ</b>

<b>Hᴏᴡ ᴛᴏ Usᴇ Tʜᴇ Bᴏᴛ?</b>
1. <b>Sᴇɴᴅ</b> Aɴʏ Lᴏɴɢ Uʀʟ Tᴏ Tʜᴇ Bᴏᴛ.
2. <b>Rᴇᴄᴇɪᴠᴇ</b> A Sʜᴏʀᴛᴇɴᴇᴅ Uʀʟ Iɴ Rᴇsᴘᴏɴsᴇ.
   
<b>Hᴏᴡ Tᴏ Cʀᴇᴀᴛᴇ A Sʜᴏʀᴛᴇɴᴇᴅ Uʀʟ?</b>
- Sɪᴍᴘʟʏ Sᴇɴᴅ Tʜᴇ Lᴏɴɢ Uʀʟ Yᴏᴜ Wᴀɴᴛ Tᴏ Sʜᴏʀᴛᴇɴ, Aɴᴅ Tʜᴇ Bᴏᴛ Wɪʟʟ Hᴀɴᴅʟᴇ Tʜᴇ Rᴇsᴛ!

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

// Bot Menu Buttons
var buttons = [
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

Bot.runCommand("/bitly")

