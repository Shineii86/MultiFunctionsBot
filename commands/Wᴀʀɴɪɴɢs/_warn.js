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

var chatId = request.chat ? request.chat.id : user.telegramid
var admin = Bot.getProperty("admin")

if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var replyTo = request.reply_to_message
if (!replyTo || !replyTo.from) {
  Bot.sendMessage("<b>❌ Rᴇᴘʟʏ ᴛᴏ ᴀ ᴜꜱᴇʀ'ꜱ ᴍᴇꜱꜱᴀɢᴇ ᴛᴏ ᴡᴀʀɴ ᴛʜᴇᴍ.</b>", { parse_mode: "HTML" })
  return
}

var targetId = replyTo.from.id
var targetName = replyTo.from.first_name || "Uꜱᴇʀ"

if (targetId == admin) {
  Bot.sendMessage("<b>❌ Cᴀɴɴᴏᴛ ᴡᴀʀɴ ʏᴏᴜʀꜱᴇʟꜰ.</b>", { parse_mode: "HTML" })
  return
}

var warnKey = "warns_" + chatId + "_" + targetId
var warns = Bot.getProperty(warnKey, 0) + 1
Bot.setProperty(warnKey, warns, "integer")

var maxWarns = Bot.getProperty("max_warns", 3)

if (warns >= maxWarns) {
  try {
    Api.banChatMember({ chat_id: chatId, user_id: targetId })
  } catch (e) {}
  Bot.setProperty(warnKey, 0, "integer")

  Bot.sendMessage("<b>🚫 Uꜱᴇʀ Bᴀɴɴᴇᴅ</b>\n\n" +
    "<b>👤 Uꜱᴇʀ:</b> " + Libs.Helpers.escapeHTML(targetName) + "\n" +
    "<b>⚠️ Rᴇᴀꜱᴏɴ:</b> Rᴇᴀᴄʜᴇᴅ " + maxWarns + " ᴡᴀʀɴɪɴɢꜱ",
    { parse_mode: "HTML" })
} else {
  var bar = Libs.Helpers.getProgressBar(warns, maxWarns, maxWarns)
  Bot.sendMessage("<b>⚠️ Wᴀʀɴɪɴɢ Iꜱꜱᴜᴇᴅ</b>\n\n" +
    "<b>👤 Uꜱᴇʀ:</b> " + Libs.Helpers.escapeHTML(targetName) + "\n" +
    "<b>📊 Wᴀʀɴɪɴɢꜱ:</b> " + warns + "/" + maxWarns + "\n" +
    bar + "\n\n" +
    (warns >= maxWarns - 1 ? "<b>⚡ Nᴇxᴛ ᴡᴀʀɴ = Bᴀɴ!</b>" : ""),
    { parse_mode: "HTML" })
}
