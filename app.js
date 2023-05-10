const gameBoard = document.getElementById("gameboard");
const infoDisplay = document.getElementById("info");
const startCells = ["", "", "", "", "", "", "", "", ""];

let go;

function createBoard() {
  startCells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addGo);
    gameBoard.appendChild(cellElement);
  });
}

createBoard();

function addGo(e) {
  const goDisplay = document.createElement("div");
  goDisplay.classList.add(go);
  e.target.appendChild(goDisplay);
  go = go === "circle" ? "cross" : "circle";
  infoDisplay.textContent = `it is now "${go}"'s go.`;
  e.target.removeEventListener("click", addGo);
}
