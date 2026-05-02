/*CMD
  command: /yt
  help: Download YouTube videos or audio
  need_reply: true
  auto_retry_time: 
  folder: Dᴏᴡɴʟᴏᴀᴅᴇʀs

  <<ANSWER
🎵 Sᴇɴᴅ Yᴏᴜᴛᴜʙᴇ URL ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ.
E.g: https://youtube.com/watch?v=xxxxx
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /youtube /ytdl
  group: 
CMD*/

var url = message.trim()
var adsFooter = Libs.Helpers.getAdsFooter()

if (!url.match(/(youtube\.com|youtu\.be)/i)) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ Yᴏᴜᴛᴜʙᴇ URL!</b>", { parse_mode: "HTML" })
  return
}

// Store URL for callback
User.setProperty("ytUrl", url, "string")

var caption = "<b>🎬 Yᴏᴜᴛᴜʙᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ</b>\n\n" +
  "<b>🔗 URL:</b> " + Libs.Helpers.escapeHTML(url) + "\n\n" +
  "Sᴇʟᴇᴄᴛ ꜰᴏʀᴍᴀᴛ:" +
  adsFooter

var buttons = [
  [
    { text: "🎬 Vɪᴅᴇᴏ 720ᴘ", callback_data: "ytVideo720" },
    { text: "🎬 Vɪᴅᴇᴏ 360ᴘ", callback_data: "ytVideo360" }
  ],
  [
    { text: "🎵 Aᴜᴅɪᴏ MP3", callback_data: "ytAudio" },
    { text: "🎵 Aᴜᴅɪᴏ MP4", callback_data: "ytAudioMp4" }
  ],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "/tools" },
    { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
