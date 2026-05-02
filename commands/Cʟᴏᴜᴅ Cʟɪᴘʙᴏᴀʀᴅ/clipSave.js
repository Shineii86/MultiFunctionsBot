/*CMD
  command: clipSave
  help: Save text to clipboard
  need_reply: true
  auto_retry_time: 
  folder: Cʟᴏᴜᴅ Cʟɪᴘʙᴏᴀʀᴅ

  <<ANSWER
💾 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ꜱᴀᴠᴇ ᴛᴏ ʏᴏᴜʀ ᴄʟᴏᴜᴅ ᴄʟɪᴘʙᴏᴀʀᴅ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var text = message.trim()
var adsFooter = Libs.Helpers.getAdsFooter()

if (!text) {
  Bot.sendMessage("<b>❌ Eᴍᴘᴛʏ ᴛᴇxᴛ.</b>", { parse_mode: "HTML" })
  return
}

User.setProperty("clipboard", { text: text, time: Date.now() }, "json")

var preview = Libs.Helpers.truncate(text, 80)

Bot.sendMessage("<b>💾 Cʟɪᴘ Sᴀᴠᴇᴅ!</b>\n\n" +
  "<blockquote>" + Libs.Helpers.escapeHTML(preview) + "</blockquote>\n\n" +
  "<b>📊 Lᴇɴɢᴛʜ:</b> " + text.length + " ᴄʜᴀʀꜱ\n\n" +
  "<i>Aᴄᴄᴇꜱꜱ ꜰʀᴏᴍ ᴀɴʏ ᴅᴇᴠɪᴄᴇ ᴜꜱɪɴɢ /clip</i>" +
  adsFooter, {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [
    [
      { text: "📋 Gᴇᴛ Cʟɪᴘ", callback_data: "clipGet" },
      { text: "📤 Sʜᴀʀᴇ", callback_data: "clipShare" }
    ],
    [{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]
  ]}
})
