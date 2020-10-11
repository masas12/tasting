if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('tasting/iqdb/sw.js')
      .then(function() {
        console.log('Service worker registered!');
      });
  }
