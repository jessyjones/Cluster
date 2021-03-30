require('dotenv').config() 
const TelegramBot = require('node-telegram-bot-api');
const Alya = process.env.ALYACHATID ;
const token = process.env.TELEGRAMTOKEN ; 

const bot = new TelegramBot(token, {polling: true});
  
  // Listen for any kind of message. There are different kinds of
  // messages.
  let chatId ; 
  bot.on('message', (msg) => {
    chatId = msg.chat.id;
    console.log(chatId);
  
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, 'Received your message');
  });

  // bot.sendMessage(Alya, '?');