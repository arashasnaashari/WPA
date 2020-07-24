if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(registration => {
        console.log('SW registred !');
        console.log(registration);
    })
    .catch(err => {
        console.log('SW registration faild');
        console.log(err);
    })
}