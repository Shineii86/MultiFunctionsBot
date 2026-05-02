/*CMD
  command: /balance
  help: Check your $REACT balance
  need_reply: false
  auto_retry_time: 
  folder: Eᴄᴏɴᴏᴍʏ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /bal /wallet
  group: 
CMD*/

var balance = Libs.ResourcesLib.userRes("balance")
var val = balance.value() || 0
var adsFooter = Libs.Helpers.getAdsFooter()
var bar = Libs.Helpers.getProgressBar(val, 10000, 10)

var rank = "🌱 Nᴇᴡᴄᴏᴍᴇʀ"
if (val >= 10000) rank = "👑 Wʜᴀʟᴇ"
else if (val >= 5000) rank = "💎 Dɪᴀᴍᴏɴᴅ"
else if (val >= 2000) rank = "🏆 Gᴏʟᴅ"
else if (val >= 1000) rank = "🥈 Sɪʟᴠᴇʀ"
else if (val >= 500) rank = "🥉 Bʀᴏɴᴢᴇ"
else if (val >= 100) rank = "⭐ Rᴇɢᴜʟᴀʀ"

var caption = "<b>💼 Yᴏᴜʀ Wᴀʟʟᴇᴛ</b>\n\n" +
  "<b>💰 Bᴀʟᴀɴᴄᴇ:</b> " + Libs.Helpers.formatNumber(val) + " $REACT\n" +
  "<b>🏅 Rᴀɴᴋ:</b> " + rank + "\n" +
  "<b>ᴘʀᴏɢʀᴇꜱꜱ:</b> " + bar + "\n\n" +
  "<b>💡 Eᴀʀɴ Mᴏʀᴇ:</b>\n" +
  "├ /daily — Dᴀɪʟʏ ʀᴇᴡᴀʀᴅ\n" +
  "├ Sʜᴀʀᴇ ʀᴇꜰᴇʀʀᴀʟ ʟɪɴᴋ — +5 ᴇᴀᴄʜ\n" +
  "└ Sᴘᴇᴄɪᴀʟ ʟɪɴᴋ — +1000!" +
  adsFooter

var buttons = [
  [
    { text: "🎁 Dᴀɪʟʏ Rᴇᴡᴀʀᴅ", callback_data: "/daily" },
    { text: "🔗 Mʏ Lɪɴᴋ", callback_data: "/referral" }
  ],
  [
    { text: "📊 Lᴇᴀᴅᴇʀʙᴏᴀʀᴅ", callback_data: "/leaderboard" },
    { text: "💸 Tʀᴀɴꜰᴇʀ", callback_data: "/transfer" }
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
