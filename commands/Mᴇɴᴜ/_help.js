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

var caption = "<b>👮 Hᴇʟᴘ — Aʟʟ Cᴏᴍᴍᴀɴᴅs (40+)</b>\n\n" +
  "<b>📌 Mᴇɴᴜ</b>\n" +
  "» /start — Sᴛᴀʀᴛ ʙᴏᴛ | /help — Tʜɪs ᴍᴇɴᴜ | /about — Iɴꜰᴏ\n\n" +
  "<b>⚙️ Cᴏʀᴇ Tᴏᴏʟs</b>\n" +
  "» /shortener — Uʀʟ Sʜᴏʀᴛᴇɴᴇʀ\n" +
  "» /telegramId — Tᴇʟᴇɢʀᴀᴍ Pʀᴏꜰɪʟᴇ\n" +
  "» /password — Pᴀssᴡᴏʀᴅ Gᴇɴ\n" +
  "» /translate — Tᴇxᴛ Tʀᴀɴsʟᴀᴛɪᴏɴ\n" +
  "» /qrcode — QR Cᴏᴅᴇ Gᴇɴ\n" +
  "» /base64 — Bᴀsᴇ64 Eɴᴄ/Dᴇᴄ\n" +
  "» /hash — Hᴀsʜ Gᴇɴ (MD5/SHA)\n" +
  "» /wordcount — Wᴏʀᴅ Cᴏᴜɴᴛᴇʀ\n" +
  "» /uuid — UUID Gᴇɴ | /datetime — Wᴏʀʟᴅ Cʟᴏᴄᴋ\n\n" +
  "<b>🔄 Cᴏɴᴠᴇʀᴛᴇʀs</b>\n" +
  "» /morse — Mᴏʀsᴇ Cᴏᴅᴇ | /binary — Bɪɴᴀʀʏ\n" +
  "» /roman — Rᴏᴍᴀɴ Nᴜᴍᴇʀᴀʟs\n" +
  "» /exchange — Cᴜʀʀᴇɴᴄʏ Cᴏɴᴠᴇʀᴛᴇʀ\n" +
  "» /iplookup — IP Lᴏᴏᴋᴜᴘ | /wiki — Wɪᴋɪᴘᴇᴅɪᴀ\n" +
  "» /textstats — Tᴇxᴛ Aɴᴀʟʏsɪs\n" +
  "» /numberfact — Nᴜᴍʙᴇʀ Tʀɪᴠɪᴀ\n\n" +
  "<b>📲 Tᴇʟᴇɢʀᴀᴍ</b>\n" +
  "» /stickerinfo — Sᴛɪᴄᴋᴇʀ Dᴇᴛᴀɪʟs\n" +
  "» /chatinfo — Cʜᴀᴛ Iɴꜰᴏ & ID\n" +
  "» /channelinfo — Cʜᴀɴɴᴇʟ/Gʀᴏᴜᴘ Iɴꜰᴏ\n" +
  "» /pfp — Pʀᴏꜰɪʟᴇ Pʜᴏᴛᴏ\n" +
  "» /botcheck — Cʜᴇᴄᴋ Iꜰ Usᴇʀ Is Bᴏᴛ\n" +
  "» /mention — Gᴇɴᴇʀᴀᴛᴇ Mᴇɴᴛɪᴏɴ Lɪɴᴋ\n\n" +
  "<b>🐙 Gɪᴛʜᴜʙ</b>\n" +
  "» /github — Usᴇʀ Pʀᴏꜰɪʟᴇ\n" +
  "» /ghrepos — Lɪsᴛ Usᴇʀ's Rᴇᴘᴏs\n" +
  "» /ghrepoinfo — Rᴇᴘᴏ Dᴇᴛᴀɪʟs\n" +
  "» /ghsearch — Sᴇᴀʀᴄʜ Rᴇᴘᴏs\n" +
  "» /ghfollowers — Lɪsᴛ Fᴏʟʟᴏᴡᴇʀs\n\n" +
  "<b>🎌 Aɴɪᴍᴇ & Wᴇᴀᴛʜᴇʀ</b>\n" +
  "» /anime — Aɴɪᴍᴇ Sᴇᴀʀᴄʜ | /manga — Mᴀɴɢᴀ\n" +
  "» /character — Cʜᴀʀᴀᴄᴛᴇʀ Lᴏᴏᴋᴜᴘ\n" +
  "» /weather — Cᴜʀʀᴇɴᴛ Wᴇᴀᴛʜᴇʀ\n" +
  "» /forecast — 3-Dᴀʏ Fᴏʀᴇᴄᴀsᴛ\n\n" +
  "<b>🤖 Aɪ (Nᴏ API)</b>\n" +
  "» /summarize — Tᴇxᴛ Sᴜᴍᴍᴀʀɪᴢᴇʀ\n" +
  "» /sentiment — Sᴇɴᴛɪᴍᴇɴᴛ Aɴᴀʟʏsɪs\n" +
  "» /readability — Rᴇᴀᴅᴀʙɪʟɪᴛʏ Sᴄᴏʀᴇ\n" +
  "» /keyword — Kᴇʏᴡᴏʀᴅ Exᴛʀᴀᴄᴛᴏʀ\n" +
  "» /paraphrase — Tᴇxᴛ Pᴀʀᴀᴘʜʀᴀsᴇʀ\n" +
  "» /grammar — Gʀᴀᴍᴍᴀʀ Cʜᴇᴄᴋᴇʀ\n" +
  "» /plagiarism — Dᴜᴘʟɪᴄᴀᴛᴇ Dᴇᴛᴇᴄᴛᴏʀ\n" +
  "» /chatbot — Aɪ Cʜᴀᴛʙᴏᴛ\n\n" +
  "<b>🎲 Fᴜɴ</b>\n" +
  "» /quote — Qᴜᴏᴛᴇs | /joke — Jᴏᴋᴇs | /advice — Aᴅᴠɪᴄᴇ\n" +
  "» /roll — Dɪᴄᴇ | /flip — Cᴏɪɴ | /choose — Rᴀɴᴅᴏᴍ Pɪᴄᴋ" +
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
