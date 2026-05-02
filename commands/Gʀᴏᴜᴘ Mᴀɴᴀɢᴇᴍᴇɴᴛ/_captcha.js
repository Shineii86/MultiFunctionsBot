/*CMD
  command: /captcha
  help: Enable CAPTCHA verification for new members
  need_reply: false
  auto_retry_time: 
  folder: Gʀᴏᴜᴘ Mᴀɴᴀɢᴇᴍᴇɴᴛ

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

var chatId = request.chat ? request.chat.id : user.telegramid
var captchaEnabled = Bot.getProperty("captcha_" + chatId, false)
var captchaTimeout = Bot.getProperty("captcha_timeout_" + chatId, 60)

var caption = "<b>🔐 CAPTCHA Vᴇʀɪꜰɪᴄᴀᴛɪᴏɴ</b>\n\n" +
  "<b>Sᴛᴀᴛᴜꜱ:</b> " + (captchaEnabled ? "🟢 Eɴᴀʙʟᴇᴅ" : "🔴 Dɪꜱᴀʙʟᴇᴅ") + "\n" +
  "<b>⏱️ Tɪᴍᴇᴏᴜᴛ:</b> " + captchaTimeout + " ꜱᴇᴄᴏɴᴅꜱ\n\n" +
  "Nᴇᴡ ᴍᴇᴍʙᴇʀꜱ ᴍᴜꜱᴛ ꜱᴏʟᴠᴇ ᴀ CAPTCHA ʙᴇꜰᴏʀᴇ ᴛʜᴇʏ ᴄᴀɴ ᴄʜᴀᴛ.\n" +
  "Aᴜᴛᴏ-ᴋɪᴄᴋ ɪꜰ ᴛɪᴍᴇᴅ ᴏᴜᴛ."

var buttons = [
  [
    { text: captchaEnabled ? "🔴 Dɪꜱᴀʙʟᴇ" : "🟢 Eɴᴀʙʟᴇ", callback_data: "toggleCaptcha" },
    { text: "⏱️ Sᴇᴛ Tɪᴍᴇᴏᴜᴛ", callback_data: "setCaptchaTimeout" }
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
