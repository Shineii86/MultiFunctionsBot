/*CMD
  command: onYtResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Dᴏᴡɴʟᴏᴀᴅᴇʀs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

try {
  var data = JSON.parse(content)
  if (data && data.url) {
    Bot.sendMessage("<b>✅ Dᴏᴡɴʟᴏᴀᴅ Rᴇᴀᴅʏ!</b>\n\n" +
      "<b>🔗 Dᴏᴡɴʟᴏᴀᴅ:</b>\n" + data.url + "\n\n" +
      "<i>Lɪɴᴋ ᴇxᴘɪʀᴇꜱ ꜱᴏᴏɴ. Sᴀᴠᴇ ɪᴛ!</i>" +
      adsFooter, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: [
        [{ text: "📥 Dᴏᴡɴʟᴏᴀᴅ", url: data.url }],
        [
          { text: "🔄 Aɢᴀɪɴ", callback_data: "/yt" },
          { text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }
        ]
      ]}
    })
  } else {
    Bot.sendMessage("<b>❌ Dᴏᴡɴʟᴏᴀᴅ ꜰᴀɪʟᴇᴅ.</b>\n\n" + (data.error || "Uɴᴋɴᴏᴡɴ ᴇʀʀᴏʀ."), { parse_mode: "HTML" })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Dᴏᴡɴʟᴏᴀᴅ ᴇʀʀᴏʀ.</b>\n\nTʀʏ ᴜꜱɪɴɢ ᴅɪꜰꜰᴇʀᴇɴᴛ URL ᴏʀ ᴛʀʏ ᴀɢᴀɪɴ ʟᴀᴛᴇʀ.", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/yt" }]] }
  })
}
