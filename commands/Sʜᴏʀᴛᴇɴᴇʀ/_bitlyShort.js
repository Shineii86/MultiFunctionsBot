/*CMD
  command: /bitlyShort
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Sʜᴏʀᴛᴇɴᴇʀ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var data = JSON.parse(content)
var short = data.link
var error = data.status_txt
var adsFooter = Libs.Helpers.getAdsFooter()

if (!short || error === "INVALID_URL" || !/^https?:\/\/.+/.test(short)) {
  var caption = "🔍 <b>Sᴇᴇᴍs, Tʜɪs Is Nᴏᴛ A Vᴀʟɪᴅ Uʀʟ</b>\n\n" +
    "<b>Rɪɢʜᴛ Oʀ Wʀᴏɴɢ Uʀʟ?</b>\n" +
    "<b>» Rɪɢʜᴛ:</b> <code>https://t.me/Shineii86</code>\n" +
    "<b>» Wʀᴏɴɢ:</b> <code>t.me/Shineii86</code>" +
    adsFooter

  var buttons = [
    [
      { text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/shortener" },
      { text: "Cʟᴏsᴇ ⏺️", callback_data: "/close" }
    ],
    [{ text: "Hᴏᴍᴇ", callback_data: "/start" }]
  ]

  Libs.Helpers.editOrSend({
    text: caption,
    reply_markup: { inline_keyboard: buttons }
  })
} else {
  var Id = user.telegramid

  var caption = "<b>💕 Yᴏᴜʀ Sʜᴏʀᴛ Lɪɴᴋ Hᴀs Bᴇᴇɴ Cʀᴇᴀᴛᴇᴅ!</b>\n\n" +
    "🔗 <b>Oᴘᴇɴ:</b> <a href='" + short + "'>" + short + "</a>\n" +
    "🔗 <b>Cᴏᴘʏ:</b> <code>" + short + "</code>\n\n" +
    "<b>👤 Iᴅ:</b> <code>" + Id + "</code>" +
    adsFooter

  var buttons = [
    [
      { text: "Nᴇᴡ Lɪɴᴋ", callback_data: "/shortener" },
      { text: "Cʟᴏsᴇ", callback_data: "/close" }
    ],
    [{ text: "Hᴏᴍᴇ", callback_data: "/start" }]
  ]

  Libs.Helpers.editOrSend({
    text: caption,
    reply_markup: { inline_keyboard: buttons }
  })
}
