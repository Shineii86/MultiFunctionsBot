/*CMD
  command: /warn
  help: Warn a user (reply to their message)
  need_reply: false
  auto_retry_time: 
  folder: Wᴀʀɴɪɴɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (!request.reply_to_message) {
  Bot.sendMessage("<b>❌ Rᴇᴘʟʏ ᴛᴏ ᴀ ᴜsᴇʀ's ᴍᴇssᴀɢᴇ ᴛᴏ ᴡᴀʀɴ ᴛʜᴇᴍ.</b>", { parse_mode: "HTML" })
  return
}

var targetUser = request.reply_to_message.from
var targetId = targetUser.id
var chatId = request.chat.id

// Get warning count
var warnKey = "warns_" + chatId + "_" + targetId
var warns = Bot.getProperty(warnKey, 0) + 1
Bot.setProperty(warnKey, warns, "integer")

var maxWarns = Bot.getProperty("max_warns", 3)
var name = (targetUser.first_name || "") + " " + (targetUser.last_name || "")
name = name.trim() || targetId

var reason = params || "No reason specified"

var caption = "<b>⚠️ Wᴀʀɴɪɴɢ</b>\n\n" +
  "<b>👤 Usᴇʀ:</b> <a href='tg://user?id=" + targetId + "'>" + name + "</a>\n" +
  "<b>📊 Wᴀʀɴs:</b> " + warns + "/" + maxWarns + "\n" +
  "<b>📝 Rᴇᴀsᴏɴ:</b> " + reason + "\n\n"

if (warns >= maxWarns) {
  caption += "<b>🚫 Mᴀx ᴡᴀʀɴs ʀᴇᴀᴄʜᴇᴅ! Usᴇʀ ᴡɪʟʟ ʙᴇ ʙᴀɴɴᴇᴅ.</b>"
  // Ban the user
  Api.kickChatMember({
    chat_id: chatId,
    user_id: targetId
  })
  Bot.setProperty(warnKey, 0, "integer")
} else {
  caption += "<b>💡 " + (maxWarns - warns) + " ᴡᴀʀɴ(s) ʀᴇᴍᴀɪɴɪɴɢ ʙᴇꜰᴏʀᴇ ʙᴀɴ.</b>"
}

var buttons = [
  [
    { text: "🗑️ Rᴇᴍᴏᴠᴇ Wᴀʀɴ", callback_data: "unwarn " + targetId },
    { text: "🚫 Bᴀɴ Nᴏᴡ", callback_data: "warnBan " + targetId }
  ]
]

Bot.sendMessage(caption, {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: buttons }
})
