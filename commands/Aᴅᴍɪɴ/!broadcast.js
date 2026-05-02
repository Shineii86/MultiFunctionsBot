/*CMD
  command: !broadcast
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER
*📨 Pʟᴇᴀsᴇ Sᴇɴᴅ A Pʜᴏᴛᴏ, Vɪᴅᴇᴏ, Sᴛɪᴄᴋᴇʀ, Oʀ Tᴇxᴛ.  
I Wɪʟʟ Pʀᴏᴄᴇss Yᴏᴜʀ Mᴇssᴀɢᴇ Aɴᴅ Bʀᴏᴀᴅᴄᴀsᴛ Iᴛ Qᴜɪᴄᴋʟʏ.  *

✅ Fᴏʀᴡᴀʀᴅᴇᴅ Mᴇssᴀɢᴇs Sᴜᴘᴘᴏʀᴛᴇᴅ
✅ Aʟʟ Mᴇssᴀɢᴇ Tʏᴘᴇs (Tᴇxᴛ, Pʜᴏᴛᴏ, Vɪᴅᴇᴏ, Sᴛɪᴄᴋᴇʀ, Aᴜᴅɪᴏ, Dᴏᴄᴜᴍᴇɴᴛ) Sᴜᴘᴘᴏʀᴛᴇᴅ
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Proceed with broadcasting
const idstore = Bot.getProperty("idstore")
if (!idstore || idstore.length === 0) {
  Bot.sendMessage("Nᴏ Sᴛᴏʀᴇᴅ Iᴅ")
  return
}

const Users = idstore.length
Bot.sendMessage(`Bʀᴏᴀᴅᴄᴀsᴛ Mᴇssᴀɢᴇ Sᴜᴄᴄᴇssғᴜʟʟʏ Sᴇɴᴛ Tᴏ ${Users} Usᴇʀs`)

for (let index in idstore) {
  const info = idstore[index]
  try {
    // Handle Forwarded Messages
    if (request.forward_from || request.forward_from_chat) {
      Api.forwardMessage({
        chat_id: info,
        from_chat_id: user.telegramid,
        message_id: request.message_id
      })
    }
    // Handle Photo Messages (With and Without Caption)
    else if (request.photo && request.photo[0]) {
      let caption = request.caption || "" // Declared inside the condition
      let photoOptions = {
        chat_id: info,
        photo: request.photo[0].file_id,
        parse_mode: "HTML"
      }

      if (caption) {
        photoOptions.caption = caption // Add caption only if it exists
      }

      Api.sendPhoto(photoOptions)
    }
    // Handle Text Messages
    else if (request.text) {
      Api.sendMessage({
        chat_id: info,
        text: `<b>📢 Aᴅᴍɪɴ Bʀᴏᴀᴅᴄᴀsᴛ</b>\n<blockquote>${request.text}</blockquote>`,
        parse_mode: "HTML",
        protect_content: true,
        disable_web_page_preview: true
      })
    }
    // Handle Video Messages
    else if (request.video) {
      let caption = request.caption || "" // Declared inside the condition
      Api.sendVideo({
        chat_id: info,
        video: request.video.file_id,
        caption: caption,
        parse_mode: "HTML"
      })
    }
    // Handle Audio Messages
    else if (request.audio) {
      let caption = request.caption || "" // Declared inside the condition
      Api.sendAudio({
        chat_id: info,
        audio: request.audio.file_id,
        caption: caption
      })
    }
    // Handle Document Messages
    else if (request.document) {
      let caption = request.caption || "" // Declared inside the condition
      Api.sendDocument({
        chat_id: info,
        document: request.document.file_id,
        caption: caption,
        parse_mode: "HTML"
      })
    }
    // Handle Sticker Messages
    else if (request.sticker) {
      Api.sendSticker({
        chat_id: info,
        sticker: request.sticker.file_id
      })
    }
  } catch (error) {
    Bot.sendMessage(`Eʀʀᴏʀ Sᴇɴᴅɪɴɢ Mᴇssᴀɢᴇ Tᴏ ${info}: ${error}`)
  }
}

// Return to start
Bot.runCommand("/start")

