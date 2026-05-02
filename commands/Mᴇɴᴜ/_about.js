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
var totalUsers = Libs.ResourcesLib.anotherChatRes("totalusers", "global")
var userCount = Libs.Helpers.formatNumber(totalUsers.value() || 0)

var caption = "<b>╭━━ ℹ️ Aʙᴏᴜᴛ ━━╮</b>\n\n" +
  "<b>🤖 Mᴜʟᴛɪ Fᴜɴᴄᴛɪᴏɴꜱ Bᴏᴛ</b>\n" +
  "<i>Cʀᴀꜰᴛᴇᴅ Bʏ Sʜɪɴᴇɪ Nᴏᴜᴢᴇɴ Uꜱɪɴɢ JᴀᴠᴀSᴄʀɪᴘᴛ</i>\n\n" +
  "<b>📊 Sᴛᴀᴛꜱ:</b>\n" +
  "├ 👥 " + userCount + " Rᴇɢɪꜱᴛᴇʀᴇᴅ Uꜱᴇʀꜱ\n" +
  "├ ⚡ 50+ Pᴏᴡᴇʀꜰᴜʟ Fᴇᴀᴛᴜʀᴇꜱ\n" +
  "├ 🔌 14 Exᴛᴇʀɴᴀʟ Aᴘɪꜱ\n" +
  "└ 🆓 100% Fʀᴇᴇ\n\n" +
  "<b>📋 Dᴇᴛᴀɪʟꜱ:</b>\n" +
  "├ 📅 Uᴘᴅᴀᴛᴇᴅ: 2 Mᴀʏ 2025\n" +
  "├ 🚀 Vᴇʀꜱɪᴏɴ: 3.0.0 Sᴛᴀʙʟᴇ\n" +
  "├ 📡 Pʟᴀᴛꜰᴏʀᴍ: Bᴏᴛs.Bᴜꜱɪɴᴇꜱꜱ\n" +
  "└ 💪 Oꜰꜰᴇʀᴇᴅ Bʏ: <a href='t.me/MaximXTeam'>Mᴀxɪᴍ 𝕏 Tᴇᴀᴍ</a>\n\n" +
  "<b>🔗 Nᴇᴛᴡᴏʀᴋ:</b>\n" +
  "├ 📡 <a href='t.me/QuinxNetwork'>Ҩᴜɪɴx Nᴇᴛᴡᴏʀᴋ</a>\n" +
  "├ 🔔 <a href='t.me/MaximXBots'>Mᴀxɪᴍ 𝕏 Bᴏᴛꜱ</a>\n" +
  "└ 💬 <a href='t.me/MaximXGroup'>Mᴀxɪᴍ 𝕏 Gʀᴏᴜᴘ</a>\n\n" +
  "<b>⭐ Cʀᴇᴅɪᴛꜱ:</b>\n" +
  "├ 💀 Dᴇᴠ: <a href='t.me/Shineii86'>Sʜɪɴᴇɪ Nᴏᴜᴢᴇɴ</a>\n" +
  "├ 👑 Oᴡɴᴇʀ: <a href='t.me/QuinxOfficial'>Ҩᴜɪɴx Oꜰꜰɪᴄɪᴀʟ</a>\n" +
  "├ ⭐ UI: <a href='t.me/YukkiiHaruno'>Yᴜᴋᴋɪ Hᴀʀᴜɴᴏ</a>\n" +
  "└ ⛑️ Hᴇʟᴘᴇʀ: <a href='t.me/Senpai86'>Zᴏʀᴏ Rᴏʀᴏɴᴏᴀ</a>\n\n" +
  "<b>╰━━━━━━━━━━━━━━╯</b>" +
  adsFooter

var buttons = [
  [{ text: "🐙 Gɪᴛʜᴜʙ", url: "https://github.com/Shineii86/MultiFunctionsBot" }],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "/start" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
