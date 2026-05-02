/*CMD
  command: !broadcast
  help: Broadcast message to all users
  need_reply: true
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER
*📨 Pʟᴇᴀsᴇ Sᴇɴᴅ A Pʜᴏᴛᴏ, Vɪᴅᴇᴏ, Sᴛɪᴄᴋᴇʀ, Oʀ Tᴇxᴛ.  
I Wɪʟʟ Pʀᴏᴄᴇss Yᴏᴜʀ Mᴇssᴀɢᴇ Aɴᴅ Bʀᴏᴀᴅᴄᴀsᴛ Iᴛ Qᴜɪᴄᴋʟʏ.*

✅ Fᴏʀᴡᴀʀᴅᴇᴅ Mᴇssᴀɢᴇs Sᴜᴘᴘᴏʀᴛᴇᴅ
✅ Aʟʟ Mᴇssᴀɢᴇ Tʏᴘᴇs Sᴜᴘᴘᴏʀᴛᴇᴅ
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var idstore = Bot.getProperty("idstore")
if (!idstore || idstore.length === 0) {
  Bot.sendMessage("Nᴏ Sᴛᴏʀᴇᴅ Iᴅ")
  return
}

var total = idstore.length
var sent = 0
var failed = 0

Bot.sendMessage("<b>📢 Bʀᴏᴀᴅᴄᴀsᴛɪɴɢ Tᴏ " + total + " Usᴇʀs...</b>", { parse_mode: "HTML" })

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
    } else if (request.text) {
      Api.sendMessage({
        chat_id: targetId,
        text: "<b>📢 Aᴅᴍɪɴ Bʀᴏᴀᴅᴄᴀsᴛ</b>\n<blockquote>" + request.text + "</blockquote>",
        parse_mode: "HTML",
        protect_content: true,
        disable_web_page_preview: true
      })
    } else if (request.video) {
      Api.sendVideo({
        chat_id: targetId,
        video: request.video.file_id,
        caption: request.caption || "",
        parse_mode: "HTML"
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
    }
    sent++
  } catch (e) {
    failed++
  }
}

Bot.sendMessage(
  "<b>✅ Bʀᴏᴀᴅᴄᴀsᴛ Cᴏᴍᴘʟᴇᴛᴇ!</b>\n\n" +
  "<b>📊 Sᴛᴀᴛs:</b>\n" +
  "» Tᴏᴛᴀʟ: " + total + "\n" +
  "» Sᴇɴᴛ: " + sent + "\n" +
  "» Fᴀɪʟᴇᴅ: " + failed,
  { parse_mode: "HTML" }
)

Bot.runCommand("/start")
