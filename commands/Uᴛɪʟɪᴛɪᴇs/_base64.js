/*CMD
  command: /base64
  help: Encode or decode Base64 text
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

var caption = "<b>🔤 Bᴀsᴇ64 Eɴᴄᴏᴅᴇ / Dᴇᴄᴏᴅᴇ</b>\n\n" +
  "Sᴇʟᴇᴄᴛ ᴛʜᴇ ᴏᴘᴇʀᴀᴛɪᴏɴ ᴛᴏ ᴘᴇʀꜰᴏʀᴍ:" +
  adsFooter

var buttons = [
  [
    { text: "🔒 Eɴᴄᴏᴅᴇ", callback_data: "b64enc" },
    { text: "🔓 Dᴇᴄᴏᴅᴇ", callback_data: "b64dec" }
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
