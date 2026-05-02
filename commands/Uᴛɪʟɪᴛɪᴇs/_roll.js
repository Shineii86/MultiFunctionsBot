/*CMD
  command: /roll
  help: Roll dice (e.g. /roll 2d6)
  need_reply: false
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /dice
  group: 
CMD*/

var input = (params || message || "1d6").trim().toLowerCase()
var match = input.match(/^(\d+)d(\d+)$/)

var count = 1
var sides = 6

if (match) {
  count = Math.min(parseInt(match[1]), 20)
  sides = Math.min(parseInt(match[2]), 100)
}

var rolls = []
var total = 0
for (var i = 0; i < count; i++) {
  var roll = Math.floor(Math.random() * sides) + 1
  rolls.push(roll)
  total += roll
}

var adsFooter = Libs.Helpers.getAdsFooter()

var caption = "<b>🎲 Dɪᴄᴇ Rᴏʟʟ</b>\n\n" +
  "<b>🎯 Fᴏʀᴍᴀᴛ:</b> " + count + "d" + sides + "\n" +
  "<b>📋 Rᴏʟʟs:</b> " + rolls.join(", ") + "\n" +
  "<b>➕ Tᴏᴛᴀʟ:</b> <b>" + total + "</b>" +
  adsFooter

var buttons = [
  [
    { text: "🎲 Rᴏʟʟ Aɢᴀɪɴ", callback_data: "/roll" },
    { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
  ],
  [
    { text: "◁", callback_data: "/tools" },
    { text: "○", callback_data: "/start" },
    { text: "✕", callback_data: "/close" }
  ]
]

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
