/*CMD
  command: !On
  help: Enable maintenance mode
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

Bot.setProperty("maintenance", "On", "string")

var caption = "<b>🔴 Mᴀɪɴᴛᴇɴᴀɴᴄᴇ Aᴄᴛɪᴠᴀᴛᴇᴅ</b>\n\n" +
  "𝘚𝘤𝘩𝘦𝘥𝘶𝘭𝘦𝘥 𝘮𝘢𝘪𝘯𝘵𝘦𝘯𝘢𝘯𝘤𝘦 𝘪𝘯 𝘱𝘳𝘰𝘨𝘳𝘦𝘴𝘴.\n" +
  "𝘚𝘦𝘳𝘷𝘪𝘤𝘦𝘴 𝘸𝘪𝘭𝘭 𝘳𝘦𝘴𝘶𝘮𝘦 𝘴𝘩𝘰𝘳𝘵𝘭𝘺.\n\n" +
  "<b>Sᴛᴀᴛᴜꜱ:</b> Tᴇᴍᴘᴏʀᴀʀɪʟʏ Oꜰꜰʟɪɴᴇ 🔴"

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
