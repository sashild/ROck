

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const Results = document.getElementById("Results");
const Printscore = document.getElementById("score");
const clear = document.getElementById("clear");
const fresults = document.getElementById("fresults");
const dintro = document.getElementById("dintro");
let PlayerChoice,CScore=0,PScore=0;

dintro.innerHTML = "You have five tries to save humanity. Choose your weapon: "

rock.addEventListener("click",function() { dintro.innerHTML = ""; game("rock") })
paper.addEventListener("click",function() { dintro.innerHTML = "";game("paper")})
scissors.addEventListener("click",function() { dintro.innerHTML = "";game("scissors")})
clear.addEventListener("click",function() { dintro.innerHTML = "You have five tries to save humanity. Choose your weapon: "; CScore=0,PScore=0;Printscore.innerHTML = 'Computer: ' + CScore + " Your Score:" + PScore; Results.innerHTML = ''; fresults.innerHTML = "";})

function game (PlayerChoice)
{
  fresults.innerHTML = "";
  console.log(PlayerChoice);

  ComputerChoice = generateChoice();
  
  

  if (ComputerChoice == PlayerChoice)
  {
    Results.innerHTML = 'Computer chose: ' + ComputerChoice + '. It\'s a Tie';
    CScore=CScore + 0.5;
    PScore=PScore + 0.5;
  }
  else if (ComputerChoice == "rock" && PlayerChoice == "paper")
  {
    Results.innerHTML = 'Computer chose: ' + ComputerChoice + ". You Win!";
    CScore=CScore + 0;
    PScore=PScore + 1;
  }
  else if (ComputerChoice == "paper" && PlayerChoice == "scissors")
  {
    Results.innerHTML = 'Computer chose: ' + ComputerChoice + ". You Win!";
    CScore=CScore + 0;
    PScore=PScore + 1;
  }
  else if (ComputerChoice == "scissors" && PlayerChoice == "rock")
  {
    Results.innerHTML = 'Computer chose: ' + ComputerChoice + ". You Win!";
    CScore=CScore + 0;
    PScore=PScore + 1;
  }
  else 
  {
    Results.innerHTML = 'Computer chose: ' + ComputerChoice + ". You Lose!";
    CScore=CScore + 1;
    PScore=PScore + 0;
  }
 

 Printscore.innerHTML = 'Computer: ' + CScore + " Your Score:" + PScore;

 if(CScore!=PScore)
 {
 if(CScore>=5 || PScore>=5)
 {
  if (CScore>PScore)
    fresults.innerHTML = 'Computers have won. Mankind is doomed!';
  if (PScore>CScore)
    fresults.innerHTML = 'Victory is ours. You have saved Humanity';
  CScore=0,PScore=0;
  
 }
}

}

function generateChoice()
{
  let r= Math.max(Math.floor(Math.random() * 4),1);
  

  switch (r)
  {
    case 1:
      return "rock";

    case 2:
      return "paper";

    case 3:
      return "scissors";
  }
}




