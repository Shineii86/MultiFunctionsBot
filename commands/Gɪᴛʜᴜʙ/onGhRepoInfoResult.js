/*CMD
  command: onGhRepoInfoResult
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

  if (data && data.full_name) {
    var name = data.name
    var fullName = data.full_name
    var desc = data.description || "No description"
    var stars = data.stargazers_count || 0
    var forks = data.forks_count || 0
    var watchers = data.watchers_count || 0
    var issues = data.open_issues_count || 0
    var lang = data.language || "N/A"
    var license = data.license ? data.license.name : "N/A"
    var size = data.size ? (data.size > 1024 ? (data.size / 1024).toFixed(1) + " MB" : data.size + " KB") : "N/A"
    var defaultBranch = data.default_branch || "main"
    var created = data.created_at ? data.created_at.slice(0, 10) : "N/A"
    var updated = data.updated_at ? data.updated_at.slice(0, 10) : "N/A"
    var pushed = data.pushed_at ? data.pushed_at.slice(0, 10) : "N/A"
    var visibility = data.private ? "🔒 Pʀɪᴠᴀᴛᴇ" : "🌐 Pᴜʙʟɪᴄ"
    var archived = data.archived ? "Yᴇs 📦" : "Nᴏ"
    var fork = data.fork ? "Yᴇs 🍴" : "Nᴏ"
    var homepage = data.homepage || ""
    var topics = ""
    if (data.topics && data.topics.length > 0) {
      topics = data.topics.map(function(t) { return "#" + t }).join(" ")
    }
    var owner = data.owner ? data.owner.login : "Unknown"

    var caption = "<b>📂 " + fullName + "</b>\n\n" +
      "<b>📝 Dᴇsᴄʀɪᴘᴛɪᴏɴ:</b> " + desc + "\n" +
      "<b>👤 Oᴡɴᴇʀ:</b> " + owner + "\n" +
      "<b>👁️ Vɪsɪʙɪʟɪᴛʏ:</b> " + visibility + "\n" +
      "<b>💻 Lᴀɴɢᴜᴀɢᴇ:</b> " + lang + "\n" +
      "<b>📜 Lɪᴄᴇɴsᴇ:</b> " + license + "\n" +
      "<b>💾 Sɪᴢᴇ:</b> " + size + "\n" +
      "<b>🌿 Dᴇꜰᴀᴜʟᴛ Bʀᴀɴᴄʜ:</b> " + defaultBranch + "\n" +
      "<b>📦 Aʀᴄʜɪᴠᴇᴅ:</b> " + archived + "\n" +
      "<b>🍴 Fᴏʀᴋ:</b> " + fork + "\n\n" +
      "<b>📊 Sᴛᴀᴛs:</b>\n" +
      "» ⭐ Sᴛᴀʀs: <b>" + stars + "</b>\n" +
      "» 🍴 Fᴏʀᴋs: <b>" + forks + "</b>\n" +
      "» 👁️ Wᴀᴛᴄʜᴇʀs: <b>" + watchers + "</b>\n" +
      "» 🐛 Issᴜᴇs: <b>" + issues + "</b>\n\n" +
      "<b>📅 Dᴀᴛᴇs:</b>\n" +
      "» Cʀᴇᴀᴛᴇᴅ: " + created + "\n" +
      "» Uᴘᴅᴀᴛᴇᴅ: " + updated + "\n" +
      "» Lᴀsᴛ Pᴜsʜ: " + pushed + "\n"

    if (homepage) caption += "\n" + "🌐 <b>Hᴏᴍᴇᴘᴀɢᴇ:</b> " + homepage + "\n"
    if (topics) caption += "\n<b>🏷️ Tᴏᴘɪᴄs:</b> " + topics + "\n"
    caption += "\n🔗 <a href='" + data.html_url + "'>Vɪᴇᴡ Oɴ Gɪᴛʜᴜʙ</a>"
    caption += adsFooter

    var buttons = [
      [
        { text: "🔍 Aɴᴏᴛʜᴇʀ Rᴇᴘᴏ", callback_data: "/ghrepoinfo" },
        { text: "📦 Aʟʟ Rᴇᴘᴏs", callback_data: "/ghrepos" }
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
    Bot.sendMessage("<b>❌ Rᴇᴘᴏ ɴᴏᴛ ꜰᴏᴜɴᴅ.</b>\n\nFᴏʀᴍᴀᴛ: <code>owner/repo</code>", {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/ghrepoinfo" }]] }
    })
  } else {
    Bot.sendMessage("<b>❌ Eʀʀᴏʀ ꜰᴇᴛᴄʜɪɴɢ ʀᴇᴘᴏ ɪɴꜰᴏ.</b>", { parse_mode: "HTML" })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ ᴘʀᴏᴄᴇssɪɴɢ ʀᴇᴘᴏ ᴅᴀᴛᴀ.</b>", { parse_mode: "HTML" })
}
