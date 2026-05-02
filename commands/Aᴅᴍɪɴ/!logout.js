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

  var caption = "<b>👤 Bᴏᴛ Aᴅᴍɪɴ Hᴀs Bᴇᴇɴ Rᴇᴍᴏᴠᴇᴅ.</b>"
  var buttons = [[{ text: "Lᴏɢᴏᴜᴛ Pᴀɴᴇʟ", callback_data: "/start" }]]

  Libs.Helpers.editOrSend({
    text: caption,
    reply_markup: { inline_keyboard: buttons }
  })
} else if (admin) {
  Libs.Helpers.editOrSend({
    text: "<b>🚷 Yᴏᴜ Aʀᴇ Nᴏᴛ Aᴜᴛʜᴏʀɪᴢᴇᴅ.</b>",
    reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/start") }
  })
}
