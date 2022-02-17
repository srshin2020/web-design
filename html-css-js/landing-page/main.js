let target = document.querySelector('#dynamic');
let titles = ['Learn to CSS', 'Learn to Javascript', 'Learn to HTML', 'Learn to React'];

dynamicNext();

//다음 문자열 출력
function dynamicNext() {
    target.textContent = '';
    let selectTitle = titles[Math.floor(Math.random() * titles.length)];
    let characters = selectTitle.split('');
    console.log(characters);
    dynamicArr(characters);
}

function dynamicArr(charsArrary) {
    //한글자씩 출력 함수
    if (charsArrary.length > 0) {
        target.textContent += charsArrary.shift();
        setTimeout(() => dynamicArr(charsArrary), 80);
    } else {
        // 다 출력하면 다음 문자열 출력
        setTimeout(dynamicNext, 1000);
    }
}

setInterval(blink, 500);

// 커서 깜빡임 효과
function blink() {
    target.classList.toggle('active');
}