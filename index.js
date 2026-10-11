JavaScript
const { Client, LocalAuth } = require('whatsapp-web.js');

const bot = new Client({
  authStrategy: new LocalAuth()
});

bot.on('qr', () => {
  console.log('Open the logs to see the QR code.');
});

bot.on('ready', () => {
  console.log('🤖 WhatsApp bot is online!');
});

bot.on('message', async (msg) => {
  const text = msg.body.toLowerCase().trim();

  if (text === '.ping') {
    await msg.reply('🏓 Pong! Bot is online.');
  }

  if (text === '.menu') {
    await msg.reply(
      '🤖 BOT MENU\n\n' +
      '.ping - Check bot\n' +
      '.menu - Show commands\n' +
      '.help - Get help'
    );
  }

  if (text === '.help') {
    await msg.reply('👋 Hello! Type .menu to see my commands.');
  }

  if (text === 'hello') {
    await msg.reply('Hello! 👋');
  }
});

bot.initialize();
