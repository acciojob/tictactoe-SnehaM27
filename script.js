// Initial input form screen
const container = document.querySelector(".container");

container.innerHTML = `
    <h1>Tic Tac Toe</h1>
    <div>
        <label>Player 1</label>
        <input id="player1" placeholder="enter name">
    </div>
    <div>
        <label>Player 2</label>
        <input id="player2" placeholder="enter name">
    </div>
    <button id="submit">Start Game</button>
`;

document.getElementById("submit").addEventListener("click", () => {
    const p1 = document.getElementById("player1").value.trim();
    const p2 = document.getElementById("player2").value.trim();

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

    let turn = "x";              // lowercase x — Cypress expects this
    let currentPlayer = player1;

    messageDiv.textContent = `${currentPlayer}, you're up`;

    const winningCombos = [
        [1,2,3], [4,5,6], [7,8,9],
        [1,4,7], [2,5,8], [3,6,9],
        [1,5,9], [3,5,7]
    ];

    document.querySelectorAll(".cell").forEach(cell => {
        cell.addEventListener("click", () => {
            if (cell.textContent !== "") return;

            cell.textContent = turn;

            if (checkWin(turn)) {
                messageDiv.textContent = `${currentPlayer} congratulations you won!`;
                highlight(turn);
                disableBoard();
                return;
            }

            // Change turn
            if (turn === "x") {
                turn = "o";
                currentPlayer = player2;
            } else {
                turn = "x";
                currentPlayer = player1;
            }

            messageDiv.textContent = `${currentPlayer}, you're up`;
        });
    });

    function checkWin(symbol) {
        return winningCombos.some(combo =>
            combo.every(id => document.getElementById(id).textContent === symbol)
        );
    }

    function highlight(symbol) {
        winningCombos.forEach(combo => {
            if (combo.every(id => document.getElementById(id).textContent === symbol)) {
                combo.forEach(id => document.getElementById(id).classList.add("win"));
            }
        });
    }

    function disableBoard() {
        document.querySelectorAll(".cell").forEach(c => {
            c.style.pointerEvents = "none";
        });
    }
}
