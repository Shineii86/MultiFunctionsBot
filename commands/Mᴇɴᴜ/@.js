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
var adsFooter = Libs.Helpers.getAdsFooter()

// Non-admin: check maintenance mode
if (user.telegramid != admin) {
  if (mode === "On") {
    var caption = "<b>🛠 𝖬𝖺𝗂𝗇𝗍𝖾𝗇𝖺𝗇𝖼𝖾 𝖨𝗇 𝖯𝗋𝗈𝗀𝗋𝖾𝗌𝗌!</b>\n\n" +
      "▪𝖡𝗈𝗍'𝗌 𝖠𝖽𝗆𝗂𝗇𝗂𝗌𝗍𝗋𝖺𝗍𝗂𝗈𝗇 𝖢𝗈𝗇𝖽𝗎𝖼𝗍𝗂𝗇𝗀 𝖲𝗈𝗆𝖾 𝖳𝖾𝖼𝗁𝗇𝗂𝖼𝖺𝗅 𝖶𝗈𝗋𝗄.\n" +
      "▪𝖬𝖾𝗇𝗎 𝖨𝗌 𝖲𝗐𝗂𝗍𝖼𝗁𝖾𝖽 𝖮𝖿𝖿 𝖠𝗇𝖽 𝖭𝗈𝗍 𝖠𝗏𝖺𝗂𝗅𝖺𝖻𝗅𝖾 𝖱𝗂𝗀𝗁𝗍 𝖭𝗈𝗐.\n" +
      "▪𝖠𝗅𝗅 𝖥𝗎𝗇𝖼𝗍𝗂𝗈𝗇𝗌 𝖶𝗂𝗅𝗅 𝖡𝖾 𝖡𝖺𝖼𝗄 𝖠𝖿𝗍𝖾𝗋 𝖢𝗈𝗆𝗉𝗅𝖾𝗍𝗂𝗈𝗇.\n\n" +
      "<b>👑 Aᴅᴍɪɴ:</b> Tᴜʀɴ Oғғ Iɴ Aᴅᴍɪɴ Pᴀɴᴇʟ → Sᴇᴛᴛɪ𝗻𝘀 → Oғғ\n\n" +
      "<b>ℹ️ Eᴠᴇʀʏᴏɴᴇ Eʟsᴇ:</b> Cᴏᴍᴇ Bᴀᴄᴋ Lᴀᴛᴇʀ Aɴᴅ Pʀᴇss /start." +
      adsFooter

    var buttons = [
      [
        { text: "🔔 Uᴘᴅᴀᴛᴇs Cʜᴀɴɴᴇʟ", url: "t.me/MaximXBots" },
        { text: "Sᴜᴘᴘᴏʀᴛ Gʀᴏᴜᴘ 💬", url: "t.me/MaximXGroup" }
      ],
      [
        { text: "◁ Rᴇsᴛᴀʀᴛ", callback_data: "/start" },
        { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
      ]
    ]

    Libs.Helpers.editOrSend({
      text: caption,
      reply_markup: { inline_keyboard: buttons }
    })
    return
  }
}
