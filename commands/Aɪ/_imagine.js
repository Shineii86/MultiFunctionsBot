/*CMD
  command: /imagine
  help: Generate AI images from text prompts
  need_reply: true
  auto_retry_time: 
  folder: Aɪ

  <<ANSWER
🎨 Dᴇꜱᴄʀɪʙᴇ ᴛʜᴇ ɪᴍᴀɢᴇ ʏᴏᴜ ᴡᴀɴᴛ ᴛᴏ ɢᴇɴᴇʀᴀᴛᴇ.
  E.g: "a cat wearing a top hat, digital art"
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /img /generate
  group: 
CMD*/

var prompt = message.trim()
var adsFooter = Libs.Helpers.getAdsFooter()

if (prompt.length < 3) {
  Bot.sendMessage("<b>❌ Pʟᴇᴀꜱᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴅᴇᴛᴀɪʟᴇᴅ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ.</b>", { parse_mode: "HTML" })
  return
}

Bot.sendMessage("<b>🎨 Gᴇɴᴇʀᴀᴛɪɴɢ ɪᴍᴀɢᴇ...</b>\n\n" +
  "<i>Pʀᴏᴍᴘᴛ:</i> " + Libs.Helpers.escapeHTML(prompt) + "\n\n" +
  "⏳ Tʜɪꜱ ᴍᴀʏ ᴛᴀᴋᴇ ᴀ ꜰᴇᴡ ꜱᴇᴄᴏɴᴅꜱ...", { parse_mode: "HTML" })

var encodedPrompt = encodeURIComponent(prompt)
var imageUrl = "https://image.pollinations.ai/prompt/" + encodedPrompt + "?width=512&height=512&nologo=true"

try {
  Api.sendPhoto({
    chat_id: request.chat.id,
    photo: imageUrl,
    caption: "<b>🎨 Aɪ Gᴇɴᴇʀᴀᴛᴇᴅ Iᴍᴀɢᴇ</b>\n\n" +
      "<b>📝 Pʀᴏᴍᴘᴛ:</b> " + Libs.Helpers.escapeHTML(Libs.Helpers.truncate(prompt, 200)) +
      adsFooter,
    parse_mode: "HTML",
    reply_to_message_id: request.message_id,
    reply_markup: { inline_keyboard: [
      [
        { text: "🔄 Rᴇɢᴇɴᴇʀᴀᴛᴇ", callback_data: "/imagine" },
        { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
      ]
    ]}
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Fᴀɪʟᴇᴅ ᴛᴏ ɢᴇɴᴇʀᴀᴛᴇ ɪᴍᴀɢᴇ.</b>\n\nTʀʏ ᴀ ᴅɪꜰꜰᴇʀᴇɴᴛ ᴘʀᴏᴍᴘᴛ ᴏʀ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ.", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/imagine" }]] }
  })
}
