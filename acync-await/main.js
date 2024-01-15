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
setTimeout(() => {
    try {
        throw new Error('error');
    } catch {
        console.log('error');
    }
}, 3000);
