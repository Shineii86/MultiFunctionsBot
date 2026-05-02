/*CMD
  command: /filters
  help: Manage auto-reply keyword filters
  need_reply: false
  auto_retry_time: 
  folder: Fɪʟᴛᴇʀs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /filter
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var chatId = request.chat ? request.chat.id : user.telegramid

// List existing filters
var filterList = Bot.getProperty("filters_" + chatId, [])
var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>🔔 Kᴇʏᴡᴏʀᴅ Fɪʟᴛᴇʀs</b>\n\n"

if (filterList.length === 0) {
  caption += "Nᴏ ꜰɪʟᴛᴇʀs sᴇᴛ ʏᴇᴛ.\n\n"
} else {
  caption += "<b>📋 Aᴄᴛɪᴠᴇ Fɪʟᴛᴇʀs (" + filterList.length + "):</b>\n"
  for (var i = 0; i < filterList.length; i++) {
    caption += (i + 1) + ". <b>" + filterList[i].trigger + "</b> → " + filterList[i].response.substring(0, 50) + "\n"
  }
  caption += "\n"
}

caption += "<b>💡 Hᴏᴡ ᴛᴏ ᴜsᴇ:</b>\n" +
  "» Aᴅᴅ: <code>/addfilter trigger | response</code>\n" +
  "» Rᴇᴍᴏᴠᴇ: <code>/delfilter trigger</code>\n" +
  "» Wʜᴇɴ ᴀɴʏᴏɴᴇ sᴇɴᴅs ᴛʜᴇ ᴛʀɪɢɢᴇʀ, ʙᴏᴛ ʀᴇᴘʟɪᴇs ᴀᴜᴛᴏᴍᴀᴛɪᴄᴀʟʟʏ." +
  adsFooter

var buttons = [
  [
    { text: "➕ Aᴅᴅ Fɪʟᴛᴇʀ", callback_data: "addFilterPrompt" },
    { text: "🗑️ Rᴇᴍᴏᴠᴇ Aʟʟ", callback_data: "delAllFilters" }
  ],
  [
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
