function question_2_DialogBox() {
    var i = 0;
    var end = document.getElementById('txtQuestion_2').value;
    var sum = 0;
    for(i; i <= end; i++){
        sum += i
    }
    alert(sum);
}

function change() {
var str = document.getElementById("txtQuestion_3");
		str.innerHTML = "이 문장으로 바뀌었습니다!";
}