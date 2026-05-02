/*CMD
  command: /store
  help: Store files and get shareable links
  need_reply: false
  auto_retry_time: 
  folder: Fɪʟᴇ Sᴛᴏʀᴇ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /vault /files
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var storedFiles = Bot.getProperty("stored_files_" + user.telegramid, [])

var caption = "<b>╭━━ 📁 Fɪʟᴇ Sᴛᴏʀᴇ ━━╮</b>\n\n"

if (storedFiles.length === 0) {
  caption += "Nᴏ ꜰɪʟᴇꜱ ꜱᴛᴏʀᴇᴅ ʏᴇᴛ.\n\n"
} else {
  caption += "<b>📋 Yᴏᴜʀ Fɪʟᴇꜱ (" + storedFiles.length + "):</b>\n"
  var recent = storedFiles.slice(-10).reverse()
  for (var i = 0; i < recent.length; i++) {
    var f = recent[i]
    var typeEmoji = f.type === "photo" ? "🖼️" : f.type === "video" ? "🎬" : f.type === "audio" ? "🎵" : f.type === "voice" ? "🎤" : "📄"
    caption += typeEmoji + " <code>" + f.id + "</code> — " + Libs.Helpers.truncate(f.name, 30) + "\n"
  }
  if (storedFiles.length > 10) caption += "\n<i>Sʜᴏᴡɪɴɢ ʟᴀꜱᴛ 10 ᴏꜰ " + storedFiles.length + " ꜰɪʟᴇꜱ</i>"
  caption += "\n"
}

caption += "<b>💡 Hᴏᴡ ᴛᴏ ᴜꜱᴇ:</b>\n" +
  "├ Sᴇɴᴅ ᴀɴʏ ꜰɪʟᴇ/ᴘʜᴏᴛᴏ/ᴠɪᴅᴇᴏ ᴛᴏ ꜱᴛᴏʀᴇ ɪᴛ\n" +
  "├ Gᴇᴛ ᴀ ꜱʜᴀʀᴇᴀʙʟᴇ ʟɪɴᴋ ɪɴꜱᴛᴀɴᴛʟʏ\n" +
  "└ /store list — Vɪᴇᴡ ᴀʟʟ ꜰɪʟᴇꜱ\n\n" +
  "<b>╰━━━━━━━━━━━━━━━━━━╯</b>" +
  adsFooter

var buttons = [
  [
    { text: "📤 Uᴘʟᴏᴀᴅ Fɪʟᴇ", callback_data: "storeUpload" },
    { text: "📋 Lɪꜱᴛ Aʟʟ", callback_data: "storeList" }
  ],
  [
    { text: "🔍 Gᴇᴛ Bʏ ID", callback_data: "storeGet" },
    { text: "🗑️ Dᴇʟᴇᴛᴇ", callback_data: "storeDelete" }
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
