/*CMD
  command: /regex
  help: Test regular expressions
  need_reply: true
  auto_retry_time: 
  folder: Dᴇᴠᴇʟᴏᴘᴇʀ

  <<ANSWER
🔍 Sᴇɴᴅ ʀᴇɢᴇx ᴛᴇꜱᴛ ɪɴ ᴛʜɪꜱ ꜰᴏʀᴍᴀᴛ:
<code>pattern
text</code>
E.g: <code>\d+
abc123def456</code>
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /regexp
  group: 
CMD*/

var lines = message.split("\n")
var adsFooter = Libs.Helpers.getAdsFooter()

if (lines.length < 2) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ ꜰᴏʀᴍᴀᴛ!</b>\n\n" +
    "Sᴇɴᴅ:\n<code>pattern\ntext</code>", { parse_mode: "HTML" })
  return
}

var pattern = lines[0].trim()
var text = lines.slice(1).join("\n")

try {
  var regex = new RegExp(pattern, "g")
  var matches = []
  var match

  while ((match = regex.exec(text)) !== null) {
    matches.push({
      value: match[0],
      index: match.index,
      groups: match.slice(1)
    })
    if (matches.length > 20) break
  }

  var caption = "<b>🔍 Rᴇɢᴇx Rᴇꜱᴜʟᴛꜱ</b>\n\n" +
    "<b>Pᴀᴛᴛᴇʀɴ:</b> <code>" + Libs.Helpers.escapeHTML(pattern) + "</code>\n" +
    "<b>Mᴀᴛᴄʜᴇꜱ:</b> " + matches.length + "\n\n"

  if (matches.length === 0) {
    caption += "Nᴏ ᴍᴀᴛᴄʜᴇꜱ ꜰᴏᴜɴᴅ."
  } else {
    for (var i = 0; i < Math.min(10, matches.length); i++) {
      var m = matches[i]
      caption += (i + 1) + ". <code>" + Libs.Helpers.escapeHTML(m.value) + "</code> (@" + m.index + ")"
      if (m.groups.length > 0) {
        caption += " → Groups: " + m.groups.map(function(g) { return "<code>" + Libs.Helpers.escapeHTML(g || "") + "</code>" }).join(", ")
      }
      caption += "\n"
    }
  }

  caption += adsFooter

  Bot.sendMessage(caption, {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔍 Tᴇꜱᴛ Aɢᴀɪɴ", callback_data: "/regex" }]] }
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ Rᴇɢᴇx!</b>\n\n" + Libs.Helpers.escapeHTML(e.message), { parse_mode: "HTML" })
}
