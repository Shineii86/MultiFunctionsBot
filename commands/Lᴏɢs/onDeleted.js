/*CMD
  command: onDeleted
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
if (Bot.getProperty("log_deleted", "On") !== "On") return

var chatTitle = request.chat ? request.chat.title : "Unknown"
var msg = request.message || request

var from = msg.from ? (msg.from.first_name || "Unknown") : "Unknown"
var fromId = msg.from ? msg.from.id : "N/A"
var text = msg.text || msg.caption || "[Media/Sticker/No text]"
if (text.length > 200) text = text.substring(0, 200) + "..."
var msgId = msg.message_id || "N/A"

var log = "<b>🗑️ Mᴇssᴀɢᴇ Dᴇʟᴇᴛᴇᴅ</b>\n\n" +
  "<b>👤 Bʏ:</b> <a href='tg://user?id=" + fromId + "'>" + from + "</a>\n" +
  "<b>🆔 Usᴇʀ ID:</b> <code>" + fromId + "</code>\n" +
  "<b>💬 Gʀᴏᴜᴘ:</b> " + chatTitle + "\n" +
  "<b>📝 Cᴏɴᴛᴇɴᴛ:</b>\n<blockquote>" + text + "</blockquote>\n" +
  "<b>🕐 Tɪᴍᴇ:</b> " + new Date().toISOString().slice(0, 19).replace("T", " ") + " UTC"

Api.sendMessage({
  chat_id: logChannel,
  text: log,
  parse_mode: "HTML",
  disable_web_page_preview: true
})
