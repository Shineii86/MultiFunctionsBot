/*CMD
  command: /afk
  help: Set your AFK status
  need_reply: false
  auto_retry_time: 
  folder: Aꜰᴋ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /brb
  group: 
CMD*/

var reason = params || message || "AFK"
User.setProperty("afk", reason, "string")
User.setProperty("afk_time", new Date().toISOString(), "string")

// Also store in Bot properties for cross-user AFK checking
Bot.setProperty("afk_" + user.telegramid, {
  reason: reason,
  time: new Date().toISOString()
}, "json")

var name = Libs.Helpers.getUserMention()
var adsFooter = Libs.Helpers.getAdsFooter()

Bot.sendMessage("<b>😴 AFK Sᴛᴀᴛᴜs Sᴇᴛ</b>\n\n" + name + " ɪs ɴᴏᴡ AFK.\n<b>📝 Rᴇᴀsᴏɴ:</b> " + reason + "\n\n<i>Yᴏᴜʀ AFK ᴡɪʟʟ ʙᴇ ᴀᴜᴛᴏ-ʀᴇᴍᴏᴠᴇᴅ ᴡʜᴇɴ ʏᴏᴜ sᴇɴᴅ ᴀ ᴍᴇssᴀɢᴇ.</i>" + adsFooter, {
  parse_mode: "HTML",
  disable_web_page_preview: true
})
