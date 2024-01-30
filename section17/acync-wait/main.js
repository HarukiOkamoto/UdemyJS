//shift + command + L 同じ文字一括選択
//option + ↑↓ 行入れ替え
//command + ↑↓→← 最端まで飛ぶ
//command + shift + ↑↓→← カーソル以下選択

//async・・promiseを返すようになる、await演算子を使えるようになる
//あくまで同期的に動く
let asyncFunc = async () => {
  //promiseチェーンをawaitでできる
  //以下同じ
  // navigator.mediaDevices.getDisplayMedia({ video: true }).then();
  // awaitを指定した関数のPromiseの結果が返されるまで、async function内の処理を一時停止する。
  // 結果が返されたらasync function内の処理を再開する
  // let result = await navigator.mediaDevices.getDisplayMedia({ video: true });
  // console.log('await内' + result);
  // resolveを返すようになる;
  // return 'hello';
};

//こっちが先に実行される
let result = asyncFunc();
//Promiseの中身
console.log(result);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
    // reject(1);
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
    // reject(2);
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
    // reject(3);
  }, 500);
});

// for-await-of文
let promises = [promise, promise2, promise3];
(async () => {
  for (const promise of promises) {
    let result = await promise;
    console.log(result); //1,2,3
  }
})();

(async () => {
  for await (const result of promises) {
    // 省略可能
    // let result = await promise;
    console.log(result); //1,2,3
  }
})();
