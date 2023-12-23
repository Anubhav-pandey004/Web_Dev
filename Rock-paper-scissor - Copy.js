let yourScore=document.querySelector("#user-score");
let compScore=document.querySelector("#comp-score");

let choice=document.querySelector(".choice");
let rock=document.querySelector("#rock");
let paper=document.querySelector("#paper");
let scissor=document.querySelector("#scissor");

let msg=document.querySelector("#msg");
let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice")

const drawGame=()=>{
    msg.style.backgroundColor="#081b31";
    msg.innerHTML="Game was Draw.Play again";

};
const showWinner=(userWin,userchoice,compChoice)=>{
   if(userWin==true){
    userScore++;
    yourScore.innerHTML=userScore;
    msg.style.backgroundColor="green";
    msg.innerHTML=`You Win! Yours ${userchoice} beats ${compChoice}`;
   }else{
    computerScore++;
    compScore.innerHTML=computerScore;
    msg.style.backgroundColor="red";
    msg.innerHTML=`You lose!${compChoice} beats your ${userchoice}`;
   }
   
}

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const playGame=(userchoice)=>{
    const compChoice=genCompChoice();
    
    if(compChoice==userchoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=compChoice=="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userWin=compChoice=="scissor"?false:true;
        }
        else{
            userWin=compChoice=="rock"?false:true;
        }
        showWinner(userWin,userchoice,compChoice);
    }

};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    playGame(userchoice);
    });
});


