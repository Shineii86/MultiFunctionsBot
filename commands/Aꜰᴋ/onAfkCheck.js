/*CMD
  command: onAfkCheck
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Aꜰᴋ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Check if mentioned user is AFK
if (!request.entities) return

var entities = request.entities
for (var i = 0; i < entities.length; i++) {
  if (entities[i].type === "text_mention" && entities[i].user) {
    var mentionedUser = entities[i].user
    var afkData = User.getProperty("afk", { user_id: mentionedUser.id })
    if (afkData && afkData.active) {
      var duration = Libs.Helpers.timeAgo(afkData.since)
      Bot.sendMessage("<b>💤 " + Libs.Helpers.escapeHTML(mentionedUser.first_name) + " ɪꜱ AFK</b>\n\n" +
        "<b>📝 Rᴇᴀꜱᴏɴ:</b> " + afkData.reason + "\n" +
        "<b>⏱️ Sɪɴᴄᴇ:</b> " + duration, {
        parse_mode: "HTML"
      })
    }
  }
}
