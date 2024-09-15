function gameBoard() {
    let gameBoardArr = [[],[],[]];
    let player = "X";
    const insertPlayerInput = function(posArr) {
        if (gameBoardArr[posArr[0]][posArr[1]] === undefined) {
            gameBoardArr[posArr[0]][posArr[1]] = player;
        } else {
            return false;
        }
        if (player === "X") {
            player = "O";
        } else {
            player = "X";
        }
    };
    const displayGameBoard = () => {
        for (let i = 0; i < gameBoardArr.length; i++) {
            console.log(gameBoardArr[i]);
        }
    };
    return { insertPlayerInput, displayGameBoard };
}
