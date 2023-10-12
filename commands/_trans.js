/*CMD
  command: /trans
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send email 
  keyboard: 
  aliases: 
  group: 
CMD*/

if(user.telegramid!="484675895"){
Bot.sendMessage('u r not a admin')
return}
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("Done")
