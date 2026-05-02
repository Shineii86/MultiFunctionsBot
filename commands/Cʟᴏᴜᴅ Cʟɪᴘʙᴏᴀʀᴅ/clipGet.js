/*CMD
  command: clipGet
  help: Get saved clipboard text
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
  Bot.sendMessage("<b>📋 Nᴏ ᴄʟɪᴘ ꜱᴀᴠᴇᴅ.</b>\n\nUꜱᴇ /clip save Tᴇxᴛ ᴛᴏ ꜱᴀᴠᴇ.", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "💾 Sᴀᴠᴇ Cʟɪᴘ", callback_data: "clipSave" }]] }
  })
  return
}

Bot.sendMessage("<b>📋 Yᴏᴜʀ Cʟɪᴘ</b>\n\n" +
  "<code>" + clip.text + "</code>\n\n" +
  "<b>📊 Lᴇɴɢᴛʜ:</b> " + clip.text.length + " ᴄʜᴀʀꜱ\n" +
  "<b>⏱️ Sᴀᴠᴇᴅ:</b> " + Libs.Helpers.timeAgo(clip.time) +
  adsFooter, {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [
    [
      { text: "📤 Sʜᴀʀᴇ", callback_data: "clipShare" },
      { text: "🗑️ Cʟᴇᴀʀ", callback_data: "clipClear" }
    ],
    [{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]
  ]}
})
