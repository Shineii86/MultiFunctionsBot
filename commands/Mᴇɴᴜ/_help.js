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

var caption = "<b>👮 Hᴇʟᴘ - Aᴠᴀɪʟᴀʙʟᴇ Cᴏᴍᴍᴀɴᴅs</b>\n\n" +
  "<b>📌 Mᴇɴᴜ</b>\n" +
  "» /start — Sᴛᴀʀᴛ ᴛʜᴇ ʙᴏᴛ\n" +
  "» /help — Sʜᴏᴡ ᴛʜɪs ʜᴇʟᴘ\n" +
  "» /about — Aʙᴏᴜᴛ ᴛʜᴇ ʙᴏᴛ\n\n" +
  "<b>⚙️ Cᴏʀᴇ Tᴏᴏʟs</b>\n" +
  "» /shortener — Sʜᴏʀᴛᴇɴ Uʀʟs (Bɪᴛʟʏ)\n" +
  "» /telegramId — Yᴏᴜʀ Tᴇʟᴇɢʀᴀᴍ Iɴғᴏ\n" +
  "» /password — Gᴇɴᴇʀᴀᴛᴇ Pᴀssᴡᴏʀᴅs\n" +
  "» /translate — Tʀᴀɴsʟᴀᴛᴇ Tᴇxᴛ (20+ ʟᴀɴɢs)\n" +
  "» /qrcode — Gᴇɴᴇʀᴀᴛᴇ QR Cᴏᴅᴇs\n" +
  "» /base64 — Bᴀsᴇ64 Eɴᴄᴏᴅᴇ/Dᴇᴄᴏᴅᴇ\n" +
  "» /hash — Mᴅ5/Sʜᴀ Hᴀsʜ Gᴇɴ\n" +
  "» /wordcount — Cᴏᴜɴᴛ Wᴏʀᴅs/Cʜᴀʀs\n" +
  "» /uuid — Gᴇɴᴇʀᴀᴛᴇ Uᴜɪᴅ\n" +
  "» /datetime — Wᴏʀʟᴅ Cʟᴏᴄᴋ\n\n" +
  "<b>🔄 Cᴏɴᴠᴇʀᴛᴇʀs</b>\n" +
  "» /morse — Mᴏʀsᴇ Cᴏᴅᴇ Eɴᴄ/Dᴇᴄ\n" +
  "» /binary — Bɪɴᴀʀʏ Eɴᴄ/Dᴇᴄ\n" +
  "» /roman — Rᴏᴍᴀɴ Nᴜᴍᴇʀᴀʟs\n" +
  "» /iplookup — IP Aᴅᴅʀᴇss Lᴏᴏᴋᴜᴘ\n" +
  "» /textstats — Dᴇᴛᴀɪʟᴇᴅ Tᴇxᴛ Aɴᴀʟʏsɪs\n" +
  "» /numberfact — Fᴀᴄᴛs Aʙᴏᴜᴛ Nᴜᴍʙᴇʀs\n\n" +
  "<b>🎲 Fᴜɴ & Rᴀɴᴅᴏᴍ</b>\n" +
  "» /quote — Rᴀɴᴅᴏᴍ Iɴsᴘɪʀᴀᴛɪᴏɴᴀʟ Qᴜᴏᴛᴇ\n" +
  "» /roll — Rᴏʟʟ Dɪᴄᴇ (ᴇ.ɢ. 2ᴅ6)\n" +
  "» /flip — Fʟɪᴘ ᴀ Cᴏɪɴ\n" +
  "» /choose — Rᴀɴᴅᴏᴍ Cʜᴏɪᴄᴇ (ᴘɪᴄᴋ ꜰʀᴏᴍ ʟɪsᴛ)\n\n" +
  "<b>👑 Aᴅᴍɪɴ</b>\n" +
  "» /ZeroTwo — Cʟᴀɪᴍ Aᴅᴍɪɴ\n" +
  "» /master — Aᴅᴍɪɴ Pᴀɴᴇʟ\n" +
  "» /restart — Rᴇsᴛᴀʀᴛ Bᴏᴛ\n\n" +
  "<b>💡 Tɪᴘ:</b> Yᴏᴜ ᴄᴀɴ ᴀʟsᴏ ᴜsᴇ ʙᴜᴛᴛᴏɴs ɪɴsᴛᴇᴀᴅ ᴏꜰ ᴄᴏᴍᴍᴀɴᴅs!" +
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
