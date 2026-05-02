/*CMD
  command: /afk
  help: Set AFK status
  need_reply: false
  auto_retry_time: 
  folder: Aꜰᴋ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var reason = params || message || ""
var afkData = {
  active: true,
  reason: reason.trim() || "Nᴏ ʀᴇᴀꜱᴏɴ ɢɪᴠᴇɴ",
  since: Date.now()
}

User.setProperty("afk", afkData, "json")

var caption = "<b>💤 AFK Mᴏᴅᴇ Aᴄᴛɪᴠᴀᴛᴇᴅ</b>\n\n" +
  "<b>📝 Rᴇᴀꜱᴏɴ:</b> " + afkData.reason + "\n\n" +
  "Oᴛʜᴇʀꜱ ᴡɪʟʟ ʙᴇ ɴᴏᴛɪꜰɪᴇᴅ ᴡʜᴇɴ ᴛʜᴇʏ ᴛᴀɢ ʏᴏᴜ."

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
})
