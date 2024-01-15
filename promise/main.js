//非同期処理
//ある処理が終わるのを待たずに次の処理をする

//例 setTimeout
//第二引数に指定した秒数後に第一引数に指定した関数の値を実行
//待っている間は別の処理を実行している

//C++とJavaScriptの二つの処理で成り立っている。
//時間をカウントするC++,alertで表示するJS
//※ブラウザのJSエンジンはchromeの場合、C++で動作している

// setTimeout(() => {
//     alert('3000ms経過');
// }, 3000);

//非同期処理はtry-catch文でキャッチできない。
//３秒後にエラーを作り出すので、すでにtryの中から抜けてしまっている

//エラーになるパターン
// try {
//     setTimeout(() => {
//         throw new Error('error');
//         console.log('error');
//     }, 3000);
// } catch (error) {
//     console.log('error');
// }

//ブロック文の中で実行することでキャッチすることができる。
// setTimeout(() => {
//     try {
//         throw new Error('error');
//     } catch {
//         console.log('error');
//     }
// }, 3000);

//Promise
//一般的にクラスのように扱う

//new（インスタンス化）する際に第一引数にコールバック関数を用いる
//コールバック関数が実行されるタイミングは、newされた瞬間
//promiseのコールバック関数の引数には関数が入る
let promise = new Promise((resoleve, reject) => {
    resoleve('hello'); //PromiseState:fullfilled
    // reject(new Error('error')); //PromiseState:rejected
    console.log('new Promise!');
});

//PromiseState:pending
// promise = new Promise(() => {});

//pendingからステータスを非同期的に変更する場合
//※resolveからrejectなど、一度ステータスが決まると後天的に変更はできない。
promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('5秒後にresolve');
    }, 5000);
});

//promiseのメソッド
//全ての処理が終わった後に実行される
//全てコールバック関数を引数を取る

//fullfilled(resolve)の場合、実行
promise.then(
    (value) => {
        //resolveに渡された引数の値を受け取る
        console.log('then', value);
    },
    //第二引数でcatchの役割を果たさせることができる。
    (error) => {
        console.log('then rejected', error.message);
    }
);

//rejected(reject)の場合、実行
promise.catch((error) => {
    //rejectに渡された引数の値を受け取る
    console.log('catch', error.message);
});

//同じ意味。関数を渡さない場合も無視して実行される
promise.then(null, (error) => {
    console.log('then rejected only', error.message);
});

//どちらの場合も実行
promise.finally((value) => {
    //どの値も受け取らない
    console.log('fainaly', value);
});

console.log(promise);
