/*CMD
  command: !master
  help: Admin control panel
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

var mode = Bot.getProperty("maintenance", "Off")
var modeEmoji = Libs.Helpers.getStatusEmoji(mode === "On" ? "maintenance" : "online")
var totalUsers = Libs.ResourcesLib.anotherChatRes("totalusers", "global")
var userCount = Libs.Helpers.formatNumber(totalUsers.value() || 0)
var idstore = Bot.getProperty("idstore", [])

var caption = "<b>╭━━ 👑 Aᴅᴍɪɴ Pᴀɴᴇʟ ━━╮</b>\n\n" +
  "Wᴇʟᴄᴏᴍᴇ Tᴏ Tʜᴇ Cᴏɴᴛʀᴏʟ Pᴀɴᴇʟ.\n" +
  "Mᴀɴᴀɢᴇ Yᴏᴜʀ Bᴏᴛ Fʀᴏᴍ Hᴇʀᴇ.\n\n" +
  "<b>🤖 Bᴏᴛ:</b> @" + bot.name + "\n" +
  "<b>👥 Uꜱᴇʀꜱ:</b> " + userCount + "\n" +
  "<b>📡 Sᴛᴀᴛᴜꜱ:</b> " + modeEmoji + " " + (mode === "On" ? "Mᴀɪɴᴛᴇɴᴀɴᴄᴇ" : "Oᴘᴇʀᴀᴛɪᴏɴᴀʟ") + "\n\n" +
  "<b>╰━━━━━━━━━━━━━━━━━━╯</b>"

var buttons = [
  [
    { text: "👤 Pʀᴏꜰɪʟᴇ", callback_data: "!profile" },
    { text: "📊 Sᴛᴀᴛꜱ", callback_data: "!status" }
  ],
  [
    { text: "📢 Bʀᴏᴀᴅᴄᴀꜱᴛ", callback_data: "!broadcast" },
    { text: "📬 Fᴇᴇᴅʙᴀᴄᴋꜱ", callback_data: "/feedbacks" }
  ],
  [
    { text: "📝 Nᴏᴛᴇꜱ", callback_data: "/notes" },
    { text: "⚙️ Mᴀɪɴᴛᴇɴᴀɴᴄᴇ", callback_data: "!maintenance" }
  ],
  [
    { text: "🔄 Rᴇꜱᴛᴀʀᴛ", callback_data: "!restart" },
    { text: "🚪 Lᴏɢᴏᴜᴛ", callback_data: "!logout" }
  ],
  [
    { text: "◁ Bᴀᴄᴋ Tᴏ Bᴏᴛ", callback_data: "/start" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
