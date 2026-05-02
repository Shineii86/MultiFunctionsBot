/*CMD
  command: onJoin
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
if (Bot.getProperty("log_joins", "On") !== "On") return

var chatTitle = request.chat ? request.chat.title : "Unknown"
var newMembers = request.new_chat_members || []
var leftMember = request.left_chat_member

if (newMembers.length > 0) {
  for (var i = 0; i < newMembers.length; i++) {
    var m = newMembers[i]
    var name = (m.first_name || "") + " " + (m.last_name || "")
    name = name.trim() || m.id
    var isBot = m.is_bot ? " 🤖" : ""
    var username = m.username ? "(@" + m.username + ")" : ""

    var log = "<b>📢 Nᴇᴡ Mᴇᴍʙᴇʀ Jᴏɪɴᴇᴅ</b>\n\n" +
      "<b>👤 Nᴀᴍᴇ:</b> <a href='tg://user?id=" + m.id + "'>" + name + "</a>" + isBot + "\n" +
      "<b>🆔 ID:</b> <code>" + m.id + "</code>\n" +
      "<b>🌐 Usᴇʀɴᴀᴍᴇ:</b> " + (username || "N/A") + "\n" +
      "<b>💬 Gʀᴏᴜᴘ:</b> " + chatTitle + "\n" +
      "<b>🕐 Tɪᴍᴇ:</b> " + new Date().toISOString().slice(0, 19).replace("T", " ") + " UTC"

    Api.sendMessage({
      chat_id: logChannel,
      text: log,
      parse_mode: "HTML",
      disable_web_page_preview: true
    })
  }
}

if (leftMember) {
  var name = (leftMember.first_name || "") + " " + (leftMember.last_name || "")
  name = name.trim() || leftMember.id
  var username = leftMember.username ? "(@" + leftMember.username + ")" : ""

  var log = "<b>🚪 Mᴇᴍʙᴇʀ Lᴇꜰᴛ</b>\n\n" +
    "<b>👤 Nᴀᴍᴇ:</b> <a href='tg://user?id=" + leftMember.id + "'>" + name + "</a>\n" +
    "<b>🆔 ID:</b> <code>" + leftMember.id + "</code>\n" +
    "<b>🌐 Usᴇʀɴᴀᴍᴇ:</b> " + (username || "N/A") + "\n" +
    "<b>💬 Gʀᴏᴜᴘ:</b> " + chatTitle + "\n" +
    "<b>🕐 Tɪᴍᴇ:</b> " + new Date().toISOString().slice(0, 19).replace("T", " ") + " UTC"

  if (Bot.getProperty("log_leaves", "On") === "On") {
    Api.sendMessage({
      chat_id: logChannel,
      text: log,
      parse_mode: "HTML",
      disable_web_page_preview: true
    })
  }
}
