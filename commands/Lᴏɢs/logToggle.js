/*CMD
  command: logToggle
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Lᴏɢs

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var key = params || message
var propKey = "log_" + key
var current = Bot.getProperty(propKey, "On")
var newVal = current === "On" ? "Off" : "On"
Bot.setProperty(propKey, newVal, "string")

// Re-show the logs menu
Bot.runCommand("/logs")
