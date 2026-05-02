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

var mode = Bot.getProperty("maintenance", "Off")
var Mode = Libs.Helpers.fancyOnOff(mode)

var caption = "<b>⚙️ Mᴀɪɴᴛᴇɴᴀɴᴄᴇ Mᴏᴅᴇ</b>\n\n" +
  "Sᴇʟᴇᴄᴛ Yᴏᴜʀ Cʜᴏɪᴄᴇ Tᴏ Tᴏɢɢʟᴇ Mᴀɪɴᴛᴇɴᴀɴᴄᴇ.\n\n" +
  "<b>⚡ Cᴜʀʀᴇɴᴛ Mᴏᴅᴇ:</b> " + Mode

var buttons = [
  [
    { text: "🪫 Oɴ", callback_data: "!On" },
    { text: "Oғғ 🔋", callback_data: "!Off" }
  ],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "!master" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "!close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
