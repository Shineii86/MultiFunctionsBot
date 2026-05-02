/*CMD
  command: !toggle_ratelimit
  help: Toggle rate limiting
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

var current = Bot.getProperty("rate_limit", "Off")
var newMode = current === "Off" ? "On" : "Off"
Bot.setProperty("rate_limit", newMode, "string")

var status = newMode === "On" ? "Eɴᴀʙʟᴇᴅ 🟢" : "Dɪꜱᴀʙʟᴇᴅ 🔴"
Bot.sendMessage("<b>⏱️ Rᴀᴛᴇ Lɪᴍɪᴛɪɴɢ " + status + "</b>", { parse_mode: "HTML" })
Bot.runCommand("!settings")
