
// メイン部分
var alertString;
alertString = addString("WebCamp");

// 作成した関数を呼び出す
alert(alertString);

// 作成した関数
function addString(strA){
  var addStr = "Hello " + strA;
  return addStr;
}


// 入力ダイアログ（プロンプト欄）
var promptStr = prompt('何か好きな文字を入力してください。');

alert(promptStr);




// 複数の関数を定義する

var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){ // nullはキャンセルボタンを押したとき
  alert('グー・チョキ・パーのいずれかを入力してください。');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

var js_hand = getJShand();
var judge = winLose(user_hand,js_hand);


if(user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}

function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3 );　// この場合範囲は0〜2となる
                                // Math.random()で0〜1までの少数を返す。
                                // そのため＊数字の数字は指定したい範囲の＋1をかける
                                // ex)0.9*3=2.7なので、３を指定すると最大２までの範囲となる
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}


function winLose(user, js){
  var winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け"
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち"
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = " 勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ"
    }
  }

  return winLoseStr;
}
