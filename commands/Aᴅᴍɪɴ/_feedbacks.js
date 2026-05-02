/*CMD
  command: /feedbacks
  help: View recent feedback (admin only)
  need_reply: false
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var adsFooter = Libs.Helpers.getAdsFooter()
var feedbacks = Bot.getProperty("feedbacks", [])

var caption = "<b>📬 Fᴇᴇᴅʙᴀᴄᴋ Mᴀɴᴀɢᴇᴍᴇɴᴛ</b>\n\n"

if (feedbacks.length === 0) {
  caption += "Nᴏ ꜰᴇᴇᴅʙᴀᴄᴋ ʏᴇᴛ.\n\n"
} else {
  caption += "<b>📋 Rᴇᴄᴇɴᴛ Fᴇᴇᴅʙᴀᴄᴋ (" + feedbacks.length + "):</b>\n"
  var recent = feedbacks.slice(-5).reverse()
  for (var i = 0; i < recent.length; i++) {
    var fb = recent[i]
    caption += (i + 1) + ". <b>" + (fb.name || "Aɴᴏɴʏᴍᴏᴜꜱ") + "</b>: " + (fb.text || "").substring(0, 80) + "\n"
  }
  caption += "\n"
}

caption += "<b>💡 Usᴇ:</b> /feedback ᴛᴏ ᴘʀᴏᴍᴘᴛ ᴜꜱᴇʀꜱ ꜰᴏʀ ꜰᴇᴇᴅʙᴀᴄᴋ" +
  adsFooter

var buttons = [[{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]]

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: buttons }
})
