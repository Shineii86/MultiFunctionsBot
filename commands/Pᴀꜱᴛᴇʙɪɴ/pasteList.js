/*CMD
  command: pasteList
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Pᴀꜱᴛᴇʙɪɴ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var pastes = Bot.getProperty("pastes_" + user.telegramid, [])

if (pastes.length === 0) {
  Bot.sendMessage("<b>📋 Nᴏ ᴘᴀꜱᴛᴇꜱ.</b>\n\nUꜱᴇ /paste ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴏɴᴇ.", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "📋 Cʀᴇᴀᴛᴇ", callback_data: "/paste" }]] }
  })
  return
}

var caption = "<b>📋 Yᴏᴜʀ Pᴀꜱᴛᴇꜱ (" + pastes.length + ")</b>\n\n"
var recent = pastes.slice(-10).reverse()
for (var i = 0; i < recent.length; i++) {
  var p = recent[i]
  var preview = Libs.Helpers.truncate(p.text, 40)
  var timeAgo = Libs.Helpers.timeAgo(p.time)
  caption += (i + 1) + ". <code>" + p.id + "</code> — " + Libs.Helpers.escapeHTML(preview) + " <i>(" + timeAgo + ")</i>\n"
}

caption += adsFooter

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: [
    [
      { text: "📋 Nᴇᴡ Pᴀꜱᴛᴇ", callback_data: "/paste" },
      { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
    ]
  ]}
})
