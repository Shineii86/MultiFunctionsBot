/*CMD
  command: /textcase
  help: Convert text case (UPPER, lower, Title, etc.)
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
Libs.Helpers.editOrSend({
  text: "<b>🔤 Tᴇxᴛ Cᴀsᴇ Cᴏɴᴠᴇʀᴛᴇʀ</b>\n\nSᴇʟᴇᴄᴛ ᴄᴀsᴇ:" + adsFooter,
  reply_markup: { inline_keyboard: [
    [{ text: "🔠 UᴘᴘᴇʀCᴀsᴇ", callback_data: "caseUp" }, { text: "🔡 lᴏᴡᴇʀᴄᴀsᴇ", callback_data: "caseLow" }],
    [{ text: "📝 Tɪᴛʟᴇ Cᴀsᴇ", callback_data: "caseTitle" }, { text: "🔄 sWAP cASE", callback_data: "caseSwap" }],
    [{ text: "◁", callback_data: "/tools" }, { text: "○", callback_data: "/start" }, { text: "✕", callback_data: "/close" }]
  ]}
})
