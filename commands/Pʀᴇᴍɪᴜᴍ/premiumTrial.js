/*CMD
  command: premiumTrial
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Pʀᴇᴍɪᴜᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var hasUsedTrial = User.getProperty("premium_trial_used", false)

if (hasUsedTrial) {
  Libs.Helpers.editOrSend({
    text: "<b>❌ Tʀɪᴀʟ Aʟʀᴇᴀᴅʏ Uꜱᴇᴅ!</b>\n\n" +
      "Yᴏᴜ ᴄᴀɴ ᴏɴʟʏ ᴜꜱᴇ ᴛʜᴇ ꜰʀᴇᴇ ᴛʀɪᴀʟ ᴏɴᴄᴇ.\n" +
      "Pᴜʀᴄʜᴀꜱᴇ Pʀᴇᴍɪᴜᴍ ᴡɪᴛʜ /premium",
    reply_markup: { inline_keyboard: [[{ text: "💎 Bᴜʏ Pʀᴇᴍɪᴜᴍ", callback_data: "premiumBuy" }]] }
  })
  return
}

User.setProperty("premium_trial_used", true, "boolean")
User.setProperty("premium", true, "boolean")
User.setProperty("premium_expiry", Date.now() + 3 * 86400000, "integer")

Libs.Helpers.editOrSend({
  text: "<b>🎉 Fʀᴇᴇ Tʀɪᴀʟ Aᴄᴛɪᴠᴀᴛᴇᴅ!</b>\n\n" +
    "<b>⏳ Dᴜʀᴀᴛɪᴏɴ:</b> 3 ᴅᴀʏꜱ ꜰʀᴇᴇ\n\n" +
    "Aʟʟ Pʀᴇᴍɪᴜᴍ ʙᴇɴᴇꜰɪᴛꜱ ᴀʀᴇ ɴᴏᴡ ᴀᴄᴛɪᴠᴇ! ✨\n\n" +
    "Aꜰᴛᴇʀ ᴛʀɪᴀʟ, ᴘᴜʀᴄʜᴀꜱᴇ ᴡɪᴛʜ /premium (500 $REACT/ᴍᴏɴᴛʜ)",
  reply_markup: { inline_keyboard: [[{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]] }
})
