/*CMD
  command: /hash
  help: Generate hash from text
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

var caption = "<b># Hᴀsʜ Gᴇɴᴇʀᴀᴛᴏʀ</b>\n\n" +
  "Sᴇʟᴇᴄᴛ ᴛʜᴇ ʜᴀsʜ ᴀʟɢᴏʀɪᴛʜᴍ:" +
  adsFooter

var buttons = [
  [
    { text: "MD5", callback_data: "hashAlg md5" },
    { text: "SHA1", callback_data: "hashAlg sha1" },
    { text: "SHA256", callback_data: "hashAlg sha256" }
  ],
  [
    { text: "SHA384", callback_data: "hashAlg sha384" },
    { text: "SHA512", callback_data: "hashAlg sha512" }
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
