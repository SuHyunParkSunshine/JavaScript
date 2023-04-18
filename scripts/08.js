document.addEventListener('DOMContentLoaded', () => {
    const boxs = document.querySelectorAll('.box');
    const bt1 = document.querySelector('#bt1'); //하나만 가지고 올때에는 주로 아이디를 이용


    //초기 배열 : 1이 폭탄 위치
    let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1]
    //클릭확인
    let flag = true; // flag가 true면 눌러지고 아니면 안 눌러지게 하기 위함
    //하트개수
    let cnt = 0;
    //눌러진 순서
    let selarr = [];


    //폭탄섞기 버튼(랜덤 배열 생성)
    bt1.addEventListener('click', () => {
        if (flag) {
            arr.sort(() => Math.random() - 0.5);
            console.log(arr);
            flag = false; //flag가 false로 변경이 되어야 계속 눌러지는 것을 방지할 수 있음. 한번 섞고 다시 또 섞으면 안댐
            cnt = 0;
            selarr = [];
            for (let box of boxs) { //폭탄을 찾고 초기화시키는 것
                box.innerHTML = box.getAttribute('id').replace('box', '');
                document.querySelector('h2').innerHTML = ''
            }
        }
    })

    //div박스 제어
    for (let box of boxs) { //9개의 박스를 일괄적으로 처리
        //박스 번호 넣기
        // box.innerHTML = box.getAttribute('id').slice(-1);
        box.innerHTML = box.getAttribute('id').replace('box', ''); //box를 ''공백으로 대체하라!!

        //박스 클릭이벤트 처리
        box.addEventListener('click', () => {
            //let n = parseInt(box.getAttribute('id').replace('box', '')); //case1

            let n = parseInt(box.textContent);
            console.log("n=", n, "selarr =", selarr);

            //기존에 하트나 폭탄이 들어가 있는 경우
            if (isNaN(n)) return;
            //폭탄이 눌어지지 않은 경우
            if (!flag) {
                //선택 항목 추가
                selarr.push(n);
                cnt++;
                console.log("cnt = ", cnt);

                //폭탄 하트 구분
                if (arr[n - 1] == 0) {
                    //하트
                    box.innerHTML = '<img src="../Img/hart.png">';
                    //성공
                    if (cnt == 8) {
                        flag = true;
                        document.querySelector('h2').innerHTML = "성공!!!";

                        //차집합 이용
                        // let lastArr = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((item) => !selarr.includes(item));
                        // console.log("lastArr = ", lastArr[0]);
                        // boxs[lastArr[0] - 1].innerHTML = '<img src="../Img/hart.png">';

                        let lastn = arr.findIndex((item) => item == 1);
                        console.log('find = ', lastn);
                        box[lastn].innerHTML = '<img src="../Img/hart.png">';

                    }
                }
                else {
                    //폭탄
                    box.innerHTML = '<img src="../Img/boom.png">';
                    flag = true;
                    document.querySelector('h2').innerHTML = '실패!!!'
                }
            }
        })

    }
})