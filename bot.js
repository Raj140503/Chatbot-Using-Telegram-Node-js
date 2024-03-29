const TelegramBot = require('node-telegram-bot-api');
const botToken = '.................................'; // add your own botToken here.
const bot = new TelegramBot(botToken, { polling: true });
function generateResponse(message) {
    return `You said: ${message}`;
}
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;
    const response = generateResponse(messageText);

    bot.sendMessage(chatId, response)
        .catch(error => console.error('Error sending message:', error));
});
console.log('Telegram bot is running...');
