/*CMD
  command: !exportids
  help: Export user IDs as text
  need_reply: false
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var idstore = Bot.getProperty("idstore", [])

if (!idstore || idstore.length === 0) {
  Bot.sendMessage("<b>❌ Nᴏ ᴜꜱᴇʀ Iᴅꜱ ꜱᴛᴏʀᴇᴅ ʏᴇᴛ.</b>", { parse_mode: "HTML" })
  return
}

var total = idstore.length
var chunkSize = 200
var chunks = Libs.Helpers.chunkArray(idstore, chunkSize)
var exported = 0

Bot.sendMessage("<b>📤 Exᴘᴏʀᴛɪɴɢ " + Libs.Helpers.formatNumber(total) + " Iᴅꜱ...</b>", { parse_mode: "HTML" })

for (var i = 0; i < chunks.length; i++) {
  var chunk = chunks[i]
  var text = "<b>📤 Uꜱᴇʀ Iᴅꜱ (" + (i * chunkSize + 1) + "-" + Math.min((i + 1) * chunkSize, total) + " / " + total + "):</b>\n\n"
  text += "<code>" + chunk.join("\n") + "</code>"

  Api.sendMessage({
    chat_id: user.telegramid,
    text: text,
    parse_mode: "HTML"
  })
  exported += chunk.length
}

Bot.sendMessage(
  "<b>✅ Exᴘᴏʀᴛ Cᴏᴍᴘʟᴇᴛᴇ!</b>\n\n" +
  "📋 Tᴏᴛᴀʟ: <b>" + Libs.Helpers.formatNumber(total) + "</b> Iᴅꜱ\n" +
  "📦 Cʜᴜɴᴋꜱ: <b>" + chunks.length + "</b>",
  { parse_mode: "HTML" }
)
