/*CMD
  command: /dict
  help: Look up word definitions
  need_reply: true
  auto_retry_time: 
  folder: Dɪᴄᴛɪᴏɴᴀʀʏ

  <<ANSWER
📖 Sᴇɴᴅ ᴀ ᴡᴏʀᴅ ᴛᴏ ʟᴏᴏᴋ ᴜᴘ.
E.g: serendipity
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /define /dictionary
  group: 
CMD*/

var word = message.trim().toLowerCase().replace(/[^a-z\s-]/g, "")
var adsFooter = Libs.Helpers.getAdsFooter()

if (!word || word.length < 2) {
  Bot.sendMessage("<b>❌ Pʟᴇᴀꜱᴇ ᴇɴᴛᴇʀ ᴀ ᴠᴀʟɪᴅ ᴡᴏʀᴅ.</b>", { parse_mode: "HTML" })
  return
}

HTTP.get({
  url: "https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(word),
  success: "onDictResult"
})

User.setProperty("dictWord", word, "string")
