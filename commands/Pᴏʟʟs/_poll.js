/*CMD
  command: /poll
  help: Create a poll (e.g. /poll "Question" "Option1" "Option2")
  need_reply: true
  auto_retry_time: 
  folder: Pᴏʟʟs

  <<ANSWER
📊 Sᴇɴᴅ ᴘᴏʟʟ ɪɴ ᴛʜɪꜱ ꜰᴏʀᴍᴀᴛ:
<code>"Question" "Option1" "Option2" ...</code>
Mɪɴ 2 ᴏᴘᴛɪᴏɴs, ᴍᴀx 10.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var input = message.trim()
var matches = input.match(/"([^"]+)"/g)

if (!matches || matches.length < 3) {
  Bot.sendMessage("<b>❌ Iɴᴠᴀʟɪᴅ ꜰᴏʀᴍᴀᴛ!</b>\n\n" +
    "<b>Uꜱᴀɢᴇ:</b>\n<code>/poll \"Question\" \"Option1\" \"Option2\"</code>\n\n" +
    "Mɪɴ 2 ᴏᴘᴛɪᴏɴs, ᴍᴀx 10.", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/poll" }]] }
  })
  return
}

var question = matches[0].replace(/"/g, "")
var options = []
for (var i = 1; i < matches.length && i <= 10; i++) {
  options.push(matches[i].replace(/"/g, ""))
}

if (options.length < 2) {
  Bot.sendMessage("<b>❌ Nᴇᴇᴅ ᴀᴛ ʟᴇᴀꜱᴛ 2 ᴏᴘᴛɪᴏɴs.</b>", { parse_mode: "HTML" })
  return
}

try {
  Api.sendPoll({
    chat_id: request.chat.id,
    question: question,
    options: options,
    is_anonymous: true
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Fᴀɪʟᴇᴅ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴘᴏʟʟ.</b>\n" + Libs.Helpers.escapeHTML(e.message), { parse_mode: "HTML" })
}
