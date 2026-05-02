/*CMD
  command: onBanInfoResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

try {
  var data = options.result || options

  if (data && data.length > 0) {
    var caption = "<b>🚫 Bᴀɴɴᴇᴅ Usᴇʀs</b>\n\n"
    for (var i = 0; i < Math.min(20, data.length); i++) {
      var u = data[i].user
      var name = (u.first_name || "") + " " + (u.last_name || "")
      name = name.trim() || u.id
      caption += "🚫 <a href='tg://user?id=" + u.id + "'>" + name + "</a>"
      if (u.username) caption += " (@" + u.username + ")"
      caption += "\n"
    }
    if (data.length > 20) caption += "\n<i>...and " + (data.length - 20) + " more</i>"
    caption += "\n<b>📊 Tᴏᴛᴀʟ:</b> " + data.length + " ʙᴀɴɴᴇᴅ"
    caption += adsFooter
  } else {
    var caption = "<b>✅ Nᴏ ʙᴀɴɴᴇᴅ ᴜsᴇʀs ɪɴ ᴛʜɪs ᴄʜᴀᴛ.</b>" + adsFooter
  }

  Bot.sendMessage(caption, {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: [[{ text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Cᴏᴜʟᴅ ꜰᴇᴛᴄʜ ʙᴀɴ ʟɪsᴛ.</b>\nMᴀᴋᴇ sᴜʀᴇ ᴛʜᴇ ʙᴏᴛ ɪs ᴀᴅᴍɪɴ.", { parse_mode: "HTML" })
}
