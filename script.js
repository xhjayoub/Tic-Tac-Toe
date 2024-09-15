function gameBoard() {
    let gameBoardArr = [[],[],[]];
    const insertPlayerInput = (player, posArr) => gameBoardArr[posArr[0]][posArr[1]] = player;
    const displayGameBoard = () => console.log(gameBoardArr);
    return { insertPlayerInput, displayGameBoard };
}
