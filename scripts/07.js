document.addEventListener("DOMContentLoaded", () => {
    const cbt1s = document.querySelectorAll(".cbt1"); //배열로 가지고 오게 됨. 각 4개씩인 배열이 생성.
    const cbt2s = document.querySelectorAll(".cbt2");
    const cbt3s = document.querySelectorAll(".cbt3");

    const txt1 = document.querySelector("#txt1") //querySelector는 한개만 가지고 오고 싶을때. 맨처음에 있는거 하나 들고 옴.
    const btReset = document.querySelector("#btReset")

    //배열의 초기화
    let arr = [];

    //버튼 이벤트 추가
    //reset 기능 구현(안에 있던 배열을 전부 초기화)
    btReset.addEventListener('click', (e) => {
        e.preventDefault();
        txt1.value = '';
        arr = [];
    })
    //배열에 자료 추가
    for (let cbt1 of cbt1s) {
        cbt1.addEventListener('click', (e) => { //4개의 버튼에 이벤트를 달음 반복문을 통해서 4개의 버튼에 클릭 이벤트를 달게 됨.
            e.preventDefault(); //form의 reload를 막는 것
            //console.log(cbt1.textContent)
            switch (cbt1.textContent) {
                case '사과':
                    arr.push('🍎')
                    break;
                case '바나나':
                    arr.push('🍌')
                    break;
                case '오렌지':
                    arr.push('🍊')
                    break;
                case '수박':
                    arr.push('🍉')
                    break;
            }
            console.log(arr);
            // txt1.value = arr.toString(); //toString 버전
            //상기의 까지는 배열에 넣는거까지 하는 것이고 박스에 넣어서 출력하려면 하기의 코드 필요.
            //input 타입은 innerHTML, textContent는 쓸 수 없고 value사용해야함.
            txt1.value = arr.join(''); //join 버전-> ''랑 같이 사용하면 쉼표가 안나옴

        });
    }

    //배열에서 자료삭제(filter이용)
    for (let cbt2 of cbt2s) {
        cbt2.addEventListener('click', (e) => {
            e.preventDefault();


            let gubun = cbt2.textContent.replace(' 삭제', '') // 삭제라는 단어를 지우고 싶을 때 사용
            // console.log(gubun);            
            let temp = []; //temp는 빈 배열
            for (let item of arr) {
                // console.log(item)
                switch (gubun) {
                    case '사과':
                        if (item != '🍎') temp.push(item);
                        break;
                    case '바나나':
                        if (item != '🍌') temp.push(item);
                        break;
                    case '오렌지':
                        if (item != '🍊') temp.push(item);
                        break;
                    case '수박':
                        if (item != '🍉') temp.push(item);
                        break;
                }
                // console.log(temp)

            }
            arr = temp;


            //case1: filter 사용 
            // switch (cbt2.textContent) {
            //     case '사과 삭제':
            //         arr = arr.filter((item) => item != '🍎'); //item을 array에서 한개씩 가지고 오는 것. arr.filter를 새로운 배열 arr에 다시 넣어서 기존의 배열을 바꿔줘야 한다.
            //         break;
            //     case '바나나 삭제':
            //         arr = arr.filter((item) => item != '🍌');
            //         break;
            //     case '오렌지 삭제':
            //         arr = arr.filter((item) => item != '🍊');
            //         break;
            //     case '수박 삭제':
            //         arr = arr.filter((item) => item != '🍉');
            //         break;
            // }

            console.log("cbt2", arr);

            txt1.value = arr.join('');

        });
    }
    for (let cbt3 of cbt3s) {
        cbt3.addEventListener('click', (e) => {
            e.preventDefault();

            let gubun = cbt3.textContent.split(' -> ')[0].trim; //문자열을 split하면 나눠져서 배열이 된다. 처음 배열만 골라내기 가능 //.trim: 앞뒤 공백이 있을 수도 있음으로 trim 하면 사라짐
            console.log(gubun);

            let temp = [];
            for (let item of arr) { //배열의 처음부터 끝까지 들고옴, 배열 전체 순회                
                switch (gubun) {
                    case '사과':
                        // arr = arr.map((item) => item == '🍎'?'🥕':item); // case2: map을 이용하는 방법
                        if (item == '🍎') temp.push('🥕');
                        else temp.push(item);
                        break;
                    case '바나나':
                        if (item == '🍌') temp.push('🥒');
                        else temp.push(item);
                        break;
                    case '오렌지':
                        if (item == '🍊') temp.push('🥑');
                        else temp.push(item);
                        break;
                    case '수박':
                        if (item == '🍉') temp.push('🥦');
                        else temp.push(item);
                        break;
                }
                arr = temp;

                txt1.value = arr.join('');


            }
            console.log("cbt3", arr);
        });
    }

});