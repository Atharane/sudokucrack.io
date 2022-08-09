let wrapper = document.getElementById('wrapper');   

grid = []

sudukustr = "2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3";

function renderCells() {
    for (let i = 0; i < 81; i++) {
        console.log(i)
        let box = document.createElement("div")
        box.classList.add('box')    
        box.id = i
        box.textContent = sudukustr[i]
        wrapper.appendChild(box)
    }
}

renderCells()