let wrapper = document.getElementById('wrapper');

// sudukustr = "2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3";
    
sudukuarr = [
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

function renderCells() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        let box = document.createElement("div");
        box.classList.add("square");
        box.textContent = sudukuarr[row][col];
        wrapper.appendChild(box);
      }
    }
}

renderCells()