/*CMD
  command: /telegramId
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ Iᴅ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /id
  group: 
CMD*/

// Define All Dynamic Message Values
var firstName =
  user && user.first_name
    ? `<a href='tg://user?id=${user.telegramid}'>${user.first_name}</a>`
    : "Uɴᴋɴᴏᴡɴ"

var userId = user.telegramid
var username = user.username ? `@${user.username}` : "Uɴᴋɴᴏᴡɴ"
var lastName = user.last_name || "Uɴᴋɴᴏᴡɴ"
var isPremium = user.is_premium ? "Yᴇs" : "Nᴏ"
var languageCode = user.language_code || "Uɴᴋɴᴏᴡɴ"
var userProfileLink = `<a href='tg://user?id=${userId}'>Vɪᴇᴡ Pʀᴏғɪʟᴇ</a>`

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

// Add logic for Ads status
var adsStatus = iteration_quota.progress >= 5000 ? "Oɴ" : "Oғғ"

// Bot Caption Message
var caption = `<b>Yᴏᴜʀ Pʀᴏғɪʟᴇ Iɴғᴏʀᴍᴀᴛɪᴏɴ</b>

<b>👤 Fɪʀsᴛ Nᴀᴍᴇ:</b> ${firstName}
<b>👥 Lᴀsᴛ Nᴀᴍᴇ:</b> ${lastName}
<b>🌐 Usᴇʀɴᴀᴍᴇ:</b> ${username}
<b>🏆 Pʀᴇᴍɪᴜᴍ:</b> ${isPremium}
<b>🏳️ Lᴀɴɢᴜᴀɢᴇ:</b> ${languageCode}
<b>🆔 Usᴇʀ Iᴅ:</b> <code>${user.telegramid}</code>
<b>💁 Pʀᴏғɪʟᴇ:</b> ${userProfileLink}

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

