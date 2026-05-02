/*CMD
  command: /uuid
  help: Generate a random UUID
  need_reply: false
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /guid
  group: 
CMD*/

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0
    var v = c === "x" ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

var uuid = generateUUID()
var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>🎲 Rᴀɴᴅᴏᴍ UUID</b>\n\n" +
  "<b>📤 UUID:</b>\n<code>" + uuid + "</code>\n\n" +
  "<b>📋 Tʏᴘᴇ:</b> V4 (Rᴀɴᴅᴏᴍ)" +
  adsFooter

var buttons = [
  [
    { text: "🔄 Nᴇᴡ UUID", callback_data: "/uuid" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
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
