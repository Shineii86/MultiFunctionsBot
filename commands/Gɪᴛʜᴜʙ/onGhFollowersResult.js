/*CMD
  command: onGhFollowersResult
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
    var caption = "<b>👥 Fᴏʟʟᴏᴡᴇʀs</b>\n\n"

    for (var i = 0; i < Math.min(15, data.length); i++) {
      var u = data[i]
      var name = u.login
      var type = u.type === "User" ? "👤" : "🏢"
      caption += type + " <a href='" + u.html_url + "'>" + name + "</a>\n"
    }

    if (data.length >= 15) caption += "\n<i>Showing first 15 followers</i>"
    caption += adsFooter

    var buttons = [
      [
        { text: "🔍 Aɴᴏᴛʜᴇʀ", callback_data: "/ghfollowers" },
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
      reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/ghfollowers" }]] }
    })
  } else {
    Bot.sendMessage("<b>❌ Nᴏ ꜰᴏʟʟᴏᴡᴇʀs ꜰᴏᴜɴᴅ.</b>", { parse_mode: "HTML" })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ ꜰᴇᴛᴄʜɪɴɢ ꜰᴏʟʟᴏᴡᴇʀs.</b>", { parse_mode: "HTML" })
}
