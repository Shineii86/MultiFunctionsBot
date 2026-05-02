/*CMD
  command: /profile
  help: View or customize your profile
  need_reply: false
  auto_retry_time: 
  folder: Pʀᴏꜰɪʟᴇ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /p /me
  group: 
CMD*/

var targetId = user.telegramid
var targetUser = user

// Check if viewing another user's profile
if (params) {
  var parsedId = parseInt(params)
  if (!isNaN(parsedId) && parsedId > 0) {
    targetId = parsedId
  }
}

var balance = Libs.ResourcesLib.anotherUserRes("balance", targetId)
var refs = Libs.ReferralLib.getRefCount(targetId)
var isPremium = Bot.getProperty("premium_" + targetId, false)
var xp = Bot.getProperty("xp_" + targetId, 0)
var level = Math.floor(xp / 100) + 1
var xpBar = Libs.Helpers.getProgressBar(xp % 100, 100, 10)
var streak = Bot.getProperty("dailyStreak_" + targetId, 0)
var isAFK = false
var rank = "🌱 Nᴇᴡᴄᴏᴍᴇʀ"
var val = balance.value() || 0

if (val >= 10000) rank = "👑 Wʜᴀʟᴇ"
else if (val >= 5000) rank = "💎 Dɪᴀᴍᴏɴᴅ"
else if (val >= 2000) rank = "🏆 Gᴏʟᴅ"
else if (val >= 1000) rank = "🥈 Sɪʟᴠᴇʀ"
else if (val >= 500) rank = "🥉 Bʀᴏɴᴢᴇ"
else if (val >= 100) rank = "⭐ Rᴇɢᴜʟᴀʀ"

var badges = []
if (isPremium) badges.push("👑")
if (refs >= 10) badges.push("🔗")
if (streak >= 7) badges.push("🔥")
if (level >= 10) badges.push("⚡")
if (val >= 1000) badges.push("💰")
var badgeStr = badges.length > 0 ? badges.join(" ") : "—"

var caption = "<b>╭━━ 👤 Pʀᴏꜰɪʟᴇ ━━╮</b>\n\n" +
  "<b>Nᴀᴍᴇ:</b> " + Libs.Helpers.getUserMention() + "\n" +
  "<b>🆔 Iᴅ:</b> <code>" + targetId + "</code>\n" +
  "<b>🏅 Rᴀɴᴋ:</b> " + rank + "\n" +
  "<b>🎖️ Bᴀᴅɢᴇꜱ:</b> " + badgeStr + "\n\n" +
  "<b>📊 Sᴛᴀᴛꜱ:</b>\n" +
  "├ 💰 Bᴀʟᴀɴᴄᴇ: " + Libs.Helpers.formatNumber(val) + " $REACT\n" +
  "├ ⭐ Lᴇᴠᴇʟ: " + level + "\n" +
  "├ ✨ XP: " + xp + "/100\n" +
  "├ " + xpBar + "\n" +
  "├ 👥 Rᴇꜰꜱ: " + refs + "\n" +
  "└ 🔥 Sᴛʀᴇᴀᴋ: " + streak + " ᴅᴀʏꜱ\n\n" +
  "<b>╰━━━━━━━━━━━━━━━━━━╯</b>"

var buttons = [
  [
    { text: "✏️ Sᴇᴛ Bɪᴏ", callback_data: "setBio" },
    { text: "🎨 Sᴇᴛ Tɪᴛʟᴇ", callback_data: "setTitle" }
  ],
  [
    { text: "💼 Bᴀʟᴀɴᴄᴇ", callback_data: "/balance" },
    { text: "🔗 Rᴇꜰ Lɪɴᴋ", callback_data: "/referral" }
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
