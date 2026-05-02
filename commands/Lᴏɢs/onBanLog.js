/*CMD
  command: onBanLog
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

var chatTitle = request.chat ? request.chat.title : "Unknown"
var member = request.chat_member || request

var user = member.user || member.new_chat_member ? member.new_chat_member.user : member
var newStatus = member.new_chat_member ? member.new_chat_member.status : "unknown"
var oldStatus = member.old_chat_member ? member.old_chat_member.status : "unknown"

var name = (user.first_name || "") + " " + (user.last_name || "")
name = name.trim() || user.id

var action = ""
var emoji = ""
if (newStatus === "kicked") { action = "Bᴀɴɴᴇᴅ"; emoji = "🚫" }
else if (newStatus === "left" && oldStatus === "member") { action = "Lᴇꜰᴛ"; emoji = "🚪" }
else if (newStatus === "member" && oldStatus === "kicked") { action = "Uɴʙᴀɴɴᴇᴅ"; emoji = "✅" }
else if (newStatus === "member" && oldStatus === "left") { action = "Jᴏɪɴᴇᴅ"; emoji = "📢" }
else if (newStatus === "administrator") { action = "Pʀᴏᴍᴏᴛᴇᴅ ᴛᴏ Aᴅᴍɪɴ"; emoji = "👑" }
else if (oldStatus === "administrator" && newStatus === "member") { action = "Dᴇᴍᴏᴛᴇᴅ ꜰʀᴏᴍ Aᴅᴍɪɴ"; emoji = "⬇️" }
else { action = oldStatus + " → " + newStatus; emoji = "🔄" }

var log = emoji + " <b>" + action + "</b>\n\n" +
  "<b>👤 Nᴀᴍᴇ:</b> <a href='tg://user?id=" + user.id + "'>" + name + "</a>\n" +
  "<b>🆔 ID:</b> <code>" + user.id + "</code>\n" +
  "<b>💬 Gʀᴏᴜᴘ:</b> " + chatTitle + "\n" +
  "<b>🕐 Tɪᴍᴇ:</b> " + new Date().toISOString().slice(0, 19).replace("T", " ") + " UTC"

Api.sendMessage({
  chat_id: logChannel,
  text: log,
  parse_mode: "HTML",
  disable_web_page_preview: true
})
