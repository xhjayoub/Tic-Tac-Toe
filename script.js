function tictactoe() {
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
            displayMessage(winner);
            return "END";
        }
        if (round === 9) {
            displayMessage(winner);
        }
    };
    const displayGameBoard = () => {
        for (let i = 0; i < gameBoardArr.length; i++) {
            console.log(gameBoardArr[i][0], '|',gameBoardArr[i][1],'|',gameBoardArr[i][2]);
        }
    };
    const checkLine = (index) => { return (gameBoardArr[index][0] === gameBoardArr[index][1]) && (gameBoardArr[index][0] === gameBoardArr[index][2])};
    const checkRow = (index) => { return (gameBoardArr[0][index] === gameBoardArr[1][index]) && (gameBoardArr[0][index] === gameBoardArr[2][index])};
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
        if (checkRow(0)) {
            return gameBoardArr[0][0];
        }
        if (checkRow(1)) {
            return gameBoardArr[0][1];
        }
        if (checkRow(2)) {
            return gameBoardArr[0][2];
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
        const oldBoard = document.getElementById("game-board");
        if (oldBoard !== null) {
            return false;
        }
        const theGameboard = document.createElement("div");
        theGameboard.setAttribute("id", "game-board");
        for (let i = 0; i < 3 ; i++) {
            for (let j = 0; j < 3 ; j++) {
                let cell = document.createElement("div");
                cell.addEventListener("click", function() {
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
    const playAndRestart = function() {
        const btnContainer = document.createElement("div");
        const playBtn = document.createElement("button");
        playBtn.innerHTML = "Play";
        const restartBtn = document.createElement("button");
        restartBtn.innerHTML = "Restart";
        
        playBtn.addEventListener("click", () => {generateGameboard();})
        restartBtn.addEventListener("click", function() {
            const oldMessage = document.getElementById("msg");
            if (oldMessage !== null) {
                oldMessage.remove();
            }
            const oldBoard = document.getElementById("game-board");
            if (oldBoard !== null) {
                oldBoard.remove();
            }
            reset();
            generateGameboard();
        });
        btnContainer.appendChild(playBtn);
        btnContainer.appendChild(restartBtn);

        document.querySelector("body").appendChild(btnContainer);


    }
    const displayMessage = function(winner) {
        const msgContainer = document.createElement("div");
        msgContainer.setAttribute("id", "msg");
        if (winner) {
            msgContainer.innerHTML = winner + " wins !";
            
        } else if (round === 9) {
            msgContainer.innerHTML = "No winners !";
        }
        
        document.querySelector("body").appendChild(msgContainer);
    }
    const playerNamesGenerator = function(id, name) {
        console.log("logged");
        const player = document.createElement("div");
        player.setAttribute("id", id);
        const playerLabel = document.createElement("label");
        playerLabel.setAttribute("for", name);
        playerLabel.innerHTML = id;
        const nameInput = document.createElement("input");
        nameInput.setAttribute("type", "text");
        nameInput.setAttribute("id", name);
        nameInput.setAttribute("name", name);
        playerLabel.appendChild(nameInput);
        player.appendChild(playerLabel);
        return player;
    }
    const playersNames = function() {
        console.log("logged");
        const playersNamesContainer = document.createElement("div");
        playersNamesContainer.setAttribute("id","playerNames");
        
        const player1 = playerNamesGenerator("player1", "player1Input");
        const player2 = playerNamesGenerator("player2", "player2Input");
        playersNamesContainer.appendChild(player1);
        playersNamesContainer.appendChild(player2);
        document.querySelector("body").appendChild(playersNamesContainer);
    }
    const playerTurnsIniatilize = function() {
        const plTurnsMsg = document.createElement("div");
        plTurnsMsg.setAttribute("id", "playerTurns");
        document.querySelector("body").appendChild(plTurnsMsg);
    }
    playersNames();
    playerTurnsIniatilize();
    playAndRestart();
    return { insertPlayerInput, displayGameBoard, getWhoPlay, play, generateGameboard};
}
const game = tictactoe();