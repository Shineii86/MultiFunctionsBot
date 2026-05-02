/*CMD
  command: pasteStart
  help: Handle deep links for paste access
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

if (!params || params.indexOf("paste_") !== 0) return

var pasteId = params.replace("paste_", "")
var adsFooter = Libs.Helpers.getAdsFooter()

var paste = Bot.getProperty("paste_" + pasteId)
if (!paste) {
  Bot.sendMessage("<b>❌ Pᴀꜱᴛᴇ ɴᴏᴛ ꜰᴏᴜɴᴅ!</b>", { parse_mode: "HTML" })
  return
}

// Increment views
paste.views = (paste.views || 0) + 1
Bot.setProperty("paste_" + pasteId, paste, "json")

var timeAgo = Libs.Helpers.timeAgo(paste.time)

Bot.sendMessage("<b>📋 Pᴀꜱᴛᴇ <code>" + pasteId + "</code></b>\n\n" +
  "<blockquote>" + Libs.Helpers.escapeHTML(paste.text) + "</blockquote>\n\n" +
  "<b>📊 Lᴇɴɢᴛʜ:</b> " + paste.text.length + " ᴄʜᴀʀꜱ\n" +
  "<b>👁️ Vɪᴇᴡꜱ:</b> " + paste.views + "\n" +
  "<b>⏱️ Cʀᴇᴀᴛᴇᴅ:</b> " + timeAgo +
  adsFooter, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
})
