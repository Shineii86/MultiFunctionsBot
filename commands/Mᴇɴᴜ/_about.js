/*CMD
  command: /about
  help: Information about the bot
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
var adsStatus = iteration_quota.progress >= 5000 ? "Oɴ" : "Oғғ"

var caption = "<b>💪 <a href='http://t.me/" + bot.name + "'>Mᴜʟᴛɪ Fᴜɴᴄᴛɪᴏɴs Bᴏᴛ</a></b> Cʀᴀғᴛᴇᴅ Bʏ <b><a href='http://t.me/Shineii86'>Sʜɪɴᴇɪ Nᴏᴜᴢᴇɴ</a></b> Usɪɴɢ <b>Jᴀᴠᴀ Sᴄʀɪᴘᴛ</b> Uɴᴅᴇʀ Tʜᴇ <b>Bᴏᴛs Bᴜsɪɴᴇss</b> Fʀᴀᴍᴇᴡᴏʀᴋ.\n\n" +
  "Iᴛ Hᴀs Bᴇᴇɴ Oɴʟɪɴᴇ Sɪɴᴄᴇ 25 Jᴀɴᴜᴀʀʏ 2025 Aɴᴅ Iᴛ Is Cᴏɴsᴛᴀɴᴛʟʏ Uᴘᴅᴀᴛᴇᴅ.\n\n" +
  "<b>» 🤖 Uᴘᴅᴀᴛᴇᴅ Oɴ:</b> 2 Mᴀʏ 2025\n" +
  "<b>» 🚀 Vᴇʀsɪᴏɴ:</b> 2.0.0 Sᴛᴀʙʟᴇ\n" +
  "<b>» 💪 Oғғᴇʀᴇᴅ Bʏ:</b> <a href='t.me/MaximXTeam'>Mᴀxɪᴍ 𝕏 Tᴇᴀᴍ</a>\n" +
  "<b>» 🧲 Rᴇʟᴇᴀsᴇᴅ Oɴ:</b> 25 Jᴀɴᴜᴀʀʏ 2025\n" +
  "▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬\n" +
  "<b>» 📡 Nᴇᴛᴡᴏʀᴋ:</b> <a href='t.me/QuinxNetwork'>Ҩᴜɪɴx Nᴇᴛᴡᴏʀᴋ</a>\n" +
  "<b>» 🔔 Mᴀɪɴ Cʜᴀɴɴᴇʟ:</b> <a href='t.me/MaximXBots'>Mᴀxɪᴍ 𝕏 Bᴏᴛs</a>\n" +
  "<b>» 💬 Sᴜᴘᴘᴏʀᴛ Gʀᴏᴜᴘ:</b> <a href='t.me/MaximxGroup'>Mᴀxɪᴍ 𝕏 Gʀᴏᴜᴘ</a>\n\n" +
  "<b>Aᴄᴋɴᴏᴡʟᴇᴅɢᴇᴍᴇɴᴛ & Cʀᴇᴅɪᴛs</b>\n" +
  "<b>» ⭐ Uɪ Iᴅᴇᴀ:</b> <a href='t.me/YukkiiHaruno'>Yᴜᴋᴋɪ Hᴀʀᴜɴᴏ</a>\n" +
  "<b>» ⛑️ Hᴇʟᴘᴇʀ:</b> <a href='t.me/Senpai86'>Zᴏʀᴏ Rᴏʀᴏɴᴏᴀ</a>\n" +
  "<b>» 👑 Bᴏᴛ Oᴡɴᴇʀ:</b> <a href='t.me/QuinxOfficial'>Ҩᴜɪɴx Oғғɪᴄɪᴀʟ</a>\n" +
  "<b>» 💀 Dᴇᴠᴇʟᴏᴘᴇʀ:</b> <a href='t.me/Shineii86'>Sʜɪɴᴇɪ Nᴏᴜᴢᴇɴ</a>\n\n" +
  "Wᴇ Wᴇʟᴄᴏᴍᴇ <b>Sᴜɢɢᴇsᴛɪᴏɴs</b> Fᴏʀ <b>Nᴇᴡ Fᴇᴀᴛᴜʀᴇs</b> Aɴᴅ <b>Bᴜɢ Rᴇᴘᴏʀᴛs</b>!" +
  adsFooter

var buttons = [
  [{ text: "Fᴏʟʟᴏᴡ Us Oɴ Gɪᴛʜᴜʙ", url: "https://github.com/Shineii86/MultiFunctionsBot" }],
  [
    { text: "🔔 Aᴅs: " + adsStatus, callback_data: "/ads" },
    { text: "Sᴜʙsᴄʀɪᴘᴛɪᴏɴ ⭐", callback_data: "/premium" }
  ],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
