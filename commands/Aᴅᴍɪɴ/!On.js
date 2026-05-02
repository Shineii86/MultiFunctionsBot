/*CMD
  command: !On
  help: Enable maintenance mode
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

Bot.setProperty("maintenance", "On", "string")

var caption = "<b>🔴 Mᴀɪɴᴛᴇɴᴀɴᴄᴇ Mᴏᴅᴇ:</b> Aᴄᴛɪᴠᴀᴛᴇᴅ\n" +
  "𝘚𝘤𝘩𝘦𝘥𝘶𝘭𝘦𝘥 𝘔𝘢𝘪𝘯𝘵𝘦𝘯𝘢𝘯𝘤𝘦 𝘐𝘯 𝘗𝘳𝘰𝘨𝘳𝘦𝘴𝘴. 𝘚𝘦𝘳𝘷𝘪𝘤𝘦𝘴 𝘞𝘪𝘭𝘭 𝘙𝘦𝘴𝘶𝘮𝘦 𝘚𝘩𝘰𝘳𝘵𝘭𝘺.\n\n" +
  "<b>Sᴛᴀᴛᴜs:</b> 𝗧𝗘𝗠𝗣𝗢𝗥𝗔𝗥𝗜𝗟𝗬 𝗢𝗙𝗙𝗟𝗜𝗡𝗘"

var buttons = [
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "!master" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "!close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
