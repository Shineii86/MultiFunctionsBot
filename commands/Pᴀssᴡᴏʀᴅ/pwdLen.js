/*CMD
  command: pwdLen
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Pᴀssᴡᴏʀᴅ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

function generatePassword(length) {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?"
  var password = ""
  for (var i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

var length = parseInt(params) || 16
var password = generatePassword(length)
var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>🔐 Yᴏᴜʀ Sᴇᴄᴜʀᴇ Pᴀssᴡᴏʀᴅ:</b>\n\n<code>" + password + "</code>\n\n" +
  "<b>📏 Lᴇɴɢᴛʜ:</b> " + length + " Cʜᴀʀᴀᴄᴛᴇʀs" +
  adsFooter

var buttons = [
  [
    { text: "8️⃣", callback_data: "pwdLen 8" },
    { text: "1️⃣2️⃣", callback_data: "pwdLen 12" },
    { text: "1️⃣6️⃣", callback_data: "pwdLen 16" },
    { text: "2️⃣4️⃣", callback_data: "pwdLen 24" },
    { text: "3️⃣2️⃣", callback_data: "pwdLen 32" }
  ],
  [
    { text: "🔄 Nᴇᴡ Pᴀssᴡᴏʀᴅ", callback_data: "/password" }
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
