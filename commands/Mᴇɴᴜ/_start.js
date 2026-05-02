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
    text: "<b>⚠️ 𝖤𝗋𝗋𝗈𝗋: 𝖲𝖾𝗅𝖿-𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅𝗌 𝖠𝗋𝖾 𝖭𝗈𝗍 𝖠𝗅𝗅𝗈𝗐𝖾𝖽.</b>\n\n𝖸𝗈𝗎 𝖢𝖺𝗇𝗇𝗈𝗍 𝖴𝗌𝖾 𝖸𝗈𝗎𝗋 𝖮𝗐𝗇 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖫𝗂𝗇𝗄. 𝖯𝗅𝖾𝖺𝗌𝖾 𝖲𝗁𝖺𝗋𝖾 𝖸𝗈𝗎𝗋 𝖫𝗂𝗇𝗄 𝖶𝗂𝗍𝗁 𝖮𝗍𝗁𝖾𝗋𝗌 𝖳𝗈 𝖦𝖺𝗂𝗇 𝖱𝖾𝗐𝖺𝗋𝖽𝗌.",
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
    text: "<b>📢 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖭𝗈𝗍𝗂𝖿𝗂𝖼𝖺𝗍𝗂𝗈𝗇:</b>\n\n𝖸𝗈𝗎 𝖩𝗈𝗂𝗇𝖾𝖽 𝖳𝗁𝖾 𝖡𝗈𝗍 𝖳𝗁𝗋𝗈𝗎𝗀𝗁 𝖮𝗎𝗋 𝖯𝗎𝖻𝗅𝗂𝖼 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 @MaximXBots. 𝖳𝗁𝖺𝗇𝗄 𝖸𝗈𝗎 𝖥𝗈𝗋 𝖩𝗈𝗂𝗇𝗂𝗇𝗀!",
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
      text: "<b>🎉 𝖶𝖾𝗅𝖼𝗈𝗆𝖾! 𝖸𝗈𝗎 𝖴𝗌𝖾𝖽 𝖠 𝖲𝗉𝖾𝖼𝗂𝖺𝗅 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖫𝗂𝗇𝗄!</b>\n\n💮 𝖸𝗈𝗎'𝗏𝖾 𝖱𝖾𝖼𝖾𝗂𝗏𝖾𝖽 <b>1000 $REACT</b> 𝖠𝗌 𝖠 𝖲𝗉𝖾𝖼𝗂𝖺𝗅 𝖡𝗈𝗇𝗎𝗌!\n𝖤𝗑𝗉𝗅𝗈𝗋𝖾 𝖮𝗎𝗋 𝖥𝖾𝖺𝗍𝗎𝗋𝖾𝗌 𝖠𝗇𝖽 𝖲𝗍𝖺𝗋𝗍 𝖤𝖺𝗋𝗇𝗂𝗇𝗀 𝖬𝗈𝗋𝖾!",
      parse_mode: "HTML",
      disable_web_page_preview: true,
      message_effect_id: "5046509860389126442",
      reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
    })

    // Notify admin about special referral
    var admin = Bot.getProperty("admin")
    if (admin) {
      Api.sendMessage({
        chat_id: admin,
        text: "<b>🌟 𝖲𝗉𝖾𝖼𝗂𝖺𝗅 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖠𝗅𝖾𝗋𝗍!</b>\n\n<b>👤 𝖴𝗌𝖾𝗋:</b> " + Libs.Helpers.getUserMention() + "\n🔥 Bonus Given: 1000 REACT",
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
      })
    }
  } else {
    Api.sendMessage({
      chat_id: user.telegramid,
      text: "<b>🎉 𝖶𝖾𝗅𝖼𝗈𝗆𝖾 𝖳𝗈 <a href='t.me/" + bot.name + "'>𝖬𝗎𝗅𝗍𝗂 𝖥𝗎𝗇𝖼𝗍𝗂𝗈𝗇𝗌 𝖡𝗈𝗍</a></b>\n\n𝖳𝗁𝖺𝗇𝗄 𝖸𝗈𝗎 𝖥𝗈𝗋 𝖩𝗈𝗂𝗇𝗂𝗇𝗀 𝖳𝗁𝗋𝗈𝗎𝗀𝗁 𝖠 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖫𝗂𝗇𝗄. 𝖸𝗈𝗎'𝗏𝖾 𝖱𝖾𝖼𝖾𝗂𝗏𝖾𝖽 <b>5 $REACT</b> 𝖠𝗌 𝖠 𝖡𝗈𝗇𝗎𝗌!",
      parse_mode: "HTML",
      disable_web_page_preview: true,
      message_effect_id: "5046509860389126442",
      reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
    })
  }

  // Notify the referrer
  Api.sendMessage({
    chat_id: refUser.telegramid,
    text: "<b>🔔 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖭𝗈𝗍𝗂𝖿𝗂𝖼𝖺𝗍𝗂𝗈𝗇:</b>\n\n𝖠 𝖭𝖾𝗐 𝖴𝗌𝖾𝗋 𝖧𝖺𝗌 𝖩𝗈𝗂𝗇𝖾𝖽 𝖵𝗂𝖺 𝖸𝗈𝗎𝗋 𝖫𝗂𝗇𝗄:\n\n<b>👤 𝖴𝗌𝖾𝗋:</b> " + Libs.Helpers.getUserMention() + "\n\n𝖳𝗁𝖺𝗇𝗄 𝖸𝗈𝗎 𝖥𝗈𝗋 𝖲𝗁𝖺𝗋𝗂𝗇𝗀!",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    message_effect_id: "5046509860389126442",
    reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
  })
}

