/*CMD
  command: /automod
  help: Configure auto-moderation
  need_reply: false
  auto_retry_time: 
  folder: Gʀᴏᴜᴘ Mᴀɴᴀɢᴇᴍᴇɴᴛ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /modconfig
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var chatId = request.chat ? request.chat.id : user.telegramid
var config = Bot.getProperty("automod_" + chatId, {
  blacklist: [], linkWhitelist: [], mediaRestrict: false
})

var caption = "<b>🤖 Aᴜᴛᴏ-Mᴏᴅᴇʀᴀᴛɪᴏɴ</b>\n\n" +
  "<b>🚫 Bʟᴀᴄᴋʟɪꜱᴛ Wᴏʀᴅꜱ:</b> " + config.blacklist.length + "\n" +
  "<b>🔗 Wʜɪᴛᴇʟɪꜱᴛ Lɪɴᴋꜱ:</b> " + config.linkWhitelist.length + "\n" +
  "<b>📸 Mᴇᴅɪᴀ Rᴇꜱᴛʀɪᴄᴛ:</b> " + (config.mediaRestrict ? "✅" : "❌") + "\n\n" +
  "<b>Cᴏᴍᴍᴀɴᴅꜱ:</b>\n" +
  "├ /blacklist add word — Aᴅᴅ ᴡᴏʀᴅ\n" +
  "├ /blacklist remove word — Rᴇᴍᴏᴠᴇ ᴡᴏʀᴅ\n" +
  "├ /blacklist list — Vɪᴇᴡ ʟɪꜱᴛ\n" +
  "└ /whitelist add URL — Aʟʟᴏᴡ ʟɪɴᴋ"

var buttons = [
  [
    { text: "🚫 Bʟᴀᴄᴋʟɪꜱᴛ", callback_data: "automodBlacklist" },
    { text: "🔗 Wʜɪᴛᴇʟɪꜱᴛ", callback_data: "automodWhitelist" }
  ],
  [
    { text: "📸 Mᴇᴅɪᴀ Tᴏɢɢʟᴇ", callback_data: "toggleMediaRestrict" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
