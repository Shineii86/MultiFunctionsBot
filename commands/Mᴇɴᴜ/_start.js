/*CMD
  command: /start
  help: 
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
const chats = ["@MaximXBots"]

chats.forEach(chat_id => {
  Api.getChatMember({
    chat_id: chat_id,
    user_id: user.telegramid,
    on_result: "/quinx"
  })
})

// ✅ Function to handle self-referrals
function doTouchOwnLink() {
  Api.sendMessage({
    chat_id: user.telegramid,
    text: `<b>⚠️ 𝖤𝗋𝗋𝗈𝗋: 𝖲𝖾𝗅𝖿-𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅𝗌 𝖠𝗋𝖾 𝖭𝗈𝗍 𝖠𝗅𝗅𝗈𝗐𝖾𝖽.</b>
  
𝖸𝗈𝗎 𝖢𝖺𝗇𝗇𝗈𝗍 𝖴𝗌𝖾 𝖸𝗈𝗎𝗋 𝖮𝗐𝗇 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖫𝗂𝗇𝗄 𝖳𝗈 𝖩𝗈𝗂𝗇 𝖳𝗁𝗂𝗌 𝖡𝗈𝗍. 𝖯𝗅𝖾𝖺𝗌𝖾 𝖲𝗁𝖺𝗋𝖾 𝖸𝗈𝗎𝗋 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖫𝗂𝗇𝗄 𝖶𝗂𝗍𝗁 𝖮𝗍𝗁𝖾𝗋𝗌 𝖳𝗈 𝖦𝖺𝗂𝗇 𝖱𝖾𝗐𝖺𝗋𝖽𝗌. 𝖳𝗁𝖺𝗇𝗄 𝖸𝗈𝗎!`,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    message_effect_id: "5104858069142078462", // 👎
    reply_markup: {
      inline_keyboard: [[{ text: "Cʟᴏsᴇ", callback_data: "/close" }]]
    }
  })
}

// ✅ Function when a user joins via a public channel
function doAttracted(channel) {
  Api.sendMessage({
    chat_id: user.telegramid,
    text: `<b>📢 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖭𝗈𝗍𝗂𝖿𝗂𝖼𝖺𝗍𝗂𝗈𝗇:</b>
  
𝖸𝗈𝗎 𝖩𝗈𝗂𝗇𝖾𝖽 𝖳𝗁𝖾 𝖡𝗈𝗍 𝖳𝗁𝗋𝗈𝗎𝗀𝗁 𝖮𝗎𝗋 𝖯𝗎𝖻𝗅𝗂𝖼 𝖢𝗁𝖺𝗇𝗇𝖾𝗅 @MaximXBots. 𝖳𝗁𝖺𝗇𝗄 𝖸𝗈𝗎 𝖥𝗈𝗋 𝖩𝗈𝗂𝗇𝗂𝗇𝗀 𝖬𝖾 👑!`,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    message_effect_id: "5044134455711629726", // ❤️
    reply_markup: {
      inline_keyboard: [[{ text: "Cʟᴏsᴇ", callback_data: "/close" }]]
    }
  })
}

// ✅ Function when a user joins using a referral link
function doAtractedByUser(refUser) {
  var userBalance = Libs.ResourcesLib.userRes("balance")
  var refBalance = Libs.ResourcesLib.anotherUserRes(
    "balance",
    refUser.telegramid
  )
  var isSpecialReferral = params && params == "REACT13437642" // Check if it's the special link

  if (isSpecialReferral) {
    userBalance.add(1000) // Special referral link gives 1000 REACT
  } else {
    userBalance.add(5) // Default referral bonus for other links
  }

  refBalance.add(5) // Referrer always gets 5 REACT

  // ✅ Special Welcome Message for Special Referral Users
  if (isSpecialReferral) {
    Api.sendMessage({
      chat_id: user.telegramid,
      text: `<b>🎉 𝖶𝖾𝗅𝖼𝗈𝗆𝖾! 𝖸𝗈𝗎 𝖴𝗌𝖾𝖽 𝖠 𝖲𝗉𝖾𝖼𝗂𝖺𝗅 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖫𝗂𝗇𝗄!</b>
    
💮 𝖸𝗈𝗎'𝗏𝖾 𝖱𝖾𝖼𝖾𝗂𝗏𝖾𝖽 <b>1000 $REACT</b> 𝖠𝗌 𝖠 𝖲𝗉𝖾𝖼𝗂𝖺𝗅 𝖡𝗈𝗇𝗎𝗌!
𝖤𝗑𝗉𝗅𝗈𝗋𝖾 𝖮𝗎𝗋 𝖥𝖾𝖺𝗍𝗎𝗋𝖾𝗌 𝖠𝗇𝖽 𝖲𝗍𝖺𝗋𝗍 𝖤𝖺𝗋𝗇𝗂𝗇𝗀 𝖬𝗈𝗋𝖾 𝖱𝖾𝗐𝖺𝗋𝖽𝗌!`,
      parse_mode: "HTML",
      disable_web_page_preview: true,
      message_effect_id: "5046509860389126442", // 🔥
      reply_markup: {
        inline_keyboard: [[{ text: "Cʟᴏsᴇ", callback_data: "/close" }]]
      }
    })

    // ✅ Notify You (Admin) About Special Referral Users
    Api.sendMessage({
      chat_id: "5572081489", // Your Telegram ID
      text: `<b>🌟 𝖲𝗉𝖾𝖼𝗂𝖺𝗅 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖠𝗅𝖾𝗋𝗍!</b>
𝖠 𝖴𝗌𝖾𝗋 𝖩𝗈𝗂𝗇𝖾𝖽 𝖴𝗌𝗂𝗇𝗀 𝖸𝗈𝗎𝗋 𝖲𝗉𝖾𝖼𝗂𝖺𝗅 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖫𝗂𝗇𝗄:
      
<b>👤 𝖴𝗌𝖾𝗋:</b> <a href="tg://openmessage?user_id=${user.telegramid}">${user.first_name}</a>
      
🔥 Bonus Given: 1000 REACT`,
      parse_mode: "HTML",
      disable_web_page_preview: true,
      message_effect_id: "5107584321108051014", // 👍
      reply_markup: {
        inline_keyboard: [[{ text: "Cʟᴏsᴇ", callback_data: "/close" }]]
      }
    })
  } else {
    // ✅ Normal Welcome Message for Regular Referrals
    Api.sendMessage({
      chat_id: user.telegramid,
      text: `<b>🎉 𝖶𝖾𝗅𝖼𝗈𝗆𝖾 𝖳𝗈 𝖳𝗁𝖾 <a href='t.me/${bot.name}'>𝖱𝖾𝖺𝖼𝗍𝗂𝗈𝗇 𝖡𝗎𝗂𝗅𝖽𝖾𝗋 𝖡𝗈𝗍</a></b>
      
𝖳𝗁𝖺𝗇𝗄 𝖸𝗈𝗎 𝖥𝗈𝗋 𝖩𝗈𝗂𝗇𝗂𝗇𝗀 𝖳𝗁𝗋𝗈𝗎𝗀𝗁 𝖠 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖫𝗂𝗇𝗄. 𝖸𝗈𝗎'𝗏𝖾 𝖱𝖾𝖼𝖾𝗂𝗏𝖾𝖽 <b>5 $REACT</b> 𝖠𝗌 𝖠 𝖡𝗈𝗇𝗎𝗌! 𝖲𝗍𝖺𝗋𝗍 𝖤𝖺𝗋𝗇𝗂𝗇𝗀 𝖬𝗈𝗋𝖾 𝖱𝖾𝗐𝖺𝗋𝖽𝗌 𝖳𝗈𝖽𝖺𝗒!`,
      parse_mode: "HTML",
      disable_web_page_preview: true,
      message_effect_id: "5046509860389126442", // 🔥
      reply_markup: {
        inline_keyboard: [[{ text: "Cʟᴏsᴇ", callback_data: "/close" }]]
      }
    })
  }

  // ✅ Notify the referrer
  Api.sendMessage({
    chat_id: refUser.telegramid,
    text: `<b>🔔 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖭𝗈𝗍𝗂𝖿𝗂𝖼𝖺𝗍𝗂𝗈𝗇:</b>
  
𝖠 𝖭𝖾𝗐 𝖴𝗌𝖾𝗋 𝖧𝖺𝗌 𝖩𝗈𝗂𝗇𝖾𝖽 𝖳𝗁𝖾 𝖡𝗈𝗍 𝖴𝗌𝗂𝗇𝗀 𝖸𝗈𝗎𝗋 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖫𝗂𝗇𝗄:
  
<b>👤 𝖴𝗌𝖾𝗋:</b> <a href="tg://openmessage?user_id=${user.telegramid}">${user.first_name}</a>
  
𝖳𝗁𝖺𝗇𝗄 𝖸𝗈𝗎 𝖥𝗈𝗋 𝖲𝗁𝖺𝗋𝗂𝗇𝗀 𝖸𝗈𝗎𝗋 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖫𝗂𝗇𝗄! 𝖪𝖾𝖾𝗉 𝖨𝗇𝗏𝗂𝗍𝗂𝗇𝗀 𝖬𝗈𝗋𝖾 𝖴𝗌𝖾𝗋𝗌 𝖳𝗈 𝖤𝖺𝗋𝗇 𝖱𝖾𝗐𝖺𝗋𝖽𝗌.`,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    message_effect_id: "5046509860389126442", // 🔥
    reply_markup: {
      inline_keyboard: [[{ text: "Cʟᴏsᴇ", callback_data: "/close" }]]
    }
  })
}

// ✅ Function for users who have already joined
function doAlreadyAttracted() {
  Api.sendMessage({
    chat_id: user.telegramid,
    text: `<b>⚠️ 𝖭𝗈𝗍𝗂𝖼𝖾:</b> 𝖨𝗍 𝖲𝖾𝖾𝗆𝗌 𝖳𝗁𝖺𝗍 𝖸𝗈𝗎 𝖧𝖺𝗏𝖾 𝖠𝗅𝗋𝖾𝖺𝖽𝗒 𝖲𝗍𝖺𝗋𝗍𝖾𝖽 𝖳𝗁𝗂𝗌 𝖡𝗈𝗍. 𝖳𝗁𝖺𝗇𝗄 𝖸𝗈𝗎 𝖥𝗈𝗋 𝖸𝗈𝗎𝗋 𝖨𝗇𝗍𝖾𝗋𝖾𝗌𝗍, 𝖡𝗎𝗍 𝖱𝖾𝖿𝖾𝗋𝗋𝖺𝗅 𝖱𝖾𝗐𝖺𝗋𝖽𝗌 𝖠𝗋𝖾 𝖮𝗇𝗅𝗒 𝖥𝗈𝗋 𝖭𝖾𝗐 𝖴𝗌𝖾𝗋𝗌. 𝖤𝗇𝗃𝗈𝗒 𝖳𝗁𝖾 𝖥𝖾𝖺𝗍𝗎𝗋𝖾𝗌 𝖮𝖿 𝖮𝗎𝗋 𝖡𝗈𝗍!`,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    message_effect_id: "5107584321108051014", // 👍
    reply_markup: {
      inline_keyboard: [[{ text: "Cʟᴏsᴇ", callback_data: "/close" }]]
    }
  })
}

// ✅ Referral tracking configuration
var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted,
  linkPrefix: "REACT"
}

// ✅ Start referral tracking
Libs.ReferralLib.currentUser.track(trackOptions)

// 📢 Broadcast
const idstore = Bot.getProp("idstore", [])
const done = User.getProp("done")
if (!done) {
  idstore.push(user.telegramid)
  Bot.setProp("idstore", idstore, "json")
  User.setProp("done", user.telegramid, "text")
}
const id = params

// 𝗡𝗘𝗪 𝗨𝗦𝗘𝗥 𝗟𝗢𝗚 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡 //
// Retrieve admin ID dynamically
var admin = Bot.getProperty("admin")

// Check if the chat was just created and it's a private chat
if (chat && chat.just_created && chat.chat_type == "private") {
  // Initialize or retrieve the global counter for new users
  var status = Libs.ResourcesLib.anotherChatRes("totalusers", "global")

  // Ensure the counter is properly initialized if it's not already
  if (status.value() === undefined || status.value() === 0) {
    status.set(1) // Set initial value to 1
  } else {
    status.add(1) // Increment the counter if it already exists
  }
  // Get the current date and time in Asia/Kolkata timezone
  var currentDate = new Date().toLocaleDateString("en-US", {
    timeZone: "Asia/Kolkata"
  })
  var currentTime = new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata"
  })

  // User's Name
  var Name =
    user && user.first_name
      ? `<a href='tg://user?id=${user.telegramid}'>${user.first_name}</a>`
      : "Unknown"

  // Bot's Username
  var BotName = bot.name

  // Construct The Log Message
  var adminText = `
<b>▧ Nᴇᴡ Usᴇʀ Nᴏᴛɪғɪᴄᴀᴛɪᴏɴ ✨</b>
┋
┋┏ Nᴀᴍᴇ: ${Name}
┋┣ Usᴇʀɴᴀᴍᴇ: <a href="tg://user?id=${user.telegramid}">@${user.username}</a>
┋┣ Tᴇʟᴇɢʀᴀᴍ Iᴅ: <code>${user.telegramid}</code>
┋┃
┋┣ Dᴀᴛᴇ: ${currentDate}
┋┣ Tɪᴍᴇ: ${currentTime}
┋┃
┋┣ Tᴏᴛᴀʟ Usᴇʀs: ${status.value()}
┋┗ Bᴏᴛ Nᴀᴍᴇ: @${BotName}`

  // Send New user Notification
  Api.sendMessage({
    chat_id: admin,
    text: adminText,
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Pʀᴏғɪʟᴇ Lɪɴᴋ",
            url: `tg://openmessage?user_id=${user.telegramid}`
          }
        ]
      ]
    }
  })
}

// Redirect new users to Quinx
// Bot.runCommand("/quinx")

