/*CMD
  command: onGithubResult
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Gɪᴛʜᴜʙ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adsFooter = Libs.Helpers.getAdsFooter()

try {
  var data = JSON.parse(content)

  if (data && data.login) {
    var name = data.name || data.login
    var login = data.login
    var bio = data.bio || "No bio"
    var company = data.company || "N/A"
    var location = data.location || "N/A"
    var blog = data.blog || "N/A"
    var repos = data.public_repos || 0
    var gists = data.public_gists || 0
    var followers = data.followers || 0
    var following = data.following || 0
    var created = data.created_at ? data.created_at.slice(0, 10) : "N/A"
    var avatar = data.avatar_url || ""
    var url = data.html_url || ""
    var type = data.type || "User"
    var hireable = data.hireable ? "Yᴇs ✅" : "Nᴏ ❌"

    var caption = "<b>🐙 Gɪᴛʜᴜʙ Pʀᴏꜰɪʟᴇ</b>\n\n" +
      "<b>👤 Nᴀᴍᴇ:</b> " + name + "\n" +
      "<b>🏷️ Usᴇʀɴᴀᴍᴇ:</b> @" + login + "\n" +
      "<b>📝 Bɪᴏ:</b> " + bio + "\n" +
      "<b>🏢 Cᴏᴍᴘᴀɴʏ:</b> " + company + "\n" +
      "<b>📍 Lᴏᴄᴀᴛɪᴏɴ:</b> " + location + "\n" +
      "<b>🌐 Bʟᴏɢ:</b> " + blog + "\n" +
      "<b>💼 Hɪʀᴇᴀʙʟᴇ:</b> " + hireable + "\n" +
      "<b>📅 Jᴏɪɴᴇᴅ:</b> " + created + "\n\n" +
      "<b>📊 Sᴛᴀᴛs:</b>\n" +
      "» 📦 Rᴇᴘᴏs: <b>" + repos + "</b>\n" +
      "» 📝 Gɪsᴛs: <b>" + gists + "</b>\n" +
      "» 👥 Fᴏʟʟᴏᴡᴇʀs: <b>" + followers + "</b>\n" +
      "» 👤 Fᴏʟʟᴏᴡɪɴɢ: <b>" + following + "</b>\n"

    if (url) caption += "\n🔗 <a href='" + url + "'>Vɪᴇᴡ Pʀᴏꜰɪʟᴇ</a>"
    caption += adsFooter

    var buttons = [
      [
        { text: "🔍 Sᴇᴀʀᴄʜ Aɢᴀɪɴ", callback_data: "/github" },
        { text: "Cʟᴏsᴇ ✕", callback_data: "/close" }
      ],
      [
        { text: "◁", callback_data: "/tools" },
        { text: "○", callback_data: "/start" },
        { text: "✕", callback_data: "/close" }
      ]
    ]

    if (avatar) {
      Api.sendPhoto({
        chat_id: user.telegramid,
        photo: avatar,
        caption: caption,
        parse_mode: "HTML",
        reply_markup: { inline_keyboard: buttons }
      })
    } else {
      Bot.sendMessage(caption, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: { inline_keyboard: buttons }
      })
    }
  } else {
    Bot.sendMessage("<b>❌ Gɪᴛʜᴜʙ ᴜsᴇʀ ɴᴏᴛ ꜰᴏᴜɴᴅ.</b>", {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/github" }]]
      }
    })
  }
} catch (e) {
  Bot.sendMessage("<b>❌ Eʀʀᴏʀ ꜰᴇᴛᴄʜɪɴɢ Gɪᴛʜᴜʙ ᴅᴀᴛᴀ.</b>", { parse_mode: "HTML" })
}
