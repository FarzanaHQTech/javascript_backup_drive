const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input")

const formEl =document.getElementById("form")




questionEl.innerText = `What is ${num1} multiply by ${num2}?`

const correctAns = num1 * num2;
const scoreEL = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEL.innerText = `score: ${score}`

formEl.addEventListener("submit", () =>{
    const userAns = +inputEl.value
    // console.log(userAns, typeof userAns);
    if(userAns === correctAns){
        score++
        updateLocalStorage()
    }else{
        score--
        updateLocalStorage()
    }console.log(score)
})


function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score))
}

// console.log(num1)