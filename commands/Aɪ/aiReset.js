/*CMD
  command: aiReset
  help: Reset AI conversation history
  need_reply: false
  auto_retry_time: 
  folder: Aɪ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.setProperty("ai_history", [], "json")

Libs.Helpers.editOrSend({
  text: "<b>🔄 Aɪ Cᴏɴᴠᴇʀꜱᴀᴛɪᴏɴ Rᴇꜱᴇᴛ!</b>\n\nSᴛᴀʀᴛ ᴀ ꜰʀᴇꜱʜ ᴄʜᴀᴛ ᴡɪᴛʜ /ai",
  reply_markup: { inline_keyboard: [[{ text: "🤖 Sᴛᴀʀᴛ Cʜᴀᴛ", callback_data: "/ai" }]] }
})
