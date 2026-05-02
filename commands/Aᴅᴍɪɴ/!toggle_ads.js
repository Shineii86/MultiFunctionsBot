/*CMD
  command: !toggle_ads
  help: Toggle advertisements
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

var current = Bot.getProperty("ads_enabled", true)
Bot.setProperty("ads_enabled", !current, "boolean")

var status = !current ? "Eɴᴀʙʟᴇᴅ 🟢" : "Dɪꜱᴀʙʟᴇᴅ 🔴"
Bot.sendMessage("<b>📮 Aᴅᴠᴇʀᴛɪꜱᴇᴍᴇɴᴛꜱ " + status + "</b>", { parse_mode: "HTML" })
Bot.runCommand("!settings")
