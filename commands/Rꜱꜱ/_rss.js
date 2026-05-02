/*CMD
  command: /rss
  help: Subscribe to RSS feeds
  need_reply: false
  auto_retry_time: 
  folder: Rꜱꜱ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /feed
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var feeds = Bot.getProperty("rss_feeds_" + user.telegramid, [])

var caption = "<b>📡 Rꜱꜱ Fᴇᴇᴅ Rᴇᴀᴅᴇʀ</b>\n\n"

if (feeds.length === 0) {
  caption += "Nᴏ ꜰᴇᴇᴅꜱ ꜱᴜʙꜱᴄʀɪʙᴇᴅ ʏᴇᴛ.\n\n"
} else {
  caption += "<b>📋 Yᴏᴜʀ Fᴇᴇᴅꜱ (" + feeds.length + "):</b>\n"
  for (var i = 0; i < feeds.length; i++) {
    caption += (i + 1) + ". " + Libs.Helpers.escapeHTML(feeds[i].name) + "\n"
  }
  caption += "\n"
}

caption += "<b>💡 Cᴏᴍᴍᴀɴᴅꜱ:</b>\n" +
  "├ /rss add URL — Aᴅᴅ ꜰᴇᴇᴅ\n" +
  "├ /rss list — Lɪꜱᴛ ꜰᴇᴇᴅꜱ\n" +
  "└ /rss remove N — Rᴇᴍᴏᴠᴇ ꜰᴇᴇᴅ #N" +
  adsFooter

var buttons = [
  [
    { text: "➕ Aᴅᴅ Fᴇᴇᴅ", callback_data: "rssAdd" },
    { text: "🔄 Cʜᴇᴄᴋ Nᴏᴡ", callback_data: "rssCheck" }
  ],
  [
    { text: "◁", callback_data: "/tools" },
    { text: "○", callback_data: "/start" },
    { text: "✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
