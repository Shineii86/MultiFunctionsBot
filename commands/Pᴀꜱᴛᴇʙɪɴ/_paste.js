/*CMD
  command: /paste
  help: Create a paste with shareable link
  need_reply: true
  auto_retry_time: 
  folder: Pᴀꜱᴛᴇʙɪɴ

  <<ANSWER
📋 Sᴇɴᴅ ᴛᴇxᴛ ᴏʀ ᴄᴏᴅᴇ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴀ ᴘᴀꜱᴛᴇ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /pb
  group: 
CMD*/

var text = message.trim()
var adsFooter = Libs.Helpers.getAdsFooter()

if (!text || text.length < 3) {
  Bot.sendMessage("<b>❌ Tᴇxᴛ ᴛᴏᴏ ꜱʜᴏʀᴛ.</b>", { parse_mode: "HTML" })
  return
}

// Generate ID
var pasteId = "P" + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substring(2, 5).toUpperCase()

// Store paste
var pastes = Bot.getProperty("pastes_" + user.telegramid, [])
pastes.push({
  id: pasteId,
  text: text,
  time: Date.now(),
  views: 0
})
if (pastes.length > 50) pastes = pastes.slice(-50)
Bot.setProperty("pastes_" + user.telegramid, pastes, "json")

// Store globally for access
Bot.setProperty("paste_" + pasteId, { text: text, userId: user.telegramid, time: Date.now() }, "json")

var shareLink = "https://t.me/" + bot.name + "?start=paste_" + pasteId
var preview = text.substring(0, 200)
if (text.length > 200) preview += "..."

Bot.sendMessage("<b>📋 Pᴀꜱᴛᴇ Cʀᴇᴀᴛᴇᴅ!</b>\n\n" +
  "<b>🆔 Iᴅ:</b> <code>" + pasteId + "</code>\n" +
  "<b>📝 Pʀᴇᴠɪᴇᴡ:</b>\n<blockquote>" + Libs.Helpers.escapeHTML(preview) + "</blockquote>\n\n" +
  "<b>🔗 Sʜᴀʀᴇ Lɪɴᴋ:</b>\n<code>" + shareLink + "</code>\n\n" +
  "<b>📊 Lᴇɴɢᴛʜ:</b> " + text.length + " ᴄʜᴀʀꜱ, " + text.split("\n").length + " ʟɪɴᴇꜱ" +
  adsFooter, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [{ text: "📤 Sʜᴀʀᴇ Lɪɴᴋ", url: "https://t.me/share/url?url=" + encodeURIComponent(shareLink) }],
      [
        { text: "📋 Mʏ Pᴀꜱᴛᴇꜱ", callback_data: "pasteList" },
        { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
      ]
    ]
  }
})
