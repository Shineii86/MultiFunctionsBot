/*CMD
  command: /clap
  help: Add 👏 clap 👏 between 👏 words
  need_reply: true
  auto_retry_time: 
  folder: Fᴜɴ

  <<ANSWER
👏 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴀᴅᴅ ᴄʟᴀᴘ ᴇᴍᴏᴊɪ ʙᴇᴛᴡᴇᴇɴ ᴡᴏʀᴅs.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var result = message.trim().split(/\s+/).join(" 👏 ")
var adsFooter = Libs.Helpers.getAdsFooter()

Bot.sendMessage("<b>👏 Cʟᴀᴘ Tᴇxᴛ</b>\n\n" + result + adsFooter, {
  parse_mode: "HTML", disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "👏 Cʟᴀᴘ Aɢᴀɪɴ", callback_data: "/clap" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }], [{ text: "◁", callback_data: "/tools" }, { text: "○", callback_data: "/start" }, { text: "✕", callback_data: "/close" }]] }
})
