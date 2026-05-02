/*CMD
  command: /help
  help: Show all available commands
  need_reply: false
  auto_retry_time: 
  folder: Mᴇɴᴜ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>👮 Hᴇʟᴘ — Aʟʟ Cᴏᴍᴍᴀɴᴅs</b>\n\n" +
  "<b>📌 Mᴇɴᴜ</b>\n" +
  "» /start — Sᴛᴀʀᴛ ᴛʜᴇ ʙᴏᴛ\n" +
  "» /help — Tʜɪs ʜᴇʟᴘ ᴍᴇɴᴜ\n" +
  "» /about — Aʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ\n\n" +
  "<b>⚙️ Cᴏʀᴇ Tᴏᴏʟs</b>\n" +
  "» /shortener — Sʜᴏʀᴛᴇɴ Uʀʟs (Bɪᴛʟʏ)\n" +
  "» /telegramId — Yᴏᴜʀ Tᴇʟᴇɢʀᴀᴍ Iɴғᴏ\n" +
  "» /password — Gᴇɴᴇʀᴀᴛᴇ Pᴀssᴡᴏʀᴅs\n" +
  "» /translate — Tʀᴀɴsʟᴀᴛᴇ (20+ ʟᴀɴɢs)\n" +
  "» /qrcode — Gᴇɴᴇʀᴀᴛᴇ QR Cᴏᴅᴇs\n" +
  "» /base64 — Bᴀsᴇ64 Eɴᴄ/Dᴇᴄ\n" +
  "» /hash — Mᴅ5/Sʜᴀ Hᴀsʜ Gᴇɴ\n" +
  "» /wordcount — Cᴏᴜɴᴛ Wᴏʀᴅs/Cʜᴀʀs\n" +
  "» /uuid — Gᴇɴᴇʀᴀᴛᴇ Uᴜɪᴅ\n" +
  "» /datetime — Wᴏʀʟᴅ Cʟᴏᴄᴋ\n\n" +
  "<b>🔄 Cᴏɴᴠᴇʀᴛᴇʀs & Sᴇᴀʀᴄʜ</b>\n" +
  "» /morse — Mᴏʀsᴇ Cᴏᴅᴇ Eɴᴄ/Dᴇᴄ\n" +
  "» /binary — Bɪɴᴀʀʏ Eɴᴄ/Dᴇᴄ\n" +
  "» /roman — Rᴏᴍᴀɴ Nᴜᴍᴇʀᴀʟs\n" +
  "» /exchange — Cᴜʀʀᴇɴᴄʏ Cᴏɴᴠᴇʀᴛᴇʀ\n" +
  "» /iplookup — IP Aᴅᴅʀᴇss Lᴏᴏᴋᴜᴘ\n" +
  "» /github — Gɪᴛʜᴜʙ Usᴇʀ Pʀᴏꜰɪʟᴇ\n" +
  "» /wiki — Sᴇᴀʀᴄʜ Wɪᴋɪᴘᴇᴅɪᴀ\n" +
  "» /textstats — Tᴇxᴛ Aɴᴀʟʏsɪs\n" +
  "» /numberfact — Nᴜᴍʙᴇʀ Tʀɪᴠɪᴀ\n\n" +
  "<b>🎌 Aɴɪᴍᴇ & Wᴇᴀᴛʜᴇʀ</b>\n" +
  "» /anime — Sᴇᴀʀᴄʜ Aɴɪᴍᴇ Iɴꜰᴏ\n" +
  "» /manga — Sᴇᴀʀᴄʜ Mᴀɴɢᴀ Iɴꜰᴏ\n" +
  "» /character — Aɴɪᴍᴇ Cʜᴀʀᴀᴄᴛᴇʀ Iɴꜰᴏ\n" +
  "» /weather — Cᴜʀʀᴇɴᴛ Wᴇᴀᴛʜᴇʀ\n" +
  "» /forecast — 3-Dᴀʏ Fᴏʀᴇᴄᴀsᴛ\n\n" +
  "<b>🎲 Fᴜɴ & Rᴀɴᴅᴏᴍ</b>\n" +
  "» /quote — Iɴsᴘɪʀᴀᴛɪᴏɴᴀʟ Qᴜᴏᴛᴇs\n" +
  "» /roll — Rᴏʟʟ Dɪᴄᴇ (2ᴅ6, 4ᴅ20)\n" +
  "» /flip — Fʟɪᴘ ᴀ Cᴏɪɴ\n" +
  "» /choose — Rᴀɴᴅᴏᴍ Cʜᴏɪᴄᴇ\n" +
  "» /joke — Rᴀɴᴅᴏᴍ Jᴏᴋᴇs\n" +
  "» /advice — Lɪꜰᴇ Aᴅᴠɪᴄᴇ\n\n" +
  "<b>👑 Aᴅᴍɪɴ</b>\n" +
  "» /ZeroTwo — Cʟᴀɪᴍ Aᴅᴍɪɴ\n" +
  "» /master — Aᴅᴍɪɴ Pᴀɴᴇʟ" +
  adsFooter

var buttons = [
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
