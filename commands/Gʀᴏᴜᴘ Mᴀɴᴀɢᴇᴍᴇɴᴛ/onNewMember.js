/*CMD
  command: onNewMember
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Gʀᴏᴜᴘ Mᴀɴᴀɢᴇᴍᴇɴᴛ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var chatId = request.chat ? request.chat.id : user.telegramid
var welcomeEnabled = Bot.getProperty("welcome_enabled_" + chatId, true)

if (!welcomeEnabled) return

var welcomeMsg = Bot.getProperty("welcome_msg_" + chatId, "👋 Wᴇʟᴄᴏᴍᴇ {name} ᴛᴏ {group}!\n\nYᴏᴜ ᴀʀᴇ ᴍᴇᴍʙᴇʀ #{count}.")

var memberCount = 0
try {
  var count = Api.getChatMemberCount({ chat_id: chatId })
  memberCount = count || 0
} catch (e) {}

var newMembers = request.new_chat_members || []
for (var i = 0; i < newMembers.length; i++) {
  var member = newMembers[i]
  if (member.is_bot) continue

  var nameLink = "<a href='tg://user?id=" + member.id + "'>" + Libs.Helpers.escapeHTML(member.first_name) + "</a>"
  var username = member.username ? "@" + member.username : "N/A"

  var msg = welcomeMsg
    .replace(/\{name\}/g, nameLink)
    .replace(/\{username\}/g, username)
    .replace(/\{group\}/g, request.chat.title || "this group")
    .replace(/\{count\}/g, memberCount)
    .replace(/\{id\}/g, member.id)

  Api.sendMessage({
    chat_id: chatId,
    text: msg,
    parse_mode: "HTML",
    disable_web_page_preview: true
  })
}
