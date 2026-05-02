/*CMD
  command: /reactionrole
  help: Set up reaction roles
  need_reply: false
  auto_retry_time: 
  folder: Gʀᴏᴜᴘ Mᴀɴᴀɢᴇᴍᴇɴᴛ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /rr
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var caption = "<b>🎭 Rᴇᴀᴄᴛɪᴏɴ Rᴏʟᴇꜱ</b>\n\n" +
  "Sᴇᴛᴜᴘ ꜱᴇʟꜰ-ᴀꜱꜱɪɢɴᴀʙʟᴇ ʀᴏʟᴇꜱ ᴠɪᴀ ᴇᴍᴏᴊɪ ʀᴇᴀᴄᴛɪᴏɴꜱ.\n\n" +
  "<b>Cᴏᴍᴍᴀɴᴅꜱ:</b>\n" +
  "├ /rr add Eᴍᴏᴊɪ @role — Aᴅᴅ ʀᴏʟᴇ\n" +
  "├ /rr remove Eᴍᴏᴊɪ — Rᴇᴍᴏᴠᴇ ʀᴏʟᴇ\n" +
  "└ /rr list — Vɪᴇᴡ ᴀʟʟ ʀᴏʟᴇꜱ\n\n" +
  "<b>Nᴏᴛᴇ:</b> Bᴏᴛ ᴍᴜꜱᴛ ʜᴀᴠᴇ Aᴅᴍɪɴ ʀɪɢʜᴛꜱ."

var buttons = [[{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
