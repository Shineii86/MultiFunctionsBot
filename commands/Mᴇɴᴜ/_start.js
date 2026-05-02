/*CMD
  command: /start
  help: Start the bot and access the main menu
  need_reply: false
  auto_retry_time: 
  folder: Mᴇɴᴜ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /restart
  group: 
CMD*/

// Membership Checker
var chats = ["@MaximXBots"]
chats.forEach(function(chat_id) {
  Api.getChatMember({
    chat_id: chat_id,
    user_id: user.telegramid,
    on_result: "/quinx"
  })
})

// Referral: self-link touched
function doTouchOwnLink() {
  Api.sendMessage({
    chat_id: user.telegramid,
    text: "<b>⚠️ Sᴇʟꜰ-Rᴇꜰᴇʀʀᴀʟ Dᴇᴛᴇᴄᴛᴇᴅ</b>\n\n" +
      "𝖸𝗈𝗎 𝖢𝖺𝗇𝗇𝗈𝗍 𝖴𝗌𝖾 𝖸𝗈𝗎𝗋 𝖮𝗐𝗇 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖫𝗂𝗇𝗄.\n" +
      "𝖯𝗅𝖾𝖺𝗌𝖾 𝖲𝗁𝖺𝗋𝖾 𝖸𝗈𝗎𝗋 𝖫𝗂𝗇𝗄 𝖶𝗂𝗍𝗁 𝖮𝗍𝗁𝖾𝗋𝗌 𝖳𝗈 𝖦𝖺𝗂𝗇 𝖱𝖾𝗐𝖺𝗋𝖽𝗌.",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    message_effect_id: "5104858069142078462",
    reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
  })
}

// Referral: joined via public channel
function doAttracted(channel) {
  Api.sendMessage({
    chat_id: user.telegramid,
    text: "<b>📢 Rᴇꜰᴇʀʀᴀʟ Nᴏᴛɪꜰɪᴄᴀᴛɪᴏɴ</b>\n\n" +
      "𝖸𝗈𝗎 𝖩𝗈𝗂𝗇𝖾𝖽 𝖳𝗁𝗋𝗈𝗎𝗀𝗁 @MaximXBots.\n" +
      "𝖳𝗁𝖺𝗇𝗄 𝖸𝗈𝗎 𝖥𝗈𝗋 𝖩𝗈𝗂𝗇𝗂𝗇𝗀! 🎉",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    message_effect_id: "5044134455711629726",
    reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
  })
}

// Referral: joined via user link
function doAtractedByUser(refUser) {
  var userBalance = Libs.ResourcesLib.userRes("balance")
  var refBalance = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid)
  var isSpecial = params && params === "REACT13437642"

  if (isSpecial) {
    userBalance.add(1000)
  } else {
    userBalance.add(5)
  }
  refBalance.add(5)

  if (isSpecial) {
    Api.sendMessage({
      chat_id: user.telegramid,
      text: "<b>🎉 Sᴘᴇᴄɪᴀʟ Rᴇꜰᴇʀʀᴀʟ Bᴏɴᴜs!</b>\n\n" +
        "💮 Yᴏᴜ'ᴠᴇ Rᴇᴄᴇɪᴠᴇᴅ <b>1000 $REACT</b> Aꜱ A Sᴘᴇᴄɪᴀʟ Bᴏɴᴜꜱ!\n" +
        "E𝐱ᴘʟᴏʀᴇ Oᴜʀ Fᴇᴀᴛᴜʀᴇꜱ Aɴᴅ Sᴛᴀʀᴛ Eᴀʀɴɪɴɢ Mᴏʀᴇ!",
      parse_mode: "HTML",
      disable_web_page_preview: true,
      message_effect_id: "5046509860389126442",
      reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
    })
    var admin = Bot.getProperty("admin")
    if (admin) {
      Api.sendMessage({
        chat_id: admin,
        text: "<b>🌟 Sᴘᴇᴄɪᴀʟ Rᴇꜰᴇʀʀᴀʟ Aʟᴇʀᴛ!</b>\n\n" +
          "<b>👤 Uꜱᴇʀ:</b> " + Libs.Helpers.getUserMention() + "\n" +
          "<b>🔥 Bᴏɴᴜꜱ:</b> 1000 REACT",
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
      })
    }
  } else {
    Api.sendMessage({
      chat_id: user.telegramid,
      text: "<b>🎉 Wᴇʟᴄᴏᴍᴇ Tᴏ <a href='t.me/" + bot.name + "'>Mᴜʟᴛɪ Fᴜɴᴄᴛɪᴏɴꜱ Bᴏᴛ</a></b>\n\n" +
        "𝖸𝗈𝗎'𝗏𝖾 𝖱𝖾𝖼𝖾𝗂𝗏𝖾𝖽 <b>5 $REACT</b> Aꜱ A Rᴇꜰᴇʀʀᴀʟ Bᴏɴᴜꜱ! 🎁",
      parse_mode: "HTML",
      disable_web_page_preview: true,
      message_effect_id: "5046509860389126442",
      reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
    })
  }

  Api.sendMessage({
    chat_id: refUser.telegramid,
    text: "<b>🔔 Rᴇꜰᴇʀʀᴀʟ Nᴏᴛɪꜰɪᴄᴀᴛɪᴏɴ</b>\n\n" +
      "A Nᴇᴡ Uꜱᴇʀ Jᴏɪɴᴇᴅ Vɪᴀ Yᴏᴜʀ Lɪɴᴋ:\n" +
      "<b>👤 Uꜱᴇʀ:</b> " + Libs.Helpers.getUserMention() + "\n\n" +
      "Tʜᴀɴᴋ Yᴏᴜ Fᴏʀ Sʜᴀʀɪɴɢ! 🎉",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    message_effect_id: "5046509860389126442",
    reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
  })
}

