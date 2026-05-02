/*CMD
  command: /webhook
  help: Configure webhook notifications (GitHub, etc.)
  need_reply: false
  auto_retry_time: 
  folder: Wᴇʙʜᴏᴏᴋs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var adsFooter = Libs.Helpers.getAdsFooter()
var webhooks = Bot.getProperty("webhooks", [])

var caption = "<b>🔗 Wᴇʙʜᴏᴏᴋ Cᴏɴꜰɪɢᴜʀᴀᴛɪᴏɴ</b>\n\n"

if (webhooks.length === 0) {
  caption += "Nᴏ ᴡᴇʙʜᴏᴏᴋꜱ ᴄᴏɴꜰɪɢᴜʀᴇᴅ.\n\n"
} else {
  caption += "<b>📋 Aᴄᴛɪᴠᴇ Wᴇʙʜᴏᴏᴋꜱ:</b>\n"
  for (var i = 0; i < webhooks.length; i++) {
    caption += (i + 1) + ". " + Libs.Helpers.escapeHTML(webhooks[i].name) + " — " + webhooks[i].type + "\n"
  }
  caption += "\n"
}

caption += "<b>💡 Sᴜᴘᴘᴏʀᴛᴇᴅ:</b>\n" +
  "├ 🐙 Gɪᴛʜᴜʙ (ᴘᴜꜱʜ, PR, ɪꜱꜱᴜᴇꜱ)\n" +
  "├ 📡 Cᴜꜱᴛᴏᴍ Wᴇʙʜᴏᴏᴋꜱ\n" +
  "└ 📢 Aᴜᴛᴏ-ᴘᴏꜱᴛ ᴛᴏ ɢʀᴏᴜᴘꜱ" +
  adsFooter

var buttons = [
  [
    { text: "🐙 Aᴅᴅ Gɪᴛʜᴜʙ", callback_data: "addGithubWebhook" },
    { text: "📡 Cᴜꜱᴛᴏᴍ", callback_data: "addCustomWebhook" }
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
