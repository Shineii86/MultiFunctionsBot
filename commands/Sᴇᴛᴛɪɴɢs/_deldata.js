/*CMD
  command: /deldata
  help: Delete all your data from the bot
  need_reply: false
  auto_retry_time: 
  folder: Sᴇᴛᴛɪɴɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /deleteaccount
  group: 
CMD*/

var caption = "<b>⚠️ Dᴇʟᴇᴛᴇ Yᴏᴜʀ Dᴀᴛᴀ?</b>\n\n" +
  "Tʜɪꜱ ᴡɪʟʟ ʀᴇᴍᴏᴠᴇ:\n" +
  "├ Yᴏᴜʀ ʙᴀʟᴀɴᴄᴇ & ʀᴇꜰᴇʀʀᴀʟꜱ\n" +
  "├ Aʟʟ ʀᴇᴍɪɴᴅᴇʀꜱ\n" +
  "├ Lᴀɴɢᴜᴀɢᴇ ꜱᴇᴛᴛɪɴɢꜱ\n" +
  "├ AFK ꜱᴛᴀᴛᴜꜱ\n" +
  "└ Pʀᴇꜰᴇʀᴇɴᴄᴇꜱ\n\n" +
  "<b>Tʜɪꜱ ᴀᴄᴛɪᴏɴ ᴄᴀɴɴᴏᴛ ʙᴇ ᴜɴᴅᴏɴᴇ!</b>"

var buttons = [
  [
    { text: "⚠️ Yᴇꜱ, Dᴇʟᴇᴛᴇ", callback_data: "confirmDelData" },
    { text: "❌ Cᴀɴᴄᴇʟ", callback_data: "/settings" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
