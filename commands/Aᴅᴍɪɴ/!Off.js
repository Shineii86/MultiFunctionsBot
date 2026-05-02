/*CMD
  command: !Off
  help: Disable maintenance mode
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

Bot.setProperty("maintenance", "Off", "string")

var caption = "<b>🟢 Mᴀɪɴᴛᴇɴᴀɴᴄᴇ Mᴏᴅᴇ:</b> Dᴇᴀᴄᴛɪᴠᴀᴛᴇᴅ\n" +
  "𝘈𝘭𝘭 𝘚𝘺𝘴𝘵𝘦𝘮𝘴 𝘖𝘱𝘦𝘳𝘢𝘵𝘪𝘰𝘯𝘢𝘭. 𝘔𝘢𝘪𝘯𝘵𝘦𝘯𝘢𝘯𝘤𝘦 𝘚𝘶𝘤𝘤𝘦𝘴𝘴𝘧𝘶𝘭𝘭𝘺 𝘊𝘰𝘯𝘤𝘭𝘶𝘥𝘦𝘥.\n\n" +
  "<b>Sᴛᴀᴛᴜs:</b> 𝗙𝗨𝗟𝗟𝗬 𝗢𝗣𝗘𝗥𝗔𝗧𝗜𝗢𝗡𝗔𝗟"

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
