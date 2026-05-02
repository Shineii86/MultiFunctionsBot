/*CMD
  command: clipShare
  help: Generate shareable link for clipboard
  need_reply: false
  auto_retry_time: 
  folder: Cʟᴏᴜᴅ Cʟɪᴘʙᴏᴀʀᴅ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var clip = User.getProperty("clipboard", {})
var adsFooter = Libs.Helpers.getAdsFooter()

if (!clip.text) {
  Bot.sendMessage("<b>📋 Nᴏ ᴄʟɪᴘ ᴛᴏ ꜱʜᴀʀᴇ.</b>", { parse_mode: "HTML" })
  return
}

// Create a paste from clip
var pasteId = "C" + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 5).toUpperCase()
Bot.setProperty("paste_" + pasteId, { text: clip.text, userId: user.telegramid, time: Date.now() }, "json")

var shareLink = "https://t.me/" + bot.name + "?start=paste_" + pasteId

Bot.sendMessage("<b>📤 Cʟɪᴘ Sʜᴀʀᴇ Lɪɴᴋ</b>\n\n" +
  "<b>🔗 Lɪɴᴋ:</b>\n<code>" + shareLink + "</code>\n\n" +
  "<b>📝 Pʀᴇᴠɪᴇᴡ:</b> " + Libs.Helpers.truncate(clip.text, 60) +
  adsFooter, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [{ text: "📤 Sʜᴀʀᴇ", url: "https://t.me/share/url?url=" + encodeURIComponent(shareLink) }],
      [{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]
    ]
  }
})
