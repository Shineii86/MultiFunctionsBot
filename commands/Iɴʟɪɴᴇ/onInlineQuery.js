/*CMD
  command: onInlineQuery
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var query = request.query || ""
var results = []

// Anime search inline
if (query.length > 0) {
  // Quick tools inline
  results.push({
    type: "article",
    id: "qr_" + query,
    title: "📱 Gᴇɴᴇʀᴀᴛᴇ QR Cᴏᴅᴇ",
    description: "Create QR code for: " + query,
    input_message_content: {
      message_text: "📱 <b>QR Cᴏᴅᴇ</b>\n\nGᴇɴᴇʀᴀᴛɪɴɢ ꜰᴏʀ: " + Libs.Helpers.escapeHTML(query),
      parse_mode: "HTML"
    },
    reply_markup: { inline_keyboard: [[{ text: "📱 Gᴇɴᴇʀᴀᴛᴇ", callback_data: "/qrcode" }]] }
  })

  results.push({
    type: "article",
    id: "translate_" + query,
    title: "🌍 Tʀᴀɴꜱʟᴀᴛᴇ",
    description: "Translate: " + query,
    input_message_content: {
      message_text: "🌍 <b>Tʀᴀɴꜱʟᴀᴛᴇ</b>\n\nSᴇɴᴅ /translate ᴛᴏ ᴜꜱᴇ ᴛʜᴇ ᴛʀᴀɴꜱʟᴀᴛᴏʀ.",
      parse_mode: "HTML"
    }
  })

  results.push({
    type: "article",
    id: "base64_" + query,
    title: "🔤 Bᴀꜱᴇ64 Eɴᴄᴏᴅᴇ",
    description: "Encode: " + query.substring(0, 50),
    input_message_content: {
      message_text: "🔤 <b>Bᴀꜱᴇ64 Eɴᴄᴏᴅᴇᴅ</b>\n\n<code>" + Utilities.base64Encode(query) + "</code>",
      parse_mode: "HTML"
    }
  })

  results.push({
    type: "article",
    id: "hash_" + query,
    title: "# Gᴇɴᴇʀᴀᴛᴇ Hᴀꜱʜ",
    description: "MD5/SHA hash for: " + query.substring(0, 50),
    input_message_content: {
      message_text: "# <b>Hᴀꜱʜ Gᴇɴᴇʀᴀᴛᴏʀ</b>\n\nSᴇɴᴅ /hash ᴛᴏ ɢᴇɴᴇʀᴀᴛᴇ ʜᴀꜱʜᴇꜱ.",
      parse_mode: "HTML"
    }
  })

  results.push({
    type: "article",
    id: "len_" + query,
    title: "📊 Tᴇxᴛ Sᴛᴀᴛꜱ",
    description: "Chars: " + query.length + " | Words: " + query.split(/\s+/).length,
    input_message_content: {
      message_text: "📊 <b>Tᴇxᴛ Sᴛᴀᴛꜱ</b>\n\n" +
        "<b>Cʜᴀʀꜱꜱ:</b> " + query.length + "\n" +
        "<b>Wᴏʀᴅꜱ:</b> " + query.split(/\s+/).length + "\n" +
        "<b>Lɪɴᴇꜱ:</b> " + (query.match(/\n/g) || []).length,
      parse_mode: "HTML"
    }
  })

  results.push({
    type: "article",
    id: "reverse_" + query,
    title: "🔄 Rᴇᴠᴇʀꜱᴇ Tᴇxᴛ",
    description: query.split("").reverse().join("").substring(0, 50),
    input_message_content: {
      message_text: "🔄 <b>Rᴇᴠᴇʀꜱᴇᴅ</b>\n\n<code>" + query.split("").reverse().join("") + "</code>",
      parse_mode: "HTML"
    }
  })

  results.push({
    type: "article",
    id: "word_" + query,
    title: "📝 Wᴏʀᴅ Cᴏᴜɴᴛ",
    description: "Count words in: " + query.substring(0, 50),
    input_message_content: {
      message_text: "📝 <b>Wᴏʀᴅ Cᴏᴜɴᴛ</b>\n\n" +
        "<b>Wᴏʀᴅꜱ:</b> " + query.split(/\s+/).filter(function(w) { return w.length > 0 }).length + "\n" +
        "<b>Cʜᴀʀꜱꜱ:</b> " + query.length,
      parse_mode: "HTML"
    }
  })

  // Deduplicate by making unique IDs
  for (var i = 0; i < results.length; i++) {
    results[i].id = results[i].id + "_" + i
  }
}

try {
  Api.answerInlineQuery({
    inline_query_id: request.id,
    results: results.slice(0, 50),
    cache_time: 300,
    is_personal: true
  })
} catch (e) {
  // Silent fail for inline
}
