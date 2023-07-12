function post (){
  
  //idをキーに登録ボタンの要素を取得
  const submit = document.getElementById("submit");

  //投稿ボタンがクリックされたらイベント発火
  submit.addEventListener("click", (e) => {
    //投稿ボタンのクリックを無効化
    e.preventDefault();
    //getElementByIdメソッドで取得したフォームの要素を変数formに格納
    const form = document.getElementById("form");
    //フォームに入力された値を取得
    const formData = new FormData(form);
    // 非同期通信を行うためにXMLHttpRequestオブジェクトを生成
    const XHR = new XMLHttpRequest();
    //リクエストを初期化
    XHR.open("POST", "/posts", true);
    //サーバーからのレスポンスの形式をjsonに指定
    XHR.responseType = "json";
    //フォームの内容をサーバに送信
    XHR.send(formData);
  });
};

window.addEventListener('load', post);