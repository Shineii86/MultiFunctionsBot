/*CMD
  command: onGhSearchResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Gɪᴛʜᴜʙ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

try {
  var data = JSON.parse(content)

  if (data && data.items && data.items.length > 0) {
    var total = data.total_count || 0
    var caption = "<b>🔍 Gɪᴛʜᴜʙ Sᴇᴀʀᴄʜ Rᴇsᴜʟᴛs</b>\n" +
      "<i>Fᴏᴜɴᴅ " + total + " ʀᴇᴘᴏs</i>\n\n"

    for (var i = 0; i < Math.min(8, data.items.length); i++) {
      var repo = data.items[i]
      var stars = repo.stargazers_count || 0
      var forks = repo.forks_count || 0
      var lang = repo.language || "N/A"
      var desc = repo.description || ""
      if (desc.length > 50) desc = desc.substring(0, 50) + "..."
      var visibility = repo.private ? "🔒" : "🌐"

      caption += visibility + " <b><a href='" + repo.html_url + "'>" + repo.full_name + "</a></b>\n"
      if (desc) caption += "   <i>" + desc + "</i>\n"
      caption += "   ⭐ " + stars + " | 🍴 " + forks + " | 💻 " + lang + "\n\n"
    }

    caption += adsFooter

    var buttons = [
      [
        { text: "🔍 Sᴇᴀʀᴄʜ Aɢᴀɪɴ", callback_data: "/ghsearch" },
        { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
      ],
      [
        { text: "◁", callback_data: "/tools" },
        { text: "○", callback_data: "/start" },
        { text: "✕", callback_data: "/close" }
      ]
    ]

    Bot.sendMessage(caption, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: buttons }
    })
  } else {
    Bot.sendMessage("<b>❌ Nᴏ ʀᴇᴘᴏs ꜰᴏᴜɴᴅ.</b>", {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/ghsearch" }]] }
    })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ sᴇᴀʀᴄʜɪɴɢ ʀᴇᴘᴏs.</b>", { parse_mode: "HTML" })
}
