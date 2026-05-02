/*CMD
  command: /feedback
  help: Send feedback/suggestion to bot admin
  need_reply: true
  auto_retry_time: 
  folder: Fᴇᴇᴅʙᴀᴄᴋ

  <<ANSWER
💬 Sᴇɴᴅ ʏᴏᴜʀ ꜰᴇᴇᴅʙᴀᴄᴋ, sᴜɢɢᴇsᴛɪᴏɴ, ʙᴜɢ ʀᴇᴘᴏʀᴛ, ᴏʀ 갭ᴇᴀᴛᴜʀᴇ ʀᴇǫᴜᴇsᴛ!
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /suggest /bug /feature
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (!admin) {
  Bot.sendMessage("<b❌ Nᴏ ᴀᴅᴍɪɴ ᴄᴏɴꜰɪɢᴜʀᴇᴅ.</b>", { parse_mode: "HTML" })
  return
}

var type = "💬 Fᴇᴇᴅʙᴀᴄᴋ"
if (message.toLowerCase().indexOf("bug") !== -1 || message.toLowerCase().indexOf("error") !== -1) type = "🐛 Bᴜɢ Rᴇᴘᴏʀᴛ"
else if (message.toLowerCase().indexOf("feature") !== -1 || message.toLowerCase().indexOf("add") !== -1) type = "💡 Fᴇᴀᴛᴜʀᴇ Rᴇǫᴜᴇsᴛ"
else if (message.toLowerCase().indexOf("suggest") !== -1) type = "📝 Sᴜɢɢᴇsᴛɪᴏɴ"

var name = Libs.Helpers.getUserMention()
var username = user.username ? "@" + user.username : "N/A"

var log = "<b>" + type + "</b>\n\n" +
  "<b>👤 Fʀᴏᴍ:</b> " + name + "\n" +
  "<b>🌐 Usᴇʀɴᴀᴍᴇ:</b> " + username + "\n" +
  "<b>🆔 ID:</b> <code>" + user.telegramid + "</code>\n\n" +
  "<b>📝 Mᴇssᴀɢᴇ:</b>\n<blockquote>" + message + "</blockquote>\n" +
  "<b>🕐 Tɪᴍᴇ:</b> " + new Date().toISOString().slice(0, 19).replace("T", " ") + " UTC"

// Send to admin
Api.sendMessage({
  chat_id: admin,
  text: log,
  parse_mode: "HTML",
  disable_web_page_preview: true
})

// Confirm to user
var adsFooter = Libs.Helpers.getAdsFooter()
Bot.sendMessage("<b>✅ " + type + " Sᴇɴᴛ!</b>\n\nTʜᴀɴᴋs ꜰᴏʀ ʏᴏᴜʀ ꜰᴇᴇᴅʙᴀᴄᴋ! Tʜᴇ ᴀᴅᴍɪɴ ᴡɪʟʟ ʀᴇᴠɪᴇᴡ ɪᴛ sᴏᴏɴ." + adsFooter, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "💬 Sᴇɴᴅ Mᴏʀᴇ", callback_data: "/feedback" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
})
