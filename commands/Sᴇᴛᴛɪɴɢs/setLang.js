/*CMD
  command: setLang
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Sᴇᴛᴛɪɴɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var langCode = params || "en"
User.setProperty("lang", langCode, "string")

var langNames = {
  "en": "English 🇬🇧", "hi": "हिन्दी 🇮🇳", "es": "Español 🇪🇸",
  "fr": "Français 🇫🇷", "de": "Deutsch 🇩🇪", "ar": "العربية 🇸🇦",
  "pt": "Português 🇧🇷", "ru": "Русский 🇷🇺", "ja": "日本語 🇯🇵",
  "ko": "한국어 🇰🇷", "zh": "中文 🇨🇳", "tr": "Türkçe 🇹🇷",
  "id": "Indonesia 🇮🇩", "it": "Italiano 🇮🇹"
}

var name = langNames[langCode] || langCode

Libs.Helpers.editOrSend({
  text: "<b>✅ Lᴀɴɢᴜᴀɢᴇ Sᴇᴛ!</b>\n\n" +
    "<b>Sᴇʟᴇᴄᴛᴇᴅ:</b> " + name + "\n\n" +
    "<i>Sᴏᴍᴇ ꜰᴇᴀᴛᴜʀᴇꜱ ᴍᴀʏ ʀᴇᴍᴀɪɴ ɪɴ Eɴɢʟɪꜱʜ.</i>",
  reply_markup: { inline_keyboard: Libs.Helpers.getBackCloseButtons("/lang") }
})
