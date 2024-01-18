const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(1);
        reject(1);
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(1);
        reject(2);
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(3);
        reject(3);
    }, 500);
});

//順番にresultを配列に格納する
//ひとつでもrejectならrejectに
// Promise.all([promise, promise2, promise3])
//     .then((value) => {
//         console.log('promise.all()', value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//promise.allSettled
//rejectされてもthenを実行し、配列に格納
// Promise.allSettled([promise, promise2, promise3])
//     .then((value) => {
//         console.log('promise.all()', value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//promise.race
//一番最初にstatusを決定したものをstatusにする
// Promise.race([promise, promise2, promise3])
//     .then((value) => {
//         console.log('promise.all()', value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

//promise.any
//rejectされたものを無視して、resolveのものだけ対応(最初の一つ)
//全てrejectの場合、rejectになりcatchを実行
Promise.any([promise, promise2, promise3])
    .then((value) => {
        console.log('promise.all()', value);
    })
    .catch((error) => {
        console.log('error:' + error);
    });

// 同じ

// new Promise((resolve) => resolve('value'));
// new Promise((reject) => reject('value'));
// Promise.resolve('value');
// Promise.reject('error');
