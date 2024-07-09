window.addEventListener("message", function (event) {
    if (event.source !== window || !event.data || !event.data.consoleMessage) return;
    chrome.runtime.sendMessage({ consoleMessage: event.data.consoleMessage });
  });
  
  const originalConsoleLog = console.log;
  console.log = function (...args) {
    window.postMessage({ consoleMessage: args }, "*");
    originalConsoleLog.apply(console, args);
  };
  