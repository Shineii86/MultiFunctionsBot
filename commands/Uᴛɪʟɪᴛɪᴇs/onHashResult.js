/*CMD
  command: onHashResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var alg = User.getProperty("hashAlg") || "md5"

try {
  var data = JSON.parse(content)
  var hash = data.Digest || data.hash || data.result || ""

  if (hash) {
    var caption = "<b># " + alg.toUpperCase() + " Hᴀsʜ</b>\n\n" +
      "<b>📤 Hᴀsʜ:</b>\n<code>" + hash + "</code>" +
      adsFooter

    var buttons = [
      [
        { text: "Oᴛʜᴇʀ Hᴀsʜ", callback_data: "/hash" },
        { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
      ]
    ]

    Bot.sendMessage(caption, {
      parse_mode: "HTML",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: buttons }
    })
  } else {
    Bot.sendMessage("<b>❌ Hᴀsʜ Gᴇɴᴇʀᴀᴛɪᴏɴ Fᴀɪʟᴇᴅ.</b>", { parse_mode: "HTML" })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ Pʀᴏᴄᴇssɪɴɢ Hᴀsʜ.</b>", { parse_mode: "HTML" })
}
