/*CMD
  command: ytVideo720
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Dᴏᴡɴʟᴏᴀᴅᴇʀs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: ytVideo360, ytAudio, ytAudioMp4
  group: 
CMD*/

var url = User.getProperty("ytUrl", "")
var adsFooter = Libs.Helpers.getAdsFooter()

if (!url) {
  Bot.sendMessage("<b>❌ Nᴏ URL ꜰᴏᴜɴᴅ.</b>", { parse_mode: "HTML" })
  return
}

var callbackData = request.data || ""
var isAudio = callbackData.indexOf("ytAudio") !== -1

// Use cobalt API for downloads
var apiUrl = "https://api.cobalt.tools/api/json"

try {
  HTTP.post({
    url: apiUrl,
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({
      url: url,
      vQuality: callbackData.indexOf("360") !== -1 ? "360" : "720",
      isAudioOnly: isAudio,
      aFormat: isAudio ? "mp3" : "mp4"
    }),
    success: "onYtResult"
  })

  Bot.sendMessage("<b>⏳ Pʀᴏᴄᴇꜱꜱɪɴɢ...</b>\n\nPʟᴇᴀꜱᴇ ᴡᴀɪᴛ ᴡʜɪʟᴇ I ᴅᴏᴡɴʟᴏᴀᴅ ʏᴏᴜʀ " + (isAudio ? "ᴀᴜᴅɪᴏ" : "ᴠɪᴅᴇᴏ") + ".", { parse_mode: "HTML" })
} catch (e) {
  Bot.sendMessage("<b>❌ Dᴏᴡɴʟᴏᴀᴅ ꜰᴀɪʟᴇᴅ.</b>\n\nTʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ ᴏʀ ᴜꜱᴇ ᴅɪꜰꜰᴇʀᴇɴᴛ URL.", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/yt" }]] }
  })
}
