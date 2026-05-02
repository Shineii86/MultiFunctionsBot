/*CMD
  command: onBotCheckResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

try {
  var chat = options.result || options
  var isBot = false
  if (chat.type === "private" && chat.username) {
    // Bots typically have username ending in "bot"
    isBot = chat.username.toLowerCase().indexOf("bot") !== -1
  }

  var name = chat.title || (chat.first_name || "") + " " + (chat.last_name || "")
  var caption = "<b>🤖 Bᴏᴛ Cʜᴇᴄᴋ</b>\n\n" +
    "<b>👤 Nᴀᴍᴇ:</b> " + name.trim() + "\n" +
    "<b>🆔 ID:</b> <code>" + chat.id + "</code>\n"
  if (chat.username) caption += "<b>🌐 Usᴇʀɴᴀᴍᴇ:</b> @" + chat.username + "\n"
  caption += "<b>🤖 Lɪᴋᴇʟʏ Bᴏᴛ:</b> " + (isBot ? "Yᴇs 🤖" : "Nᴏᴛ sᴜʀᴇ ❓") + "\n" +
    adsFooter

  Bot.sendMessage(caption, {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: [[{ text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Cᴏᴜʟᴅ ɴᴏᴛ ᴄʜᴇᴄᴋ ᴛʜɪs ᴜsᴇʀ.</b>", { parse_mode: "HTML" })
}
