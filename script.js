let boxes = document.querySelectorAll(".box");
let reset = document.getElementById("reset");
let winnerBox = document.querySelector(".winnermsg");
let winnerText= document.querySelector(".winnertext");
let newGame = document.getElementById("newGame");
let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];







boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerHTML = "O";
      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;
    cheackWinner();
  });
});


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        winnerBox.classList.add("hide");
        box.innerText=""
    }
}





const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
        box.innerText=""
    }
}



const showWinner = (winner) => {
    winnerText.innerText=(`Congratulations, winner is ${winner}.`);
   winnerBox.classList.remove("hide");
   disableBoxes()
};



const cheackWinner = () => {
  for (let pattern of winPattern) {
    let pos1val = boxes[pattern[0]].innerHTML;
    let pos2val = boxes[pattern[1]].innerHTML;
    let pos3val = boxes[pattern[2]].innerHTML;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

newGame.addEventListener("click",()=>{
    enableBoxes()
});
reset.addEventListener("click",()=>{
    enableBoxes()
})