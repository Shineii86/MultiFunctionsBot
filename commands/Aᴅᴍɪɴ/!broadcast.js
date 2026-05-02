/*CMD
  command: !broadcast
  help: Broadcast message to all users
  need_reply: true
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER
📨 Sᴇɴᴅ A Pʜᴏᴛᴏ, Vɪᴅᴇᴏ, Sᴛɪᴄᴋᴇʀ, Oʀ Tᴇxᴛ Tᴏ Bʀᴏᴀᴅᴄᴀꜱᴛ.
  ✅ Fᴏʀᴡᴀʀᴅᴇᴅ Mᴇꜱꜱᴀɢᴇꜱ Sᴜᴘᴘᴏʀᴛᴇᴅ
  ✅ Aʟʟ Mᴇꜱꜱᴀɢᴇ Tʏᴘᴇꜱ Sᴜᴘᴘᴏʀᴛᴇᴅ
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

var idstore = Bot.getProperty("idstore")
if (!idstore || idstore.length === 0) {
  Bot.sendMessage("<b>❌ Nᴏ Sᴛᴏʀᴇᴅ Iᴅꜱ.</b>", { parse_mode: "HTML" })
  return
}

var total = idstore.length
var sent = 0
var failed = 0

Bot.sendMessage("<b>📢 Bʀᴏᴀᴅᴄᴀꜱᴛɪɴɢ Tᴏ " + Libs.Helpers.formatNumber(total) + " Uꜱᴇʀꜱꜱ...</b>\n\n⏳ Pʟᴇᴀꜱᴇ ᴡᴀɪᴛ...", { parse_mode: "HTML" })

for (var index in idstore) {
  var targetId = idstore[index]
  try {
    if (request.forward_from || request.forward_from_chat) {
      Api.forwardMessage({
        chat_id: targetId,
        from_chat_id: user.telegramid,
        message_id: request.message_id
      })
    } else if (request.photo && request.photo[0]) {
      var opts = {
        chat_id: targetId,
        photo: request.photo[0].file_id,
        parse_mode: "HTML"
      }
      if (request.caption) opts.caption = request.caption
      Api.sendPhoto(opts)
    } else if (request.video) {
      Api.sendVideo({
        chat_id: targetId,
        video: request.video.file_id,
        caption: request.caption || "",
        parse_mode: "HTML"
      })
    } else if (request.animation) {
      Api.sendAnimation({
        chat_id: targetId,
        animation: request.animation.file_id,
        caption: request.caption || "",
        parse_mode: "HTML"
      })
    } else if (request.voice) {
      Api.sendVoice({
        chat_id: targetId,
        voice: request.voice.file_id,
        caption: request.caption || ""
      })
    } else if (request.audio) {
      Api.sendAudio({
        chat_id: targetId,
        audio: request.audio.file_id,
        caption: request.caption || ""
      })
    } else if (request.document) {
      Api.sendDocument({
        chat_id: targetId,
        document: request.document.file_id,
        caption: request.caption || "",
        parse_mode: "HTML"
      })
    } else if (request.sticker) {
      Api.sendSticker({
        chat_id: targetId,
        sticker: request.sticker.file_id
      })
    } else if (request.text) {
      Api.sendMessage({
        chat_id: targetId,
        text: "<b>📢 Aᴅᴍɪɴ Bʀᴏᴀᴅᴄᴀꜱᴛ</b>\n<blockquote>" + request.text + "</blockquote>",
        parse_mode: "HTML",
        protect_content: true,
        disable_web_page_preview: true
      })
    }
    sent++
  } catch (e) {
    failed++
  }
}

var sentBar = Libs.Helpers.getProgressBar(sent, total, 10)

Bot.sendMessage(
  "<b>✅ Bʀᴏᴀᴅᴄᴀꜱᴛ Cᴏᴍᴘʟᴇᴛᴇ!</b>\n\n" +
  "<b>📊 Rᴇꜱᴜʟᴛꜱ:</b>\n" +
  "├ 📤 Sᴇɴᴛ: <b>" + Libs.Helpers.formatNumber(sent) + "</b>\n" +
  "├ ❌ Fᴀɪʟᴇᴅ: <b>" + Libs.Helpers.formatNumber(failed) + "</b>\n" +
  "├ 📋 Tᴏᴛᴀʟ: <b>" + Libs.Helpers.formatNumber(total) + "</b>\n" +
  "└ " + sentBar,
  { parse_mode: "HTML" }
)

Bot.runCommand("/start")
