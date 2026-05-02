/*CMD
  command: setLang
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Tʀᴀɴsʟᴀᴛᴇ

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var selectedLang = params || message.split(" ")[1]
User.setProperty("selectedLang", selectedLang, "string")
User.setProperty("waitingForText", true, "boolean")

var adsFooter = Libs.Helpers.getAdsFooter()

var langNames = {
  en: "English", es: "Español", fr: "Français", de: "Deutsch",
  ru: "Русский", pt: "Português", zh: "中文", ja: "日本語",
  ko: "한국어", it: "Italiano", nl: "Nederlands", tr: "Türkçe",
  ar: "العربية", hi: "हिन्दी", id: "Bahasa", pl: "Polski",
  uk: "Українська", vi: "Tiếng Việt", th: "ไทย", el: "Ελληνικά", cs: "Čeština"
}

var langName = langNames[selectedLang] || selectedLang

var caption = "<b>✅ Lᴀɴɢᴜᴀɢᴇ Sᴇᴛ Tᴏ:</b> " + langName + " (" + selectedLang + ")\n\n" +
  "Nᴏᴡ Sᴇɴᴅ Mᴇ Tʜᴇ Tᴇxᴛ Tᴏ Tʀᴀɴsʟᴀᴛᴇ." +
  adsFooter

var buttons = Libs.Helpers.getNavButtons()

Libs.Helpers.editOrSend({
  text: caption,
  reply_markup: { inline_keyboard: buttons }
})
