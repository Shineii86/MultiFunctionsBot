/*CMD
  command: /welcome
  help: Configure group welcome message
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

var chatId = request.chat ? request.chat.id : user.telegramid
var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var welcomeEnabled = Bot.getProperty("welcome_enabled_" + chatId, true)
var welcomeMsg = Bot.getProperty("welcome_msg_" + chatId, "👋 Wᴇʟᴄᴏᴍᴇ {name} ᴛᴏ {group}!\n\nYᴏᴜ ᴀʀᴇ ᴍᴇᴍʙᴇʀ #{count}.")

var status = welcomeEnabled ? "🟢 Eɴᴀʙʟᴇᴅ" : "🔴 Dɪꜱᴀʙʟᴇᴅ"

var caption = "<b>👋 Wᴇʟᴄᴏᴍᴇ Mᴇꜱꜱᴀɢᴇ Sᴇᴛᴛɪɴɢꜱ</b>\n\n" +
  "<b>📡 Sᴛᴀᴛᴜꜱ:</b> " + status + "\n\n" +
  "<b>📝 Cᴜʀʀᴇɴᴛ Mᴇꜱꜱᴀɢᴇ:</b>\n<blockquote>" + Libs.Helpers.escapeHTML(welcomeMsg) + "</blockquote>\n\n" +
  "<b>💡 Vᴀʀɪᴀʙʟᴇꜱ:</b>\n" +
  "├ <code>{name}</code> — Uꜱᴇʀ's ɴᴀᴍᴇ\n" +
  "├ <code>{username}</code> — @ᴜꜱᴇʀɴᴀᴍᴇ\n" +
  "├ <code>{group}</code> — Gʀᴏᴜᴘ ɴᴀᴍᴇ\n" +
  "├ <code>{count}</code> — Mᴇᴍʙᴇʀ ᴄᴏᴜɴᴛ\n" +
  "└ <code>{id}</code> — Uꜱᴇʀ Iᴅ"

var buttons = [
  [
    { text: "✏️ Eᴅɪᴛ Mᴇꜱꜱᴀɢᴇ", callback_data: "editWelcome" },
    { text: welcomeEnabled ? "🔴 Dɪꜱᴀʙʟᴇ" : "🟢 Eɴᴀʙʟᴇ", callback_data: "toggleWelcome" }
  ],
  [
    { text: "👁️ Pʀᴇᴠɪᴇᴡ", callback_data: "previewWelcome" },
    { text: "🔄 Rᴇꜱᴇᴛ", callback_data: "resetWelcome" }
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
