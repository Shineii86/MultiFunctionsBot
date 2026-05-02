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

// Check membership status
var status = options.result ? options.result.status : null
var isMember = status === "member" || status === "administrator" || status === "creator"

// Greeting based on IST time
var now = new Date()
var istHours = (now.getUTCHours() + 5 + now.getUTCMinutes() / 60 + 30 / 60) % 24
var greeting

if (istHours >= 5 && istHours < 12) {
  greeting = "🥱 Gᴏᴏᴅ Mᴏʀɴɪɴɢ"
} else if (istHours >= 12 && istHours < 17) {
  greeting = "😒 Gᴏᴏᴅ Aғᴛᴇʀɴᴏᴏɴ"
} else if (istHours >= 17 && istHours < 21) {
  greeting = "😪 Gᴏᴏᴅ Eᴠᴇɴɪɴɢ"
} else {
  greeting = "😴 Gᴏᴏᴅ Nɪɢʜᴛ"
}

var Name = Libs.Helpers.getUserMention()
var botName = bot.name
var adsFooter = Libs.Helpers.getAdsFooter()

// Ads status
var adsStatus = iteration_quota.progress >= 5000 ? "𝗢𝗡" : "𝗢𝗙𝗙"

// Main menu caption
var caption = "<b>" + greeting + " " + Name + "</b>\n\n" +
  "I Aᴍ <b><a href='http://t.me/" + botName + "'>Mᴜʟᴛɪ Fᴜɴᴄᴛɪᴏɴs Bᴏᴛ</a></b>, A Bᴏᴛ Tʜᴀᴛ Cᴏɴᴛᴀɪɴs A Sᴇʀɪᴇs Oғ Fᴇᴀᴛᴜʀᴇs Tʜᴀᴛ Wɪʟʟ Aʟʟᴏᴡ Yᴏᴜ Tᴏ Usᴇ Tᴇʟᴇɢʀᴀᴍ Tᴏ Tʜᴇ Fᴜʟʟᴇsᴛ!\n\n" +
  "<b>I'ᴍ Cᴏᴍᴘʟᴇᴛᴇʟʏ Fʀᴇᴇ</b>, Bᴜᴛ I Sᴛɪʟʟ Hᴀᴠᴇ Rᴜɴɴɪɴɢ Cᴏsᴛs. Iғ Yᴏᴜ Wᴀɴᴛ Tᴏ Hᴇʟᴘ, <b><a href='t.me/DonateQxBot'>Dᴏɴᴀᴛᴇ</a></b>." +
  adsFooter

// Build buttons
var buttons = [
  [
    { text: "⚙️ Tᴏᴏʟs", callback_data: "/tools" },
    { text: "Aʙᴏᴜᴛ 👤", callback_data: "/about" }
  ],
  [
    { text: "👮 Hᴇʟᴘ", callback_data: "/help" },
    { text: "Cʟᴏsᴇ ⛔", callback_data: "/close" }
  ]
]

// Admin panel button
var admin = Bot.getProperty("admin")
if (user.telegramid == admin) {
  buttons.push([{ text: "🔐 Aᴅᴍɪɴ Pᴀɴᴇʟ", callback_data: "!master" }])
}

if (isMember) {
  Libs.Helpers.editOrSend({
    text: caption,
    reply_markup: { inline_keyboard: buttons }
  })
} else {
  var caps = "<b>Pʟᴇᴀsᴇ Jᴏɪɴ Mʏ Cʜᴀɴɴᴇʟ Tᴏ Aᴄᴄᴇss Tʜɪs Bᴏᴛ</b>\n\n" +
    "Tᴏ Jᴏɪɴ, Cʟɪᴄᴋ Tʜᴇ Bᴜᴛᴛᴏɴs Bᴇʟᴏᴡ, Tʜᴇɴ Pʀᴇss <b>Uɴʟᴏᴄᴋ</b>." +
    adsFooter

  var unlockButtons = [
    [
      { text: "Mᴀxɪᴍ 𝕏 Bᴏᴛs", url: "t.me/MaximXBots" },
      { text: "Mᴀxɪᴍ 𝕏 Sᴛɪᴄᴋᴇʀ", url: "t.me/MaximXSticker" }
    ],
    [
      { text: "🔓 Uɴʟᴏᴄᴋ", callback_data: "/start" },
      { text: "Cʟᴏsᴇ ⛔", callback_data: "/close" }
    ]
  ]

  Libs.Helpers.editOrSend({
    text: caps,
    reply_markup: { inline_keyboard: unlockButtons }
  })
}
