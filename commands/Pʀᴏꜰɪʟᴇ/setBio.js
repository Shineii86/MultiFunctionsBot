/*CMD
  command: setBio
  help: Set your profile bio
  need_reply: true
  auto_retry_time: 
  folder: Pʀᴏꜰɪʟᴇ

  <<ANSWER
✏️ Sᴇɴᴅ ʏᴏᴜʀ ʙɪᴏ (ᴍᴀx 150 ᴄʜᴀʀꜱ).
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var bio = message.trim()
if (bio.length > 150) {
  Bot.sendMessage("<b>❌ Bɪᴏ ᴛᴏᴏ ʟᴏɴɢ! Mᴀx 150 ᴄʜᴀʀꜱ.</b>", { parse_mode: "HTML" })
  return
}

User.setProperty("bio", bio, "string")

Bot.sendMessage("<b>✅ Bɪᴏ Sᴇᴛ!</b>\n\n" +
  "<blockquote>" + Libs.Helpers.escapeHTML(bio) + "</blockquote>", {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/profile") }
})
