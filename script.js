function gameBoard() {
    let gameBoardArr = [[],[],[]];
    let player = "X";
    const insertPlayerInput = function(posArr) {
        gameBoardArr[posArr[0]][posArr[1]] = player;
        if (player === "X") {
            player = "O";
        } else {
            player = "X";
        }
    };
    const displayGameBoard = () => console.log(gameBoardArr);
    return { insertPlayerInput, displayGameBoard };
}
