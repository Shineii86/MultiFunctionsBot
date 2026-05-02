/*CMD
  command: storeList
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Fɪʟᴇ Sᴛᴏʀᴇ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()
var storedFiles = Bot.getProperty("stored_files_" + user.telegramid, [])

if (storedFiles.length === 0) {
  Bot.sendMessage("<b>📁 Nᴏ ꜰɪʟᴇꜱ ꜱᴛᴏʀᴇᴅ.</b>\n\nSᴇɴᴅ ᴀ ꜰɪʟᴇ ᴛᴏ ꜱᴛᴀʀᴛ!", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "📤 Uᴘʟᴏᴀᴅ", callback_data: "storeUpload" }]] }
  })
  return
}

var totalSize = 0
for (var i = 0; i < storedFiles.length; i++) {
  totalSize += storedFiles[i].size || 0
}

var caption = "<b>╭━━ 📁 Fɪʟᴇ Lɪꜱᴛ ━━╮</b>\n\n" +
  "<b>📊 Tᴏᴛᴀʟ:</b> " + storedFiles.length + " ꜰɪʟᴇꜱ\n" +
  "<b>📦 Sɪᴢᴇ:</b> " + Libs.Helpers.formatNumber(Math.round(totalSize / 1024)) + " KB\n\n"

var perPage = 8
var page = 1
if (request && request.data && request.data.indexOf("storeListPage") !== -1) {
  var pageMatch = request.data.match(/storeListPage(\d+)/)
  if (pageMatch) page = parseInt(pageMatch[1])
}

var totalPages = Math.ceil(storedFiles.length / perPage)
if (page > totalPages) page = totalPages
var start = (page - 1) * perPage
var end = Math.min(start + perPage, storedFiles.length)

for (var i = start; i < end; i++) {
  var f = storedFiles[i]
  var emoji = f.type === "photo" ? "🖼️" : f.type === "video" ? "🎬" : f.type === "audio" ? "🎵" : "📄"
  var size = f.size > 0 ? Math.round(f.size / 1024) + "KB" : ""
  caption += emoji + " <code>" + f.id + "</code> " + Libs.Helpers.truncate(f.name, 25) + " " + size + "\n"
}

caption += "\n<b>📄 Pᴀɢᴇ:</b> " + page + "/" + totalPages
caption += "\n<b>╰━━━━━━━━━━━━━━━━━━╯</b>" + adsFooter

var navButtons = []
if (page > 1) navButtons.push({ text: "◁", callback_data: "storeListPage" + (page - 1) })
navButtons.push({ text: "📁 Mᴇɴᴜ", callback_data: "/store" })
if (page < totalPages) navButtons.push({ text: "▷", callback_data: "storeListPage" + (page + 1) })

var buttons = [navButtons, [{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }]]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
