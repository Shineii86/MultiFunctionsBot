/*CMD
  command: /bitlyShort
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Sʜᴏʀᴛᴇɴᴇʀ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var value = JSON.parse(content)
var short = value.link
var error = value.status_txt
var botname = bot.name
var url_pattern = /^(http:\/\/|https:\/\/).+/

if (!url_pattern.test(short) || error === "INVALID_URL") {
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
  var caption = `🔍 <b>Sᴇᴇᴍs, Tʜɪs Is Nᴏᴛ A Vᴀʟɪᴅ Uʀʟ Lɪɴᴋ</b>

<b>Rɪɢʜᴛ Oʀ Wʀᴏɴɢ Uʀʟ?</b>
<b>» Exᴀᴍᴘʟᴇ:</b>
    <b>› Rɪɢʜᴛ:</b> <code>https://t.me/Shineii86</code>
    <b>› Wʀᴏɴɢ:</b> <code>t.me/Shineii86</code>

📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

  // Bot Menu Buttons
  var buttons = [
    [
      { text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/shortener" },
      { text: "Cʟᴏsᴇ ⏺️", callback_data: "/close" }
    ],
    [{ text: "Hᴏᴍᴇ", callback_data: "/start" }]
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
} else {
  var Id = user.telegramid

  var Caption = `<b>💕 Yᴏᴜʀ Sʜᴏʀᴛ Lɪɴᴋ Hᴀs Bᴇᴇɴ Cʀᴇᴀᴛᴇᴅ Sᴜᴄᴄᴇssғᴜʟʟʏ</b> 
  
 🔗 ❰ ${short} ❱ <b>Tᴀᴘ Fᴏʀ Oᴘᴇɴ</b>
 
 🔗 ❰ <code>${short}</code> ❱ <b>Tᴀᴘ Fᴏʀ Cᴏᴘʏ</b>

👤 Iᴅ: <code>${Id}</code>
📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>
<blockquote>${randomAd}</blockquote>`

  var Buttons = [
    [
      { text: "Nᴇᴡ Lɪɴᴋ", callback_data: "/shortener" },
      { text: "Cʟᴏsᴇ", callback_data: "/close" }
    ],
    [{ text: "Hᴏᴍᴇ", callback_data: "/start" }]
  ]
  if (request.message && request.message.message_id) {
    Api.editMessageText({
      message_id: request.message.message_id,
      text: Caption,
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: Buttons }
    })
  } else {
    Api.sendMessage({
      chat_id: request.chat.id,
      text: Caption,
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: buttons }
    })
  }
}

