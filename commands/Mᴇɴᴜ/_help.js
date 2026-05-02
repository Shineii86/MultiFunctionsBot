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

var pages = {
  "1": {
    caption: "<b>╭━━ 📚 Hᴇʟᴘ (1/5) ━━╮</b>\n\n" +
      "<b>📌 Mᴇɴᴜ</b>\n" +
      "├ /start — Sᴛᴀʀᴛ Bᴏᴛ\n" +
      "├ /help — Tʜɪꜱ Mᴇɴᴜ\n" +
      "└ /about — Bᴏᴛ Iɴꜰᴏ\n\n" +
      "<b>⚙️ Cᴏʀᴇ Tᴏᴏʟꜱ</b>\n" +
      "├ /shortener — Uʀʟ Sʜᴏʀᴛᴇɴᴇʀ\n" +
      "├ /telegramId — Tᴇʟᴇɢʀᴀᴍ Pʀᴏꜰɪʟᴇ\n" +
      "├ /password — Pᴀꜱꜱᴡᴏʀᴅ Gᴇɴ\n" +
      "├ /translate — Tᴇxᴛ Tʀᴀɴꜱʟᴀᴛɪᴏɴ\n" +
      "├ /qrcode — QR Cᴏᴅᴇ Gᴇɴ\n" +
      "├ /base64 — Bᴀꜱᴇ64 Eɴᴄ/Dᴇᴄ\n" +
      "├ /hash — Hᴀꜱʜ Gᴇɴ (MD5/SHA)\n" +
      "├ /wordcount — Wᴏʀᴅ Cᴏᴜɴᴛᴇʀ\n" +
      "├ /uuid — Uᴜɪᴅ Gᴇɴ\n" +
      "├ /datetime — Wᴏʀʟᴅ Cʟᴏᴄᴋ\n" +
      "├ /textcase — Tᴇxᴛ Cᴀꜱᴇ Cᴏɴᴠᴇʀᴛ\n" +
      "└ /hex — Hᴇx Eɴᴄ/Dᴇᴄ\n\n" +
      "<b>╰━━━━━━━━━━━━━━━━━━╯</b>",
    nav: "help2"
  },
  "2": {
    caption: "<b>╭━━ 📚 Hᴇʟᴘ (2/5) ━━╮</b>\n\n" +
      "<b>🔄 Cᴏɴᴠᴇʀᴛᴇʀꜱ & Sᴇᴀʀᴄʜ</b>\n" +
      "├ /morse — Mᴏʀꜱᴇ Cᴏᴅᴇ\n" +
      "├ /binary — Bɪɴᴀʀʏ Cᴏɴᴠᴇʀᴛᴇʀ\n" +
      "├ /roman — Rᴏᴍᴀɴ Nᴜᴍᴇʀᴀʟꜱ\n" +
      "├ /exchange — Cᴜʀʀᴇɴᴄʏ (160+)\n" +
      "├ /iplookup — IP Gᴇᴏʟᴏᴄᴀᴛɪᴏɴ\n" +
      "├ /wiki — Wɪᴋɪᴘᴇᴅɪᴀ Sᴇᴀʀᴄʜ\n" +
      "├ /textstats — Tᴇxᴛ Aɴᴀʟʏꜱɪꜱ\n" +
      "└ /numberfact — Nᴜᴍʙᴇʀ Tʀɪᴠɪᴀ\n\n" +
      "<b>📲 Tᴇʟᴇɢʀᴀᴍ Tᴏᴏʟꜱ</b>\n" +
      "├ /stickerinfo — Sᴛɪᴄᴋᴇʀ Dᴇᴛᴀɪʟꜱ\n" +
      "├ /chatinfo — Cʜᴀᴛ Iᴅ & Iɴꜰᴏ\n" +
      "├ /channelinfo — Cʜᴀɴɴᴇʟ Iɴꜰᴏ\n" +
      "├ /pfp — Pʀᴏꜰɪʟᴇ Pʜᴏᴛᴏ\n" +
      "├ /botcheck — Iꜰ Uꜱᴇʀ Iꜱ Bᴏᴛ\n" +
      "├ /mention — Mᴇɴᴛɪᴏɴ Lɪɴᴋ\n" +
      "├ /groupstats — Gʀᴏᴜᴘ Dᴇᴛᴀɪʟꜱ\n" +
      "├ /adminlist — Lɪꜱᴛ Aᴅᴍɪɴꜱ\n" +
      "├ /membercount — Mᴇᴍʙᴇʀ Cᴏᴜɴᴛ\n" +
      "├ /pinned — Pɪɴɴᴇᴅ Mᴇꜱꜱᴀɢᴇ\n" +
      "├ /grouplink — Iɴᴠɪᴛᴇ Lɪɴᴋ\n" +
      "├ /baninfo — Bᴀɴɴᴇᴅ Uꜱᴇʀꜱ\n" +
      "├ /settitle — Sᴇᴛ Gʀᴏᴜᴘ Tɪᴛʟᴇ\n" +
      "├ /setdesc — Sᴇᴛ Gʀᴏᴜᴘ Dᴇꜱᴄ\n" +
      "├ /invitecount — Iɴᴠɪᴛᴇ Cᴏᴜɴᴛ\n" +
      "└ /text2gif — Tᴇxᴛ Tᴏ Gɪꜰ\n\n" +
      "<b>╰━━━━━━━━━━━━━━━━━━╯</b>",
    nav: "help3"
  },
  "3": {
    caption: "<b>╭━━ 📚 Hᴇʟᴘ (3/5) ━━╮</b>\n\n" +
      "<b>🐙 Gɪᴛʜᴜʙ</b>\n" +
      "├ /github — Uꜱᴇʀ Pʀᴏꜰɪʟᴇ\n" +
      "├ /ghrepos — Lɪꜱᴛ Rᴇᴘᴏꜱ\n" +
      "├ /ghrepoinfo — Rᴇᴘᴏ Dᴇᴛᴀɪʟꜱ\n" +
      "├ /ghsearch — Sᴇᴀʀᴄʜ Rᴇᴘᴏꜱ\n" +
      "└ /ghfollowers — Fᴏʟʟᴏᴡᴇʀꜱ\n\n" +
      "<b>🎌 Aɴɪᴍᴇ & Wᴇᴀᴛʜᴇʀ</b>\n" +
      "├ /anime — Aɴɪᴍᴇ Sᴇᴀʀᴄʜ\n" +
      "├ /manga — Mᴀɴɢᴀ Sᴇᴀʀᴄʜ\n" +
      "├ /character — Cʜᴀʀᴀᴄᴛᴇʀ Lᴏᴏᴋᴜᴘ\n" +
      "├ /weather — Cᴜʀʀᴇɴᴛ Wᴇᴀᴛʜᴇʀ\n" +
      "├ /forecast — 3-Dᴀʏ Fᴏʀᴇᴄᴀꜱᴛ\n" +
      "└ /airquality — Aɪʀ Qᴜᴀʟɪᴛʏ Iɴᴅᴇx\n\n" +
      "<b>🤖 Aɪ Tᴏᴏʟꜱ (Nᴏ API)</b>\n" +
      "├ /summarize — Tᴇxᴛ Sᴜᴍᴍᴀʀɪᴢᴇʀ\n" +
      "├ /sentiment — Sᴇɴᴛɪᴍᴇɴᴛ Aɴᴀʟʏꜱɪꜱ\n" +
      "├ /readability — Rᴇᴀᴅᴀʙɪʟɪᴛʏ Sᴄᴏʀᴇ\n" +
      "├ /keyword — Kᴇʏᴡᴏʀᴅ Exᴛʀᴀᴄᴛᴏʀ\n" +
      "├ /paraphrase — Tᴇxᴛ Pᴀʀᴀᴘʜʀᴀꜱᴇʀ\n" +
      "├ /grammar — Gʀᴀᴍᴍᴀʀ Cʜᴇᴄᴋᴇʀ\n" +
      "├ /plagiarism — Dᴜᴘʟɪᴄᴀᴛᴇ Dᴇᴛᴇᴄᴛᴏʀ\n" +
      "├ /chatbot — Aɪ Cʜᴀᴛʙᴏᴛ\n" +
      "└ /imagine — Aɪ Iᴍᴀɢᴇ Gᴇɴ\n\n" +
      "<b>╰━━━━━━━━━━━━━━━━━━╯</b>",
    nav: "help4"
  },
  "4": {
    caption: "<b>╭━━ 📚 Hᴇʟᴘ (4/5) ━━╮</b>\n\n" +
      "<b>🎲 Fᴜɴ & Rᴀɴᴅᴏᴍ</b>\n" +
      "├ /quote — Iɴꜱᴘɪʀᴀᴛɪᴏɴᴀʟ Qᴜᴏᴛᴇꜱ\n" +
      "├ /joke — Rᴀɴᴅᴏᴍ Jᴏᴋᴇꜱ\n" +
      "├ /advice — Lɪꜰᴇ Aᴅᴠɪᴄᴇ\n" +
      "├ /roll — Rᴏʟʟ Dɪᴄᴇ (2d6)\n" +
      "├ /flip — Cᴏɪɴ Fʟɪᴘ\n" +
      "├ /choose — Rᴀɴᴅᴏᴍ Pɪᴄᴋ\n" +
      "├ /8ball — Mᴀɢɪᴄ 8-Bᴀʟʟ\n" +
      "├ /clap — 👏 Cʟᴀᴘ Tᴇxᴛ\n" +
      "├ /emojify — Eᴍᴏᴊɪ Lᴇᴛᴛᴇʀꜱ\n" +
      "├ /mock — Mᴏᴄᴋɪɴɢ Cᴀꜱᴇ\n" +
      "├ /reverse — Rᴇᴠᴇʀꜱᴇ Tᴇxᴛ\n" +
      "├ /vaporwave — Ｗɪᴅᴇ Tᴇxᴛ\n" +
      "└ /zalgo — Z̸ᴀʟɢᴏ Gʟɪᴛᴄʜ\n\n" +
      "<b>📊 Pᴏʟʟꜱ & Qᴜɪᴢᴇꜱ</b>\n" +
      "├ /poll — Cʀᴇᴀᴛᴇ A Pᴏʟʟ\n" +
      "└ /quiz — Cʀᴇᴀᴛᴇ A Qᴜɪᴢ\n\n" +
      "<b>🎨 Aɪ Iᴍᴀɢᴇ Gᴇɴ</b>\n" +
      "├ /imagine — Gᴇɴᴇʀᴀᴛᴇ Iᴍᴀɢᴇꜱ Fʀᴏᴍ Tᴇxᴛ\n" +
      "├ /img — Iᴍᴀɢᴇ Hᴏꜱᴛ (ᴅɪʀᴇᴄᴛ URL)\n" +
      "└ /ss — Wᴇʙꜱɪᴛᴇ Sᴄʀᴇᴇɴꜱʜᴏᴛ\n\n" +
      "<b>╰━━━━━━━━━━━━━━━━━━╯</b>",
    nav: "help5"
  },
  "5": {
    caption: "<b>╭━━ 📚 Hᴇʟᴘ (5/5) ━━╮</b>\n\n" +
      "<b>🛡️ Gʀᴏᴜᴘ Mᴀɴᴀɢᴇᴍᴇɴᴛ</b>\n" +
      "├ /warn — Wᴀʀɴ Uꜱᴇʀ\n" +
      "├ /unwarn — Rᴇᴍᴏᴠᴇ Wᴀʀɴɪɴɢ\n" +
      "├ /warnings — Vɪᴇᴡ Wᴀʀɴɪɴɢꜱ\n" +
      "├ /setwarns — Sᴇᴛ Mᴀx Wᴀʀɴꜱ\n" +
      "├ /notes — Sᴀᴠᴇᴅ Nᴏᴛᴇꜱ\n" +
      "├ /save — Sᴀᴠᴇ A Nᴏᴛᴇ\n" +
      "├ /delnote — Dᴇʟᴇᴛᴇ A Nᴏᴛᴇ\n" +
      "├ /welcome — Wᴇʟᴄᴏᴍᴇ Mꜱɢ\n" +
      "├ /ratelimit — Aɴᴛɪ-Sᴘᴀᴍ\n" +
      "├ /remind — Sᴇᴛ Rᴇᴍɪɴᴅᴇʀ\n" +
      "├ /reminders — Yᴏᴜʀ Rᴇᴍɪɴᴅᴇʀꜱ\n" +
      "└ /afk — Sᴇᴛ AFK Sᴛᴀᴛᴜꜱ\n\n" +
      "<b>💰 Eᴄᴏɴᴏᴍʏ</b>\n" +
      "├ /balance — Yᴏᴜʀ Wᴀʟʟᴇᴛ\n" +
      "├ /daily — Dᴀɪʟʏ Rᴇᴡᴀʀᴅ\n" +
      "├ /transfer — Sᴇɴᴅ $REACT\n" +
      "├ /leaderboard — Tᴏᴘ Eᴀʀɴᴇʀꜱ\n" +
      "└ /referral — Rᴇꜰᴇʀʀᴀʟ Lɪɴᴋ\n\n" +
      "<b>⚙️ Sᴇᴛᴛɪɴɢꜱ</b>\n" +
      "├ /settings — Uꜱᴇʀ Sᴇᴛᴛɪɴɢꜱ\n" +
      "├ /lang — Sᴇᴛ Lᴀɴɢᴜᴀɢᴇ\n" +
      "├ /mystats — Pᴇʀꜱᴏɴᴀʟ Sᴛᴀᴛꜱ\n" +
      "├ /export — Exᴘᴏʀᴛ Dᴀᴛᴀ\n" +
      "├ /deldata — Dᴇʟᴇᴛᴇ Dᴀᴛᴀ\n" +
      "├ /rss — RSS Fᴇᴇᴅꜱ\n" +
      "├ /schedule — Sᴄʜᴇᴅᴜʟᴇ Mꜱɢ\n" +
      "├ /feedback — Sᴇɴᴅ Fᴇᴇᴅʙᴀᴄᴋ\n" +
      "├ /store — Fɪʟᴇ Sᴛᴏʀᴇ (ꜱʜᴀʀᴇ ʟɪɴᴋꜱ)\n" +
      "├ /paste — Pᴀꜱᴛᴇʙɪɴ\n" +
      "└ /clip — Cʟᴏᴜᴅ Cʟɪᴘʙᴏᴀʀᴅ\n\n" +
      "<b>╰━━━━━━━━━━━━━━━━━━╯</b>",
    nav: "help1"
  }
}

var page = "1"
if (request && request.data) {
  for (var p = "1"; p <= "5"; p++) {
    if (request.data.indexOf("help" + p) !== -1) { page = p; break }
  }
}

var pNum = parseInt(page)
var prevPage = pNum === 1 ? "5" : String(pNum - 1)
var nextPage = pNum === 5 ? "1" : String(pNum + 1)

var buttons = [
  [
    { text: "◁", callback_data: "/help" + prevPage },
    { text: page + "/5", callback_data: "/start" },
    { text: "▷", callback_data: "/help" + nextPage }
  ],
  [
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

var currentPage = pages[page] || pages["1"]

Libs.Helpers.editOrSend({
  text: currentPage.caption + adsFooter,
  reply_markup: { inline_keyboard: buttons }
})
