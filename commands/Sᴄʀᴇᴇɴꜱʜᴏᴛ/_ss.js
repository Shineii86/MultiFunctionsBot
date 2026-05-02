/*CMD
  command: /ss
  help: Take a screenshot of any website
  need_reply: true
  auto_retry_time: 
  folder: Sᴄʀᴇᴇɴꜱʜᴏᴛ

  <<ANSWER
📸 Sᴇɴᴅ ᴡᴇʙꜱɪᴛᴇ URL ᴛᴏ ᴛᴀᴋᴇ ꜱᴄʀᴇᴇɴꜱʜᴏᴛ.
E.g: https://example.com
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /screenshot
  group: 
CMD*/

var url = message.trim()
var adsFooter = Libs.Helpers.getAdsFooter()

if (!url.match(/^https?:\/\//)) {
  url = "https://" + url
}

if (!url.match(/^https?:\/\/.+\..+/)) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ URL!</b>", { parse_mode: "HTML" })
  return
}

var screenshotUrl = "https://image.pollinations.ai/prompt/screenshot%20of%20website%20" + encodeURIComponent(url) + "?width=1280&height=720&nologo=true"

Bot.sendMessage("<b>📸 Tᴀᴋɪɴɢ ꜱᴄʀᴇᴇɴꜱʜᴏᴛ...</b>\n\n" +
  "<b>🌐 URL:</b> " + Libs.Helpers.escapeHTML(url) + "\n\n" +
  "⏳ Pʟᴇᴀꜱᴇ ᴡᴀɪᴛ...", { parse_mode: "HTML" })

try {
  Api.sendPhoto({
    chat_id: request.chat.id,
    photo: screenshotUrl,
    caption: "<b>📸 Wᴇʙꜱɪᴛᴇ Sᴄʀᴇᴇɴꜱʜᴏᴛ</b>\n\n" +
      "<b>🌐 URL:</b> " + Libs.Helpers.escapeHTML(url) +
      adsFooter,
    parse_mode: "HTML",
    reply_to_message_id: request.message_id,
    reply_markup: { inline_keyboard: [
      [
        { text: "🔄 Rᴇᴛᴀᴋᴇ", callback_data: "/ss" },
        { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
      ]
    ]}
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Fᴀɪʟᴇᴅ ᴛᴏ ᴛᴀᴋᴇ ꜱᴄʀᴇᴇɴꜱʜᴏᴛ.</b>", { parse_mode: "HTML" })
}
