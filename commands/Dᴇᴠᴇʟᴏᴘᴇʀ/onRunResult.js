/*CMD
  command: onRunResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Dᴇᴠᴇʟᴏᴘᴇʀ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var lang = User.getProperty("runLang", "javascript")

try {
  var data = JSON.parse(content)
  if (data && data.run) {
    var output = data.run.output || "No output"
    var exitCode = data.run.code || 0
    var stderr = data.run.stderr || ""

    var result = output
    if (stderr) result += "\n\n<b>Errors:</b>\n" + stderr

    var status = exitCode === 0 ? "✅" : "⚠️"

    // Truncate if too long
    if (result.length > 3000) result = result.substring(0, 3000) + "\n... (truncated)"

    Bot.sendMessage(status + " <b>Rᴇꜱᴜʟᴛ (" + lang + ")</b>\n\n" +
      "<code>" + Libs.Helpers.escapeHTML(result) + "</code>\n\n" +
      "<b>Exɪᴛ Cᴏᴅᴇ:</b> " + exitCode +
      adsFooter, {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [
        [
          { text: "💻 Rᴜɴ Aɢᴀɪɴ", callback_data: "/run" },
          { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
        ]
      ]}
    })
  } else {
    Bot.sendMessage("<b>❌ Exᴇᴄᴜᴛɪᴏɴ ꜰᴀɪʟᴇᴅ.</b>", { parse_mode: "HTML" })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ ᴘʀᴏᴄᴇꜱꜱɪɴɢ ʀᴇꜱᴜʟᴛ.</b>", { parse_mode: "HTML" })
}
