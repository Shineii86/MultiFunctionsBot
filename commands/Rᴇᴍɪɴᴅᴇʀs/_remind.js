/*CMD
  command: /remind
  help: Set a reminder (e.g. /remind 30m Check the oven)
  need_reply: true
  auto_retry_time: 
  folder: Rᴇᴍɪɴᴅᴇʀs

  <<ANSWER
⏰ Sᴇɴᴅ ʀᴇᴍɪɴᴅᴇʀ ɪɴ ᴛʜɪꜱ ꜰᴏʀᴍᴀᴛ: 30m Mᴇꜱꜱᴀɢᴇ
  Sᴜᴘᴘᴏʀᴛᴇᴅ: 5m, 2h, 1d
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /rem
  group: 
CMD*/

var input = message.trim()
var match = input.match(/^(\d+)([mhd])\s+(.+)$/i)

if (!match) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ ꜰᴏʀᴍᴀᴛ!</b>\n\n" +
    "<b>Uꜱᴀɢᴇ:</b> <code>/remind 30m Mᴇꜱꜱᴀɢᴇ</code>\n" +
    "<b>Sᴜᴘᴘᴏʀᴛᴇᴅ:</b> m (ᴍɪɴᴜᴛᴇꜱ), h (ʜᴏᴜʀꜱ), d (ᴅᴀʏꜱ)", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/remind" }]] }
  })
  return
}

var amount = parseInt(match[1])
var unit = match[2].toLowerCase()
var reminderText = match[3]

var ms = 0
if (unit === "m") ms = amount * 60000
else if (unit === "h") ms = amount * 3600000
else if (unit === "d") ms = amount * 86400000

var reminders = Bot.getProperty("reminders_" + user.telegramid, [])
reminders.push({
  text: reminderText,
  time: Date.now() + ms,
  created: Date.now()
})
Bot.setProperty("reminders_" + user.telegramid, reminders, "json")

var unitLabel = unit === "m" ? "ᴍɪɴᴜᴛᴇꜱ" : unit === "h" ? "ʜᴏᴜʀꜱ" : "ᴅᴀʏꜱ"

Bot.sendMessage("<b>⏰ Rᴇᴍɪɴᴅᴇʀ Sᴇᴛ!</b>\n\n" +
  "<b>📝 Mᴇꜱꜱᴀɢᴇ:</b> " + reminderText + "\n" +
  "<b>⏱️ Iɴ:</b> " + amount + " " + unitLabel + "\n\n" +
  "I'ʟʟ ʀᴇᴍɪɴᴅ ʏᴏᴜ ᴡʜᴇɴ ɪᴛ'ꜱ ᴛɪᴍᴇ! 🔔", {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [[{ text: "📋 Mʏ Rᴇᴍɪɴᴅᴇʀꜱ", callback_data: "/reminders" }]] }
})

// Schedule the reminder
Bot.run({
  command: "/remind",
  after: ms / 1000,
  data: { text: reminderText, userId: user.telegramid }
})
