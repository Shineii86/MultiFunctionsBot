/*
 * Helpers.js - Shared utilities for MultiFunctionsBot
 * Extracts common patterns to reduce code duplication
 */

// Shared ads array
var ADS = [
  "@MaximXEmojis - Dive into a collection of expressive emojis for every mood! Join now and add flair to your conversations.",
  "@MaximXSticker - Discover vibrant and diverse sticker packs to enhance your messaging experience. Join us for a visual delight!",
  "@MaximXBots - Engage with cutting-edge bots designed for fun, utility, and more. Join the bot revolution and elevate your Telegram experience!",
  "@MaximXWallpaper - Immerse yourself in a gallery of stunning wallpapers to revamp your device's look. Join for a daily dose of aesthetic inspiration.",
  "@MaximXIcons - Upgrade your profile with unique and stylish icons. Join now and make your profile stand out!",
  "@MaximXAnime - Dive into the world of anime with curated recommendations and community discussions. Join us and elevate your anime experience!"
]

function getRandomAd() {
  return ADS[Math.floor(Math.random() * ADS.length)]
}

function getAdsFooter() {
  return "\n\n📮 Aᴅs: <a href='t.me/QuinxAds'>Ҩᴜɪɴx Aᴅs</a>\n<blockquote>" + getRandomAd() + "</blockquote>"
}

function editOrSend(opts) {
  var defaults = {
    parse_mode: "HTML",
    disable_web_page_preview: true
  }
  var merged = {}
  for (var k in defaults) { merged[k] = defaults[k] }
  for (var k in opts) { merged[k] = opts[k] }

  if (request.message && request.message.message_id) {
    merged.message_id = request.message.message_id
    Api.editMessageText(merged)
  } else {
    merged.chat_id = opts.chat_id || request.chat.id
    Api.sendMessage(merged)
  }
}

function getUserMention() {
  if (user && user.first_name) {
    return "<a href='tg://user?id=" + user.telegramid + "'>" + user.first_name + "</a>"
  }
  return "Uɴᴋɴᴏᴡɴ"
}

function getNavButtons(extraButtons) {
  var nav = [
    { text: "◁", callback_data: "/tools" },
    { text: "○", callback_data: "/start" },
    { text: "✕", callback_data: "/close" }
  ]
  var buttons = []
  if (extraButtons) {
    for (var i = 0; i < extraButtons.length; i++) {
      buttons.push(extraButtons[i])
    }
  }
  buttons.push(nav)
  return buttons
}

function getCloseButton() {
  return [[{ text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]]
}

function getBackCloseButtons(backCallback) {
  return [
    [
      { text: "◁ Bᴀᴄᴋ", callback_data: backCallback },
      { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
    ]
  ]
}

function fancyOnOff(val) {
  return val === "On" ? "Oɴ" : "Oғғ"
}

publish({
  getRandomAd: getRandomAd,
  getAdsFooter: getAdsFooter,
  editOrSend: editOrSend,
  getUserMention: getUserMention,
  getNavButtons: getNavButtons,
  getCloseButton: getCloseButton,
  getBackCloseButtons: getBackCloseButtons,
  fancyOnOff: fancyOnOff
})
