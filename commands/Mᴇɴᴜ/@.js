/*CMD
  command: @
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Mᴇɴᴜ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var mode = Bot.getProperty("maintenance", "Off")

// Non-admin: check maintenance mode
if (user.telegramid != admin) {
  if (mode === "On") {
    var adsFooter = Libs.Helpers.getAdsFooter()

    var caption = "<b>🔧 Mᴀɪɴᴛᴇɴᴀɴᴄᴇ Iɴ Pʀᴏɢʀᴇꜱꜱ</b>\n\n" +
      "Tʜᴇ Bᴏᴛ ɪꜱ ᴄᴜʀʀᴇɴᴛʟʏ ᴜɴᴅᴇʀ ꜱᴄʜᴇᴅᴜʟᴇᴅ ᴍᴀɪɴᴛᴇɴᴀɴᴄᴇ.\n" +
      "Aʟʟ ꜰᴇᴀᴛᴜʀᴇꜱ ᴡɪʟʟ ʙᴇ ʙᴀᴄᴋ ꜱʜᴏʀᴛʟʏ.\n\n" +
      "Pʟᴇᴀꜱᴇ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ. 🙏" +
      adsFooter

    var buttons = [
      [
        { text: "🔔 Uᴘᴅᴀᴛᴇꜱ", url: "t.me/MaximXBots" },
        { text: "💬 Sᴜᴘᴘᴏʀᴛ", url: "t.me/MaximXGroup" }
      ],
      [
        { text: "🔄 Tʀʏ Aɢᴀɪɴ", callback_data: "/start" },
        { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
      ]
    ]

    Libs.Helpers.editOrSend({
      text: caption,
      reply_markup: { inline_keyboard: buttons }
    })
    return
  }
}
