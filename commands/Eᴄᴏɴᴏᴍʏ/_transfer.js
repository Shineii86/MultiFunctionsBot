/*CMD
  command: /transfer
  help: Transfer $REACT to another user
  need_reply: true
  auto_retry_time: 
  folder: Eᴄᴏɴᴏᴍʏ

  <<ANSWER
💸 Sᴇɴᴅ ᴛʀᴀɴꜰᴇʀ ɪɴ ᴛʜɪꜱ ꜰᴏʀᴍᴀᴛ:
<code>@username 100</code> or <code>123456789 100</code>
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /send /pay
  group: 
CMD*/

var input = message.trim().split(/\s+/)
var adsFooter = Libs.Helpers.getAdsFooter()

if (input.length < 2) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ ꜰᴏʀᴍᴀᴛ!</b>\n\n<code>/transfer @username 100</code>", { parse_mode: "HTML" })
  return
}

var recipient = input[0].replace("@", "")
var amount = parseInt(input[1])

if (isNaN(amount) || amount <= 0) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ ᴀᴍᴏᴜɴᴛ.</b>", { parse_mode: "HTML" })
  return
}

var myBalance = Libs.ResourcesLib.userRes("balance")
if (myBalance.value() < amount) {
  Bot.sendMessage("<b>❌ Iɴꜱᴜꜰꜰɪᴄɪᴇɴᴛ ʙᴀʟᴀɴᴄᴇ!</b>\n\n" +
    "<b>Yᴏᴜ ʜᴀᴠᴇ:</b> " + Libs.Helpers.formatNumber(myBalance.value()) + " $REACT\n" +
    "<b>Nᴇᴇᴅᴇᴅ:</b> " + Libs.Helpers.formatNumber(amount) + " $REACT", {
    parse_mode: "HTML"
  })
  return
}

// Try to find user by ID
var targetId = parseInt(recipient)
if (!isNaN(targetId) && targetId > 0) {
  var targetBalance = Libs.ResourcesLib.anotherUserRes("balance", targetId)
  myBalance.add(-amount)
  targetBalance.add(amount)

  Bot.sendMessage("<b>✅ Tʀᴀɴꜰᴇʀ Cᴏᴍᴘʟᴇᴛᴇ!</b>\n\n" +
    "<b>💸 Sᴇɴᴛ:</b> " + Libs.Helpers.formatNumber(amount) + " $REACT\n" +
    "<b>👤 Tᴏ:</b> <code>" + targetId + "</code>\n" +
    "<b>💼 Rᴇᴍᴀɪɴɪɴɢ:</b> " + Libs.Helpers.formatNumber(myBalance.value()) + " $REACT" +
    adsFooter, {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
  })
} else {
  Bot.sendMessage("<b>❌ Pʟᴇᴀꜱᴇ ᴜꜱᴇ ᴜꜱᴇʀ Iᴅ ꜰᴏʀ ᴛʀᴀɴꜰᴇʀꜱ.</b>\n\n" +
    "<i>Uꜱᴇʀɴᴀᴍᴇ-ʙᴀꜱᴇᴅ ᴛʀᴀɴꜰᴇʀꜱ ᴀʀᴇ ɴᴏᴛ ꜱᴜᴘᴘᴏʀᴛᴇᴅ ʏᴇᴛ.</i>", {
    parse_mode: "HTML"
  })
}
