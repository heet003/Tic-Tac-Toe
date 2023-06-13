const board = document.getElementById("board");
const cells = board.getElementsByTagName("td");
let currentPlayer = "X";

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function () {
        if (this.textContent === "") {
            this.textContent = currentPlayer;
            if (checkForWin()) {
                alert("Player " + currentPlayer + " wins!");
                startNewGame();
            } else if (checkForDraw()) {
                alert("Draw!");
                startNewGame();
            } else {
                switchPlayers();
            }
        }
    });
}

function checkForWin() {
    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < combinations.length; i++) {
        const combination = combinations[i];
        if (
            cells[combination[0]].textContent === currentPlayer &&
            cells[combination[1]].textContent === currentPlayer &&
            cells[combination[2]].textContent === currentPlayer
        ) {
            return true;
        }
    }
    return false;
}

function checkForDraw() {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].textContent === "") {
            return false;
        }
    }
    return true;
}

function switchPlayers() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
}

function startNewGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = "";
    }
    currentPlayer = "X";
}