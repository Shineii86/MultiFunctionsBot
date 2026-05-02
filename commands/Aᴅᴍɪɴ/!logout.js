/*CMD
  command: !logout
  help: Remove admin access
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

if (user.telegramid == admin) {
  Bot.setProperty("admin", "", "integer")

  Libs.Helpers.editOrSend({
    text: "<b>🚪 Aᴅᴍɪɴ Aᴄᴄᴇꜱꜱ Rᴇᴍᴏᴠᴇᴅ</b>\n\n" +
      "Yᴏᴜ ʜᴀᴠᴇ ʙᴇᴇɴ ʟᴏɢɢᴇᴅ ᴏᴜᴛ.\n" +
      "Tᴏ ʀᴇ-ɢᴀɪɴ ᴀᴄᴄᴇꜱꜱ, ᴜꜱᴇ !ZeroTwo",
    reply_markup: { inline_keyboard: [[{ text: "◁ Bᴀᴄᴋ Tᴏ Bᴏᴛ", callback_data: "/start" }]] }
  })
} else if (admin) {
  Libs.Helpers.editOrSend({
    text: "<b>🚷 Yᴏᴜ Aʀᴇ Nᴏᴛ Aᴜᴛʜᴏʀɪᴢᴇᴅ.</b>",
    reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/start") }
  })
}
