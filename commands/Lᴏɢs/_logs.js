/*CMD
  command: /logs
  help: Configure event logging for groups
  need_reply: false
  auto_retry_time: 
  folder: Lᴏɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /logging
  group: 
CMD*/

var admin = Bot.getProperty("admin")
var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>📋 Eᴠᴇɴᴛ Lᴏɢɢɪɴɢ</b>\n\n" +
  "Cᴏɴꜰɪɢᴜʀᴇ ᴡʜɪᴄʜ ᴇᴠᴇɴᴛs ᴛᴏ ʟᴏɢ ɪɴ ʏᴏᴜʀ ɢʀᴏᴜᴘ.\n\n" +
  "Sᴇɴᴅ ᴛʜᴇ ʟᴏɢ ᴄʜᴀɴɴᴇʟ/ɢʀᴏᴜᴘ ID ᴏʀ @username ᴡʜᴇʀᴇ ʟᴏɢs sʜᴏᴜʟᴅ ʙᴇ sᴇɴᴛ.\n\n" +
  "<b>📌 Sᴜᴘᴘᴏʀᴛᴇᴅ Eᴠᴇɴᴛs:</b>\n" +
  "» Jᴏɪɴs & Lᴇᴀᴠᴇs\n" +
  "» Dᴇʟᴇᴛᴇᴅ Mᴇssᴀɢᴇs\n" +
  "» Eᴅɪᴛᴇᴅ Mᴇssᴀɢᴇs\n" +
  "» Pɪɴɴᴇᴅ Mᴇssᴀɢᴇs\n" +
  "» Aᴅᴍɪɴ Cʜᴀɴɢᴇs\n" +
  "» Bᴀɴs & Uɴʙᴀɴs\n" +
  "» Gʀᴏᴜᴘ Tɪᴛʟᴇ/Dᴇsᴄ Cʜᴀɴɢᴇs" +
  adsFooter

var currentLog = Bot.getProperty("log_channel", "Nᴏᴛ Sᴇᴛ")
var logJoins = Bot.getProperty("log_joins", "On")
var logLeaves = Bot.getProperty("log_leaves", "On")
var logDeleted = Bot.getProperty("log_deleted", "On")
var logEdited = Bot.getProperty("log_edited", "On")
var logPinned = Bot.getProperty("log_pinned", "On")

var buttons = [
  [
    { text: "📢 Jᴏɪɴs: " + logJoins, callback_data: "logToggle joins" },
    { text: "🚪 Lᴇᴀᴠᴇs: " + logLeaves, callback_data: "logToggle leaves" }
  ],
  [
    { text: "🗑️ Dᴇʟᴇᴛᴇᴅ: " + logDeleted, callback_data: "logToggle deleted" },
    { text: "✏️ Eᴅɪᴛᴇᴅ: " + logEdited, callback_data: "logToggle edited" }
  ],
  [
    { text: "📌 Pɪɴɴᴇᴅ: " + logPinned, callback_data: "logToggle pinned" }
  ],
  [
    { text: "🔔 Sᴇᴛ Lᴏɢ Cʜᴀɴɴᴇʟ", callback_data: "logSetChannel" }
  ],
  [
    { text: "📊 Vɪᴇᴡ Rᴇᴄᴇɴᴛ Lᴏɢs", callback_data: "logView" }
  ],
  [
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
