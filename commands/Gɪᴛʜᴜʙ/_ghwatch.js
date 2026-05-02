/*CMD
  command: /ghwatch
  help: Watch GitHub repos for updates
  need_reply: false
  auto_retry_time: 
  folder: Gɪᴛʜᴜʙ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ghnotify
  group: 
CMD*/

var admin = Bot.getProperty("admin")
if (user.telegramid != admin) {
  Bot.sendMessage("<b>🚷 Aᴅᴍɪɴ Oɴʟʏ.</b>", { parse_mode: "HTML" })
  return
}

var watches = Bot.getProperty("gh_watches", [])
var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>🐙 Gɪᴛʜᴜʙ Wᴀᴛᴄʜ Lɪꜱᴛ</b>\n\n"

if (watches.length === 0) {
  caption += "Nᴏ ʀᴇᴘᴏꜱ ᴡᴀᴛᴄʜᴇᴅ.\n\n"
} else {
  caption += "<b>Wᴀᴛᴄʜɪɴɢ " + watches.length + " ʀᴇᴘᴏꜱ:</b>\n"
  for (var i = 0; i < watches.length; i++) {
    caption += (i + 1) + ". " + watches[i].repo + "\n"
  }
  caption += "\n"
}

caption += "<b>Cᴏᴍᴍᴀɴᴅꜱ:</b>\n" +
  "├ /ghwatch add owner/repo — Wᴀᴛᴄʜ ʀᴇᴘᴏ\n" +
  "├ /ghwatch remove N — Rᴇᴍᴏᴠᴇ #N\n" +
  "└ /ghwatch list — Lɪꜱᴛ ᴀʟʟ" +
  adsFooter

var buttons = [[{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
