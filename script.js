function gameBoard() {
    let gameBoardArr = [[],[],[]];
    let player = "X";
    let round = 0;
    let winner;
    let endOrNot;
    const insertPlayerInput = function(posArr) {
        if (gameBoardArr[posArr[0]][posArr[1]] === undefined) {
            gameBoardArr[posArr[0]][posArr[1]] = player;
            round++;
        } else {
            return false;
        }
        if (player === "X") {
            player = "O";
        } else {
            player = "X";
        }
        winner = checkWinner();
        if (winner !== undefined) {
            console.log(winner, " is the winner !");
            return "END";
        }
    };
    const displayGameBoard = () => {
        for (let i = 0; i < gameBoardArr.length; i++) {
            console.log(gameBoardArr[i][0], '|',gameBoardArr[i][1],'|',gameBoardArr[i][2]);
        }
    };
    const checkLine = (index) => { return (gameBoardArr[index][0] === gameBoardArr[index][1]) && (gameBoardArr[index][0] === gameBoardArr[index][2])};
    const checkDiag1 = () => { return (gameBoardArr[0][0] === gameBoardArr[1][1]) && (gameBoardArr[0][0] === gameBoardArr[2][2])};
    const checkDiag2 = () => { return (gameBoardArr[0][2] === gameBoardArr[1][1]) && (gameBoardArr[0][2] === gameBoardArr[2][0])};
    const checkWinner = function() {
        if (checkDiag1()) {
            return gameBoardArr[0][0];
        }
        if (checkDiag2()) {
            return gameBoardArr[2][0];
        }
        if (checkLine(0)) {
            return gameBoardArr[0][0];
        }
        if (checkLine(1)) {
            return gameBoardArr[1][0];
        }
        if (checkLine(2)) {
            return gameBoardArr[2][0];
        }
    };
    const getWhoPlay = () => { return player; };
    const play = function() {
        for (let i = 0; i<9 ; i++) {
            let pos1;
            let pos2;
            do {
                do {
                    pos1 = parseInt(prompt(getWhoPlay() + " pos 1 : "));
                    pos2 = parseInt(prompt(getWhoPlay() + " pos 2 : "));
                } while (!(pos1<=2 && pos1 >= 0) || !(pos2<=2 && pos2>= 0));      
                endOrNot = insertPlayerInput([pos1, pos2]);
            } while (endOrNot === false);
            if (endOrNot === "END") {
                console.log("END!");
                break;
            }
            displayGameBoard();

        }
        if (winner === undefined) {
            console.log("No winner !");
        }
        reset();
    }
    const reset = function() {
        gameBoardArr = [[],[],[]];
        player = "X";
        round = 0;
        winner = undefined;
        endOrNot = undefined;
    }
    const generateGameboard = function() {
        const theGameboard = document.createElement("div");
        theGameboard.setAttribute("id", "game-board");
        for (let i = 0; i < 3 ; i++) {
            for (let j = 0; j < 3 ; j++) {
                let cell = document.createElement("div");
                cell.setAttribute("i", i);
                cell.setAttribute("j", j);
                // cell.innerHTML = ["X","O"][Math.floor(Math.random() * (2 - 0) + 0)];
                cell.addEventListener("click", function() {
                    console.log(round);
                    if (winner === undefined && round <= 8) {
                        if (cell.innerHTML === "") {
                            cell.innerHTML = player;
                            insertPlayerInput([i, j]);
                        }
                        
                    }
                    
                })
                theGameboard.appendChild(cell);
            }
        }
        document.querySelector("body").appendChild(theGameboard);
    }
    return { insertPlayerInput, displayGameBoard, getWhoPlay, play, generateGameboard};
}
const game = gameBoard();
game.generateGameboard();