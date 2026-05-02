/*CMD
  command: !Off
  help: Disable maintenance mode
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

Bot.setProperty("maintenance", "Off", "string")

var caption = "<b>🟢 Mᴀɪɴᴛᴇɴᴀɴᴄᴇ Dᴇᴀᴄᴛɪᴠᴀᴛᴇᴅ</b>\n\n" +
  "𝘈𝘭𝘭 𝘴𝘺𝘴𝘵𝘦𝘮𝘴 𝘰𝘱𝘦𝘳𝘢𝘵𝘪𝘰𝘯𝘢𝘭.\n" +
  "𝘔𝘢𝘪𝘯𝘵𝘦𝘯𝘢𝘯𝘤𝘦 𝘴𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺 𝘤𝘰𝘯𝘤𝘭𝘶𝘥𝘦𝘥.\n\n" +
  "<b>Sᴛᴀᴛᴜꜱ:</b> Fᴜʟʟʏ Oᴘᴇʀᴀᴛɪᴏɴᴀʟ 🟢"

var buttons = [
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "!master" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
