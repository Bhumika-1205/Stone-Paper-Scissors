let choices=document.querySelectorAll(".choice");

let userWin=0;
let compWin=0;

let genCompChoice=()=>{
  const options=["rock","paper","scissors"];
  let randomChoice=Math.floor(Math.random()*3);
  return options[randomChoice];
} 

let playGame=(userChoice)=>{
  const computerChoice=genCompChoice();
  console.log(`Computer choice ${computerChoice}`);
  console.log(`userChoice ${userChoice}`);

  if(userChoice===computerChoice){
    draw();
  }
  else{
    if(userChoice==="rock"){
      if(computerChoice==="paper"){
      lose(computerChoice);
      }
      else{
        win(computerChoice);
      }
    }

    else if(userChoice==="paper"){
      if(computerChoice==="scissors"){
      lose(computerChoice);
      }
      else{
        win(computerChoice);  
      }
    }

    else{
      if(computerChoice==="rock"){
      lose(computerChoice);
    }
      else{
        win(computerChoice);
      }
    }
  }
  
}

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    let userChoice=choice.getAttribute("id");
    playGame(userChoice);
  })
  
});

let draw=()=>{
  let a=document.querySelector(".win");
  a.style.visibility="visible";
  a.textContent="It's a draw!!";
  a.style.backgroundColor="#dad7cd";
}


let lose=(computerChoice)=>{
  let a=document.querySelector(".win");
  a.style.visibility="visible";
  a.textContent=`It's a lose!! Computer choose ${computerChoice}`;
  a.style.backgroundColor="#dad7cd";
  document.querySelector("#computer-score").textContent=++compWin;
}

let win=(computerChoice)=>{
  let a=document.querySelector(".win");
  a.style.visibility="visible";
  a.textContent=`It's a win!! Computer choose ${computerChoice}`;
  a.style.backgroundColor="#dad7cd";
  document.querySelector("#player-score").textContent=++userWin;

}