/*CMD
  command: /antispam
  help: Configure anti-spam settings
  need_reply: false
  auto_retry_time: 
  folder: Gʀᴏᴜᴘ Mᴀɴᴀɢᴇᴍᴇɴᴛ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /antiflood2
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var chatId = request.chat ? request.chat.id : user.telegramid
var config = Bot.getProperty("antispam_" + chatId, {
  forwards: true, links: true, newuserDelay: 0, maxMessages: 10
})

var caption = "<b>🛡️ Aɴᴛɪ-Sᴘᴀᴍ Sᴇᴛᴛɪɴɢꜱ</b>\n\n" +
  "<b>📤 Bʟᴏᴄᴋ Fᴏʀᴡᴀʀᴅꜱ:</b> " + (config.forwards ? "✅" : "❌") + "\n" +
  "<b>🔗 Bʟᴏᴄᴋ Lɪɴᴋꜱ:</b> " + (config.links ? "✅" : "❌") + "\n" +
  "<b>⏳ Nᴇᴡ Uꜱᴇʀ Dᴇʟᴀʏ:</b> " + config.newuserDelay + "ᴍ\n" +
  "<b>⚡ Mᴀx Mꜱɢ/ᴍɪɴ:</b> " + config.maxMessages + "\n\n" +
  "Tᴏɢɢʟᴇ ᴏᴘᴛɪᴏɴꜱ ʙᴇʟᴏᴡ:"

var buttons = [
  [
    { text: (config.forwards ? "✅" : "❌") + " Fᴏʀᴡᴀʀᴅꜱ", callback_data: "toggleSpamForwards" },
    { text: (config.links ? "✅" : "❌") + " Lɪɴᴋꜱ", callback_data: "toggleSpamLinks" }
  ],
  [
    { text: "⏳ Sᴇᴛ Dᴇʟᴀʏ", callback_data: "setSpamDelay" },
    { text: "⚡ Sᴇᴛ Lɪᴍɪᴛ", callback_data: "setSpamLimit" }
  ],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "!master" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
