/*CMD
  command: editWelcome
  help: Edit welcome message (reply to a message)
  need_reply: true
  auto_retry_time: 
  folder: Gʀᴏᴜᴘ Mᴀɴᴀɢᴇᴍᴇɴᴛ

  <<ANSWER
✏️ Sᴇɴᴅ ᴛʜᴇ ɴᴇᴡ ᴡᴇʟᴄᴏᴍᴇ ᴍᴇꜱꜱᴀɢᴇ.
Uꜱᴇ {name}, {username}, {group}, {count}, {id} ᴀꜱ ᴠᴀʀɪᴀʙʟᴇꜱ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var chatId = request.chat ? request.chat.id : user.telegramid
var newMsg = message.trim()

if (!newMsg || newMsg.length < 5) {
  Bot.sendMessage("<b>❌ Mᴇꜱꜱᴀɢᴇ ᴛᴏᴏ ꜱʜᴏʀᴛ.</b>", { parse_mode: "HTML" })
  return
}

Bot.setProperty("welcome_msg_" + chatId, newMsg, "string")

Bot.sendMessage("<b>✅ Wᴇʟᴄᴏᴍᴇ ᴍᴇꜱꜱᴀɢᴇ ᴜᴘᴅᴀᴛᴇᴅ!</b>\n\n" +
  "<b>📝 Nᴇᴡ Mᴇꜱꜱᴀɢᴇ:</b>\n<blockquote>" + Libs.Helpers.escapeHTML(newMsg) + "</blockquote>", {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/welcome") }
})
