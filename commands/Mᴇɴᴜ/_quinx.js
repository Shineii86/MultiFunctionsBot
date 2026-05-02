/*CMD
  command: /quinx
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Mᴇɴᴜ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Check the user's status
var status = options.result ? options.result.status : null
var quinx =
  status === "member" || status === "administrator" || status === "creator"

// User's Name
var name =
  user && user.first_name
    ? `<a href='tg://user?id=${user.telegramid}'>${user.first_name}</a>`
    : "Unknown"

// Bot's Username
var botName = bot.name

/*


// Function to get a random integer between a min and max range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Format time for display
function formatTime(seconds) {
  let days = Math.floor(seconds / (24 * 3600))
  let hours = Math.floor((seconds % (24 * 3600)) / 3600)
  let minutes = Math.floor((seconds % 3600) / 60)
  let secs = seconds % 60

  return `${days}Dᴀʏs, ${hours}ʜ:${minutes}ᴍ:${secs}s`
}

// Fake uptime generator (2-3 days range for uptime)
let uptimeSeconds = getRandomInt(1 * 24 * 3600, 2 * 24 * 3600) // 1-2 days in seconds
let fakeUptime = formatTime(uptimeSeconds)

// Fake user and chat counts (randomized range)
let fakeUsers = getRandomInt(1000, 10000)
let fakeChats = getRandomInt(500, 5000)
*/

// Add logic for Ads status
var adsStatus = iteration_quota.progress >= 5000 ? "𝗢𝗡" : "𝗢𝗙𝗙"

// Ads
var ads = [
  "@MaximXEmojis - Dive into a collection of expressive emojis for every mood! Join now and add flair to your conversations.",
  "@MaximXSticker - Discover vibrant and diverse sticker packs to enhance your messaging experience. Join us for a visual delight!",
  "@MaximXBots - Engage with cutting-edge bots designed for fun, utility, and more. Join the bot revolution and elevate your Telegram experience!",
  "@MaximXWallpaper - Immerse yourself in a gallery of stunning wallpapers to revamp your device's look. Join for a daily dose of aesthetic inspiration.",
  "@MaximXIcons - Upgrade your profile with unique and stylish icons. Join now and make your profile stand out!",
  "@MaximXAnime - Dive into the world of anime with curated recommendations and community discussions. Join us and elevate your anime experience!"
]

// Get a random ad
var randomAd = ads[Math.floor(Math.random() * ads.length)]

// User's Name
var Name =
  user && user.first_name
    ? `<a href='tg://user?id=${user.telegramid}'>${user.first_name}</a>`
    : "Unknown"

// Get current IST time and determine the greeting
var date = new Date()
var hours = date.getUTCHours() + 5.5 // Adjust for IST (UTC +5:30)
var greeting

if (hours >= 5 && hours < 12) {
  greeting = "🥱 Gᴏᴏᴅ Mᴏʀɴɪɴɢ"
} else if (hours >= 12 && hours < 17) {
  greeting = "😒 Gᴏᴏᴅ Aғᴛᴇʀɴᴏᴏɴ"
} else if (hours >= 17 && hours < 21) {
  greeting = "😪 Gᴏᴏᴅ Eᴠᴇɴɪɴɢ"
} else {
  greeting = "😴 Gᴏᴏᴅ Nɪɢʜᴛ"
}

// Bot Caption Message
var caption = `<b>${greeting} ${Name}</b>

I Aᴍ <b><a href='http://t.me/${botName}'>Mᴜʟᴛɪ Fᴜɴᴄᴛɪᴏɴs Bᴏᴛ</a></b>, A Bᴏᴛ Tʜᴀᴛ Cᴏɴᴛᴀɪɴs A Sᴇʀɪᴇs Oғ Fᴇᴀᴛᴜʀᴇs Tʜᴀᴛ Wɪʟʟ Aʟʟᴏᴡ Yᴏᴜ Tᴏ Usᴇ Tᴇʟᴇɢʀᴀᴍ Tᴏ Tʜᴇ Fᴜʟʟᴇsᴛ!

<b>I'ᴍ Cᴏᴍᴘʟᴇᴛᴇʟʏ Fʀᴇᴇ</b>, Bᴜᴛ I Sᴛɪʟʟ Hᴀᴠᴇ Rᴜɴɴɪɴɢ Cᴏsᴛs, Sᴏ Iғ Yᴏᴜ Wᴀɴᴛ Tᴏ Hᴇʟᴘ Mʏ Dᴇᴠᴇʟᴏᴘᴇʀ, <b>Yᴏᴜ Cᴀɴ <a href='t.me/DonateQxBot'>Dᴏɴᴀᴛᴇ</a></b>.

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

/*
▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭
•» <b>Uᴘᴛɪᴍᴇ:</b> ${fakeUptime}  
•» ${fakeUsers} <b>Usᴇʀs, Aᴄʀᴏss</b> ${fakeChats} <b>Cʜᴀᴛs</b>  
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
*/

// Inline Buttons For Main Menu
var buttons = [
  [
    { text: "⚙️ Tᴏᴏʟs", callback_data: "/tools" },
    { text: "Aʙᴏᴜᴛ 👤", callback_data: "/about" }
  ]
]
buttons.push([
  { text: "👮 Hᴇʟᴘ", callback_data: "/help" },
  { text: "Cʟᴏsᴇ ⛔", callback_data: "/close" }
])

// Retrieve admin ID dynamically
var admin = Bot.getProperty("admin")
if (user.telegramid == admin) {
  buttons.push([{ text: "Lᴏɢɪɴ 𝘤Pᴀɴᴇʟ", callback_data: "!master" }])
}

// Check if the user has the required status
if (quinx) {
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
} else {
  var caps = `<b>Pʟᴇᴀsᴇ Jᴏɪɴ Mʏ Cʜᴀɴɴᴇʟ Tᴏ Aᴄᴄᴇss Tʜɪs Bᴏᴛ</b> 
  
Tᴏ Jᴏɪɴ, Cʟɪᴄᴋ Tʜᴇ Bᴜᴛᴛᴏɴ Bᴇʟᴏᴡ <b>Mᴀxɪᴍ 𝕏 Bᴏᴛs</b> Aɴᴅ <b>Mᴀxɪᴍ 𝕏 Sᴛɪᴄᴋᴇʀ</b> Tʜᴇɴ Rᴇᴛᴜʀɴ Aɴᴅ Pʀᴇss Tʜᴇ <b>Uɴʟᴏᴄᴋ</b> Bᴜᴛᴛᴏɴ.

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

  var button = [
    [
      { text: "Mᴀxɪᴍ 𝕏 Bᴏᴛs", url: "t.me/MaximXBots" },
      { text: "Mᴀxɪᴍ 𝕏 Sᴛɪᴄᴋᴇʀ", url: "t.me/MaximXSticker" }
    ],
    [
      { text: "🔓 Uɴʟᴏᴄᴋ", callback_data: "/start" },
      { text: "Cʟᴏsᴇ ⛔", callback_data: "/close" }
    ]
  ]

  if (request.message?.message_id) {
    Api.editMessageText({
      message_id: request.message.message_id,
      text: caps,
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: button }
    })
  } else {
    Api.sendMessage({
      chat_id: user.telegramid,
      text: caps,
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: button }
    })
  }
}

