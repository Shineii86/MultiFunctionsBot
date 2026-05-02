/*CMD
  command: /groupstats
  help: Get detailed group statistics
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /gstats
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var chat = request.chat || {}

var chatType = chat.type || "N/A"
var chatId = chat.id || "N/A"
var title = chat.title || "Unknown"
var desc = chat.description || "No description"
var linkedChat = chat.linked_chat_id ? chat.linked_chat_id : "N/A"
var slowMode = chat.slow_mode_delay ? chat.slow_mode_delay + "s" : "Oғғ"
var isForum = chat.is_forum ? "Yᴇs ✅" : "Nᴏ ❌"

var typeEmoji = "👥"
if (chatType === "supergroup") typeEmoji = "🏢"
else if (chatType === "channel") typeEmoji = "📢"

var caption = typeEmoji + " <b>Gʀᴏᴜᴘ Sᴛᴀᴛɪsᴛɪᴄs</b>\n\n" +
  "<b>📛 Nᴀᴍᴇ:</b> " + title + "\n" +
  "<b>📂 Tʏᴘᴇ:</b> " + chatType + "\n" +
  "<b>🆔 ID:</b> <code>" + chatId + "</code>\n"

if (desc && desc !== "No description") {
  caption += "<b>📝 Dᴇsᴄ:</b> " + desc.substring(0, 150) + "\n"
}

caption += "<b>🐌 Slᴏᴡ Mᴏᴅᴇ:</b> " + slowMode + "\n"
caption += "<b>💬 Fᴏʀᴜᴍ:</b> " + isForum + "\n"
if (linkedChat !== "N/A") caption += "<b>🔗 Lɪɴᴋᴇᴅ Cʜᴀᴛ:</b> " + linkedChat + "\n"

caption += adsFooter

var buttons = [
  [
    { text: "👥 Mᴇᴍʙᴇʀ Cᴏᴜɴᴛ", callback_data: "/membercount" },
    { text: "👑 Aᴅᴍɪɴs", callback_data: "/adminlist" }
  ],
  [
    { text: "📌 Pɪɴɴᴇᴅ", callback_data: "/pinned" },
    { text: "🔗 Gʀᴏᴜᴘ Lɪɴᴋ", callback_data: "/grouplink" }
  ],
  [
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: buttons }
})
