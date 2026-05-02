/*CMD
  command: onFilter
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Fɪʟᴛᴇʀs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var chatId = request.chat ? request.chat.id : user.telegramid
var filterList = Bot.getProperty("filters_" + chatId, [])
if (!filterList || filterList.length === 0) return

var text = (message || "").toLowerCase().trim()

for (var i = 0; i < filterList.length; i++) {
  var f = filterList[i]
  if (text.indexOf(f.trigger) !== -1) {
    Bot.sendMessage(f.response, { parse_mode: "HTML" })
    return
  }
}
