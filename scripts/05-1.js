document.addEventListener("DOMContentLoaded", () => { //돔이 다 만들어지면 함수안에 일을 수행하겠다. 
    const bt1 = document.querySelector('#bt1');
    bt1.addEventListener('click', () => {
        
        event.preventDefault();
        //랜덤수 생성(1~6)
        let n = Math.floor(Math.random() * 6) + 1;
        document.querySelector(".h2class").innerHTML = `<img src = "../Img/${n}.png">`;

        console.log(`<img src = "../Img/${n}.png">`)
        console.log(typeof n);

        //사용자 입력 수: radio의 체크값을 찾음
        // document.querySelector('input[name="radio"]:checked').value; // 체크된 값(checked value)
        let user;
        const radios = document.querySelectorAll('input[type=radio]') //'input[type=radio]'속성을 가지고 찾을 수 있는 방법 대괄호
        for (let item of radios) {
            console.log(item);
            if (item.checked) {
                user = item.value;
                console.log(typeof user);
                break;
            }
        }
        //랜덤수와 사용자입력수 같은지 검사
        if (n === parseInt(user)) {
            document.querySelector('article h1').textContent = '주사위게임: 맞음(승)';
        }
        else {
            document.querySelector('article h1').textContent = '주사위게임: 틀림(패)';
        }

        //결과출력

    });
});