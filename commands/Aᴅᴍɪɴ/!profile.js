/*CMD
  command: !profile
  help: View admin profile
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

var firstName = user && user.first_name
  ? "<a href='tg://user?id=" + user.telegramid + "'>" + Libs.Helpers.escapeHTML(user.first_name) + "</a>"
  : "Uɴᴋɴᴏᴡɴ"

var caption = "<b>╭━━ 👤 Aᴅᴍɪɴ Pʀᴏꜰɪʟᴇ ━━╮</b>\n\n" +
  "<b>👤 Nᴀᴍᴇ:</b> " + firstName + "\n" +
  "<b>👥 Lᴀꜱᴛ Nᴀᴍᴇ:</b> " + (user.last_name || "N/A") + "\n" +
  "<b>🌐 Uꜱᴇʀɴᴀᴍᴇ:</b> " + (user.username ? "@" + user.username : "N/A") + "\n" +
  "<b>💎 Pʀᴇᴍɪᴜᴍ:</b> " + (user.is_premium ? "Yᴇꜱ ⭐" : "Nᴏ") + "\n" +
  "<b>🗣️ Lᴀɴɢᴜᴀɢᴇ:</b> " + (user.language_code || "N/A") + "\n" +
  "<b>🆔 Iᴅ:</b> <code>" + user.telegramid + "</code>\n" +
  "<b>📎 Pʀᴏꜰɪʟᴇ:</b> <a href='tg://user?id=" + user.telegramid + "'>Vɪᴇᴡ</a>\n\n" +
  "<b>╰━━━━━━━━━━━━━━━━━━╯</b>"

var buttons = [
  [{ text: "⚠️ Dᴀɴɢᴇʀ Zᴏɴᴇ — Lᴏɢᴏᴜᴛ", callback_data: "!logout" }],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "!master" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
