/*CMD
  command: /logchannel
  help: Set log channel for admin actions
  need_reply: false
  auto_retry_time: 
  folder: Gʀᴏᴜᴘ Mᴀɴᴀɢᴇᴍᴇɴᴛ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /setlog
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var currentLog = Bot.getProperty("log_channel", "")
var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>📋 Lᴏɢ Cʜᴀɴɴᴇʟ Sᴇᴛᴛɪɴɢꜱ</b>\n\n" +
  "<b>Cᴜʀʀᴇɴᴛ:</b> " + (currentLog ? "<code>" + currentLog + "</code>" : "Nᴏᴛ ꜱᴇᴛ") + "\n\n" +
  "Sᴇɴᴅ ᴄʜᴀɴɴᴇʟ ID ᴏʀ @username ᴛᴏ ꜱᴇᴛ.\n" +
  "Fᴏʀᴡᴀʀᴅ ᴀ ᴍᴇꜱꜱᴀɢᴇ ꜰʀᴏᴍ ᴄʜᴀɴɴᴇʟ ᴛᴏ ᴜꜱᴇ ɪᴛꜱ ID.\n\n" +
  "<b>Lᴏɢꜱ Iɴᴄʟᴜᴅᴇ:</b>\n" +
  "├ 👤 Jᴏɪɴꜱ/Lᴇᴀᴠᴇꜱ\n" +
  "├ ⚠️ Wᴀʀɴɪɴɢꜱ\n" +
  "├ 🚫 Bᴀɴꜱ/Uɴʙᴀɴꜱ\n" +
  "├ 🗑️ Mᴇꜱꜱᴀɢᴇ Dᴇʟᴇᴛɪᴏɴꜱ\n" +
  "└ 📝 Eᴅɪᴛꜱ" +
  adsFooter

var buttons = [
  [
    { text: "📋 Sᴇᴛ Cʜᴀɴɴᴇʟ", callback_data: "setLogChannel" },
    { text: "🔴 Dɪꜱᴀʙʟᴇ", callback_data: "disableLogChannel" }
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
