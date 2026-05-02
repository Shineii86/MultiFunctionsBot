/*CMD
  command: /trivia
  help: Play a trivia quiz game
  need_reply: false
  auto_retry_time: 
  folder: Gᴀᴍᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /quiz2
  group: 
CMD*/

var categories = [
  { name: "🧪 Sᴄɪᴇɴᴄᴇ", id: "science" },
  { name: "📜 Hɪꜱᴛᴏʀʏ", id: "history" },
  { name: "🎬 Pᴏᴘ Cᴜʟᴛᴜʀᴇ", id: "pop_culture" },
  { name: "⚽ Sᴘᴏʀᴛꜱ", id: "sports" },
  { name: "💻 Tᴇᴄʜɴᴏʟᴏɢʏ", id: "technology" },
  { name: "🎲 Rᴀɴᴅᴏᴍ", id: "random" }
]

var buttons = []
for (var i = 0; i < categories.length; i += 2) {
  var row = [{ text: categories[i].name, callback_data: "triviaPlay " + categories[i].id }]
  if (i + 1 < categories.length) {
    row.push({ text: categories[i + 1].name, callback_data: "triviaPlay " + categories[i + 1].id })
  }
  buttons.push(row)
}
buttons.push([{ text: "Cʟᴏꜱᴇ ✕", callback_data: "/close" }])

Libs.Helpers.editOrSend({
  text: "<b>🎯 Tʀɪᴠɪᴀ Qᴜɪᴢ</b>\n\nSᴇʟᴇᴄᴛ ᴀ ᴄᴀᴛᴇɢᴏʀʏ:",
  reply_markup: { inline_keyboard: buttons }
})
