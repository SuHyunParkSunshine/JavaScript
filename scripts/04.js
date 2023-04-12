//배열 안에 있는 것을 가져오는 방법

document.addEventListener("DOMContentLoaded", () => {
    const bts = document.querySelectorAll('button')
    console.log(bts);

    // document.querySelector('#h2id').textContent = bts.textContent;


    //case1(정석)
    // for(let i = 0; i < bts.length; i++) {
    //     console.log(bts[i].textContent);
    // }

    //case2
    // bts.forEach((item) => {
    //     console.log(item.textContent);
    // })

    // bts.forEach((item, idx) => {
    //     console.log(idx, item.textContent);
    // })

    //case3
    // for(let idx in bts) {0
    //     console.log(bts[idx].textContent);
    // }

    //case4
    // for(let item of bts) {
    //     console.log(item.textContent);
    // }

    for (let [k, v] of bts.entries()) {
        console.log(k, v.textContent); 
    }   

});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("h2id").innerHTML = "";
});

