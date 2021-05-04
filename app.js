// 変数の書き方
var hello = ("HelloWorld");
alert(hello);

var int1 = 1;
alert(int1);

var int2 = -10;
alert(int2);

var float1 = 3.14;
alert(float1)

var str1 = 'JavaScriptを覚えよう';
alert(str1)

// 四則演算

alert(4 + 3);

alert(8 - 5);

alert(2 * 6);

alert(10 / 2);

// 文字列の結合

alert('Hello' + 'World')

var str2 = 'Hello';
var str3 = 'World!!';
alert(str2 + str3);

// 条件分岐

var orange = 100;
var apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

// 繰り返し処理　while文

var max = 100;
var num = 1;
var count = 0;

while(num < max){
  num = num * 2;
  count = count + 1
}

alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// 繰り返し処理　for文

var i;
var num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です')

alert(1 + 2)
alert(4 - 3)
alert(5 * 6)
alert(10 / 2)
