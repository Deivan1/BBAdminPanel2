/*CMD
  command: /sendmsg9539
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Enter message 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (user.telegramid == 1101789439 | user.telegramid == 1101789439){
let msg = "*New Message : *\n\n" + data.message
Bot.sendMessageToAllPrivateChats(msg)
Bot.sendMessage("✅Message sent to all active members")
}else{
Bot.sendMessage("Not admin")
}
