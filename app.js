let puzzleEl = document.getElementById("puzzle");

// sudukustr = "2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3";

sudokuArr = [
  [2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 6, 2, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 7, 0],
  [0, 0, 6, 0, 0, 8, 0, 0, 0],
  [3, 0, 0, 0, 9, 0, 0, 0, 7],
  [0, 0, 0, 6, 0, 0, 4, 0, 0],
  [0, 4, 0, 0, 0, 0, 8, 0, 0],
  [0, 0, 5, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 3],
];

function renderCells(arr) {
  // remove all children from puzzleEl
  while (puzzleEl.firstChild) {
    puzzleEl.removeChild(puzzleEl.firstChild);
  }

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      let box = document.createElement("div");
      box.classList.add("square");

      // set as number or set as "" if 0
      if (arr[row][col]) box.textContent = arr[row][col];
      else box.textContent = "";

      puzzleEl.appendChild(box);
    }
  }
}

function isValid(row, col, value) {
  for (let i = 0; i < 9; i++) {
    if (sudokuArr[row][i] == value || sudokuArr[i][col] == value) return false;
  }

  // check if duplicate element exists in box
  let boxRow = Math.floor(row / 3) * 3;
  let boxCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (sudokuArr[boxRow + i][boxCol + j] == value) return false;
    }
  }

  return true;
}

function sudokuSolver() {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (row == 8 && col == 8) return true;
      if (sudokuArr[row][col]) continue;

      for (let value = 1; value <= 9; value++) {
        if (isValid(row, col, value)) {
          // console.log("placing " + value + " at " + row + " " + col);
          if (row == 0 && col == 5) {
            console.log("placing " + value + " at " + row + " " + col);
          }
          sudokuArr[row][col] = value;

          if (sudokuSolver(sudokuArr)) {
            return true;
          }
          sudokuArr[row][col] = 0;
        }
      }
      console.log("arr [" + row + "][" + col + "] = " + sudokuArr[row][col]);
      return false;
    }
  }
}

document.getElementById("solve-btn").addEventListener("click", function (e) {
  sudokuSolver();
  renderCells(sudokuArr);
});

document.getElementById("new-btn").addEventListener("click", function (e) {
  r = fetch("https://sugoku.herokuapp.com/board?difficulty=hard")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      sudokuArr = data.board;
      renderCells(sudokuArr);
    });
});

renderCells(sudokuArr);

