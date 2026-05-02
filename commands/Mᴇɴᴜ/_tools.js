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
var pages = {
  "1": {
    caption: "<b>⚙️ Cᴏʀᴇ Tᴏᴏʟs (1/4)</b>",
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
        { text: "◁", callback_data: "/tools4" },
        { text: "❶", callback_data: "/start" },
        { text: "▷", callback_data: "/tools2" }
      ]
    ]
  },
  "2": {
    caption: "<b>🔄 Cᴏɴᴠᴇʀᴛᴇʀs & Sᴇᴀʀᴄʜ (2/4)</b>",
    buttons: [
      [
        { text: "📡 Mᴏʀsᴇ Cᴏᴅᴇ", callback_data: "/morse" },
        { text: "💻 Bɪɴᴀʀʏ", callback_data: "/binary" }
      ],
      [
        { text: "🏛️ Rᴏᴍᴀɴ Nᴜᴍᴇʀᴀʟs", callback_data: "/roman" },
        { text: "💱 Cᴜʀʀᴇɴᴄʏ", callback_data: "/exchange" }
      ],
      [
        { text: "🌐 IP Lᴏᴏᴋᴜᴘ", callback_data: "/iplookup" },
        { text: "🐙 Gɪᴛʜᴜʙ", callback_data: "/github" }
      ],
      [
        { text: "📚 Wɪᴋɪᴘᴇᴅɪᴀ", callback_data: "/wiki" },
        { text: "📊 Tᴇxᴛ Sᴛᴀᴛs", callback_data: "/textstats" }
      ],
      [
        { text: "🔢 Nᴜᴍʙᴇʀ Fᴀᴄᴛ", callback_data: "/numberfact" }
      ],
      [
        { text: "◁", callback_data: "/tools" },
        { text: "❷", callback_data: "/start" },
        { text: "▷", callback_data: "/tools3" }
      ]
    ]
  },
  "3": {
    caption: "<b>🎌 Aɴɪᴍᴇ & Wᴇᴀᴛʜᴇʀ (3/4)</b>",
    buttons: [
      [
        { text: "🎌 Aɴɪᴍᴇ Sᴇᴀʀᴄʜ", callback_data: "/anime" },
        { text: "📖 Mᴀɴɢᴀ Sᴇᴀʀᴄʜ", callback_data: "/manga" }
      ],
      [
        { text: "👤 Cʜᴀʀᴀᴄᴛᴇʀ", callback_data: "/character" }
      ],
      [
        { text: "☀️ Wᴇᴀᴛʜᴇʀ", callback_data: "/weather" },
        { text: "📅 3-Dᴀʏ Fᴏʀᴇᴄᴀsᴛ", callback_data: "/forecast" }
      ],
      [
        { text: "◁", callback_data: "/tools2" },
        { text: "❸", callback_data: "/start" },
        { text: "▷", callback_data: "/tools4" }
      ]
    ]
  },
  "4": {
    caption: "<b>🎲 Fᴜɴ & Rᴀɴᴅᴏᴍ (4/4)</b>",
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
        { text: "😂 Jᴏᴋᴇ", callback_data: "/joke" },
        { text: "💡 Aᴅᴠɪᴄᴇ", callback_data: "/advice" }
      ],
      [
        { text: "◁", callback_data: "/tools3" },
        { text: "❹", callback_data: "/start" },
        { text: "▷", callback_data: "/tools" }
      ]
    ]
  }
}

// Determine which page to show
var page = "1"
if (request && request.data) {
  for (var p = "2"; p <= "4"; p++) {
    if (request.data.indexOf("tools" + p) !== -1) { page = p; break }
  }
}

var currentPage = pages[page] || pages["1"]

Libs.Helpers.editOrSend({
  text: currentPage.caption + adsFooter,
  reply_markup: { inline_keyboard: currentPage.buttons }
})
