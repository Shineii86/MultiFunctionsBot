/*CMD
  command: onPinned
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Lᴏɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var logChannel = Bot.getProperty("log_channel", "")
if (!logChannel || logChannel === "Nᴏᴛ Sᴇᴛ") return
if (Bot.getProperty("log_pinned", "On") !== "On") return

var chatTitle = request.chat ? request.chat.title : "Unknown"
var msg = request.pinned_message || request.message || request

var from = msg.from ? (msg.from.first_name || "Unknown") : "Unknown"
var fromId = msg.from ? msg.from.id : "N/A"
var text = msg.text || msg.caption || "[Media/No text]"
if (text.length > 200) text = text.substring(0, 200) + "..."

var log = "<b>📌 Mᴇssᴀɢᴇ Pɪɴɴᴇᴅ</b>\n\n" +
  "<b>👤 Bʏ:</b> <a href='tg://user?id=" + fromId + "'>" + from + "</a>\n" +
  "<b>💬 Gʀᴏᴜᴘ:</b> " + chatTitle + "\n" +
  "<b>📝 Cᴏɴᴛᴇɴᴛ:</b>\n<blockquote>" + text + "</blockquote>\n" +
  "<b>🕐 Tɪᴍᴇ:</b> " + new Date().toISOString().slice(0, 19).replace("T", " ") + " UTC"

Api.sendMessage({
  chat_id: logChannel,
  text: log,
  parse_mode: "HTML",
  disable_web_page_preview: true
})
