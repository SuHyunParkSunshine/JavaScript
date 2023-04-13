//회문 체크 함수
const palindrome = (t1, t2) => {
    let s = t1.value; //t1에 입력된 값을 받음.
    console.log(t2);
    //입력 내용이 없는 경우
    if (s.length == 0) {
        document.querySelector("h2").textContent = '단어를 입력하세요.';

        return; //return을 하면 함수를 종료시키는 거임
    }

    //입력내용이 있는 경우
    //case1: 뒤집는 버전
    // let rs = '';
    // for (let i = s.length - 1; i >= 0; i--) {
    //     rs = rs + s[i];        
    // }

    //case2: 배열 이용 버전
    s = s.split(''); //문자열.split(): 매소드는 문자열을 분리자로 분리해서 배열 만듬
    s = s.reverse(); //배열.reverse(): 배열의 요소를 뒤집어줌
    rs = s.join(); //배열.join(): 배열의 요소를 문자열로 묶어줌/ 쉼표(,)를 사용하면 쉼표로 묶어줌
    console.log("s=", s, ", rs=", rs);


    if (t1.value == rs) {
        t2.value = "회문입니다잉"; //form 안의 값은 value로 찍어야 한다. input타입 text라서 value로 찍어야 함. innerHTML이나 textContent를 쓸 수 없다.
    }
    else {
        t2.value = "회문이 아닙니다이";
    }


}

//숫자 합계 함수
const numSum = (t1, t2) => {
    let s = t1.value;
    let sum = 0; //sum 초기값 줘야지 안 주면 defined 뜸

    //문자열 순회
    for (let ch of s) {
        console.log(ch, isNaN(ch));

        if (isNaN(ch) == false) { //if(!isNaN(ch)) = ch값이 false이면!!
            for (i = 0; i < ch.length; i++) {
                sum += parseInt(ch);
            }
        }
    }
    t2.value = sum;
}

//돔이 다 만들어지고 난 다음에 이 콜백 함수 "() => {}"를 사용할거야!!
document.addEventListener("DOMContentLoaded", () => {

    //DOM 요소 가져오기
    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");
    const bts = document.querySelectorAll(".bt");


    //const txts = document.querySelectorAll(input[type="text"]); //input 타입으로 선택자를 불러오는 방법

    //버튼배열에 클릭 이벤트 작성
    for (let bt of bts) {//bt0 = bt1 들어감        
        //버튼두개에 이벤트를 달도록 하겠다
        bt.addEventListener('click', (event) => {
            event.preventDefault(); //버튼이 클릭되고 나서 다시 돌아가는것을 방지하기 위해 값 계속 사라지는거 막는거이 페이지 재로딩하지 말라고 넣는거이           

            //버튼 동작 구분 지어서 부여하기
            // let gubun = bt.innerHTML ; //innerHTML사용하는 법
            let gubun = bt.getAttribute('id').slice(-1); //아이디 사용하는 법(slice: bts라는 문자열 구분)

            if (gubun === '1') palindrome(txt1, txt2);
            else numSum(txt1, txt2);
        });
    }
});