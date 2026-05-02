/*CMD
  command: /clip
  help: Cloud clipboard - save and share text snippets
  need_reply: false
  auto_retry_time: 
  folder: Cʟᴏᴜᴅ Cʟɪᴘʙᴏᴀʀᴅ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /clipboard
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var clip = User.getProperty("clipboard", {})

var caption = "<b>╭━━ 📋 Cʟᴏᴜᴅ Cʟɪᴘʙᴏᴀʀᴅ ━━╮</b>\n\n"

if (clip.text) {
  var preview = Libs.Helpers.truncate(clip.text, 100)
  caption += "<b>📎 Cᴜʀʀᴇɴᴛ Cʟɪᴘ:</b>\n"
  caption += "<blockquote>" + Libs.Helpers.escapeHTML(preview) + "</blockquote>\n"
  caption += "<b>📊 Lᴇɴɢᴛʜ:</b> " + clip.text.length + " ᴄʜᴀʀꜱ\n"
  caption += "<b>⏱️ Sᴀᴠᴇᴅ:</b> " + Libs.Helpers.timeAgo(clip.time) + "\n\n"
} else {
  caption += "Nᴏ ᴄʟɪᴘ ꜱᴀᴠᴇᴅ.\n\n"
}

caption += "<b>💡 Cᴏᴍᴍᴀɴᴅꜱ:</b>\n" +
  "├ /clip save Tᴇxᴛ — Sᴀᴠᴇ ᴛᴇxᴛ\n" +
  "├ /clip get — Gᴇᴛ ꜱᴀᴠᴇᴅ ᴛᴇxᴛ\n" +
  "├ /clip share — Gᴇɴᴇʀᴀᴛᴇ ꜱʜᴀʀᴇ ʟɪɴᴋ\n" +
  "└ /clip clear — Cʟᴇᴀʀ ᴄʟɪᴘʙᴏᴀʀᴅ\n\n" +
  "<b>╰━━━━━━━━━━━━━━━━━━╯</b>" +
  adsFooter

var buttons = [
  [
    { text: "💾 Sᴀᴠᴇ", callback_data: "clipSave" },
    { text: "📋 Gᴇᴛ", callback_data: "clipGet" }
  ],
  [
    { text: "📤 Sʜᴀʀᴇ", callback_data: "clipShare" },
    { text: "🗑️ Cʟᴇᴀʀ", callback_data: "clipClear" }
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
