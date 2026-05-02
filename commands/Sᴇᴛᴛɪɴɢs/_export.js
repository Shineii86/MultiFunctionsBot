/*CMD
  command: /export
  help: Export your bot data
  need_reply: false
  auto_retry_time: 
  folder: Sᴇᴛᴛɪɴɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /backup /mydata
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

// Gather user data
var data = {
  user_id: user.telegramid,
  name: user.first_name,
  username: user.username || "N/A",
  language: User.getProperty("lang", "en"),
  timezone: User.getProperty("timezone", "IST"),
  balance: Libs.ResourcesLib.userRes("balance").value(),
  referrals: Libs.ReferralLib.getRefCount(),
  reminders: Bot.getProperty("reminders_" + user.telegramid, []),
  afk: User.getProperty("afk", {}),
  exported_at: new Date().toISOString()
}

var jsonStr = JSON.stringify(data, null, 2)

// Send as document
var blob = Utilities.newBlob(jsonStr, "application/json", "my_data.json")
Api.sendDocument({
  chat_id: user.telegramid,
  document: blob,
  caption: "<b>📦 Yᴏᴜʀ Dᴀᴛᴀ Exᴘᴏʀᴛ</b>\n\n" +
    "<b>📊 Iɴᴄʟᴜᴅᴇᴅ:</b>\n" +
    "├ 👤 Pʀᴏꜰɪʟᴇ Iɴꜰᴏ\n" +
    "├ 💼 Bᴀʟᴀɴᴄᴇ & Rᴇꜰᴇʀʀᴀʟꜱ\n" +
    "├ ⏰ Rᴇᴍɪɴᴅᴇʀꜱ\n" +
    "├ 💤 AFK Sᴛᴀᴛᴜꜱ\n" +
    "└ 🌐 Lᴀɴɢᴜᴀɢᴇ & Tɪᴍᴇᴢᴏɴᴇ\n\n" +
    "<i>Fᴏʀᴍᴀᴛ: JSON</i>",
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
})
