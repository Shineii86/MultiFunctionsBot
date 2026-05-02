/*CMD
  command: /ratelimit
  help: Configure rate limiting for commands
  need_reply: false
  auto_retry_time: 
  folder: Gʀᴏᴜᴘ Mᴀɴᴀɢᴇᴍᴇɴᴛ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /antiflood /antispam
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var chatId = request.chat ? request.chat.id : user.telegramid
var currentLimit = Bot.getProperty("rate_limit_" + chatId, 5)
var currentWindow = Bot.getProperty("rate_window_" + chatId, 60)

var caption = "<b>🛡️ Rᴀᴛᴇ Lɪᴍɪᴛɪɴɢ</b>\n\n" +
  "<b>⚡ Cᴜʀʀᴇɴᴛ Lɪᴍɪᴛ:</b> " + currentLimit + " ᴄᴏᴍᴍᴀɴᴅꜱ\n" +
  "<b>⏱️ Wɪɴᴅᴏᴡ:</b> " + currentWindow + " ꜱᴇᴄᴏɴᴅꜱ\n\n" +
  "Pʀᴇᴠᴇɴᴛꜱ ᴜꜱᴇʀꜱ ꜰʀᴏᴍ ꜱᴘᴀᴍᴍɪɴɢ ᴄᴏᴍᴍᴀɴᴅꜱ."

var buttons = [
  [
    { text: "⚡ Sᴇᴛ Lɪᴍɪᴛ", callback_data: "setRateLimit" },
    { text: "⏱️ Sᴇᴛ Wɪɴᴅᴏᴡ", callback_data: "setRateWindow" }
  ],
  [
    { text: currentLimit > 0 ? "🟢 Eɴᴀʙʟᴇᴅ" : "🔴 Dɪꜱᴀʙʟᴇᴅ", callback_data: "toggleRateLimit" }
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
