/*CMD
  command: !maintenance
  help: Toggle maintenance mode
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
var Mode = Libs.Helpers.fancyOnOff(mode)
var statusEmoji = Libs.Helpers.getStatusEmoji(mode === "On" ? "maintenance" : "online")

var caption = "<b>╭━━ ⚙️ Mᴀɪɴᴛᴇɴᴀɴᴄᴇ ━━╮</b>\n\n" +
  "Tᴏɢɢʟᴇ Mᴀɪɴᴛᴇɴᴀɴᴄᴇ Mᴏᴅᴇ Tᴏ Tᴇᴍᴘᴏʀᴀʀɪʟʏ Dɪꜱᴀʙʟᴇ Tʜᴇ Bᴏᴛ.\n\n" +
  "<b>📡 Cᴜʀʀᴇɴᴛ:</b> " + statusEmoji + " " + Mode + "\n\n" +
  "• <b>Oɴ:</b> Aʟʟ ᴜꜱᴇʀꜱ ꜱᴇᴇ ᴍᴀɪɴᴛᴇɴᴀɴᴄᴇ ᴍᴇꜱꜱᴀɢᴇ\n" +
  "• <b>Oꜰꜰ:</b> Bᴏᴛ ʀᴇꜱᴜᴍᴇꜱ ɴᴏʀᴍᴀʟ ᴏᴘᴇʀᴀᴛɪᴏɴ\n\n" +
  "<b>╰━━━━━━━━━━━━━━━━━━╯</b>"

var buttons = [
  [
    { text: "🔴 Eɴᴀʙʟᴇ", callback_data: "!On" },
    { text: "🟢 Dɪꜱᴀʙʟᴇ", callback_data: "!Off" }
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
