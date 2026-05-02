/*CMD
  command: /textcase
  help: Convert text case (upper/lower/title/swap)
  need_reply: false
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /case
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>🔤 Tᴇxᴛ Cᴀꜱᴇ Cᴏɴᴠᴇʀᴛᴇʀ</b>\n\n" +
  "Sᴇʟᴇᴄᴛ ᴛʜᴇ ᴄᴏɴᴠᴇʀꜱɪᴏɴ ᴛʏᴘᴇ:" +
  adsFooter

var buttons = [
  [
    { text: "🔠 UᴘᴘᴇʀCᴀꜱᴇ", callback_data: "caseUp" },
    { text: "🔡 LᴏᴡᴇʀCᴀꜱᴇ", callback_data: "caseLow" }
  ],
  [
    { text: "📝 Tɪᴛʟᴇ Cᴀꜱᴇ", callback_data: "caseTitle" },
    { text: "🔄 sWAP cASE", callback_data: "caseSwap" }
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
