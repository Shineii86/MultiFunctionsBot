/*CMD
  command: /emojify
  help: Convert text to emoji letters
  need_reply: true
  auto_retry_time: 
  folder: Fᴜɴ

  <<ANSWER
🔠 Sᴇɴᴅ ᴛᴇxᴛ ᴛᴏ ᴄᴏɴᴠᴇʀᴛ ᴛᴏ ᴇᴍᴏᴊɪ ʟᴇᴛᴛᴇʀs.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /emoji
  group: 
CMD*/

var emojiMap = {
  a: "🅰️", b: "🅱️", c: "©️", d: "🇩", e: "📧", f: "🎏", g: "🇬", h: "♓",
  i: "ℹ️", j: "🗾", k: "🇰", l: "🇱", m: "Ⓜ️", n: "♑", o: "⭕", p: "🅿️",
  q: "ⓠ", r: "®️", s: "💲", t: "✝️", u: "⛎", v: "♈", w: "〰️", x: "❌",
  y: "💹", z: "💤", " ": "  ", "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣",
  "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣"
}

var result = ""
var lower = message.toLowerCase()
for (var i = 0; i < lower.length; i++) {
  result += (emojiMap[lower[i]] || lower[i]) + " "
}

var adsFooter = Libs.Helpers.getAdsFooter()
Bot.sendMessage("<b>🔠 Eᴍᴏᴊɪ Tᴇxᴛ</b>\n\n" + result + adsFooter, {
  parse_mode: "HTML", disable_web_page_preview: true,
  reply_markup: { inline_keyboard: [[{ text: "🔠 Eᴍᴏᴊɪꜰʏ Aɢᴀɪɴ", callback_data: "/emojify" }, { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }], [{ text: "◁", callback_data: "/tools" }, { text: "○", callback_data: "/start" }, { text: "✕", callback_data: "/close" }]] }
})
