/*CMD
  command: /tools
  help: Access bot tools
  need_reply: false
  auto_retry_time: 
  folder: Mᴇɴᴜ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

// Page 1: Core Tools
var page1 = {
  caption: "<b>⚙️ Cᴏʀᴇ Tᴏᴏʟs (1/3)</b>" + adsFooter,
  buttons: [
    [
      { text: "🔗 Sʜᴏʀᴛᴇɴᴇʀ", callback_data: "/shortener" },
      { text: "🆔 Tᴇʟᴇɢʀᴀᴍ Iᴅ", callback_data: "/telegramId" }
    ],
    [
      { text: "🔐 Pᴀssᴡᴏʀᴅ", callback_data: "/password" },
      { text: "🌍 Tʀᴀɴsʟᴀᴛᴇ", callback_data: "/translate" }
    ],
    [
      { text: "📱 QR Cᴏᴅᴇ", callback_data: "/qrcode" },
      { text: "🔤 Bᴀsᴇ64", callback_data: "/base64" }
    ],
    [
      { text: " #  Hᴀsʜ", callback_data: "/hash" },
      { text: "📝 Wᴏʀᴅ Cᴏᴜɴᴛ", callback_data: "/wordcount" }
    ],
    [
      { text: "🎲 Uᴜɪᴅ", callback_data: "/uuid" },
      { text: "🕐 Dᴀᴛᴇ/Tɪᴍᴇ", callback_data: "/datetime" }
    ],
    [
      { text: "◁", callback_data: "/tools3" },
      { text: "❶", callback_data: "/start" },
      { text: "▷", callback_data: "/tools2" }
    ]
  ]
}

// Page 2: Converters
var page2 = {
  caption: "<b>🔄 Cᴏɴᴠᴇʀᴛᴇʀs (2/3)</b>" + adsFooter,
  buttons: [
    [
      { text: "📡 Mᴏʀsᴇ Cᴏᴅᴇ", callback_data: "/morse" },
      { text: "💻 Bɪɴᴀʀʏ", callback_data: "/binary" }
    ],
    [
      { text: "🏛️ Rᴏᴍᴀɴ Nᴜᴍᴇʀᴀʟs", callback_data: "/roman" },
      { text: "🌐 IP Lᴏᴏᴋᴜᴘ", callback_data: "/iplookup" }
    ],
    [
      { text: "📊 Tᴇxᴛ Sᴛᴀᴛs", callback_data: "/textstats" },
      { text: "🔢 Nᴜᴍʙᴇʀ Fᴀᴄᴛ", callback_data: "/numberfact" }
    ],
    [
      { text: "◁", callback_data: "/tools" },
      { text: "❷", callback_data: "/start" },
      { text: "▷", callback_data: "/tools3" }
    ]
  ]
}

// Page 3: Fun & Random
var page3 = {
  caption: "<b>🎲 Fᴜɴ & Rᴀɴᴅᴏᴍ (3/3)</b>" + adsFooter,
  buttons: [
    [
      { text: "💡 Rᴀɴᴅᴏᴍ Qᴜᴏᴛᴇ", callback_data: "/quote" },
      { text: "🎲 Rᴏʟʟ Dɪᴄᴇ", callback_data: "/roll" }
    ],
    [
      { text: "🪙 Cᴏɪɴ Fʟɪᴘ", callback_data: "/flip" },
      { text: "🎯 Rᴀɴᴅᴏᴍ Cʜᴏɪᴄᴇ", callback_data: "/choose" }
    ],
    [
      { text: "◁", callback_data: "/tools2" },
      { text: "❸", callback_data: "/start" },
      { text: "▷", callback_data: "/tools" }
    ]
  ]
}

// Determine which page to show based on callback data
var page = "1"
if (request && request.data) {
  if (request.data.indexOf("tools2") !== -1) page = "2"
  else if (request.data.indexOf("tools3") !== -1) page = "3"
}

// Also check via message/command params
if (params === "2" || (message && message.indexOf("2") !== -1)) page = "2"
if (params === "3" || (message && message.indexOf("3") !== -1)) page = "3"

var currentPage = page === "2" ? page2 : page === "3" ? page3 : page1

Libs.Helpers.editOrSend({
  text: currentPage.caption,
  reply_markup: { inline_keyboard: currentPage.buttons }
})
