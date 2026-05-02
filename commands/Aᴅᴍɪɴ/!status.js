/*CMD
  command: !status
  help: Bot statistics
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

var totalUsers = Libs.ResourcesLib.anotherChatRes("totalusers", "global")

// IST date/time
var now = new Date()
var istOffset = 5.5 * 60 * 60 * 1000
var ist = new Date(now.getTime() + istOffset)

var days = ["Sᴜɴᴅᴀʏ", "Mᴏɴᴅᴀʏ", "Tᴜᴇsᴅᴀʏ", "Wᴇᴅɴᴇsᴅᴀʏ", "Tʜᴜʀsᴅᴀʏ", "Fʀɪᴅᴀʏ", "Sᴀᴛᴜʀᴅᴀʏ"]
var months = ["Jᴀɴᴜᴀʀʏ", "Fᴇʙʀᴜᴀʀʏ", "Mᴀʀᴄʜ", "Aᴘʀɪʟ", "Mᴀʏ", "Jᴜɴᴇ", "Jᴜʟʏ", "Aᴜɢᴜsᴛ", "Sᴇᴘᴛᴇᴍʙᴇʀ", "Oᴄᴛᴏʙᴇʀ", "Nᴏᴠᴇᴍʙᴇʀ", "Dᴇᴄᴇᴍʙᴇʀ"]

var dateStr = ("0" + ist.getUTCDate()).slice(-2) + " " + months[ist.getUTCMonth()] + " " + ist.getUTCFullYear()
var timeStr = ("0" + ist.getUTCHours()).slice(-2) + ":" + ("0" + ist.getUTCMinutes()).slice(-2) + ":" + ("0" + ist.getUTCSeconds()).slice(-2)
var dayStr = days[ist.getUTCDay()]

var caption = "<b>🤖 Bᴏᴛ Lɪᴠᴇ Sᴛᴀᴛɪsᴛɪᴄs</b>\n" +
  "<b>» Tᴏᴛᴀʟ Usᴇʀs:</b> " + totalUsers.value() + "\n\n" +
  "<b>🌐 Dᴀᴛᴀ Fᴏʀ: Tᴏᴅᴀʏ (Isᴛ)</b>\n" +
  "<b>» Dᴀᴛᴇ:</b> " + dateStr + "\n" +
  "<b>» Tɪᴍᴇ:</b> " + timeStr + "\n" +
  "<b>» Dᴀʏ:</b> " + dayStr + "\n\n" +
  "<b>Bᴏᴛ Cʀᴇᴀᴛᴇᴅ:</b> 25 Jᴀɴᴜᴀʀʏ 2025"

var buttons = [
  [{ text: "Rᴇғʀᴇsʜ 🔄", callback_data: "!status" }],
  [
    { text: "◁ Bᴀᴄᴋ", callback_data: "!master" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
