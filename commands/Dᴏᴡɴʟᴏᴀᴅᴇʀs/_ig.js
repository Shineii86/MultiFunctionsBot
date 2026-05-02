/*CMD
  command: /ig
  help: Download Instagram posts, reels, stories
  need_reply: true
  auto_retry_time: 
  folder: Dᴏᴡɴʟᴏᴀᴅᴇʀs

  <<ANSWER
📷 Sᴇɴᴅ Iɴꜱᴛᴀɢʀᴀᴍ URL ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ.
E.g: https://instagram.com/reel/xxxxx
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /instagram /igdl
  group: 
CMD*/

var url = message.trim()
var adsFooter = Libs.Helpers.getAdsFooter()

if (!url.match(/(instagram\.com|instagr\.am)/i)) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ Iɴꜱᴛᴀɢʀᴀᴍ URL!</b>", { parse_mode: "HTML" })
  return
}

Bot.sendMessage("<b>⏳ Dᴏᴡɴʟᴏᴀᴅɪɴɢ...</b>", { parse_mode: "HTML" })

try {
  HTTP.post({
    url: "https://api.cobalt.tools/api/json",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({ url: url }),
    success: "onIgResult"
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Dᴏᴡɴʟᴏᴀᴅ ꜰᴀɪʟᴇᴅ.</b>", { parse_mode: "HTML" })
}
