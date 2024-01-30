const book = {
  title: 'JavaScript course',
  price: 9.99,
  author: {
    firstName: 'Yoshi',
    lastName: 'pi',
  },
  isbn: 12345678,
  description: 'this book is about js',
};

//分割代入
const { title } = book;
console.log(title);

const {
  //別名をつけられる
  title: bookTitle,
  price,
  author: { firstName },
  //オブジェクトにないものの、初期値を代入できる
  publisher = 'Yoshipi inc',
  //スプレッド演算子(残り全てをオブジェクトに)
  ...etc
} = book;
console.log(bookTitle, price, publisher, etc);

console.log(firstName);

//関数パラメータにも同じルールを適用できる
const sayBook = ({
  title: bookTitle,
  price,
  author: { firstName },
  publisher = 'Yoshipi inc',
  ...etc
}) => {
  console.log(bookTitle, price, publisher, etc);
};

sayBook(book);

//in演算子・・プロパティの有無を調べる
console.log('title' in book);

//オプショナルチェーン
user = undefined;
//？の前の値が[null]  or [undefind]なら、undefindを返す
//そうでなければ、その値を返す
console.log(user?.address);

//関数呼び出し・・・user.?()
//メソッド・・・user?.address()
//プロパティ・・・user?.['address']
//delete演算子・・・delete user?.address (nullかundefindならtrue,それ以外ならdelete)
//のように使うこともできる
