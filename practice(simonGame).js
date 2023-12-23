let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let highscore=0

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelUp();
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}

function checkAns(idx){
    // console.log(idx);
    // console.log(`current level : ${level}`);
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over! Your level was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";    
        },150);
        reset();
        
    }
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },250);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);

    checkAns(userseq.length-1);
}

function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3)+1;
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randbtn);
}

function btnPress(){
    let btn= this;
    userFlash(btn);
}

let allbtns=document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click",btnPress);
};
function reset(){
    console.log(`level:${level} highscore;${highscore}`);
    if(level>highscore){
        console.log(highscore);
        let score=document.querySelector(".top");
        highscore=level
        score.innerText=level;
    }
    started=false;
    gameseq=[];
    level=0;
    gameseq=[];
    
}

