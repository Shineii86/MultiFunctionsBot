/*CMD
  command: /leaderboard
  help: View top $REACT holders
  need_reply: false
  auto_retry_time: 
  folder: Eᴄᴏɴᴏᴍʏ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /lb /top
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var topList = Libs.ReferralLib.topList.get()

var caption = "<b>🏆 $REACT Lᴇᴀᴅᴇʀʙᴏᴀʀᴅ</b>\n\n"

if (!topList || !topList.exist) {
  caption += "Nᴏ ᴅᴀᴛᴀ ʏᴇᴛ. Bᴇ ᴛʜᴇ ꜰɪʀꜱᴛ ᴛᴏ ᴇᴀʀɴ!\n\n"
} else {
  var count = Math.min(10, topList.size())
  for (var i = 0; i < count; i++) {
    var userId = topList.get(i)
    var refs = Libs.ReferralLib.getRefCount(userId)
    var medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : (i + 1) + "."
    caption += medal + " <code>" + userId + "</code> — " + refs + " ʀᴇꜰꜱ\n"
  }
  caption += "\n"
}

caption += "<b>💡 Eᴀʀɴ $REACT:</b>\n" +
  "├ /daily — Cʟᴀɪᴍ ᴅᴀɪʟʏ ʀᴇᴡᴀʀᴅ\n" +
  "└ Sʜᴀʀᴇ ʏᴏᴜʀ ʀᴇꜰᴇʀʀᴀʟ ʟɪɴᴋ" +
  adsFooter

var buttons = [
  [
    { text: "💼 Mʏ Bᴀʟᴀɴᴄᴇ", callback_data: "/balance" },
    { text: "🔄 Rᴇꜰʀᴇꜱʜ", callback_data: "/leaderboard" }
  ],
  [
    { text: "◁", callback_data: "/tools" },
    { text: "○", callback_data: "/start" },
    { text: "✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
