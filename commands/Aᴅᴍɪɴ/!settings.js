/*CMD
  command: !settings
  help: Bot settings panel
  need_reply: false
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: !config
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var maintenance = Bot.getProperty("maintenance", "Off")
var welcomeEnabled = Bot.getProperty("welcome_enabled", true)
var adsEnabled = Bot.getProperty("ads_enabled", true)
var joinNotif = Bot.getProperty("join_notif", true)
var rateLimit = Bot.getProperty("rate_limit", "Off")
var antispam = Bot.getProperty("antispam", "Off")

var caption = "<b>╭━━ ⚙️ Bᴏᴛ Sᴇᴛᴛɪɴɢꜱ ━━╮</b>\n\n" +
  "<b>📡 Sʏꜱᴛᴇᴍ:</b>\n" +
  "├ 🔧 Mᴀɪɴᴛᴇɴᴀɴᴄᴇ: " + Libs.Helpers.fancyOnOff(maintenance) + "\n" +
  "├ 👋 Wᴇʟᴄᴏᴍᴇ Mꜱɢ: " + Libs.Helpers.fancyOnOff(welcomeEnabled ? "On" : "Off") + "\n" +
  "├ 📮 Aᴅᴠᴇʀᴛɪꜱᴇᴍᴇɴᴛꜱ: " + Libs.Helpers.fancyOnOff(adsEnabled ? "On" : "Off") + "\n" +
  "├ 🔔 Jᴏɪɴ Nᴏᴛɪꜰꜱ: " + Libs.Helpers.fancyOnOff(joinNotif ? "On" : "Off") + "\n" +
  "├ ⏱️ Rᴀᴛᴇ Lɪᴍɪᴛ: " + Libs.Helpers.fancyOnOff(rateLimit) + "\n" +
  "└ 🛡️ Aɴᴛɪ-Sᴘᴀᴍ: " + Libs.Helpers.fancyOnOff(antispam) + "\n\n" +
  "<b>💡 Tɪᴘ:</b> Tᴀᴘ ᴀ ʙᴜᴛᴛᴏɴ ᴛᴏ ᴛᴏɢɢʟᴇ.\n\n" +
  "<b>╰━━━━━━━━━━━━━━━━━━╯</b>"

var buttons = [
  [
    { text: "🔧 Mᴀɪɴᴛ: " + Libs.Helpers.fancyOnOff(maintenance), callback_data: "!maintenance" },
    { text: "👋 Wᴇʟᴄᴏᴍᴇ: " + Libs.Helpers.fancyOnOff(welcomeEnabled ? "On" : "Off"), callback_data: "!toggle_welcome" }
  ],
  [
    { text: "📮 Aᴅꜱ: " + Libs.Helpers.fancyOnOff(adsEnabled ? "On" : "Off"), callback_data: "!toggle_ads" },
    { text: "🔔 Jᴏɪɴꜱ: " + Libs.Helpers.fancyOnOff(joinNotif ? "On" : "Off"), callback_data: "!toggle_joins" }
  ],
  [
    { text: "⏱️ Rᴀᴛᴇ Lɪᴍɪᴛ: " + Libs.Helpers.fancyOnOff(rateLimit), callback_data: "!toggle_ratelimit" },
    { text: "🛡️ Aɴᴛɪ-Sᴘᴀᴍ: " + Libs.Helpers.fancyOnOff(antispam), callback_data: "!toggle_antispam" }
  ],
  [
    { text: "🌐 Sᴇᴛ Lᴀɴɢᴜᴀɢᴇ", callback_data: "/lang" },
    { text: "📋 Nᴏᴛᴇꜱ", callback_data: "/notes" }
  ],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "!master" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
