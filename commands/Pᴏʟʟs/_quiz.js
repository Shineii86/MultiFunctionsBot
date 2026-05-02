/*CMD
  command: /quiz
  help: Create a quiz (e.g. /quiz "Question" "Correct" "Wrong1" "Wrong2")
  need_reply: true
  auto_retry_time: 
  folder: Pᴏʟʟs

  <<ANSWER
🎯 Sᴇɴᴅ Qᴜɪᴢ ɪɴ ᴛʜɪꜱ ꜰᴏʀᴍᴀᴛ:
<code>"Question" "Correct Answer" "Wrong1" "Wrong2" ...</code>
Fɪʀꜱᴛ ᴏᴘᴛɪᴏɴ ɪꜱ ᴀʟᴡᴀʏꜱ ᴄᴏʀʀᴇᴄᴛ.
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
    "<b>Uꜱᴀɢᴇ:</b>\n<code>/quiz \"Question\" \"Correct\" \"Wrong1\" \"Wrong2\"</code>\n\n" +
    "Fɪʀꜱᴛ ᴏᴘᴛɪᴏɴ ɪꜱ ᴄᴏʀʀᴇᴄᴛ. Mɪɴ 2 ᴏᴘᴛɪᴏɴs.", {
    parse_mode: "HTML",
    reply_markup: { inline_keyboard: [[{ text: "🔁 Tʀʏ Aɢᴀɪɴ", callback_data: "/quiz" }]] }
  })
  return
}

var question = matches[0].replace(/"/g, "")
var options = []
for (var i = 1; i < matches.length && i <= 10; i++) {
  options.push(matches[i].replace(/"/g, ""))
}

try {
  Api.sendPoll({
    chat_id: request.chat.id,
    question: question,
    options: options,
    type: "quiz",
    correct_option_id: 0,
    is_anonymous: true
  })
} catch (e) {
  Bot.sendMessage("<b>❌ Fᴀɪʟᴇᴅ ᴛᴏ ᴄʀᴇᴀᴛᴇ Qᴜɪᴢ.</b>\n" + Libs.Helpers.escapeHTML(e.message), { parse_mode: "HTML" })
}
