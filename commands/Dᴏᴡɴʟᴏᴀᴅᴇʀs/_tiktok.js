/*CMD
  command: /tiktok
  help: Download TikTok videos without watermark
  need_reply: true
  auto_retry_time: 
  folder: Dᴏᴡɴʟᴏᴀᴅᴇʀs

  <<ANSWER
🎵 Sᴇɴᴅ TɪᴋTᴏᴋ URL ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ.
E.g: https://tiktok.com/@user/video/xxxxx
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /tt /ttdl
  group: 
CMD*/

var url = message.trim()
var adsFooter = Libs.Helpers.getAdsFooter()

if (!url.match(/tiktok\.com/i)) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ TɪᴋTᴏᴋ URL!</b>", { parse_mode: "HTML" })
  return
}

Bot.sendMessage("<b>⏳ Dᴏᴡɴʟᴏᴀᴅɪɴɢ...</b>", { parse_mode: "HTML" })

try {
  HTTP.post({
    url: "https://api.cobalt.tools/api/json",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({ url: url, isAudioOnly: false }),
    success: "onTiktokResult"
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Dᴏᴡɴʟᴏᴀᴅ ꜰᴀɪʟᴇᴅ.</b>", { parse_mode: "HTML" })
}
