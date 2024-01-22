let moves = 0;
let firstPiece;
let secondPiece;
let secondPieceClicked;
// let userScore;
let matchesMade;
// let started = false;
let firstscrc;
let secondsrc;

let container = document.getElementById("puzzleContainer");
let pieces = container.getElementsByTagName("img");
console.log(pieces);

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
    console.log(pieces);
    console.log(pieces[0]);
}


function switchCard(ID) {
    //moves++;
    //userScore.innerHTML = moves;
    let firstID;

   if (secondPieceClicked) {
        secondPiece = document.getElementById(ID);
        secondsrc=secondPiece.src;
        secondPiece.src = firstPiece.src;
        firstPiece.src=secondsrc;
        secondPieceClicked=false; 
        firstPiece.style.opacity = "1";  //got this from stack overflow: https://stackoverflow.com/questions/8517173/change-image-opacity-using-javascript
        firstPiece.style.filter  = 'alpha(opacity=100)'; 
        
    }  

    else if (!secondPieceClicked) {
        firstPiece = document.getElementById(ID);
        firstID=ID-1;
        firstPiece.style.opacity = ".8";
        firstPiece.style.filter  = 'alpha(opacity=80)';
        secondPieceClicked = true;
    }

    checkWin();
}

function checkWin(){
    var win=true;
    for (let i = 0; i < 16; i++) {
        if(!document.getElementById(i+1).src.endsWith(`/images/puzzle pic${i+1}.jpg`)){
            win=false
        }
    }
    if(win==true){
        console.log("win");
        document.getElementById("instructions").innerHTML="YOU WON";
    }
}

// Call initialize() to set up the initial game state when the page loads.
initialize();