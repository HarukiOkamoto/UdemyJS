//関数宣言文 どこでも使える
console.log(add(2, 5)); //noerror

function add(a, b) {
    return a + b;
}

// console.log(add(2, 5));

//関数はオブジェクトの一種 関数オブジェクト
//オブジェクトは関数化できない。

// console.dir(add);

//関数式
//巻き取り不可　遡れない
//名前付き関数式(add)
//デバッグしやすい

// console.log(name(2, 3)); //error

const name = function add(a, b) {
    return a + b;
};

// console.log(name(2, 3));

//無名関数式
//console.log(func(2, 3)); //error

const func = function (a, b) {
    return a + b;
};

// console.log(func(2, 3));

//無名関数式(アロー関数関数)
let allow = (name) => {
    return `hi,${name}`;
};
console.log(allow('アロー関数'));

//ブロック文のなかに1文しかない場合、{}を省略できる
allow = (name) => `hi,${name}`; //returnしている
console.log(allow('{}の省略'));

//パラメータ(引数)が1つしかない場合、()を省略できる
allow = (name) => `hi,${name}`;
console.log(allow('()の省略'));

//関数宣言文、関数式どちらかに統一する
//-------------------------------//
//メソッド、プロパティ
//オブジェクトで関数を扱うこともできる=>メソッド
let person = {
    name: 'Yo', //プロパティ
    sayHi: function () {
        //メソッド
        return 'hi';
    },
};
console.log(person.sayHi());

//アロー関数でオブジェクトとして認識させる
allow = (name) => ({
    name: name,
});

console.log(allow('allow'));

//デフォルトパラメーター
//引数がない場合、指定した値を挿入する。
//デフォルトパラメーターは引数が封数ある場合、基本的に最後の引数に付与する。
allow = (name = 'user') => {
    return `hi,${name}`;
};

console.log(allow());

//RESTパラメータ
//残り全ての引数を配列にする
let sum = (...nums) => {
    let total = 0;
    for (num of nums) {
        total += num;
    }
    return total;
};

console.log(sum(1, 3, 4, 6, 7));
sum = (...nums) => {
    let total = 0;
    for (num of nums) {
        stotal += num;
    }
    return total;
};

//コールバック関数
//関数の引数に関数を入れる
const a = (a, b, callback) => {
    const result = a - b; //②演算
    callback(result); //③演算結果を関数の引数に渡す
};

//①10,3を引数として渡す
//④resultを「受け取る」
a(10, 3, (result) => {
    //①10,3を引数として渡す
    console.log(result); //⑤出力
});

//値を利用する場所で受け取れる

// a(10, 3, (result) => {
//     alert(result);
// });
