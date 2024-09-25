const gameBoard = ['','','','','','','','','']
let gameState = true;
let currentPlayer = "X";
const boxes = document.querySelectorAll('.gameBox');
const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];
//add click event for every box and update the game board to show the click
const result = document.querySelector(".result");
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (gameBoard[index] == '' && gameState == true){
            gameBoard[index] = currentPlayer;
            box.innerHTML = currentPlayer;
            box.innerHTML === "X" ? box.classList.add("x") : box.classList.add("o");
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            checkWin();
        }
    } )
})

//checks every iteration of a win and compares the gameboard indexes to see if they are the same
function checkWin(){
    for (let i = 0; i < winningCombos.length; i++){
        const [a, b, c] = winningCombos[i];

        if (gameBoard[a] != '' && gameBoard[b] != '' && gameBoard[c] != ''){
         if(gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]){
            setTimeout(() => {
                alert(`${gameBoard[a]} Wins!`);
            }, 100);
            gameState = false;
            return;
         }
        }
    }

    if (!gameBoard.includes('')){
        setTimeout(() => {
            alert("Draw!");
        }, 100);
        gameState = false;
        return;
    }
}

//resets gameboard array and innerhtml
function reset(){
    for(let i = 0; i < gameBoard.length; i++){
        gameBoard[i] = '';
        boxes[i].innerHTML = '';
        boxes[i].classList.remove("o");
    }
    gameState = true;
    currentPlayer = "X";
}