// Already joined
function doAlreadyAttracted() {
  Api.sendMessage({
    chat_id: user.telegramid,
    text: "<b>⚠️ 𝖭𝗈𝗍𝗂𝖼𝖾:</b> 𝖸𝗈𝗎'𝗏𝖾 𝖠𝗅𝗋𝖾𝖺𝖽𝗒 𝖲𝗍𝖺𝗋𝗍𝖾𝖽 𝖳𝗁𝗂𝗌 𝖡𝗈𝗍. 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖱𝖾𝗐𝖺𝗋𝖽𝗌 𝖠𝗋𝖾 𝖮𝗇𝗅𝗒 𝖥𝗈𝗋 𝖭𝖾𝗐 𝖴𝗌𝖾𝗋𝗌.",
    parse_mode: "HTML",
    disable_web_page_preview: true,
    message_effect_id: "5107584321108051014",
    reply_markup: { inline_keyboard: Libs.Helpers.getCloseButton() }
  })
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

  var now = new Date()
  var istOffset = 5.5 * 60 * 60 * 1000
  var istDate = new Date(now.getTime() + istOffset)
  var dateStr = istDate.toISOString().slice(0, 10)
  var timeStr = istDate.toISOString().slice(11, 19)

  if (admin) {
    var Name = Libs.Helpers.getUserMention()
    var adminText = "<b>▧ Nᴇᴡ Usᴇʀ Nᴏᴛɪғɪᴄᴀᴛɪᴏɴ ✨</b>\n" +
      "┋\n" +
      "┋┏ Nᴀᴍᴇ: " + Name + "\n" +
      "┋┣ Usᴇʀɴᴀᴍᴇ: @${" + (user.username || "N/A") + "}\n" +
      "┋┣ Tᴇʟᴇɢʀᴀᴍ Iᴅ: <code>" + user.telegramid + "</code>\n" +
      "┋┃\n" +
      "┋┣ Dᴀᴛᴇ: " + dateStr + "\n" +
      "┋┣ Tɪᴍᴇ: " + timeStr + "\n" +
      "┋┃\n" +
      "┋┣ Tᴏᴛᴀʟ Usᴇʀs: " + status.value() + "\n" +
      "┋┗ Bᴏᴛ Nᴀᴍᴇ: @" + bot.name

    Api.sendMessage({
      chat_id: admin,
      text: adminText,
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "Pʀᴏғɪʟᴇ Lɪɴᴋ", url: "tg://user?id=" + user.telegramid }]]
      }
    })
  }
}
