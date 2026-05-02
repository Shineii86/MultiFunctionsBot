/*CMD
  command: setTitle
  help: Set your profile title
  need_reply: true
  auto_retry_time: 
  folder: Pʀᴏꜰɪʟᴇ

  <<ANSWER
🎨 Sᴇɴᴅ ʏᴏᴜʀ ᴛɪᴛʟᴇ (ᴇ.ɢ. Dᴇᴠᴇʟᴏᴘᴇʀ, Gᴀᴍᴇʀ, Aɴɪᴍᴇ Fᴀɴ).
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var title = message.trim()
if (title.length > 30) {
  Bot.sendMessage("<b>❌ Tɪᴛʟᴇ ᴛᴏᴏ ʟᴏɴɢ! Mᴀx 30 ᴄʜᴀʀꜱ.</b>", { parse_mode: "HTML" })
  return
}

User.setProperty("title", title, "string")

Bot.sendMessage("<b>✅ Tɪᴛʟᴇ Sᴇᴛ!</b>\n\n" +
  "<b>Yᴏᴜʀ Tɪᴛʟᴇ:</b> " + Libs.Helpers.escapeHTML(title), {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/profile") }
})
