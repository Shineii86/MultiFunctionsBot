/*CMD
  command: onChatInfoResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

try {
  var chat = options.result || options

  var type = chat.type || "N/A"
  var chatId = chat.id || "N/A"
  var title = chat.title || ""
  var firstName = chat.first_name || ""
  var lastName = chat.last_name || ""
  var username = chat.username || ""
  var description = chat.description || ""
  var inviteLink = chat.invite_link || ""
  var bio = chat.bio || ""
  var isVerified = chat.is_verified ? "Yᴇs ✅" : "Nᴏ"
  var isScam = chat.is_scam ? "Yᴇs ⚠️" : "Nᴏ"
  var isFake = chat.is_fake ? "Yᴇs ⚠️" : "Nᴏ"
  var isPremium = chat.is_premium ? "Yᴇs ⭐" : "Nᴏ"
  var memberCount = chat.member_count || ""

  var typeEmoji = "💬"
  if (type === "private") typeEmoji = "👤"
  else if (type === "group") typeEmoji = "👥"
  else if (type === "supergroup") typeEmoji = "🏢"
  else if (type === "channel") typeEmoji = "📢"

  var name = title || (firstName + " " + lastName).trim() || "Unknown"

  var caption = typeEmoji + " <b>Cʜᴀᴛ Iɴꜰᴏ</b>\n\n" +
    "<b>📛 Nᴀᴍᴇ:</b> " + name + "\n" +
    "<b>📂 Tʏᴘᴇ:</b> " + type + "\n" +
    "<b>🆔 Cʜᴀᴛ ID:</b> <code>" + chatId + "</code>\n"

  if (username) caption += "<b>🌐 Usᴇʀɴᴀᴍᴇ:</b> @" + username + "\n"
  if (bio) caption += "<b>📝 Bɪᴏ:</b> " + bio + "\n"
  if (description) caption += "<b>📄 Dᴇsᴄʀɪᴘᴛɪᴏɴ:</b> " + description.substring(0, 200) + "\n"
  if (memberCount) caption += "<b>👥 Mᴇᴍʙᴇʀs:</b> " + memberCount + "\n"
  if (inviteLink) caption += "<b>🔗 Iɴᴠɪᴛᴇ Lɪɴᴋ:</b> " + inviteLink + "\n"
  if (isVerified !== "Nᴏ") caption += "<b>✅ Vᴇʀɪꜰɪᴇᴅ:</b> " + isVerified + "\n"
  if (isScam !== "Nᴏ") caption += "<b>⚠️ Sᴄᴀᴍ:</b> " + isScam + "\n"
  if (isFake !== "Nᴏ") caption += "<b>⚠️ Fᴀᴋᴇ:</b> " + isFake + "\n"
  if (isPremium !== "Nᴏ") caption += "<b>⭐ Pʀᴇᴍɪᴜᴍ:</b> " + isPremium + "\n"

  caption += adsFooter

  var buttons = [
    [
      { text: "🔄 Rᴇꜰʀᴇsʜ", callback_data: "/chatinfo" },
      { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
    ],
    [
      { text: "◁", callback_data: "/tools" },
      { text: "○", callback_data: "/start" },
      { text: "✕", callback_data: "/close" }
    ]
  ]

  Bot.sendMessage(caption, {
    parse_mode: "HTML",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: buttons }
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Cᴏᴜʟᴅ ꜰᴇᴛᴄʜ ᴄʜᴀᴛ ɪɴꜰᴏ.</b>\nMᴀᴋᴇ sᴜʀᴇ ᴛʜᴇ ʙᴏᴛ ʜᴀs ᴀᴄᴄᴇss ᴛᴏ ᴛʜᴇ ᴄʜᴀᴛ.", {
    parse_mode: "HTML"
  })
}
