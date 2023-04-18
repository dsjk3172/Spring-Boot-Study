function alertDialogBox() {
    var i = 0;
    var sum = 0;
    for(i; i <= 10; i++){
        sum += i
    }
    alert(sum);
}

function change() {
var str = document.getElementById("text");
		str.innerHTML = "이 문장으로 바뀌었습니다!";
}