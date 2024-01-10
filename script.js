let moves = 0;
let firstPiece;
let secondPiece;
let secondPieceClicked;
let userScore;
let matchesToWin = 8;
let started = false;
 

function initialize() {
    userScore = document.getElementById("scoreValue");  
    resetGame(); 
    //document.getElementById("resetButton").addEventListener("click", resetGame); 
}


 function resetGame() {
    started = false;
    //userScore.innerHTML = "0";
    moves = 0;
    matchesToWin = 8;
    //resetPuzzle();
}


function shufflePuzzle() {
    started = true;
    secondPieceClicked = false;
    const container = document.getElementById("puzzleContainer");
    const cards = container.getElementsByTagName("img");

    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        container.appendChild(cards[j]);
    }
}


function switchCard(newPiece, ID) {

    //moves++;
    //userScore.innerHTML = moves;

    let currPiece = document.getElementById(ID);
    let firstsrc="";

    if (secondPieceClicked) {
        console.log("second piece clicked");
        secondPiece = document.getElementById(ID);
        secondPiece.src = firstsrc;
        console.log(newPiece);
        firstPiece.src=newPiece;
        secondPieceClicked=false; //puzzles switch places but one image doesn't show
    } else if (!secondPieceClicked) {
        console.log("first piece clicked");
        firstPiece = currPiece;
        firstsrc=newPiece;
        console.log(firstsrc);
        secondPieceClicked = true;
    }
}



// Call initialize() to set up the initial game state when the page loads.
initialize();