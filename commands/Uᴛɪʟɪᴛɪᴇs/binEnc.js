/*CMD
  command: binEnc
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER
🔤 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ɪɴᴛᴏ ʙɪɴᴀʀʏ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var result = ""
for (var i = 0; i < message.length; i++) {
  var bin = message.charCodeAt(i).toString(2)
  while (bin.length < 8) bin = "0" + bin
  result += bin + " "
}
result = result.trim()

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>💻 Bɪɴᴀʀʏ Eɴᴄᴏᴅᴇᴅ</b>\n\n" +
  "<b>📥 Iɴᴘᴜᴛ:</b>\n<code>" + message + "</code>\n\n" +
  "<b>📤 Oᴜᴛᴘᴜᴛ:</b>\n<code>" + result + "</code>" +
  adsFooter

var buttons = [
  [
    { text: "🔤 Eɴᴄᴏᴅᴇ Mᴏʀᴇ", callback_data: "binEnc" },
    { text: "01 Dᴇᴄᴏᴅᴇ", callback_data: "binDec" }
  ],
  [
    { text: "◁", callback_data: "/tools" },
    { text: "○", callback_data: "/start" },
    { text: "✕", callback_data: "/close" }
  ]
]

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: buttons }
})
