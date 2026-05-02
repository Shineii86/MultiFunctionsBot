/*CMD
  command: /remind
  help: Set a reminder (e.g. /remind 30m Take a break)
  need_reply: false
  auto_retry_time: 
  folder: Rᴇᴍɪɴᴅᴇʀs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /reminder /rm
  group: 
CMD*/

var input = (params || message || "").trim()
var match = input.match(/^(\d+)([smhd])\s+(.+)/i)

if (!match) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ ꜰᴏʀᴍᴀᴛ.</b>\n\n<b>Uꜱᴀɢᴇ:</b> <code>/remind 30m Take a break</code>\n\n<b>Uɴɪᴛs:</b> s=sᴇᴄᴏɴᴅs, m=ᴍɪɴᴜᴛᴇs, h=ʜᴏᴜʀs, d=ᴅᴀʏs", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/remind" }]] }
  })
  return
}

var amount = parseInt(match[1])
var unit = match[2].toLowerCase()
var text = match[3]

var ms = 0
if (unit === "s") ms = amount * 1000
else if (unit === "m") ms = amount * 60000
else if (unit === "h") ms = amount * 3600000
else if (unit === "d") ms = amount * 86400000

var unitName = { s: "seconds", m: "minutes", h: "hours", d: "days" }[unit]

// Store reminder
var reminders = Bot.getProperty("reminders_" + user.telegramid, [])
var reminderId = Date.now()
reminders.push({
  id: reminderId,
  text: text,
  time: Date.now() + ms,
  chatId: request.chat ? request.chat.id : user.telegramid
})
Bot.setProperty("reminders_" + user.telegramid, reminders, "json")

var adsFooter = Libs.Helpers.getAdsFooter()

Bot.sendMessage("<b>⏰ Rᴇᴍɪɴᴅᴇʀ Sᴇᴛ!</b>\n\n" +
  "<b>📝 Mᴇssᴀɢᴇ:</b> " + text + "\n" +
  "<b>⏱️ Iɴ:</b> " + amount + " " + unitName + "\n\n" +
  "<i>I'ʟʟ ʀᴇᴍɪɴᴅ ʏᴏᴜ ᴡʜᴇɴ ɪᴛ's ᴛɪᴍᴇ!</i>" + adsFooter, {
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "⏰ Sᴇᴛ Aɴᴏᴛʜᴇʀ", callback_data: "/remind" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
})
