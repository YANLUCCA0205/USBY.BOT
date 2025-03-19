const venom = require('venom-bot');

venom
    .create({
        session: 'my-session', // Nome da sessão
        browserArgs: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
        headless: true, // Usa o novo modo Headless
    })
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

function start(client) {
    client.onMessage((message) => {
        if (message.body === 'Oi' && message.isGroupMsg === false) {
            client
                .sendText(message.from, 'Olá! Como posso te ajudar?')
                .then((result) => {
                    console.log('Mensagem enviada:', result);
                })
                .catch((erro) => {
                    console.error('Erro ao enviar mensagem:', erro);
                });
        }
    });
}
