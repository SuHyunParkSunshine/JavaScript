//함수 -> 중복되는 코드(같은코드)를 함수로 묶어서 처리하면 됨
//case1: 섭씨온도를 화씨온도로 변환
const cTof = (temp) => {
   let ftemp = (temp * (9 / 5)) + 32;

    return ftemp;
}

//case2: 화씨온도를 섭씨온도로 변환
const fToc = (temp) => {
    let ctemp = (temp-32) * (5/9);

    return ctemp; 
}

//select 토글
// const selToggle = (s1, s2, t1, t2, d1, d2) => {

// }

document.addEventListener("DOMContentLoaded", () => {
    const sel1 = document.querySelector('#sel1');
    const sel2 = document.querySelector('#sel2');

    const d1 = document.querySelector('#d1');
    const d2 = document.querySelector('#d2');

    const t1 = document.querySelector('#t1');
    const t2 = document.querySelector('#t2');

    //단위표시
    d1.textContent = sel1.value;
    d2.textContent = sel2.value;

    //select 값이 변경이 될때
    sel1.addEventListener('change', () => {
        d1.textContent = sel1.value;
        // d1.textContent = event.target.value; 상위의 것과 같은 값 나옴
        t1.value = '';
        t2.value = '';
        //섭씨선택-> 화씨변경 & 화씨선택->섭씨변경
        if (sel1.value == '℃') {
            sel2.value = '℉';
        }
        else if (sel1.value == '℉') {
            sel2.value = '℃';
        }
        d1.textContent = sel1.value;
        d2.textContent = sel2.value;
    });
    sel2.addEventListener('change', () => {
        d2.textContent = sel2.value;
        // d2.textContent = event.target.value;
        t1.value = '';
        t2.value = '';

        //섭씨선택-> 화씨변경 & 화씨선택->섭씨변경
        if (sel2.value == '℃') {
            sel1.value = '℉';
        }
        else if (sel2.value == '℉') {
            sel1.value = '℃';
        }
        d1.textContent = sel1.value;
        d2.textContent = sel2.value;
    });

    //input에 값이 입력 되었을때
    t1.addEventListener('input', (event) => {
        if (sel1.value == sel2.value) {
            t2.value = t1.value;
        } 
        else if (sel1.value == '℃' && sel2.value == '℉') {
            // t2.value = (t1.value * (9 / 5)) + 32;
            t2.value = cTof(t1.value); //함수로 계산
        } 
        else if (sel1.value == '℉' && sel2.value == '℃') {
            // t2.value = (t1.value - 32) * (5 / 9);
            t1.value = fToc(t2.value); //함수로 계산
        }

    })



});