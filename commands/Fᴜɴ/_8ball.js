/*CMD
  command: /8ball
  help: Ask the magic 8-ball a question
  need_reply: true
  auto_retry_time: 
  folder: Fᴜɴ

  <<ANSWER
🎱 Sᴇɴᴅ ʏᴏᴜʀ ǫᴜᴇsᴛɪᴏɴ ᴛᴏ ᴛʜᴇ ᴍᴀɢɪᴄ 8-ʙᴀʟʟ!
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /magic8ball
  group: 
CMD*/

var responses = [
  "Iᴛ ɪs ᴄᴇʀᴛᴀɪɴ. ✅", "Iᴛ ɪs ᴅᴇᴄɪᴅᴇᴅʟʏ sᴏ. ✅", "Wɪᴛʜᴏᴜᴛ ᴀ ᴅᴏᴜʙᴛ. ✅",
  "Yᴇs ᴅᴇꜰɪɴɪᴛᴇʟʏ. ✅", "Yᴏᴜ ᴍᴀʏ ʀᴇʟʏ ᴏɴ ɪᴛ. ✅", "Aꜰ I sᴇᴇ ɪᴛ, ʏᴇs. ✅",
  "Mᴏsᴛ ʟɪᴋᴇʟʏ. ✅", "Oᴜᴛʟᴏᴏᴋ ɢᴏᴏᴅ. ✅", "Yᴇs. ✅", "Sɪɢɴs ᴘᴏɪɴᴛ ᴛᴏ ʏᴇs. ✅",
  "Rᴇᴘʟʏ ʜᴀᴢʏ, ᴛʀʏ ᴀɢᴀɪɴ. 🔄", "Asᴋ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ. 🔄", "Bᴇᴛᴛᴇʀ ɴᴏᴛ ᴛᴇʟʟ ʏᴏᴜ ɴᴏᴡ. 🔄",
  "Cᴀɴɴᴏᴛ ᴘʀᴇᴅɪᴄᴛ ɴᴏᴡ. 🔄", "Cᴏɴᴄᴇɴᴛʀᴀᴛᴇ ᴀɴᴅ ᴀsᴋ ᴀɢᴀɪɴ. 🔄",
  "Dᴏɴ'ᴛ ᴄᴏᴜɴᴛ ᴏɴ ɪᴛ. ❌", "Mʏ ʀᴇᴘʟʏ ɪs ɴᴏ. ❌", "Mʏ sᴏᴜʀᴄᴇs sᴀʏ ɴᴏ. ❌",
  "Oᴜᴛʟᴏᴏᴋ ɴᴏᴛ sᴏ ɢᴏᴏᴅ. ❌", "Vᴇʀʏ ᴅᴏᴜʙᴛꜰᴜʟ. ❌"
]

var answer = responses[Math.floor(Math.random() * responses.length)]
var adsFooter = Libs.Helpers.getAdsFooter()

Bot.sendMessage("🎱 <b>Mᴀɢɪᴄ 8-Bᴀʟʟ</b>\n\n<b>❓ Qᴜᴇsᴛɪᴏɴ:</b> " + message + "\n\n<b>🔮 Aɴsᴡᴇʀ:</b> " + answer + adsFooter, {
  parse_mode: "HTML", disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "🎱 Asᴋ Aɢᴀɪɴ", callback_data: "/8ball" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }], [{ text: "◁", callback_data: "/tools" }, { text: "○", callback_data: "/start" }, { text: "✕", callback_data: "/close" }]] }
})
