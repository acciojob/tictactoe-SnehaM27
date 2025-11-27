//your JS code here. If required.
// Create initial form UI
const container = document.querySelector(".container");

container.innerHTML = `
    <h1>Tic Tac Toe</h1>
    <div>
        <label>Player 1</label>
        <input id="player-1" placeholder="enter name">
    </div>
    <div>
        <label>Player 2</label>
        <input id="player-2" placeholder="enter name">
    </div>
    <button id="submit">Start Game</button>
`;

document.getElementById("submit").addEventListener("click", () => {
    const p1 = document.getElementById("player-1").value.trim();
    const p2 = document.getElementById("player-2").value.trim();

    if (p1 === "" || p2 === "") return;

    startGame(p1, p2);
});


function startGame(player1, player2) {
    container.innerHTML = `
        <h1>Tic Tac Toe</h1>
        <div class="message"></div>
        <div class="board"></div>
    `;

    const messageDiv = document.querySelector(".message");
    const board = document.querySelector(".board");

    // Create 9 cells
    for (let i = 1; i <= 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.id = i;
        board.appendChild(cell);
    }

    let turn = "X";
    let currentPlayer = player1;

    messageDiv.textContent = `${currentPlayer}, you're up`;

    const winningCombos = [
        [1,2,3], [4,5,6], [7,8,9],
        [1,4,7], [2,]()
