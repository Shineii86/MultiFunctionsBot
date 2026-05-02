/*CMD
  command: onAdminListResult
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
  var admins = options.result || options
  if (!admins || !admins.length) {
    Bot.sendMessage("<b>❌ Cᴏᴜʟᴅ ɴᴏᴛ ꜰᴇᴛᴄʜ ᴀᴅᴍɪɴ ʟɪsᴛ.</b>", { parse_mode: "HTML" })
    return
  }

  var caption = "<b>👑 Aᴅᴍɪɴ Lɪsᴛ</b>\n\n"
  for (var i = 0; i < admins.length; i++) {
    var a = admins[i]
    var u = a.user
    var name = (u.first_name || "") + " " + (u.last_name || "")
    name = name.trim() || u.id
    var status = a.status || "member"
    var icon = status === "creator" ? "👑" : "⭐"
    var username = u.username ? "(@" + u.username + ")" : ""
    caption += icon + " <a href='tg://user?id=" + u.id + "'>" + name + "</a> " + username
    if (status === "creator") caption += " <b>[Oᴡɴᴇʀ]</b>"
    caption += "\n"
  }
  caption += "\n<b>📊 Tᴏᴛᴀʟ:</b> " + admins.length + " ᴀᴅᴍɪɴs"
  caption += adsFooter

  Bot.sendMessage(caption, {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: [[{ text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ ꜰᴇᴛᴄʜɪɴɢ ᴀᴅᴍɪɴs.</b>", { parse_mode: "HTML" })
}
