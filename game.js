let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

let btns = ["yellow", "red", "purple", "green"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (!started) {
        console.log("Game is Started");
        started = true;
        levelup();
    }
});

function levelup() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    
   gameFlash(randBtn);
}

function gameFlash(btn) {
    btn.classList.add("btnflash");
    setTimeout(function() {
        btn.classList.remove("btnflash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function checkAns(idx){
    // console.log(`Curr level: ${level}`)
   
if(userSeq[idx]  === gameSeq[idx]){
    if(userSeq.length === gameSeq.length){
   setTimeout(levelup, 1000);
    }
}else{
h2.innerHTML = `Game Over! your score was <b>${level}</b> <br/> press any key to Start.`;
document.querySelector("body").style.backgroundColor = "red";
setTimeout(() => {
   document.querySelector("body").style.backgroundColor = "white";
} , 250);
reset();
}
}

function btnpress() {
    let btn = this
    // console.log(this); this is the btn that we click
    userFlash(btn); //the green bg will flash when we click any btn

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level =0;

}