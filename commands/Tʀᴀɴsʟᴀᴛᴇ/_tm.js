/*CMD
  command: /tm
  help: Translation memory - save translation pairs
  need_reply: false
  auto_retry_time: 
  folder: Tʀᴀɴsʟᴀᴛᴇ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /glossary
  group: 
CMD*/

var entries = User.getProperty("translation_memory", [])
var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>📝 Tʀᴀɴꜱʟᴀᴛɪᴏɴ Mᴇᴍᴏʀʏ</b>\n\n"

if (entries.length === 0) {
  caption += "Nᴏ ᴇɴᴛʀɪᴇꜱ ʏᴇᴛ.\n\n"
} else {
  caption += "<b>📋 Eɴᴛʀɪᴇꜱ (" + entries.length + "):</b>\n"
  for (var i = 0; i < Math.min(10, entries.length); i++) {
    caption += (i + 1) + ". <b>" + Libs.Helpers.escapeHTML(entries[i].source) + "</b> → " + Libs.Helpers.escapeHTML(entries[i].target) + "\n"
  }
  caption += "\n"
}

caption += "<b>Cᴏᴍᴍᴀɴᴅꜱ:</b>\n" +
  "├ /tm add source → target — Aᴅᴅ\n" +
  "├ /tm search word — Sᴇᴀʀᴄʜ\n" +
  "└ /tm clear — Cʟᴇᴀʀ ᴀʟʟ" +
  adsFooter

var buttons = [[{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
