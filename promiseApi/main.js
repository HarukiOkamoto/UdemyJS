//apiの動作に合わせて処理をかける
//コールバックのネストが深くならない
//このAPIはthen(promise)をデフォルトで返してくれる。
// navigator.mediaDevices
//     .getDisplayMedia({ video: true })
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log('error', error.message);
//     })
//     .then(() => {
//         return navigator.clipboard.readText();
//     })
//     .then((text) => {
//         console.log(text);
//     })
//     .catch((error) => {
//         console.log('error', error.message);
//     });

//promiseに対応していないapiは、promise化することで解決できる
let promisefiedSetTimeout = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
};

promisefiedSetTimeout(1000)
    .then(() => {
        console.log('promisfiedSetTimeout1');
        return promisefiedSetTimeout(1000);
    })
    .then(() => {
        console.log('promisfiedSetTimeout2');
        return promisefiedSetTimeout(1000);
    })
    .then(() => {
        console.log('promisfiedSetTimeout3');
        return promisefiedSetTimeout(1000);
    });

let promisefiedGetCurrentPosition = () => {
    return new Promise();
};
