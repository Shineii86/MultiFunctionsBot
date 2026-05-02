/*CMD
  command: /hex
  help: Convert text to/from hex
  need_reply: false
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
Libs.Helpers.editOrSend({
  text: "<b>🔢 Hᴇx Cᴏɴᴠᴇʀᴛᴇʀ</b>\n\nSᴇʟᴇᴄᴛ ᴏᴘᴇʀᴀᴛɪᴏɴ:" + adsFooter,
  reply_markup: { inline_keyboard: [
    [{ text: "🔤 → 0x Tᴇxᴛ Tᴏ Hᴇx", callback_data: "hexEnc" }, { text: "0x → 🔤 Hᴇx Tᴏ Tᴇxᴛ", callback_data: "hexDec" }],
    [{ text: "◁", callback_data: "/tools" }, { text: "○", callback_data: "/start" }, { text: "✕", callback_data: "/close" }]
  ]}
})
