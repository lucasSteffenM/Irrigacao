chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  // Verifica se a mensagem é uma string
  if (typeof message === 'string') {
      // Define a regex para verificar se a mensagem corresponde ao padrão desejado
      const regex = /^console message:\s*\d+$/;
      // Verifica se a mensagem corresponde ao padrão
      if (regex.test(message)) {
          console.log(message);
      }
  }
});

