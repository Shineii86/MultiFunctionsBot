/*CMD
  command: !status
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Aᴅᴍɪɴ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var status = Libs.ResourcesLib.anotherChatRes("totalusers", "global")

// Get date and time for Asia/Kolkata (IST) and Asia/Dubai (GST)
let istTime = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Kolkata"
})
let gstTime = new Date().toLocaleString("en-US", {
  timeZone: "Asia/Dubai"
})

var dt_ist = Libs.DateTimeFormat.format(istTime, "dd/mm/yyyy")
var tm_ist = Libs.DateTimeFormat.format(istTime, "h:MM:ss T")
var dxy_ist = Libs.DateTimeFormat.format(istTime, " dddd")

// Message
var caption = `<b>🤖 Bᴏᴛ Lɪᴠᴇ Sᴛᴀᴛɪsᴛɪᴄs</b>
<b>» Tᴏᴛᴀʟ Usᴇʀs:</b> ${status.value()}

<b>🌐 Dᴀᴛᴀ Fᴏʀ: Tᴏᴅᴀʏ (Isᴛ)</>
<b>» Dᴀᴛᴇ:</> ${dt_ist}
<b>» Tɪᴍᴇ:</> ${tm_ist}ᴍ
<b>» Dᴀʏ:</> ${dxy_ist}

<b>Bᴏᴛ Cʀᴇᴀᴛᴇᴅ:</> 25 Mᴀʀᴄʜ 2025`

// Bot Menu Buttons
var buttons = [
  [{ text: "Rᴇғʀᴇsʜ", callback_data: "!status" }],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "!master" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "!close" }
  ]
]

// Check If The Message Exists
if (request.message && request.message.message_id) {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: caption,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: buttons }
  })
} else {
  Api.sendMessage({
    chat_id: request.chat.id,
    text: caption,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: buttons }
  })
}

