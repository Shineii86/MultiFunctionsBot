/*CMD
  command: rssAdd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Rꜱꜱ

  <<ANSWER
📡 Sᴇɴᴅ ᴛʜᴇ RSS ꜰᴇᴇᴅ URL ᴛᴏ ꜱᴜʙꜱᴄʀɪʙᴇ.
E.g: https://example.com/feed.xml
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var url = message.trim()
if (!url.match(/^https?:\/\//)) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ URL. Mᴜꜱᴛ ꜱᴛᴀʀᴛ ᴡɪᴛʜ http:// ᴏʀ https://</b>", { parse_mode: "HTML" })
  return
}

var feeds = Bot.getProperty("rss_feeds_" + user.telegramid, [])

// Check if already exists
for (var i = 0; i < feeds.length; i++) {
  if (feeds[i].url === url) {
    Bot.sendMessage("<b>ℹ️ Fᴇᴇᴅ ᴀʟʀᴇᴀᴅʏ ꜱᴜʙꜱᴄʀɪʙᴇᴅ!</b>", { parse_mode: "HTML" })
    return
  }
}

// Try to fetch feed title
var name = url.replace(/https?:\/\//, "").replace(/\/.*$/, "")
feeds.push({ url: url, name: name, added: Date.now() })
Bot.setProperty("rss_feeds_" + user.telegramid, feeds, "json")

Bot.sendMessage("<b>✅ Fᴇᴇᴅ Aᴅᴅᴇᴅ!</b>\n\n" +
  "<b>📡 URL:</b> " + Libs.Helpers.escapeHTML(url) + "\n" +
  "<b>📋 Tᴏᴛᴀʟ:</b> " + feeds.length + " ꜰᴇᴇᴅꜱ", {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/rss") }
})
