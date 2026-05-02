/*CMD
  command: /datetime
  help: Current date and time in multiple timezones
  need_reply: false
  auto_retry_time: 
  folder: Uᴛɪʟɪᴛɪᴇs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /time
  group: 
CMD*/

var now = new Date()
var adsFooter = Libs.Helpers.getAdsFooter()

function formatTZ(offset, label) {
  var tzDate = new Date(now.getTime() + offset * 60 * 60 * 1000)
  var h = ("0" + tzDate.getUTCHours()).slice(-2)
  var m = ("0" + tzDate.getUTCMinutes()).slice(-2)
  var d = ("0" + tzDate.getUTCDate()).slice(-2)
  var mo = ("0" + (tzDate.getUTCMonth() + 1)).slice(-2)
  var y = tzDate.getUTCFullYear()
  return "» <b>" + label + ":</b> " + d + "/" + mo + "/" + y + " " + h + ":" + m + " UTC" + (offset >= 0 ? "+" : "") + offset
}

var caption = "<b>🕐 Cᴜʀʀᴇɴᴛ Dᴀᴛᴇ & Tɪᴍᴇ</b>\n\n" +
  formatTZ(0, "🇬🇧 UTC") + "\n" +
  formatTZ(5.5, "🇮🇳 IST") + "\n" +
  formatTZ(4, "🇦🇪 GST") + "\n" +
  formatTZ(8, "🇸🇬 SGT") + "\n" +
  formatTZ(9, "🇯🇵 JST") + "\n" +
  formatTZ(-5, "🇺🇸 EST") + "\n" +
  formatTZ(-8, "🇺🇸 PST") + "\n" +
  formatTZ(1, "🇪🇺 CET") + "\n" +
  formatTZ(3, "🇷🇺 MSK") + "\n" +
  formatTZ(10, "🇦🇺 AEST") +
  adsFooter

var buttons = [
  [
    { text: "🔄 Rᴇꜰʀᴇsʜ", callback_data: "/datetime" },
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
