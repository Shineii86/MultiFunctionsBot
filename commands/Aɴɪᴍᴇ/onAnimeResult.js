/*CMD
  command: onAnimeResult
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
    var a = data.data[0]
    var title = a.title || "Unknown"
    var titleJp = a.title_japanese || ""
    var type = a.type || "N/A"
    var episodes = a.episodes || "N/A"
    var status = a.status || "N/A"
    var score = a.score || "N/A"
    var ranked = a.rank || "N/A"
    var popularity = a.popularity || "N/A"
    var members = a.members || "N/A"
    var rating = a.rating || "N/A"
    var duration = a.duration || "N/A"
    var season = a.season || "N/A"
    var year = a.year || "N/A"
    var studios = ""
    if (a.studios && a.studios.length > 0) {
      studios = a.studios.map(function(s) { return s.name }).join(", ")
    }
    var genres = ""
    if (a.genres && a.genres.length > 0) {
      genres = a.genres.map(function(g) { return g.name }).join(", ")
    }
    var synopsis = a.synopsis || "No synopsis available."
    if (synopsis.length > 300) synopsis = synopsis.substring(0, 300) + "..."
    var url = a.url || ""
    var image = a.images && a.images.jpg ? a.images.jpg.large_image_url : ""

    var scoreIcon = score !== "N/A" && score >= 8 ? "⭐" : score !== "N/A" && score >= 6 ? "✨" : "📊"

    var caption = "<b>🎌 " + title + "</b>"
    if (titleJp) caption += "\n<b>🇯🇵 " + titleJp + "</b>"
    caption += "\n\n" +
      "<b>📺 Tʏᴘᴇ:</b> " + type + "\n" +
      "<b>📋 Eᴘɪsᴏᴅᴇs:</b> " + episodes + "\n" +
      "<b>📡 Sᴛᴀᴛᴜs:</b> " + status + "\n" +
      scoreIcon + " <b>Sᴄᴏʀᴇ:</b> " + score + "\n" +
      "<b>🏆 Rᴀɴᴋᴇᴅ:</b> #" + ranked + "\n" +
      "<b>🔥 Pᴏᴘᴜʟᴀʀɪᴛʏ:</b> #" + popularity + "\n" +
      "<b>👥 Mᴇᴍʙᴇʀs:</b> " + members + "\n" +
      "<b>🔞 Rᴀᴛɪɴɢ:</b> " + rating + "\n" +
      "<b>⏱️ Dᴜʀᴀᴛɪᴏɴ:</b> " + duration + "\n" +
      "<b>📅 Sᴇᴀsᴏɴ:</b> " + season + " " + year + "\n"
    if (studios) caption += "<b>🎬 Sᴛᴜᴅɪᴏ:</b> " + studios + "\n"
    if (genres) caption += "<b>🎭 Gᴇɴʀᴇs:</b> " + genres + "\n"
    caption += "\n<b>📝 Sʏɴᴏᴘsɪs:</b>\n<blockquote>" + synopsis + "</blockquote>"
    if (url) caption += "\n\n🔗 <a href='" + url + "'>Vɪᴇᴡ Oɴ MʏAɴɪᴍᴇLɪsᴛ</a>"
    caption += adsFooter

    var buttons = [
      [
        { text: "🔍 Sᴇᴀʀᴄʜ Aɢᴀɪɴ", callback_data: "/anime" },
        { text: "📖 Mᴀɴɢᴀ", callback_data: "/manga" }
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
    Bot.sendMessage("<b>❌ Aɴɪᴍᴇ ɴᴏᴛ ꜰᴏᴜɴᴅ.</b> Tʀʏ ᴀ ᴅɪꜰꜰᴇʀᴇɴᴛ ɴᴀᴍᴇ.", {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/anime" }]]
      }
    })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ ꜰᴇᴛᴄʜɪɴɢ ᴀɴɪᴍᴇ ᴅᴀᴛᴀ.</b>", { parse_mode: "HTML" })
}
