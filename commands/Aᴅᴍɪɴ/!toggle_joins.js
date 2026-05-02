/*CMD
  command: !toggle_joins
  help: Toggle join notifications
  need_reply: false
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

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

var current = Bot.getProperty("join_notif", true)
Bot.setProperty("join_notif", !current, "boolean")

var status = !current ? "Eɴᴀʙʟᴇᴅ 🟢" : "Dɪꜱᴀʙʟᴇᴅ 🔴"
Bot.sendMessage("<b>🔔 Jᴏɪɴ Nᴏᴛɪꜰɪᴄᴀᴛɪᴏɴꜱ " + status + "</b>", { parse_mode: "HTML" })
Bot.runCommand("!settings")
