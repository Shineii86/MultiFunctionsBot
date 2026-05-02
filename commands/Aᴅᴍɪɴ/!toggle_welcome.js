/*CMD
  command: !toggle_welcome
  help: Toggle welcome messages
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

var current = Bot.getProperty("welcome_enabled", true)
Bot.setProperty("welcome_enabled", !current, "boolean")

var status = !current ? "Eɴᴀʙʟᴇᴅ 🟢" : "Dɪꜱᴀʙʟᴇᴅ 🔴"
Bot.sendMessage("<b>👋 Wᴇʟᴄᴏᴍᴇ Mᴇꜱꜱᴀɢᴇꜱ " + status + "</b>", { parse_mode: "HTML" })
Bot.runCommand("!settings")
