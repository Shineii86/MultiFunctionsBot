/*CMD
  command: revealScramble
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Gᴀᴍᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var answer = User.getProperty("scrambleAnswer", "")

Libs.Helpers.editOrSend({
  text: "<b>💡 Aɴꜱᴡᴇʀ:</b> <b>" + answer.toUpperCase() + "</b>",
  reply_markup: { inline_keyboard: [[{ text: "🔤 Nᴇxᴛ Gᴀᴍᴇ", callback_data: "/wordgame" }]] }
})
