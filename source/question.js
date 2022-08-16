function displayAnswer()
{
    
    const answer = document.querySelectorAll('input[name="answer1"]:checked').item(0);
    if(answer.value=="a")
    {
        answer.parentNode.classList.add("correct-answer");
    }
    else
    {
        answer.parentNode.classList.add("error-answer");
    }
    
    if (window.File) {
        // File APIに関する処理を記述
        window.alert("File APIが実装されてます。");
      } else {
        window.alert("本ブラウザではFile APIが使えません");
      }

    /*
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    
    // text.txtという新規のファイルを作成
    var file = fs.CreateTextFile("text.txt");

    // texxt.txtファイルへ書き込み
    file.Write("Complete, written!");

    // text.txtファイルを閉じる
    file.Close();

    */
}