/*CMD
  command: onMangaResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Aɴɪᴍᴇ

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

  if (data && data.data && data.data.length > 0) {
    var m = data.data[0]
    var title = m.title || "Unknown"
    var titleJp = m.title_japanese || ""
    var type = m.type || "N/A"
    var chapters = m.chapters || "N/A"
    var volumes = m.volumes || "N/A"
    var status = m.status || "N/A"
    var score = m.score || "N/A"
    var ranked = m.rank || "N/A"
    var popularity = m.popularity || "N/A"
    var members = m.members || "N/A"
    var authors = ""
    if (m.authors && m.authors.length > 0) {
      authors = m.authors.map(function(a) { return a.name }).join(", ")
    }
    var genres = ""
    if (m.genres && m.genres.length > 0) {
      genres = m.genres.map(function(g) { return g.name }).join(", ")
    }
    var synopsis = m.synopsis || "No synopsis available."
    if (synopsis.length > 300) synopsis = synopsis.substring(0, 300) + "..."
    var url = m.url || ""
    var image = m.images && m.images.jpg ? m.images.jpg.large_image_url : ""

    var scoreIcon = score !== "N/A" && score >= 8 ? "⭐" : score !== "N/A" && score >= 6 ? "✨" : "📊"

    var caption = "<b>📖 " + title + "</b>"
    if (titleJp) caption += "\n<b>🇯🇵 " + titleJp + "</b>"
    caption += "\n\n" +
      "<b>📚 Tʏᴘᴇ:</b> " + type + "\n" +
      "<b>📑 Cʜᴀᴘᴛᴇʀs:</b> " + chapters + "\n" +
      "<b>📦 Vᴏʟᴜᴍᴇs:</b> " + volumes + "\n" +
      "<b>📡 Sᴛᴀᴛᴜs:</b> " + status + "\n" +
      scoreIcon + " <b>Sᴄᴏʀᴇ:</b> " + score + "\n" +
      "<b>🏆 Rᴀɴᴋᴇᴅ:</b> #" + ranked + "\n" +
      "<b>🔥 Pᴏᴘᴜʟᴀʀɪᴛʏ:</b> #" + popularity + "\n" +
      "<b>👥 Mᴇᴍʙᴇʀs:</b> " + members + "\n"
    if (authors) caption += "<b>✍️ Aᴜᴛʜᴏʀ(s):</b> " + authors + "\n"
    if (genres) caption += "<b>🎭 Gᴇɴʀᴇs:</b> " + genres + "\n"
    caption += "\n<b>📝 Sʏɴᴏᴘsɪs:</b>\n<blockquote>" + synopsis + "</blockquote>"
    if (url) caption += "\n\n🔗 <a href='" + url + "'>Vɪᴇᴡ Oɴ MʏAɴɪᴍᴇLɪsᴛ</a>"
    caption += adsFooter

    var buttons = [
      [
        { text: "🔍 Sᴇᴀʀᴄʜ Aɢᴀɪɴ", callback_data: "/manga" },
        { text: "🎌 Aɴɪᴍᴇ", callback_data: "/anime" }
      ],
      [
        { text: "◁", callback_data: "/tools" },
        { text: "○", callback_data: "/start" },
        { text: "✕", callback_data: "/close" }
      ]
    ]

    if (image) {
      Api.sendPhoto({
        chat_id: user.telegramid,
        photo: image,
        caption: caption,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: buttons }
      })
    } else {
      Bot.sendMessage(caption, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: { inline_keyboard: buttons }
      })
    }
  } else {
    Bot.sendMessage("<b>❌ Mᴀɴɢᴀ ɴᴏᴛ ꜰᴏᴜɴᴅ.</b> Tʀʏ ᴀ ᴅɪꜰꜰᴇʀᴇɴᴛ ɴᴀᴍᴇ.", {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/manga" }]]
      }
    })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ ꜰᴇᴛᴄʜɪɴɢ ᴍᴀɴɢᴀ ᴅᴀᴛᴀ.</b>", { parse_mode: "HTML" })
}
