/*CMD
  command: /mystats
  help: View your personal stats
  need_reply: false
  auto_retry_time: 
  folder: Sᴇᴛᴛɪɴɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var refs = Libs.ReferralLib.getRefCount()
var reminders = Bot.getProperty("reminders_" + user.telegramid, [])
var lang = User.getProperty("lang", "en")
var streak = User.getProperty("dailyStreak", 0)
var adsFooter = Libs.Helpers.getAdsFooter()

var val = balance.value() || 0
var bar = Libs.Helpers.getProgressBar(val, 10000, 10)

var caption = "<b>📊 Yᴏᴜʀ Pᴇʀꜱᴏɴᴀʟ Sᴛᴀᴛꜱ</b>\n\n" +
  "<b>👤 Pʀᴏꜰɪʟᴇ:</b>\n" +
  "├ Nᴀᴍᴇ: " + Libs.Helpers.getUserMention() + "\n" +
  "├ Iᴅ: <code>" + user.telegramid + "</code>\n" +
  "├ Lᴀɴɢᴜᴀɢᴇ: " + lang.toUpperCase() + "\n" +
  "└ Pʀᴇᴍɪᴜᴍ: " + (user.is_premium ? "Yᴇꜱ ⭐" : "Nᴏ") + "\n\n" +
  "<b>💰 Eᴄᴏɴᴏᴍʏ:</b>\n" +
  "├ Bᴀʟᴀɴᴄᴇ: " + Libs.Helpers.formatNumber(val) + " $REACT\n" +
  "├ Dᴀɪʟʏ Sᴛʀᴇᴀᴋ: " + streak + " ᴅᴀʏꜱ\n" +
  "└ " + bar + "\n\n" +
  "<b>📈 Aᴄᴛɪᴠɪᴛʏ:</b>\n" +
  "├ Rᴇꜰᴇʀʀᴀʟꜱ: " + refs + "\n" +
  "├ Rᴇᴍɪɴᴅᴇʀꜱ: " + reminders.length + "\n" +
  "└ AFK: " + (User.getProperty("afk", {}).active ? "Yᴇꜱ 💤" : "Nᴏ") +
  adsFooter

var buttons = [
  [
    { text: "💼 Bᴀʟᴀɴᴄᴇ", callback_data: "/balance" },
    { text: "🔗 Rᴇꜰ Lɪɴᴋ", callback_data: "/referral" }
  ],
  [
    { text: "⚙️ Sᴇᴛᴛɪɴɢꜱ", callback_data: "/settings" },
    { text: "📦 Exᴘᴏʀᴛ", callback_data: "/export" }
  ],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
