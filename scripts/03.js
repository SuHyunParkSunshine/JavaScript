// function show() {
//alert("안녕하세요");
//     event.preventDefault();
//     document.getElementById ("h2id").innerHTML = "안녕하세요" ;
// }  

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById ("h2id").innerHTML = "안녕하세요" ;
// }) ;

//화살표 함수로 변경
const show = () => {
    event.preventDefault();
    // document.getElementById("h2id").innerHTML = "안녕하세요";

    //랜덤수 생성(1~6)
    let n = Math.floor(Math.random() * 6) + 1;
    console.log(n);

    //case4
    // document.getElementById("h2id").innerHTML = '<img src = "../Img/' + n + '.png">';
    
    //case5
    document.getElementById("h2id").innerHTML = `<img src = "../Img/${n}.png">`;
   
    // let imgTag ;
    // if (n == 1) imgTag = 

        // document.getElementById("h2id").innerHTML = "<img src = '../Img/1.png'>";
}

// document.addEventListener("DOMContentLoaded",function() {
//     document.getElementById ("h2id").innerHTML = "시작입니다." ;
// }) ;

document.addEventListener("DOMContentLoaded", () => {
    // document.getElementById ("h2id").innerHTML = "시작입니다." ;
    // document.querySelector('#h2id').innerHTML = "아이디 선택자: 시작입니다";
    // document.querySelector(".h2Class").innerHTML = "클래스 선택자: 시작입니다"
    //주사위 그림 넣기
    // const bt = document.createElement('button');
    // bt.textContent = "확인"
    // document.getElementById('hdiv').append(bt);

});