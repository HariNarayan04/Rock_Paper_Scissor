let ourScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

choices.forEach(choice => {
    let x = choice.addEventListener("click",()=>{
        let myChoice= choice.getAttribute("id");
        let compChoice=findCompChoice();
        playGame(myChoice,compChoice);
    });
});

findCompChoice=()=>{
    let options=["rock","paper","scissor"];
    let randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
};

playGame=(myChoice,compChoice)=>{
    console.log(myChoice,compChoice);
    if(myChoice===compChoice){
        Draw();
    }
    else if(myChoice==="rock"){
        if(compChoice==="paper"){
            cWon();
        }
        else{
            iWon();
        }
    }
    else if(myChoice==="paper"){
        if(compChoice==="rock"){
            iWon();
        }
        else{
            cWon();
        }
    }
    else{
        if(compChoice==="paper"){
            iWon();
        }
        else{
            cWon();
        }
    }
};

Draw=()=>{
    msg.innerText="Draw!  Play again";
    msg.style.backgroundColor="burlywood";
};

iWon=()=>{
    ourScore++;
    let myScore = document.querySelector("#os");
    myScore.innerText=ourScore
    msg.innerText="You Won!";
    msg.style.backgroundColor="green";
};

cWon=()=>{
    compScore++;
    let cScore= document.querySelector("#cs");
    cScore.innerText=compScore
    msg.innerText="You Lose";
    msg.style.backgroundColor="rgba(255, 0, 0, 0.852)";
};

const resetBtn = document.querySelector("#reset_btn");

resetBtn.addEventListener("click", () => {
    ourScore = 0;
    compScore = 0;
    document.querySelector("#os").innerText = ourScore;
    document.querySelector("#cs").innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "burlywood";
});
