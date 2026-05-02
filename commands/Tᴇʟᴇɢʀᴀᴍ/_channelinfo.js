/*CMD
  command: /channelinfo
  help: Get info about a public channel or group
  need_reply: true
  auto_retry_time: 
  folder: Tᴇʟᴇɢʀᴀᴍ

  <<ANSWER
📢 Sᴇɴᴅ ᴛʜᴇ ᴄʜᴀɴɴᴇʟ/ɢʀᴏᴜᴘ ᴜsᴇʀɴᴀᴍᴇ (ᴇ.ɢ. @MaximXBots ᴏʀ MaximXBots)
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /ci
  group: 
CMD*/

var username = message.trim().replace("@", "")
if (!username) {
  Bot.sendMessage("<b>❌ Pʟᴇᴀsᴇ sᴇɴᴅ ᴀ ᴠᴀʟɪᴅ ᴜsᴇʀɴᴀᴍᴇ.</b>", { parse_mode: "HTML" })
  return
}

Api.getChat({
  chat_id: "@" + username,
  on_result: "onChatInfoResult"
})
