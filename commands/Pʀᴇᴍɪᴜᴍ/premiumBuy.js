/*CMD
  command: premiumBuy
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

var balance = Libs.ResourcesLib.userRes("balance")
var cost = 500
var adsFooter = Libs.Helpers.getAdsFooter()

if (balance.value() < cost) {
  Libs.Helpers.editOrSend({
    text: "<b>❌ Iɴꜱᴜꜰꜰɪᴄɪᴇɴᴛ Bᴀʟᴀɴᴄᴇ!</b>\n\n" +
      "<b>Nᴇᴇᴅᴇᴅ:</b> " + Libs.Helpers.formatNumber(cost) + " $REACT\n" +
      "<b>Yᴏᴜ ʜᴀᴠᴇ:</b> " + Libs.Helpers.formatNumber(balance.value()) + " $REACT\n\n" +
      "Eᴀʀɴ ᴍᴏʀᴇ ᴡɪᴛʜ /daily ᴏʀ ʀᴇꜰᴇʀʀᴀʟꜱ!",
    reply_markup: { inline_keyboard: [
      [{ text: "🎁 Dᴀɪʟʏ Rᴇᴡᴀʀᴅ", callback_data: "/daily" }],
      [{ text: "◁ Bᴀᴄᴋ", callback_data: "/premium" }]
    ]}
  })
  return
}

balance.add(-cost)
User.setProperty("premium", true, "boolean")
User.setProperty("premium_expiry", Date.now() + 30 * 86400000, "integer")

Libs.Helpers.editOrSend({
  text: "<b>🎉 Wᴇʟᴄᴏᴍᴇ ᴛᴏ Pʀᴇᴍɪᴜᴍ!</b>\n\n" +
    "<b>💎 Sᴛᴀᴛᴜꜱ:</b> Aᴄᴛɪᴠᴇ\n" +
    "<b>⏳ Dᴜʀᴀᴛɪᴏɴ:</b> 30 ᴅᴀʏꜱ\n" +
    "<b>💰 Pᴀɪᴅ:</b> " + Libs.Helpers.formatNumber(cost) + " $REACT\n\n" +
    "Aʟʟ ᴘʀᴇᴍɪᴜᴍ ʙᴇɴᴇꜰɪᴛꜱ ᴀʀᴇ ɴᴏᴡ ᴀᴄᴛɪᴠᴇ! ✨\n\n" +
    "<b>Yᴏᴜ ɢᴇᴛ:</b>\n" +
    "├ ✨ Aᴅ-ꜰʀᴇᴇ\n" +
    "├ ⚡ Hɪɢʜᴇʀ ʟɪᴍɪᴛꜱ\n" +
    "├ 🤖 Uɴʟɪᴍɪᴛᴇᴅ Aɪ\n" +
    "├ 💰 2x ᴅᴀɪʟʏ ʀᴇᴡᴀʀᴅꜱ\n" +
    "├ 🎨 Pʀᴇᴍɪᴜᴍ ʙᴀᴅɢᴇ\n" +
    "└ 📁 10x ꜰɪʟᴇ ꜱᴛᴏʀᴀɢᴇ" +
    adsFooter,
  reply_markup: { inline_keyboard: [[{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]] }
})

// Notify admin
var admin = Bot.getProperty("admin")
if (admin) {
  Api.sendMessage({
    chat_id: admin,
    text: "<b>💎 Nᴇᴡ Pʀᴇᴍɪᴜᴍ Sᴜʙꜱᴄʀɪʙᴇʀ!</b>\n\n" +
      "<b>👤 Uꜱᴇʀ:</b> " + Libs.Helpers.getUserMention() + "\n" +
      "<b>💰 Pᴀɪᴅ:</b> " + Libs.Helpers.formatNumber(cost) + " $REACT",
    parse_mode: "HTML"
  })
}
