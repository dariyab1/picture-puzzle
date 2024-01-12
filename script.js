let moves = 0;
let firstPiece;
let secondPiece;
let secondPieceClicked;
// let userScore;
// let matchesToWin = 8;
// let started = false;
let firstscrc;

let container = document.getElementById("puzzleContainer");
let pieces = container.getElementsByTagName("img");

function initialize() {
    userScore = document.getElementById("scoreValue");  
    resetGame();     
}

 function resetGame() {
    started = false;
    //userScore.innerHTML = "0";
    moves = 0;
    matchesToWin = 8;
    //resetPuzzle();
}//don't need this functoin


function shufflePuzzle() {
    started = true;//dont need this either
    secondPieceClicked = false;
    
    for (let i = pieces.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        container.appendChild(pieces[j]);
    }
}


function switchCard(srcCurr, ID) {

    //moves++;
    //userScore.innerHTML = moves;

    
   if (secondPieceClicked) {
        console.log("second piece clicked");
        
        
        
        secondPiece = document.getElementById(ID);
        console.log(secondPiece.src)
        secondPiece.src = firstPiece.src;
        console.log(srcCurr)
        firstPiece.src=srcCurr;
        secondPieceClicked=false; 
    }  
    else if (!secondPieceClicked) {
        console.log("first piece clicked");
        firstPiece = document.getElementById(ID);
        // firstsrc = firstPiece.src;
        // console.log(firstsrc);
        secondPieceClicked = true;
    }
}



// Call initialize() to set up the initial game state when the page loads.
initialize();