/*CMD
  command: clipClear
  help: Clear clipboard
  need_reply: false
  auto_retry_time: 
  folder: Cʟᴏᴜᴅ Cʟɪᴘʙᴏᴀʀᴅ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.setProperty("clipboard", {}, "json")

Bot.sendMessage("<b>🗑️ Cʟɪᴘʙᴏᴀʀᴅ Cʟᴇᴀʀᴇᴅ!</b>", {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [[{ text: "💾 Sᴀᴠᴇ Nᴇᴡ", callback_data: "clipSave" }]] }
})
