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

//Promiseチェーンとは
//then,catch,finallyの後ろには、いくつでも自由にthen,catch,finallyをつけることができる。
new Promise((resolve) => resolve('1'))
  .then((value) => {
    console.log(value);
    //returnした値を次のthenのvalueへ
    return '2';
  })
  .then((value) => {
    console.log(value);
    //errorを受けると、catchが実行される
    throw new Error('3' + '：errorメッセージ');
  })
  .catch((error) => {
    console.log(error.message);
    throw new Error('4' + '：errorメッセージ');
  })
  .catch((error) => {
    console.log(error.message);
    return '5';
  })
  .then((value) => {
    console.log(value);
    return '6';
  })
  //スルーされる
  .catch(() => {})
  //値を受け取る
  .then((value) => {
    console.log(value);
    throw new Error('7');
  })
  .catch((error) => {
    console.log(error.message);
    return '8';
  })
  .catch(() => console.log('skip'))
  .finally((value) => {
    //finallyは値を受け取れないよね
    console.log(value + '：順番が来たら実行');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  })
  //setTimeoutが終わるまで待たされる
  //新しいPromiseがresolveになるまで
  .then((value) => {
    console.log(value);
  });

console.log(promise);
