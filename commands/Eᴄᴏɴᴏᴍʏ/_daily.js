/*CMD
  command: /daily
  help: Claim your daily reward
  need_reply: false
  auto_retry_time: 
  folder: Eᴄᴏɴᴏᴍʏ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var lastDaily = User.getProperty("lastDaily", 0)
var now = Date.now()
var oneDay = 24 * 60 * 60 * 1000

var adsFooter = Libs.Helpers.getAdsFooter()

if (now - lastDaily < oneDay) {
  var remaining = oneDay - (now - lastDaily)
  var hours = Math.floor(remaining / 3600000)
  var mins = Math.floor((remaining % 3600000) / 60000)

  Bot.sendMessage("<b>⏳ Aʟʀᴇᴀᴅʏ Cʟᴀɪᴍᴇᴅ!</b>\n\n" +
    "<b>Nᴇxᴛ ʀᴇᴡᴀʀᴅ ɪɴ:</b> " + hours + "ʜ " + mins + "ᴍ\n\n" +
    "Cᴏᴍᴇ ʙᴀᴄᴋ ʟᴀᴛᴇʀ ꜰᴏʀ ʏᴏᴜʀ ɴᴇxᴛ ʀᴇᴡᴀʀᴅ! 🎁" +
    adsFooter, {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
  })
  return
}

var streak = User.getProperty("dailyStreak", 0)
var lastDailyDate = new Date(lastDaily).toDateString()
var todayDate = new Date(now).toDateString()
var yesterdayDate = new Date(now - oneDay).toDateString()

if (lastDailyDate === yesterdayDate) {
  streak++
} else if (lastDailyDate !== todayDate) {
  streak = 1
}

var baseReward = 50
var streakBonus = Math.min(streak * 10, 100)
var totalReward = baseReward + streakBonus

balance.add(totalReward)
User.setProperty("lastDaily", now, "integer")
User.setProperty("dailyStreak", streak, "integer")

var streakBar = Libs.Helpers.getProgressBar(streak, 10, 10)

Bot.sendMessage("<b>🎁 Dᴀɪʟʏ Rᴇᴡᴀʀᴅ Cʟᴀɪᴍᴇᴅ!</b>\n\n" +
  "<b>💰 Bᴀꜱᴇ:</b> +" + baseReward + " $REACT\n" +
  "<b>🔥 Sᴛʀᴇᴀᴋ:</b> +" + streakBonus + " $REACT (Day " + streak + ")\n" +
  "<b>📊 Sᴛʀᴇᴀᴋ:</b> " + streakBar + "\n" +
  "<b>💎 Tᴏᴛᴀʟ:</b> <b>" + totalReward + " $REACT</b>\n\n" +
  "<b>💼 Bᴀʟᴀɴᴄᴇ:</b> " + Libs.Helpers.formatNumber(balance.value()) + " $REACT" +
  adsFooter, {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [
    [
      { text: "💼 Bᴀʟᴀɴᴄᴇ", callback_data: "/balance" },
      { text: "🎁 Cʟᴀɪᴍ Aɢᴀɪɴ", callback_data: "/daily" }
    ],
    [
      { text: "◁", callback_data: "/tools" },
      { text: "○", callback_data: "/start" },
      { text: "✕", callback_data: "/close" }
    ]
  ]}
})
