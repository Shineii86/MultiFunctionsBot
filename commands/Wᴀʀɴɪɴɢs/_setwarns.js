/*CMD
  command: /setwarns
  help: Set max warnings before ban
  need_reply: true
  auto_retry_time: 
  folder: Wᴀʀɴɪɴɢs

  <<ANSWER
⚠️ Sᴇɴᴅ ᴛʜᴇ ᴍᴀx ɴᴜᴍʙᴇʀ ᴏꜰ ᴡᴀʀɴɪɴɢs ʙᴇꜰᴏʀᴇ ʙᴀɴ (ᴇ.ɢ. 3).
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var num = parseInt(message.trim())
if (isNaN(num) || num < 1 || num > 20) {
  Bot.sendMessage("<b❌ Sᴇɴᴅ ᴀ ɴᴜᴍʙᴇʀ ʙᴇᴛᴡᴇᴇɴ 1 ᴀɴᴅ 20.</b>", { parse_mode: "HTML" })
  return
}

Bot.setProperty("max_warns", num, "integer")

Bot.sendMessage("<b>✅ Mᴀx ᴡᴀʀɴɪɴɢs sᴇᴛ ᴛᴏ:</b> " + num, {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [[{ text: "◁ Bᴀᴄᴋ", callback_data: "/logs" }]] }
})
