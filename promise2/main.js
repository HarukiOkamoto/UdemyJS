//shift + command + L 同じ文字一括選択
//option + ↑↓ 行入れ替え
//command + ↑↓→← 最端まで飛ぶ
//command + shift + ↑↓→← カーソル以下選択
//command + shif + Enter 上に改行

let promise = new Promise((resolve, reject) => {
    let tmpPromise = new Promise((resolve2) => {
        setTimeout(() => {
            //ここの引数を親promiseに渡し、valueとして出力
            resolve2('hello');
        }, 5000);
    });
    //内側のtmpPromiseがfulfilledになるまで、fulfilledにならない。
    resolve(tmpPromise);
});

promise.then(
    (value) => {
        console.log('then fulfilled', value);
    },
    (error) => {
        console.log('then rejected', error.message);
    }
);

promise.finally((value) => {
    console.log('fainaly', value);
});

console.log(promise);
