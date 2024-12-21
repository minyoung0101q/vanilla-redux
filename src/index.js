const add = document.getElementById("add");
const minus = document.getElementById("minus");
const span = document.querySelector("span");

let counter = 0; /* let은 블록 스코프, 재선언 가능  */

const paint = () => {
    span.innerText = `${counter}`;
}

const handleAdd = () => {
    counter++; // counter = counter + 1; & ++counter 모두 사용 가능
    // 전위, 후위 연산자는 단독으로 사용할 때 1증가하는 용도로 사용(순서 상관 없음) 
    paint();
}

const handleMinus = () => {
    counter--; // counter = counter - 1; & --counter; 모두 사용 가능 
    paint();
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
