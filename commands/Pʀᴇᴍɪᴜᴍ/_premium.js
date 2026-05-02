/*CMD
  command: /premium
  help: View or purchase premium subscription
  need_reply: false
  auto_retry_time: 
  folder: Pʀᴇᴍɪᴜᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /pro /vip
  group: 
CMD*/

var isPremium = User.getProperty("premium", false)
var premiumExpiry = User.getProperty("premium_expiry", 0)
var balance = Libs.ResourcesLib.userRes("balance")
var adsFooter = Libs.Helpers.getAdsFooter()

if (isPremium && premiumExpiry > Date.now()) {
  var daysLeft = Math.ceil((premiumExpiry - Date.now()) / 86400000)
  var bar = Libs.Helpers.getProgressBar(daysLeft, 30, 10)

  var caption = "<b>👑 Pʀᴇᴍɪᴜᴍ Mᴇᴍʙᴇʀ</b>\n\n" +
    "<b>Sᴛᴀᴛᴜꜱ:</b> 🟢 Aᴄᴛɪᴠᴇ\n" +
    "<b>⏳ Rᴇᴍᴀɪɴɪɴɢ:</b> " + daysLeft + " ᴅᴀʏꜱ\n" +
    bar + "\n\n" +
    "<b>Pʀᴇᴍɪᴜᴍ Bᴇɴᴇꜰɪᴛꜱ:</b>\n" +
    "├ ✨ Aᴅ-ꜰʀᴇᴇ ᴇxᴘᴇʀɪᴇɴᴄᴇ\n" +
    "├ ⚡ Hɪɢʜᴇʀ ʀᴀᴛᴇ ʟɪᴍɪᴛꜱ\n" +
    "├ 🤖 Uɴʟɪᴍɪᴛᴇᴅ Aɪ ᴄʜᴀᴛ\n" +
    "├ 💰 2x ᴅᴀɪʟʏ ʀᴇᴡᴀʀᴅꜱ\n" +
    "├ 🎨 Pʀᴇᴍɪᴜᴍ ʙᴀᴅɢᴇ\n" +
    "└ 📁 10x ꜰɪʟᴇ ꜱᴛᴏʀᴀɢᴇ" +
    adsFooter

  var buttons = [
    [
      { text: "🔄 Rᴇɴᴇᴡ", callback_data: "premiumBuy" },
      { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
    ]
  ]
} else {
  var caption = "<b>👑 Pʀᴇᴍɪᴜᴍ Sᴜʙꜱᴄʀɪᴘᴛɪᴏɴ</b>\n\n" +
    "Uᴘɢʀᴀᴅᴇ ᴛᴏ Pʀᴇᴍɪᴜᴍ ꜰᴏʀ ᴇxᴄʟᴜꜱɪᴠᴇ ʙᴇɴᴇꜰɪᴛꜱ!\n\n" +
    "<b>💎 Bᴇɴᴇꜰɪᴛꜱ:</b>\n" +
    "├ ✨ Aᴅ-ꜰʀᴇᴇ ᴇxᴘᴇʀɪᴇɴᴄᴇ\n" +
    "├ ⚡ Hɪɢʜᴇʀ ʀᴀᴛᴇ ʟɪᴍɪᴛꜱ\n" +
    "├ 🤖 Uɴʟɪᴍɪᴛᴇᴅ Aɪ ᴄʜᴀᴛ\n" +
    "├ 💰 2x ᴅᴀɪʟʏ ʀᴇᴡᴀʀᴅꜱ\n" +
    "├ 🎨 Pʀᴇᴍɪᴜᴍ ʙᴀᴅɢᴇ\n" +
    "└ 📁 10x ꜰɪʟᴇ ꜱᴛᴏʀᴀɢᴇ\n\n" +
    "<b>💰 Pʀɪᴄᴇ:</b> 500 $REACT / ᴍᴏɴᴛʜ\n" +
    "<b>💼 Yᴏᴜʀ Bᴀʟᴀɴᴄᴇ:</b> " + Libs.Helpers.formatNumber(balance.value()) + " $REACT" +
    adsFooter

  var buttons = [
    [
      { text: "💎 Bᴜʏ Pʀᴇᴍɪᴜᴍ (500 $REACT)", callback_data: "premiumBuy" },
    ],
    [
      { text: "🎁 Tʀɪᴀʟ (3 ᴅᴀʏꜱ ꜰʀᴇᴇ)", callback_data: "premiumTrial" }
    ],
    [
      { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
      { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
    ]
  ]
}

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
