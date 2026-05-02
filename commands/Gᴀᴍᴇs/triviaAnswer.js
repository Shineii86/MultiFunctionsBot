/*CMD
  command: triviaAnswer
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

var parts = (params || "").split(" ")
var selected = parseInt(parts[0]) || 0
var correct = parseInt(parts[1]) || 0
var adsFooter = Libs.Helpers.getAdsFooter()

var isCorrect = selected === correct
var emojis = ["🇦", "🇧", "🇨", "🇩"]

if (isCorrect) {
  var score = User.getProperty("triviaScore", 0) + 1
  User.setProperty("triviaScore", score, "integer")

  Libs.Helpers.editOrSend({
    text: "<b>✅ Cᴏʀʀᴇᴄᴛ! 🎉</b>\n\n" +
      emojis[correct] + " Wᴀs ᴛʜᴇ ʀɪɢʜᴛ ᴀɴꜱᴡᴇʀ!\n\n" +
      "<b>📊 Yᴏᴜʀ Sᴄᴏʀᴇ:</b> " + score +
      adsFooter,
    reply_markup: { inline_keyboard: [
      [{ text: "🎯 Nᴇxᴛ Qᴜᴇꜱᴛɪᴏɴ", callback_data: "/trivia" }],
      [{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]
    ]}
  })
} else {
  Libs.Helpers.editOrSend({
    text: "<b>❌ Wʀᴏɴɢ!</b>\n\n" +
      emojis[selected] + " Wᴀs ɪɴᴄᴏʀʀᴇᴄᴛ.\n" +
      emojis[correct] + " " + emojis[correct] + " Wᴀs ᴛʜᴇ ʀɪɢʜᴛ ᴀɴꜱᴡᴇʀ.\n\n" +
      "<b>📊 Yᴏᴜʀ Sᴄᴏʀᴇ:</b> " + (User.getProperty("triviaScore", 0)) +
      adsFooter,
    reply_markup: { inline_keyboard: [
      [{ text: "🎯 Tʀʏ Aɢᴀɪɴ", callback_data: "/trivia" }],
      [{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]
    ]}
  })
}
