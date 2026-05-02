/*CMD
  command: onGhReposResult
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

  if (data && Array.isArray(data) && data.length > 0) {
    var user = data[0].owner ? data[0].owner.login : "Unknown"
    var caption = "<b>📦 Gɪᴛʜᴜʙ Rᴇᴘᴏs ᴏꜰ @" + user + "</b>\n\n"

    for (var i = 0; i < Math.min(10, data.length); i++) {
      var repo = data[i]
      var stars = repo.stargazers_count || 0
      var forks = repo.forks_count || 0
      var lang = repo.language || "N/A"
      var visibility = repo.private ? "🔒" : "🌐"
      var desc = repo.description || ""
      if (desc.length > 60) desc = desc.substring(0, 60) + "..."

      caption += visibility + " <b><a href='" + repo.html_url + "'>" + repo.name + "</a></b>"
      if (desc) caption += "\n   <i>" + desc + "</i>"
      caption += "\n   ⭐ " + stars + " | 🍴 " + forks + " | 💻 " + lang + "\n\n"
    }

    caption += adsFooter

    var buttons = [
      [
        { text: "🔍 Sᴇᴀʀᴄʜ Aɢᴀɪɴ", callback_data: "/ghrepos" },
        { text: "👤 Pʀᴏꜰɪʟᴇ", callback_data: "/github" }
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
  } else if (data && data.message === "Not Found") {
    Bot.sendMessage("<b>❌ Gɪᴛʜᴜʙ ᴜsᴇʀ ɴᴏᴛ ꜰᴏᴜɴᴅ.</b>", {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/ghrepos" }]] }
    })
  } else {
    Bot.sendMessage("<b>❌ Nᴏ ʀᴇᴘᴏs ꜰᴏᴜɴᴅ.</b>", { parse_mode: "HTML" })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ ꜰᴇᴛᴄʜɪɴɢ ʀᴇᴘᴏs.</b>", { parse_mode: "HTML" })
}
