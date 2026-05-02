/*CMD
  command: /shortener
  help: Shorten a URL
  need_reply: false
  auto_retry_time: 
  folder: Sʜᴏʀᴛᴇɴᴇʀ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /short
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>🔗 Sᴇɴᴅ Aɴʏ Lᴏɴɢ Lɪɴᴋ Aɴᴅ I'ʟʟ Sʜᴏʀᴛᴇɴ Iᴛ</b>\n\n" +
  "<b>Hᴏᴡ ᴛᴏ Usᴇ:</b>\n" +
  "1. <b>Sᴇɴᴅ</b> Aɴʏ Lᴏɴɢ Uʀʟ.\n" +
  "2. <b>Rᴇᴄᴇɪᴠᴇ</b> A Sʜᴏʀᴛᴇɴᴇᴅ Uʀʟ.\n\n" +
  "<b>Sᴜᴘᴘᴏʀᴛᴇᴅ:</b> Bɪᴛ.ly Lɪɴᴋs" +
  adsFooter

var buttons = Libs.Helpers.getNavButtons()

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})

Bot.runCommand("/bitly")
