//shift + command + L 同じ文字一括選択
//option + ↑↓ 行入れ替え
//command + ↑↓→← 最端まで飛ぶ
//command + shift + ↑↓→← カーソル以下選択

let boolean = true;

if (boolean == true) {
    console.log('OK');
} else {
    console.log('no match any');
}

const coffee1 = { name: 'Cafe Latte' };
const coffee2 = { name: 'Cafe Latte' };

//false
boolean = coffee1 === 'Cafe Latte';
//true
boolean = coffee1.name === 'Cafe Latte';
console.log(boolean);

//TruthyとFalsy
//jsが審議値を必要とする場面で、
//「false」,「0」,「-0」,「0n」,「""」,「null」,「NaN」,「undefind」
//はfalseとして扱われる(Falsy)。その他はtrueとして扱われる(Truthy)。

//null合体演算子
//前提として、論理和演算子は左側がtrue(Truthy)なら左側の値を返す。
//左側がfalse(Falsy)なら、右側の値を返す。
const userName = '' || 'User';
//この場合""はfalseであるから
console.log(userName); //User

//論理積の場合
//論理席の場合、左側がtrueなら右側の値、falseなら左側の値
const userName2 = '' && 'User';
console.log(userName2); //""

//null合体演算子
//空白をそのまま出力させ、「null」,「undefind」をの時はデフォルト値
//&&や||と一緒の使えない。※()を使えば可能。例) (a ?? b) || c
//const userName3 = null ?? "User"; //User
//const userName3 = undefined ?? "User"; //User
const userName3 = '' ?? 'User'; //""
console.log(userName3);

//反転
// ！！とすることで、真偽値へ変換することができる。
let x = 10;
x = !!x;
console.log(x);

//式と文　明確な違いはない。
//右辺は式 全体を式文
x = 2 + 3;
x = 3;

//文
// let const if　debugger forなど

//三項演算子　{?,:,;}の3つを使う。値を返すif文
const check = true;
const print = check ? 'trueです' : 'falseです';
console.log(print);

//switch文
function vegetableColor(vegetable) {
    switch (vegetable) {
        case 'tomato': {
            console.log(`${vegetable} is red`);
            break;
        }
        case 'pumpkin': {
            console.log(`${vegetable} is orange`);
            break;
        }
        case 'onion': {
            console.log(`${vegetable} is white`);
            break;
        }
        default: {
            console.log(`${vegetable} is not found`);
        }
    }
}

vegetableColor('apple');

//while文　条件に合致すれば実行
let count = 9;

while (count < 10) {
    console.log('while；', count);
    count++;
}

//do-while文
//条件に合致しなくても最初に1回実行する(do内)
count = 100;
do {
    console.log('do-while；', count);
    count++;
} while (count < 10);

//for文
for (let i = 8; i < 10; i++) {
    console.log('for：', i);
}

//for-of文
//配列をループさせるときに使う constでも可能なのでconst
//オブジェクトはループできないが、配列はループ可能
//配列はイテラブル(反復可能)オブジェクト。
//for-of文はイテラブルオブジェクトのみ扱える。
const fruits = ['apple', 'banana', 'grape', 'orange', 'mango'];
for (const fruit of fruits) {
    console.log(fruit);
}

//for-in文
//オブジェクトの中身を取り出せる。
const coffee = {
    name: 'Cafe Latte',
    size: 350,
    isHot: true,
};

//オブジェクトはkey-value
//coffee.keyはエラー
for (const key in coffee) {
    console.log(key + ':' + coffee[key]);
}

//break文　ループを抜ける
for (const key in coffee) {
    console.log(key + ':' + coffee[key]);
    if (key === 'size') {
        console.log('break');
        break;
    }
}

//continue文
//そのループをスキップし、次のループへ
//この場合、sizeの回をスキップする。
for (const key in coffee) {
    if (key === 'size') {
        console.log('continue');
        continue;
    }
    console.log(key + ':' + coffee[key]);
}

//ラベル文 braekしたときに、どこを抜けるか選択できる。
//この場合、最上位のifのブロックから抜ける
rabel: if (true) {
    for (const key in coffee) {
        console.log(key + ':' + coffee[key]);
        if (key === 'size') {
            console.log('break');
            break rabel;
        }
    }
}

//try-catch文　エラーが起きても処理を継続
//try内がエラーの時、catchを実行。
//エラーでない時は、tryを実行。
//実行時のエラーのみ対応 C++の処理部分のエラーはキャッチできない。

const chocolate = 'chocolate';
try {
    console.log(chocolate);
} catch {
    console.log('hello');
}

//try-catch-finally
//finaytry-catchが終了した時点で実行される。
//returnなどがあってもfinallyは実行される。
try {
    console.log(chocolate);
    // return "hello";
} catch {
    console.log('hi');
} finally {
    console.log('finaly');
    //returnが上書きされる（関数内の場合）
    // return "hi-finally";
}

//throw文
//エラーを作り出す
//ブロックを実行しない
try {
    throw 'error';
    console.log(chocolate);
} catch {
    console.log('hello');
}
