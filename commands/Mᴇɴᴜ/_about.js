/*CMD
  command: /about
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
var caption = `<b>💪 <a href='http://t.me/${bot.name}'>Rᴇᴀᴄᴛɪᴏɴ Bᴜɪʟᴅᴇʀ Bᴏᴛ</a></b> Cʀᴀғᴛᴇᴅ Bʏ <b><a href='http://t.me/Shineii86'>Sʜɪɴᴇɪ Nᴏᴜᴢᴇɴ</a></b> Usɪɴɢ <b>Jᴀᴠᴀ Sᴄʀɪᴘᴛ</b> Uɴᴅᴇʀ Tʜᴇ <b>Bᴏᴛs Bᴜsɪɴᴇss</b> Fʀᴀᴍᴇᴡᴏʀᴋ.

Iᴛ Hᴀs Bᴇᴇɴ Oɴʟɪɴᴇ Sɪɴᴄᴇ 25 Jᴀɴᴜᴀʀʏ 2025 Aɴᴅ Iᴛ Is Cᴏɴsᴛᴀɴᴛʟʏ Uᴘᴅᴀᴛᴇᴅ.

<b>» 🤖 Uᴘᴅᴀᴛᴇᴅ Oɴ:</b> 5 Mᴀʀᴄʜ 2025
<b>» 🚀 Vᴇʀsɪᴏɴ Oғ Tʜᴇ Bᴏᴛ:</b> 1.0.5 βᴇᴛᴀ
<b>» 💪 Oғғᴇʀᴇᴅ Bʏ:</b> <a href='t.me/MaximXTeam'>Mᴀxɪᴍ 𝕏 Tᴇᴀᴍ</a>
<b>» 🧲 Rᴇʟᴇᴀsᴇᴅ Oɴ:</b> 25 Jᴀɴᴜᴀʀʏ 2025
<b>» 💰 Iɴ-Bᴏᴛ Pᴜʀᴄʜᴀsᴇs:</b> ₹100 - ₹300 
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬
<b>» 📡 Nᴇᴛᴡᴏʀᴋ:</b> <a href='t.me/QuinxNetwork'>Ҩᴜɪɴx Nᴇᴛᴡᴏʀᴋ</a>
<b>» 🔔 Mᴀɪɴ Cʜᴀɴɴᴇʟ:</b> <a href='t.me/MaximXBots'>Mᴀxɪᴍ X Bᴏᴛs</a>
<b>» 💬 Sᴜᴘᴘᴏʀᴛ Gʀᴏᴜᴘ:</b> <a href='t.me/MaximxGroup'>Mᴀxɪᴍ X Gʀᴏᴜᴘ</a>

<b>Aᴄᴋɴᴏᴡʟᴇᴅɢᴇᴍᴇɴᴛ & Cʀᴇᴅɪᴛs</>
<b>» ⭐ Uɪ Iᴅᴇᴀ:</> <a href='t.me/YukkiiHaruno'>Yᴜᴋᴋɪ Hᴀʀᴜɴᴏ</>
<b>» ⛑️ Hᴇʟᴘᴇʀ:</> <a href='t.me/Senpai86'>Zᴏʀᴏ Rᴏʀᴏɴᴏᴀ</>
<b>» 👑 Bᴏᴛ Oᴡɴᴇʀ:</> <a href='t.me/QuinxOfficial'>Ҩᴜɪɴx Oғғɪᴄɪᴀʟ</> 
<b>» 💀 Dᴇᴠᴇʟᴏᴘᴇʀ:</> <a href='t.me/Shineii86'>Sʜɪɴᴇɪ Nᴏᴜᴢᴇɴ</>

Wᴇ Wᴇʟᴄᴏᴍᴇ <b>Sᴜɢɢᴇsᴛɪᴏɴs</> Fᴏʀ <b>Nᴇᴡ Fᴇᴀᴛᴜʀᴇs</> Aɴᴅ <b>Bᴜɢ Rᴇᴘᴏʀᴛs</>. Wᴇ Tʜᴀɴᴋ Aʟʟ Tʜᴇ Usᴇʀs Tʜᴀᴛ Rᴇʟʏ Oɴ Us Fᴏʀ Tʜɪs Sᴇʀᴠɪᴄᴇ, Wᴇ Aʀᴇ Cᴏɴsᴛᴀɴᴛʟʏ Wᴏʀᴋɪɴɢ Tᴏ Iᴍᴘʀᴏᴠᴇ Iᴛ!

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

// Bot Menu Buttons
var buttons = [
  [
    {
      text: "Fᴏʟʟᴏᴡ Us Oɴ Gɪᴛʜᴜʙ",
      url: "https://github.com/Shineii86/ReactionBuilderBot"
    }
  ],
  [
    { text: `🔔 Aᴅs: ${adsStatus}`, callback_data: "/ads" },
    { text: "Sᴜʙsᴄʀɪᴘᴛɪᴏɴ ⭐", callback_data: "/premium" }
  ],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
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

