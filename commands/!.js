/*CMD
  command: !
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var adsFooter = Libs.Helpers.getAdsFooter()

// Notify user
var caption = "<b>🤖 Eʀʀᴏʀ Aʟᴇʀᴛ 🔔</b>\n\n" +
  "𝖠𝗇 𝖤𝗋𝗋𝗈𝗋 𝖮𝖼𝖼𝗎𝗋𝗋𝖾𝖽 𝖶𝗁𝗂𝗅𝖾 𝖯𝗋𝗈𝖼𝖾𝗌𝗌𝗂𝗇𝗀 𝖸𝗈𝗎𝗋 𝖱𝖾𝗊𝗎𝖾𝗌𝗍.\n" +
  "𝖯𝗅𝖾𝖺𝗌𝖾 𝖳𝗋𝗒 𝖠𝗀𝖺𝗂𝗇 𝖮𝗋 𝖱𝖾𝗉𝗈𝗋𝗍 𝖳𝗁𝗂𝗌 𝖳𝗈 𝖳𝗁𝖾 𝖣𝖾𝗏𝖾𝗅𝗈𝗉𝖾𝗋." +
  adsFooter

var buttons = [
  [
    { text: "🧑‍💻 Bᴏᴛ Dᴇᴠᴇʟᴏᴘᴇʀ", url: "t.me/Shineii86" },
    { text: "Sᴜᴘᴘᴏʀᴛ Gʀᴏᴜᴘ 💬", url: "t.me/MaximXGroup" }
  ],
  [{ text: "◁ Rᴇsᴛᴀʀᴛ", callback_data: "/start" }]
]

Api.sendMessage({
  chat_id: user.telegramid,
  text: caption,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: buttons }
})

// Notify admin with details
if (admin) {
  var firstName = Libs.Helpers.getUserMention()
  var username = user.username ? "@" + user.username : "Uɴᴋɴᴏᴡɴ"

  var errorMessage = "<b>🤖 Bᴏᴛ Eʀʀᴏʀ Rᴇᴘᴏʀᴛ</b>\n\n" +
    "<b>👤 Usᴇʀ:</b> " + firstName + "\n" +
    "<b>🌐 Usᴇʀɴᴀᴍᴇ:</b> " + username + "\n" +
    "<b>🆔 Iᴅ:</b> <code>" + user.telegramid + "</code>\n" +
    "<b>🏆 Pʀᴇᴍɪᴜᴍ:</b> " + (user.is_premium ? "Yᴇs" : "Nᴏ")

  Api.sendMessage({
    chat_id: admin,
    text: errorMessage,
    parse_mode: "HTML",
    disable_web_page_preview: true
  })
}
