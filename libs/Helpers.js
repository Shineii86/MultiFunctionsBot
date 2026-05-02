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

/**
 * Format a number with commas (e.g. 1234567 → "1,234,567")
 */
function formatNumber(num) {
  if (num === null || num === undefined) return "0"
  var parts = String(num).split(".")
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return parts.join(".")
}

/**
 * Relative time string (e.g. "2 hours ago", "3 days ago")
 */
function timeAgo(timestamp) {
  var now = Date.now()
  var ts = typeof timestamp === "number" ? timestamp : new Date(timestamp).getTime()
  var diff = now - ts
  if (diff < 0) return "just now"

  var seconds = Math.floor(diff / 1000)
  var minutes = Math.floor(seconds / 60)
  var hours = Math.floor(minutes / 60)
  var days = Math.floor(hours / 24)
  var weeks = Math.floor(days / 7)
  var months = Math.floor(days / 30)
  var years = Math.floor(days / 365)

  if (seconds < 60) return "just now"
  if (minutes < 60) return minutes + (minutes === 1 ? " minute ago" : " minutes ago")
  if (hours < 24) return hours + (hours === 1 ? " hour ago" : " hours ago")
  if (days < 7) return days + (days === 1 ? " day ago" : " days ago")
  if (weeks < 5) return weeks + (weeks === 1 ? " week ago" : " weeks ago")
  if (months < 12) return months + (months === 1 ? " month ago" : " months ago")
  return years + (years === 1 ? " year ago" : " years ago")
}

/**
 * Truncate text with ellipsis
 */
function truncate(text, len) {
  if (!text) return ""
  len = len || 100
  if (text.length <= len) return text
  return text.substring(0, len - 1) + "…"
}

/**
 * Escape HTML special characters
 */
function escapeHTML(text) {
  if (!text) return ""
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

/**
 * Visual progress bar (e.g. ▰▰▰▱▱▱▱▱▱▱)
 */
function getProgressBar(value, max, length) {
  length = length || 10
  var filled = Math.round((value / max) * length)
  if (filled > length) filled = length
  if (filled < 0) filled = 0
  var bar = ""
  for (var i = 0; i < filled; i++) bar += "▰"
  for (var j = filled; j < length; j++) bar += "▱"
  return bar
}

/**
 * Get IST date object
 */
function getISTDate() {
  var now = new Date()
  var istOffset = 5.5 * 60 * 60 * 1000
  return new Date(now.getTime() + istOffset)
}

/**
 * Format a separator line
 */
function separator() {
  return "▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬"
}

publish({
  getRandomAd: getRandomAd,
  getAdsFooter: getAdsFooter,
  editOrSend: editOrSend,
  getUserMention: getUserMention,
  getNavButtons: getNavButtons,
  getCloseButton: getCloseButton,
  getBackCloseButtons: getBackCloseButtons,
  fancyOnOff: fancyOnOff,
  formatNumber: formatNumber,
  timeAgo: timeAgo,
  truncate: truncate,
  escapeHTML: escapeHTML,
  getProgressBar: getProgressBar,
  getISTDate: getISTDate,
  separator: separator
})
