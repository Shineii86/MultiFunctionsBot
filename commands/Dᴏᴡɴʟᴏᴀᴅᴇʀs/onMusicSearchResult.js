/*CMD
  command: onMusicSearchResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Dᴏᴡɴʟᴏᴀᴅᴇʀs

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
    var items = data.items.slice(0, 5)
    var caption = "<b>🎵 Mᴜꜱɪᴄ Rᴇꜱᴜʟᴛꜱ</b>\n\n"

    var buttons = []
    for (var i = 0; i < items.length; i++) {
      var item = items[i]
      var title = item.title || "Unknown"
      var uploader = item.uploader || "Unknown"
      var duration = item.duration ? Math.floor(item.duration / 60) + ":" + ("0" + (item.duration % 60)).slice(-2) : ""
      caption += (i + 1) + ". <b>" + Libs.Helpers.escapeHTML(title) + "</b>\n"
      caption += "   👤 " + Libs.Helpers.escapeHTML(uploader) + " " + duration + "\n"
      if (item.url) {
        buttons.push([{ text: (i + 1) + ". " + Libs.Helpers.truncate(title, 30), url: "https://piped.video" + item.url }])
      }
    }

    buttons.push([
      { text: "🔍 Sᴇᴀʀᴄʜ Aɢᴀɪɴ", callback_data: "/music" },
      { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
    ])

    Bot.sendMessage(caption + adsFooter, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: buttons }
    })
  } else {
    Bot.sendMessage("<b>❌ Nᴏ ʀᴇꜱᴜʟᴛꜱ ꜰᴏᴜɴᴅ.</b>", { parse_mode: "HTML" })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Sᴇᴀʀᴄʜ ꜰᴀɪʟᴇᴅ.</b>", { parse_mode: "HTML" })
}