// Already joined
function doAlreadyAttracted() {
  // Silently pass - don't spam returning users
}

// Referral tracking
Libs.ReferralLib.currentUser.track({
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted,
  linkPrefix: "REACT"
})

// Broadcast: register user
var idstore = Bot.getProp("idstore", [])
var done = User.getProp("done")
if (!done) {
  idstore.push(user.telegramid)
  Bot.setProp("idstore", idstore, "json")
  User.setProp("done", user.telegramid, "text")
}

// New user notification
var admin = Bot.getProperty("admin")
if (chat && chat.just_created && chat.chat_type === "private") {
  var status = Libs.ResourcesLib.anotherChatRes("totalusers", "global")
  if (status.value() === undefined || status.value() === 0) {
    status.set(1)
  } else {
    status.add(1)
  }

  if (admin) {
    var Name = Libs.Helpers.getUserMention()
    var username = user.username ? "@" + user.username : "N/A"
    var istDate = Libs.Helpers.getISTDate()
    var dateStr = istDate.toISOString().slice(0, 10)
    var timeStr = istDate.toISOString().slice(11, 19)

    var adminText = "<b>✨ Nᴇᴡ Uꜱᴇʀ Nᴏᴛɪꜰɪᴄᴀᴛɪᴏɴ</b>\n" +
      Libs.Helpers.separator() + "\n\n" +
      "<b>👤 Nᴀᴍᴇ:</b> " + Name + "\n" +
      "<b>🌐 Uꜱᴇʀɴᴀᴍᴇ:</b> " + username + "\n" +
      "<b>🆔 Tᴇʟᴇɢʀᴀᴍ Iᴅ:</b> <code>" + user.telegramid + "</code>\n\n" +
      "<b>📅 Dᴀᴛᴇ:</b> " + dateStr + "\n" +
      "<b>🕐 Tɪᴍᴇ:</b> " + timeStr + "\n\n" +
      "<b>📊 Tᴏᴛᴀʟ Uꜱᴇʀꜱ:</b> " + Libs.Helpers.formatNumber(status.value()) + "\n" +
      "<b>🤖 Bᴏᴛ:</b> @" + bot.name

    Api.sendMessage({
      chat_id: admin,
      text: adminText,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "👤 Pʀᴏꜰɪʟᴇ Lɪɴᴋ", url: "tg://user?id=" + user.telegramid }]]
      }
    })
  }
}

// Main welcome message
var totalUsers = Libs.ResourcesLib.anotherChatRes("totalusers", "global")
var userCount = totalUsers.value() || 0
var adsFooter = Libs.Helpers.getAdsFooter()

var welcome = "<b>╭━━━━━━━━━━━━━━━━━╮</b>\n" +
  "  <b>🤖 Mᴜʟᴛɪ Fᴜɴᴄᴛɪᴏɴꜱ Bᴏᴛ</b>\n" +
  "  <i>Yᴏᴜʀ Aʟʟ-Iɴ-Oɴᴇ Tᴇʟᴇɢʀᴀᴍ Uᴛɪʟɪᴛʏ</i>\n" +
  "<b>╰━━━━━━━━━━━━━━━━━╯</b>\n\n" +
  "Hᴇʏ " + Libs.Helpers.getUserMention() + "! Wᴇʟᴄᴏᴍᴇ Bᴀᴄᴋ! 👋\n\n" +
  "<b>📊 Sᴛᴀᴛꜱ:</b>\n" +
  "├ 👥 " + Libs.Helpers.formatNumber(userCount) + " Uꜱᴇʀꜱ Tʀᴜꜱᴛ Uꜱ\n" +
  "├ ⚡ 50+ Pᴏᴡᴇʀꜰᴜʟ Tᴏᴏʟꜱ\n" +
  "└ 🆓 Aʟʟ Fᴇᴀᴛᴜʀᴇꜱ Fʀᴇᴇ\n\n" +
  "<b>⚡ Qᴜɪᴄᴋ Aᴄᴄᴇꜱꜱ:</b>\n" +
  "├ /help — Aʟʟ Cᴏᴍᴍᴀɴᴅꜱ\n" +
  "├ /tools — Bʀᴏᴡꜱᴇ Tᴏᴏʟꜱ\n" +
  "└ /about — Bᴏᴛ Iɴꜰᴏ\n\n" +
  "<i>Pɪᴄᴋ Aɴ Oᴘᴛɪᴏɴ Bᴇʟᴏᴡ Tᴏ Gᴇᴛ Sᴛᴀʀᴛᴇᴅ!</i>" +
  adsFooter

var buttons = [
  [
    { text: "📚 Hᴇʟᴘ", callback_data: "/help" },
    { text: "⚙️ Tᴏᴏʟꜱ", callback_data: "/tools" }
  ],
  [
    { text: "ℹ️ Aʙᴏᴜᴛ", callback_data: "/about" },
    { text: "💬 Fᴇᴇᴅʙᴀᴄᴋ", callback_data: "/feedback" }
  ],
  [
    { text: "🐙 Gɪᴛʜᴜʙ", url: "https://github.com/Shineii86/MultiFunctionsBot" }
  ]
]

Libs.Helpers.editOrSend({
  text: welcome,
  reply_markup: { inline_keyboard: buttons }
})
