/*CMD
  command: /synonym
  help: Find synonyms for a word
  need_reply: true
  auto_retry_time: 
  folder: Dɪᴄᴛɪᴏɴᴀʀʏ

  <<ANSWER
🔤 Sᴇɴᴅ ᴀ ᴡᴏʀᴅ ᴛᴏ ꜰɪɴᴅ ꜱʏɴᴏɴʏᴍꜱ.
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /syn
  group: 
CMD*/

var word = message.trim().toLowerCase()
var adsFooter = Libs.Helpers.getAdsFooter()

HTTP.get({
  url: "https://api.datamuse.com/words?rel_syn=" + encodeURIComponent(word),
  success: "onSynonymResult"
})

User.setProperty("synonymWord", word, "string")
