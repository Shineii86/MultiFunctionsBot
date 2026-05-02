/*CMD
  command: !toggle_antispam
  help: Toggle anti-spam
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

var current = Bot.getProperty("antispam", "Off")
var newMode = current === "Off" ? "On" : "Off"
Bot.setProperty("antispam", newMode, "string")

var status = newMode === "On" ? "Eɴᴀʙʟᴇᴅ 🟢" : "Dɪꜱᴀʙʟᴇᴅ 🔴"
Bot.sendMessage("<b>🛡️ Aɴᴛɪ-Sᴘᴀᴍ " + status + "</b>", { parse_mode: "HTML" })
Bot.runCommand("!settings")
