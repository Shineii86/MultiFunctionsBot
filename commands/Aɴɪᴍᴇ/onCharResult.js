/*CMD
  command: onCharResult
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
    var c = data.data[0]
    var name = c.name || "Unknown"
    var nameKanji = c.name_kanji || ""
    var nicknames = ""
    if (c.nicknames && c.nicknames.length > 0) {
      nicknames = c.nicknames.join(", ")
    }
    var about = c.about || "No information available."
    if (about.length > 400) about = about.substring(0, 400) + "..."
    var url = c.url || ""
    var image = c.images && c.images.jpg ? c.images.jpg.large_image_url : ""

    var caption = "<b>👤 " + name + "</b>"
    if (nameKanji) caption += "\n<b>🇯🇵 " + nameKanji + "</b>"
    caption += "\n\n"
    if (nicknames) caption += "<b>🏷️ Nɪᴄᴋɴᴀᴍᴇs:</b> " + nicknames + "\n\n"
    caption += "<b>📝 Aʙᴏᴜᴛ:</b>\n<blockquote>" + about + "</blockquote>"
    if (url) caption += "\n\n🔗 <a href='" + url + "'>Vɪᴇᴡ Oɴ MʏAɴɪᴍᴇLɪsᴛ</a>"
    caption += adsFooter

    var buttons = [
      [
        { text: "🔍 Sᴇᴀʀᴄʜ Aɢᴀɪɴ", callback_data: "/character" },
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
    Bot.sendMessage("<b>❌ Cʜᴀʀᴀᴄᴛᴇʀ ɴᴏᴛ ꜰᴏᴜɴᴅ.</b>", {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/character" }]]
      }
    })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ ꜰᴇᴛᴄʜɪɴɢ ᴄʜᴀʀᴀᴄᴛᴇʀ ᴅᴀᴛᴀ.</b>", { parse_mode: "HTML" })
}
