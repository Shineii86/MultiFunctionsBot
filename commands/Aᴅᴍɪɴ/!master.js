/*CMD
  command: !master
  help: Admin control panel
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

var caption = "👋 <b>Wᴇʟᴄᴏᴍᴇ Tᴏ Ҩᴜɪɴx Aᴅᴍɪɴ Pᴀɴᴇʟ</b>\n\n" +
  "Hᴇʀᴇ Yᴏᴜ Cᴀɴ Mᴀɴᴀɢᴇ Yᴏᴜʀ Bᴏᴛ Wɪᴛʜ Sɪɴɢʟᴇ Oᴘᴛɪᴏɴs.\n\n" +
  "🚷 Sᴏᴍᴇ Oᴘᴛɪᴏɴs Yᴏᴜ Nᴇᴇᴅ Tᴏ Sᴇᴛ Eʟsᴇ Bᴏᴛ Wᴏɴ'ᴛ Wᴏʀᴋ Pʀᴏᴘᴇʀʟʏ.\n\n" +
  "<b>🤖 Bᴏᴛ Nᴀᴍᴇ:</b> @" + bot.name + "\n\n" +
  "<tg-spoiler>Wʜᴇɴ Usɪɴɢ Tʜɪs Pᴀɴᴇʟ Dᴏɴ'ᴛ Sᴇɴᴅ Oᴛʜᴇʀ Cᴏᴍᴍᴀɴᴅs Oʀ Iᴛ Mᴀʏ Sᴘᴏɪʟ Yᴏᴜʀ Wᴏʀᴋ.</tg-spoiler>"

var buttons = [
  [
    { text: "👤 Pʀᴏғɪʟᴇ", callback_data: "!profile" },
    { text: "Sᴇᴛᴛɪɴɢs ⚙️", callback_data: "!maintenance" }
  ],
  [
    { text: "📢 Bʀᴏᴀᴅᴄᴀsᴛ", callback_data: "!broadcast" },
    { text: "Sᴛᴀᴛɪsᴛɪᴄs 🤖", callback_data: "!status" }
  ],
  [{ text: "Lᴏɢᴏᴜᴛ Pᴀɴᴇʟ", callback_data: "/start" }]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
