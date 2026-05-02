/*CMD
  command: /referral
  help: Get your referral link
  need_reply: false
  auto_retry_time: 
  folder: Eᴄᴏɴᴏᴍʏ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ref /link
  group: 
CMD*/

var refLink = Libs.ReferralLib.getLink()
var refCount = Libs.ReferralLib.getRefCount()
var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>🔗 Yᴏᴜʀ Rᴇꜰᴇʀʀᴀʟ Lɪɴᴋ</b>\n\n" +
  "<b>📎 Lɪɴᴋ:</b>\n<code>" + refLink + "</code>\n\n" +
  "<b>👥 Rᴇꜰᴇʀʀᴀʟꜱ:</b> " + refCount + "\n" +
  "<b>💰 Pᴇʀ Rᴇꜰ:</b> +5 $REACT\n" +
  "<b>🎁 Bᴏᴛʜ ɢᴇᴛ:</b> +5 $REACT\n\n" +
  "<b>💡 Hᴏᴡ ɪᴛ ᴡᴏʀᴋꜱ:</b>\n" +
  "1. Sʜᴀʀᴇ ʏᴏᴜʀ ʟɪɴᴋ\n" +
  "2. Fʀɪᴇɴᴅ ᴄʟɪᴄᴋꜱ & ꜱᴛᴀʀᴛꜱ ʙᴏᴛ\n" +
  "3. Bᴏᴛʜ ᴏꜰ ʏᴏᴜ ɢᴇᴛ +5 $REACT!" +
  adsFooter

var buttons = [
  [{ text: "📤 Sʜᴀʀᴇ Lɪɴᴋ", url: "https://t.me/share/url?url=" + encodeURIComponent(refLink) }],
  [
    { text: "💼 Bᴀʟᴀɴᴄᴇ", callback_data: "/balance" },
    { text: "📊 Lᴇᴀᴅᴇʀʙᴏᴀʀᴅ", callback_data: "/leaderboard" }
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
