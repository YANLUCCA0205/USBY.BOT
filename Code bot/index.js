const venom = require('venom-bot');

venom.create({
    session: 'my-session',
    headless: true,
    useChrome: true,
    chromixPath: 'C:\Program Files\Google\Chrome\Application', // Substitua com o seu caminho correto
  })
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  console.log('Bot started');
  client.onMessage(async (message) => {
    if (message.body.toLowerCase() === 'oi') {
      await client.sendText(message.from, 'Olá! Eu sou o USBY Bot 🤖');
    }
  });
}
