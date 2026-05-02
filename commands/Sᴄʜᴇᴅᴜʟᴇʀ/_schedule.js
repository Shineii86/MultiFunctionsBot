/*CMD
  command: /schedule
  help: Schedule a message (e.g. /schedule 2h Meeting reminder)
  need_reply: true
  auto_retry_time: 
  folder: Sᴄʜᴇᴅᴜʟᴇʀ

  <<ANSWER
⏰ Sᴇɴᴅ ɪɴ ᴛʜɪꜱ ꜰᴏʀᴍᴀᴛ:
<code>30m Mᴇꜱꜱᴀɢᴇ</code> or <code>2h Mᴇꜱꜱᴀɢᴇ</code> or <code>1d Mᴇꜱꜱᴀɢᴇ</code>
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /sched
  group: 
CMD*/

var input = message.trim()
var match = input.match(/^(\d+)([mhd])\s+(.+)$/i)

if (!match) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ ꜰᴏʀᴍᴀᴛ!</b>\n\n" +
    "<b>Uꜱᴀɢᴇ:</b> <code>/schedule 2h Mᴇᴇᴛɪɴɢ ʀᴇᴍɪɴᴅᴇʀ</code>\n" +
    "<b>Sᴜᴘᴘᴏʀᴛᴇᴅ:</b> m (ᴍɪɴᴜᴛᴇꜱ), h (ʜᴏᴜʀꜱ), d (ᴅᴀʏꜱ)", {
    parse_mode: "HTML"
  })
  return
}

var amount = parseInt(match[1])
var unit = match[2].toLowerCase()
var text = match[3]

var ms = 0
var label = ""
if (unit === "m") { ms = amount * 60000; label = amount + " ᴍɪɴᴜᴛᴇꜱ" }
else if (unit === "h") { ms = amount * 3600000; label = amount + " ʜᴏᴜʀꜱ" }
else if (unit === "d") { ms = amount * 86400000; label = amount + " ᴅᴀʏꜱ" }

var chatId = request.chat ? request.chat.id : user.telegramid

// Store scheduled message
var scheduled = Bot.getProperty("scheduled_" + chatId, [])
scheduled.push({
  text: text,
  time: Date.now() + ms,
  userId: user.telegramid,
  created: Date.now()
})
Bot.setProperty("scheduled_" + chatId, scheduled, "json")

// Schedule execution
Bot.run({
  command: "/schedule",
  after: ms / 1000,
  data: { text: text, chatId: chatId, userId: user.telegramid }
})

Bot.sendMessage("<b>⏰ Mᴇꜱꜱᴀɢᴇ Sᴄʜᴇᴅᴜʟᴇᴅ!</b>\n\n" +
  "<b>📝 Mᴇꜱꜱᴀɢᴇ:</b> " + Libs.Helpers.escapeHTML(text) + "\n" +
  "<b>⏱️ Iɴ:</b> " + label + "\n\n" +
  "I'ʟʟ ꜱᴇɴᴅ ɪᴛ ᴡʜᴇɴ ɪᴛ'ꜱ ᴛɪᴍᴇ! 🔔", {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
})
