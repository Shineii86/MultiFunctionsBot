/*CMD
  command: /feedbacks
  help: View recent feedback (admin only)
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
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ ᴏɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var adsFooter = Libs.Helpers.getAdsFooter()
Bot.sendMessage("<b📋 Fᴇᴇᴅʙᴀᴄᴋ</b>\n\nFᴇᴇᴅʙᴀᴄᴋ ᴍᴇssᴀɢᴇs ᴀʀᴇ sᴇɴᴛ ᴅɪʀᴇᴄᴛʟʏ ᴛᴏ ʏᴏᴜʀ ᴄʜᴀᴛ.\nUsᴇ /feedback ᴛᴏ ᴘʀᴏᴍᴘᴛ ᴜsᴇʀs ꜰᴏʀ ꜰᴇᴇᴅʙᴀᴄᴋ." + adsFooter, {
  parse_mode: "HTML",
  reply_markup: { inline_keyboard: [[{ text: "Cʟᴏsᴇ ✕", callback_data: "/close" }]] }
})
