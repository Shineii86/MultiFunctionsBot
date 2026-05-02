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

var pages = {
  "1": {
    caption: "<b>⚙️ Cᴏʀᴇ Tᴏᴏʟꜱ (1/7)</b>",
    buttons: [
      [
        { text: "🔗 Sʜᴏʀᴛᴇɴᴇʀ", callback_data: "/shortener" },
        { text: "🆔 Tᴇʟᴇɢʀᴀᴍ Iᴅ", callback_data: "/telegramId" }
      ],
      [
        { text: "🔐 Pᴀꜱꜱᴡᴏʀᴅ", callback_data: "/password" },
        { text: "🌍 Tʀᴀɴꜱʟᴀᴛᴇ", callback_data: "/translate" }
      ],
      [
        { text: "📱 QR Cᴏᴅᴇ", callback_data: "/qrcode" },
        { text: "🔤 Bᴀꜱᴇ64", callback_data: "/base64" }
      ],
      [
        { text: "# Hᴀꜱʜ", callback_data: "/hash" },
        { text: "📝 Wᴏʀᴅ Cᴏᴜɴᴛ", callback_data: "/wordcount" }
      ],
      [
        { text: "🎲 Uᴜɪᴅ", callback_data: "/uuid" },
        { text: "🕐 Dᴀᴛᴇ/Tɪᴍᴇ", callback_data: "/datetime" }
      ],
      [
        { text: "🔤 Tᴇxᴛ Cᴀꜱᴇ", callback_data: "/textcase" },
        { text: "🔢 Hᴇx", callback_data: "/hex" }
      ],
      [
        { text: "◁", callback_data: "/tools7" },
        { text: "❶", callback_data: "/start" },
        { text: "▷", callback_data: "/tools2" }
      ]
    ]
  },
  "2": {
    caption: "<b>🔄 Cᴏɴᴠᴇʀᴛᴇʀꜱ & Sᴇᴀʀᴄʜ (2/7)</b>",
    buttons: [
      [
        { text: "📡 Mᴏʀꜱᴇ Cᴏᴅᴇ", callback_data: "/morse" },
        { text: "💻 Bɪɴᴀʀʏ", callback_data: "/binary" }
      ],
      [
        { text: "🏛️ Rᴏᴍᴀɴ Nᴜᴍᴇʀᴀʟꜱ", callback_data: "/roman" },
        { text: "💱 Cᴜʀʀᴇɴᴄʏ", callback_data: "/exchange" }
      ],
      [
        { text: "🌐 IP Lᴏᴏᴋᴜᴘ", callback_data: "/iplookup" },
        { text: "📚 Wɪᴋɪᴘᴇᴅɪᴀ", callback_data: "/wiki" }
      ],
      [
        { text: "📊 Tᴇxᴛ Sᴛᴀᴛꜱ", callback_data: "/textstats" },
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
    caption: "<b>📲 Tᴇʟᴇɢʀᴀᴍ & 🐙 Gɪᴛʜᴜʙ (3/7)</b>",
    buttons: [
      [
        { text: "🏷️ Sᴛɪᴄᴋᴇʀ Iɴꜰᴏ", callback_data: "/stickerinfo" },
        { text: "💬 Cʜᴀᴛ Iɴꜰᴏ", callback_data: "/chatinfo" }
      ],
      [
        { text: "📢 Cʜᴀɴɴᴇʟ Iɴꜰᴏ", callback_data: "/channelinfo" },
        { text: "📷 Pʀᴏꜰɪʟᴇ Pʜᴏᴛᴏ", callback_data: "/pfp" }
      ],
      [
        { text: "🤖 Bᴏᴛ Cʜᴇᴄᴋ", callback_data: "/botcheck" },
        { text: "🔗 Mᴇɴᴛɪᴏɴ Lɪɴᴋ", callback_data: "/mention" }
      ],
      [
        { text: "📊 Gʀᴏᴜᴘ Sᴛᴀᴛꜱ", callback_data: "/groupstats" },
        { text: "👑 Aᴅᴍɪɴꜱ", callback_data: "/adminlist" }
      ],
      [
        { text: "👥 Mᴇᴍʙᴇʀ Cᴏᴜɴᴛ", callback_data: "/membercount" },
        { text: "📌 Pɪɴɴᴇᴅ", callback_data: "/pinned" }
      ],
      [
        { text: "🔗 Gʀᴏᴜᴘ Lɪɴᴋ", callback_data: "/grouplink" },
        { text: "🚫 Bᴀɴ Lɪꜱᴛ", callback_data: "/baninfo" }
      ],
      [
        { text: "🐙 Gɪᴛʜᴜʙ Pʀᴏꜰɪʟᴇ", callback_data: "/github" },
        { text: "📦 Gɪᴛʜᴜʙ Rᴇᴘᴏꜱ", callback_data: "/ghrepos" }
      ],
      [
        { text: "📂 Rᴇᴘᴏ Dᴇᴛᴀɪʟꜱ", callback_data: "/ghrepoinfo" },
        { text: "🔍 Sᴇᴀʀᴄʜ Rᴇᴘᴏꜱ", callback_data: "/ghsearch" }
      ],
      [
        { text: "👥 Fᴏʟʟᴏᴡᴇʀꜱ", callback_data: "/ghfollowers" },
        { text: "📨 Iɴᴠɪᴛᴇ Cᴏᴜɴᴛ", callback_data: "/invitecount" }
      ],
      [
        { text: "◁", callback_data: "/tools2" },
        { text: "❸", callback_data: "/start" },
        { text: "▷", callback_data: "/tools4" }
      ]
    ]
  },
  "4": {
    caption: "<b>🎌 Aɴɪᴍᴇ & Wᴇᴀᴛʜᴇʀ (4/7)</b>",
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
        { text: "📅 3-Dᴀʏ Fᴏʀᴇᴄᴀꜱᴛ", callback_data: "/forecast" }
      ],
      [
        { text: "🌫️ Aɪʀ Qᴜᴀʟɪᴛʏ", callback_data: "/airquality" }
      ],
      [
        { text: "◁", callback_data: "/tools3" },
        { text: "❹", callback_data: "/start" },
        { text: "▷", callback_data: "/tools5" }
      ]
    ]
  },
  "5": {
    caption: "<b>🤖 Aɪ Tᴏᴏʟꜱ (5/7) — Nᴏ API Nᴇᴇᴅᴇᴅ</b>",
    buttons: [
      [
        { text: "📝 Sᴜᴍᴍᴀʀɪᴢᴇ", callback_data: "/summarize" },
        { text: "💬 Sᴇɴᴛɪᴍᴇɴᴛ", callback_data: "/sentiment" }
      ],
      [
        { text: "📖 Rᴇᴀᴅᴀʙɪʟɪᴛʏ", callback_data: "/readability" },
        { text: "🔑 Kᴇʏᴡᴏʀᴅꜱ", callback_data: "/keyword" }
      ],
      [
        { text: "✏️ Pᴀʀᴀᴘʜʀᴀꜱᴇ", callback_data: "/paraphrase" },
        { text: "✍️ Gʀᴀᴍᴍᴀʀ", callback_data: "/grammar" }
      ],
      [
        { text: "🔍 Pʟᴀɢɪᴀʀɪꜱᴍ", callback_data: "/plagiarism" },
        { text: "🤖 Aɪ Cʜᴀᴛ", callback_data: "/chatbot" }
      ],
      [
        { text: "◁", callback_data: "/tools4" },
        { text: "❺", callback_data: "/start" },
        { text: "▷", callback_data: "/tools6" }
      ]
    ]
  },
  "6": {
    caption: "<b>🎲 Fᴜɴ & Rᴀɴᴅᴏᴍ (6/7)</b>",
    buttons: [
      [
        { text: "💡 Qᴜᴏᴛᴇ", callback_data: "/quote" },
        { text: "😂 Jᴏᴋᴇ", callback_data: "/joke" }
      ],
      [
        { text: "💡 Aᴅᴠɪᴄᴇ", callback_data: "/advice" },
        { text: "🎲 Rᴏʟʟ Dɪᴄᴇ", callback_data: "/roll" }
      ],
      [
        { text: "🪙 Cᴏɪɴ Fʟɪᴘ", callback_data: "/flip" },
        { text: "🎯 Rᴀɴᴅᴏᴍ Cʜᴏɪᴄᴇ", callback_data: "/choose" }
      ],
      [
        { text: "🎱 Mᴀɢɪᴄ 8-Bᴀʟʟ", callback_data: "/8ball" }
      ],
      [
        { text: "◁", callback_data: "/tools5" },
        { text: "❻", callback_data: "/start" },
        { text: "▷", callback_data: "/tools7" }
      ]
    ]
  },
  "7": {
    caption: "<b>🔤 Tᴇxᴛ Eꜰꜰᴇᴄᴛꜱ (7/7)</b>",
    buttons: [
      [
        { text: "👏 Cʟᴀᴘ Tᴇxᴛ", callback_data: "/clap" },
        { text: "🔠 Eᴍᴏᴊɪꜰʏ", callback_data: "/emojify" }
      ],
      [
        { text: "🧽 Mᴏᴄᴋ Cᴀꜱᴇ", callback_data: "/mock" },
        { text: "🔄 Rᴇᴠᴇʀꜱᴇ", callback_data: "/reverse" }
      ],
      [
        { text: "ｖ Vᴀᴘᴏʀᴡᴀᴠᴇ", callback_data: "/vaporwave" },
        { text: "👹 Zᴀʟɢᴏ", callback_data: "/zalgo" }
      ],
      [
        { text: "◁", callback_data: "/tools6" },
        { text: "❼", callback_data: "/start" },
        { text: "▷", callback_data: "/tools" }
      ]
    ]
  }
}

var page = "1"
if (request && request.data) {
  for (var p = "2"; p <= "7"; p++) {
    if (request.data.indexOf("tools" + p) !== -1) { page = p; break }
  }
}

var currentPage = pages[page] || pages["1"]

Libs.Helpers.editOrSend({
  text: currentPage.caption + adsFooter,
  reply_markup: { inline_keyboard: currentPage.buttons }
})
