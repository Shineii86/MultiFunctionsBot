/*CMD
  command: onTiktokResult
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
    Bot.sendMessage("<b>✅ TɪᴋTᴏᴋ Dᴏᴡɴʟᴏᴀᴅ Rᴇᴀᴅʏ!</b>\n\n" +
      "<b>📥 Dᴏᴡɴʟᴏᴀᴅ:</b>\n" + data.url +
      adsFooter, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: [
        [{ text: "📥 Dᴏᴡɴʟᴏᴀᴅ", url: data.url }],
        [{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]
      ]}
    })
  } else {
    Bot.sendMessage("<b>❌ Dᴏᴡɴʟᴏᴀᴅ ꜰᴀɪʟᴇᴅ.</b>", { parse_mode: "HTML" })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ.</b>", { parse_mode: "HTML" })
}
