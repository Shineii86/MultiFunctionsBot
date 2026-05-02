/*CMD
  command: !
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Retrieve admin ID dynamically
var admin = Bot.getProperty("admin")

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

// Define user mention link
var name =
  "<a href='tg://openmessage?user_id=" +
  user.telegramid +
  "'>" +
  user.first_name +
  "</a>"

var caption = `<b>🤖 Bᴏᴛ Eʀʀᴏʀ Aʟᴛᴇʀ 🔔</b>

▌${name} 𝖠𝗇 𝖤𝗋𝗋𝗈𝗋 𝖮𝖼𝖼𝗎𝗋𝗋𝖾𝖽 𝖶𝗁𝗂𝗅𝖾 𝖯𝗋𝗈𝖼𝖾𝗌𝗌𝗂𝗇𝗀 𝖸𝗈𝗎𝗋 𝖱𝖾𝗊𝗎𝖾𝗌𝗍. 𝖯𝗅𝖾𝖺𝗌𝖾 𝖱𝖾𝗌𝗍𝖺𝗋𝗍 𝖳𝗁𝖾 𝖡𝗈𝗍 𝖡𝗒 𝖴𝗌𝗂𝗇𝗀 /restart 𝖠𝗇𝖽 𝖱𝖾𝗉𝗈𝗋𝗍 𝖳𝗁𝗂𝗌 𝖨𝗌𝗌𝗎𝖾 𝖳𝗈 𝖳𝗁𝖾 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋.

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

var button = [
  [
    { text: "🧑‍💻 Bᴏᴛ Dᴇvᴇʟᴏᴘᴇʀ", url: "t.me/Shineii86" },
    { text: "Sᴜᴘᴘᴏʀᴛ Gʀᴏᴜᴘ 💬", url: "t.me/MaximXGroup" }
  ],
  [{ text: "Cʟᴏsᴇ Mᴇɴᴜ", callback_data: "/close" }]
]

// Send error message to the user
Api.sendMessage({
  chat_id: user.telegramid,
  text: caption,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: button }
})

// Define All Dynamic Message Values
var firstName = user.first_name
  ? `<a href='tg://openmessage?user_id=${user.telegramid}'>${user.first_name}</a>`
  : "Uɴᴋɴᴏᴡɴ"
var userId = user.telegramid
var username = user.username ? `@${user.username}` : "Uɴᴋɴᴏᴡɴ"
var lastName = user.last_name || "Uɴᴋɴᴏᴡɴ"
var isPremium = user.is_premium ? "Yᴇs" : "Nᴏ"
var languageCode = user.language_code || "Uɴᴋɴᴏᴡɴ"
var userProfileLink = `<a href='tg://openmessage?user_id=${userId}'>Vɪᴇᴡ Pʀᴏғɪʟᴇ</a>`

// Ensure admin chat ID exists
if (!admin) {
  Bot.sendMessage(" ")
} else {
  var errorMessage = `<blockquote><u><b> Bᴏᴛ Eʀʀᴏʀ Rᴇᴘᴏʀᴛ </b></u>

<b>🫨 Eʀʀᴏʀ Eɴᴄᴏᴜɴᴛᴇʀᴇᴅ Bʏ</b>
<b>👤 Fɪʀsᴛ Nᴀᴍᴇ:</b> ${firstName}
<b>👥 Lᴀsᴛ Nᴀᴍᴇ:</b> ${lastName}
<b>🌐 Usᴇʀɴᴀᴍᴇ:</b> ${username}
<b>🏆 Pʀᴇᴍɪᴜᴍ:</b> ${isPremium}
<b>🏳️ Lᴀɴɢᴜᴀɢᴇ:</b> ${languageCode}
<b>🆔 Usᴇʀ Iᴅ:</b> <code>${user.telegramid}</code>
<b>💁 Pʀᴏғɪʟᴇ:</b> ${userProfileLink}</blockquote>`

  // Send error message to the admin
  Api.sendMessage({
    chat_id: admin,
    text: errorMessage,
    parse_mode: "HTML"
  })
}

