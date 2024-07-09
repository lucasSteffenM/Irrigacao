const CDP = require('chrome-remote-interface');

CDP(async (client) => {
  const { Network, Page, Console } = client; 

  try {
    await Promise.all([Network.enable(), Page.enable(), Console.enable()]); 

    let flag = false;

    Console.on('messageAdded', (params) => { 
      const messageText = params.message.text;
      const value = parseInt(messageText, 10);

      if (!isNaN(value) && value >= 0 && value <= 876) {
        console.log('Valor:', value);

        if (value <= 292 && !flag) {
          console.log('Baixa umidade, a rega foi iniciada');
          flag = true;
        } else if (value > 292) {
          flag = false;
        }
      }
    });

    await Page.navigate({ url: 'http://localhost:9222' });
    await Page.loadEventFired();
  } catch (error) {
    console.error('Erro:', error);
  }
});
