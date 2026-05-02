/*CMD
  command: @
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

// Delete Messages
// Api.deleteMessage({ message_id: request.message_id })

// Retrieve admin ID dynamically
var admin = Bot.getProperty("admin")
var mode = Bot.getProperty("maintenance", "Off")

// Ads Array
var ads = [
  "@MaximXEmojis - Dive into a collection of expressive emojis for every mood! Join now and add flair to your conversations.",
  "@MaximXSticker - Discover vibrant and diverse sticker packs to enhance your messaging experience. Join us for a visual delight!",
  "@MaximXBots - Engage with cutting-edge bots designed for fun, utility, and more. Join the bot revolution and elevate your Telegram experience!",
  "@MaximXWallpaper - Immerse yourself in a gallery of stunning wallpapers to revamp your device's look. Join for a daily dose of aesthetic inspiration.",
  "@MaximXIcons - Upgrade your profile with unique and stylish icons. Join now and make your profile stand out!",
  "@MaximXAnime - Dive into the world of anime with curated recommendations and community discussions. Join us and elevate your anime experience!"
]
var randomAd = ads[Math.floor(Math.random() * ads.length)]

if (user.telegramid != admin) {
  if (mode == "On") {
    // Bot Caption Message
    var caption = `<b>🛠 𝖬𝖺𝗂𝗇𝗍𝖾𝗇𝖺𝗇𝖼𝖾 𝖨𝗇 𝖯𝗋𝗈𝗀𝗋𝖾𝗌𝗌!</b>

▪𝖡𝗈𝗍'𝗌 𝖠𝖽𝗆𝗂𝗇𝗂𝗌𝗍𝗋𝖺𝗍𝗂𝗈𝗇 𝖢𝗈𝗇𝖽𝗎𝖼𝗍𝗂𝗇𝗀 𝖲𝗈𝗆𝖾 𝖳𝖾𝖼𝗁𝗇𝗂𝖼𝖺𝗅 𝖶𝗈𝗋𝗄 𝖨𝗇𝗌𝗂𝖽𝖾 𝖳𝗁𝗂𝗌 𝖡𝗈𝗍.
▪𝖣𝗎𝖾 𝖳𝗈 𝖳𝗁𝗂𝗌 𝖱𝖾𝖺𝗌𝗈𝗇 𝖬𝖾𝗇𝗎 𝖨𝗌 𝖲𝗐𝗂𝗍𝖼𝗁𝖾𝗌 𝖮𝖿𝖿 𝖡𝗒 𝖠𝖽𝗆𝗂𝗇𝗌 𝖠𝗇𝖽 𝖭𝗈𝗍 𝖠𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾 𝖥𝗈𝗋 𝖴𝗌𝖾𝗋𝗌 𝖠𝗍 𝖳𝗁𝗂𝖾 𝖬𝗈𝗆𝖾𝗇𝗍.
▪𝖠𝗅𝗅 𝖥𝗎𝗇𝖼𝗍𝗂𝗈𝗇𝖺𝗅𝗂𝗍𝗒 𝖶𝗂𝗅𝗅 𝖡𝖾 𝖡𝖺𝖼𝗄 𝖠𝖿𝗍𝖾𝗋 𝖢𝗈𝗆𝗉𝗅𝖾𝗍𝗂𝗈𝗇.

<b>👑 𝖨𝖿 𝖸𝗈𝗎 𝖠𝗋𝖾 𝖠𝗇 𝖠𝖽𝗆𝗂𝗇 𝖮𝖿 𝖳𝗁𝗂𝗌 𝖡𝗈𝗍 𝖸𝗈𝗎 𝖢𝖺𝗇 𝖳𝗎𝗋𝗇 𝖮𝖿𝖿 𝖳𝗁𝗂𝗌 𝖬𝗈𝖽𝖾 𝖨𝗇</b>
» 🔐 𝖠𝖽𝗆𝗂𝗇 | ⚙ 𝖡𝗈𝗍 𝖲𝖾𝗍𝗍𝗂𝗇𝗀𝗌 | 🛠️ 𝖬𝖺𝗂𝗇𝗍𝖾𝗇𝖺𝗇𝖼𝖾 | 🔰 𝖮𝖿𝖿

<b>👤 𝖨𝖿 𝖸𝗈𝗎 𝖠𝗋𝖾 𝖭𝗈𝗍 𝖠𝖽𝗆𝗂𝗇 𝖮𝖿 𝖳𝗁𝗂𝗌 𝖡𝗈𝗍 𝖸𝗈𝗎 𝖢𝖺𝗇</> 𝖲𝖾𝗇𝖽 𝖠 𝖬𝖾𝗌𝗌𝖺𝗀𝖾 𝖨𝗇 𝖳𝗁𝖾 <a href='t.me/MaximXGroup'>𝖲𝗎𝗉𝗉𝗈𝗋𝗍 𝖦𝗋𝗈𝗎𝗉</a> 𝖡𝗒 𝖳𝖺𝗀𝗀𝗂𝗇𝗀 @𝖺𝖽𝗆𝗂𝗇 𝖳𝗈 𝖳𝗎𝗋𝗇 𝖮𝖿𝖿 𝖳𝗁𝖾 𝖬𝖺𝗂𝗇𝗍𝖾𝗇𝖺𝗇𝖼𝖾 𝖬𝗈𝖽𝖾 <b>(𝖨𝗇 𝖢𝖺𝗌𝖾 𝖳𝗁𝖾 𝖠𝖽𝗆𝗂𝗇 𝖨𝗌 𝖴𝗇𝖺𝗐𝖺𝗋𝖾 𝖳𝗁𝖺𝗍 𝖳𝗁𝖾 𝖬𝖺𝗂𝗇𝗍𝖾𝗇𝖺𝗇𝖼𝖾 𝖬𝗈𝖽𝖾 𝖨𝗌 𝖮𝗇)</>

<b>ℹ️ 𝖥𝗈𝗋 𝖤𝗏𝖾𝗋𝗒𝖻𝗈𝖽𝗒 𝖤𝗅𝗌𝖾:</b>
𝖢𝗈𝗆𝖾 𝖡𝖺𝖼𝗄 𝖫𝖺𝗍𝖾𝗋 𝖠𝗇𝖽 𝖯𝗋𝖾𝗌𝗌 /start 𝖳𝗈 𝖢𝗁𝖾𝖼𝗄 𝖳𝗁𝖾 𝖡𝗈𝗍 𝖲𝗍𝖺𝗍𝗎s.

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

    // Bot Menu Buttons
    var buttons = [
      [
        { text: "🔔 Uᴘᴅᴀᴛᴇs Cʜᴀɴɴᴇʟ", url: "t.me/MaximXBots" },
        { text: "Sᴜᴘᴘᴏʀᴛ Gʀᴏᴜᴘ 💬", url: "t.me/MaximXGroup" }
      ],
      [
        { text: "◁ Rᴇsᴛᴀʀᴛ", callback_data: "/start" },
        { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
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
}

