/*
 * Helpers.js - Shared utilities for MultiFunctionsBot
 * v3.0 - Enhanced with new helper functions
 */

var ADS = [
  "@MaximXEmojis - Dive into a collection of expressive emojis for every mood!",
  "@MaximXSticker - Discover vibrant and diverse sticker packs!",
  "@MaximXBots - Engage with cutting-edge bots for fun, utility, and more!",
  "@MaximXWallpaper - Stunning wallpapers to revamp your device's look!",
  "@MaximXIcons - Upgrade your profile with unique and stylish icons!",
  "@MaximXAnime - Dive into the world of anime with curated recommendations!"
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

  if (request && request.message && request.message.message_id) {
    merged.message_id = request.message.message_id
    Api.editMessageText(merged)
  } else {
    merged.chat_id = opts.chat_id || (request && request.chat ? request.chat.id : user.telegramid)
    Api.sendMessage(merged)
  }
}

function getUserMention() {
  if (user && user.first_name) {
    return "<a href='tg://user?id=" + user.telegramid + "'>" + escapeHTML(user.first_name) + "</a>"
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

function formatNumber(num) {
  if (num === null || num === undefined) return "0"
  var parts = String(num).split(".")
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return parts.join(".")
}

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

function truncate(text, len) {
  if (!text) return ""
  len = len || 100
  if (text.length <= len) return text
  return text.substring(0, len - 1) + "…"
}

function escapeHTML(text) {
  if (!text) return ""
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

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

function getISTDate() {
  var now = new Date()
  var istOffset = 5.5 * 60 * 60 * 1000
  return new Date(now.getTime() + istOffset)
}

function separator() {
  return "▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬"
}

function getStatusEmoji(status) {
  var map = {
    "online": "🟢", "offline": "🔴", "idle": "🟡",
    "maintenance": "🔧", "error": "⚠️", "success": "✅",
    "pending": "⏳", "banned": "🚫", "muted": "🔇"
  }
  return map[status] || "⚪"
}

function formatDuration(seconds) {
  if (!seconds || seconds < 0) return "0s"
  var d = Math.floor(seconds / 86400)
  var h = Math.floor((seconds % 86400) / 3600)
  var m = Math.floor((seconds % 3600) / 60)
  var s = seconds % 60
  var parts = []
  if (d > 0) parts.push(d + "d")
  if (h > 0) parts.push(h + "h")
  if (m > 0) parts.push(m + "m")
  if (s > 0 || parts.length === 0) parts.push(s + "s")
  return parts.join(" ")
}

function chunkArray(arr, size) {
  var chunks = []
  for (var i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size))
  }
  return chunks
}

function createPaginatedList(items, page, perPage) {
  perPage = perPage || 10
  var totalPages = Math.ceil(items.length / perPage)
  if (page < 1) page = 1
  if (page > totalPages) page = totalPages
  var start = (page - 1) * perPage
  var end = start + perPage
  return {
    items: items.slice(start, end),
    page: page,
    totalPages: totalPages,
    totalItems: items.length,
    hasNext: page < totalPages,
    hasPrev: page > 1
  }
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
  separator: separator,
  getStatusEmoji: getStatusEmoji,
  formatDuration: formatDuration,
  chunkArray: chunkArray,
  createPaginatedList: createPaginatedList
})
