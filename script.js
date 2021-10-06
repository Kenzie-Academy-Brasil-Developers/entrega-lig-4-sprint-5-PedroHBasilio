//Sid
let map = [];
let horizontal = [];
let diagonalMap = [
    []
];

let numColunas = 10; //7 //5
let numLinhas = 7; //6 //4

function createField(column, quad) {
    const fieldSection = document.createElement('section')
    fieldSection.id = 'field'
    const body = document.getElementById('body')
    body.appendChild(fieldSection)
    for (let i = 0; i < column; i++) {
        const createColumn = document.createElement('section')
        createColumn.classList = 'column'
        createColumn.id = `${i}`
        fieldSection.appendChild(createColumn)
            //map
        map.push([i])
        diagonalMap.push([i])
        for (let j = 0; j < quad; j++) {
            const createQuad = document.createElement('div')
            createQuad.classList = 'cell'
            createQuad.dataset.pos = `${i}-${j}`
            createQuad.id = `${i}-${j}`
            createColumn.appendChild(createQuad)

            //map
            map[i][j] = `${i}-${j}`
            diagonalMap[i][j] = `${i}-${j}`
        }
    }
}
createField(numColunas, numLinhas)

// Pedro
const test = document.querySelectorAll('.column')
let lastChild

function addBall(a) {
    for (let i = 0; i < test.length; i++) {
        if (a.children[i].childElementCount === 0) {
            lastChild = a.children[i]
            return true
        }
    }
}



// Inti

function adicionandoBall() {
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('click', function(evt) {
            createBall(test[i])
            
            if( victoryVertical(map[i]) ){
                console.log(`${lastPlayer} ganhou Vertical`)
            }
            if( victoryDiagonal() ){
                console.log(`${lastPlayer} ganhou Diagonal`)
            }
            if( victoryArrayHorizontal() ){
                console.log(`${lastPlayer} ganhou Horizontal`)
            }
            if( tie() ){
                console.log(`Empate`)
            }
        })
    }
}
adicionandoBall()

let currentPlayer = 1;
let lastPlayer = 2

function createBall(x) {

    if (currentPlayer === 1) {
        if (addBall(x)) {
            const discA = document.createElement("div");
            discA.classList.add("discA-style");
            lastChild.appendChild(discA);
            // chamar funções de checar vitória e empate
            currentPlayer = 2;
            lastPlayer = 1

            //map
            diagonalMap[lastChild.id[0]][lastChild.id[2]] = "red"
            map[lastChild.id[0]][lastChild.id[2]] = "red"
            horizontal[lastChild.id[2]][lastChild.id[0]] = "red"
        }
    } else if (currentPlayer === 2) {
        if (addBall(x)) {
            const discB = document.createElement("div");
            discB.classList.add("discB-style");
            lastChild.appendChild(discB);
            // chamar funções de checar vitória e empate
            currentPlayer = 1;
            lastPlayer = 2
            //map
            diagonalMap[lastChild.id[0]][lastChild.id[2]] = "blue"
            map[lastChild.id[0]][lastChild.id[2]] = "blue"
            horizontal[lastChild.id[2]][lastChild.id[0]] = "blue"

        }
    }
}
let countV = 1
let countB = 1

function victoryVertical(array) {
    let last = null
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== last) {
            last = array[i]
            countV = 1
        } else {
            countV++
        }
        if (4 == countV) {
            return true
        }
    }
}

function victoryHorizontal(array) {
    let last = null
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== last) {
            last = array[i]
            countB = 1
        } else {
            countB++
        }
        if (countB == 4) {
            return true
        }
    }
}

function arrHorizontal(nLinha, nColuna) {

    for (let linha = 0; linha < nLinha; linha++) {
        horizontal.push([linha])
        for (let coluna = 0; coluna < nColuna; coluna++) {
            horizontal[linha][coluna] = map[coluna][linha]
        }
    }
}
arrHorizontal(numLinhas, numColunas)

function victoryArrayHorizontal(){
    for (let i = 0; i < horizontal.length; i++) {
       if( victoryHorizontal(horizontal[i]) ){
           return true
       }
    }
}


function victoryDiagonal() {

    const edgeX = diagonalMap[0].length - 2;
    const edgeY = diagonalMap.length - 2;
    for (let i = 0; i < edgeY; i++) {
        for (let j = 0; j < edgeX; j++) {
            let cell = diagonalMap[i][j];
            if (cell === 'red') {
                if (cell === diagonalMap[i + 1][j + 1] && cell === diagonalMap[i + 2][j + 2] && cell === diagonalMap[i + 3][j + 3]) {
                    return true
                }
            }
        }
    }
    for (let i = 2; i < diagonalMap.length; i++) {
        for (let j = 0; j < edgeX; j++) {
            let cell = diagonalMap[i][j];
            if (cell === 'red') {
                if (cell === diagonalMap[i - 1][j + 1] && cell === diagonalMap[i - 2][j + 2] && cell === diagonalMap[i - 3][j + 3]) {
                    return true
                }
            }
        }
    }

    for (let i = 0; i < edgeY; i++) {
        for (let j = 0; j < edgeX; j++) {
            let cell = diagonalMap[i][j];
            if (cell === 'blue') {
                if (cell === diagonalMap[i + 1][j + 1] && cell === diagonalMap[i + 2][j + 2] && cell === diagonalMap[i + 3][j + 3]) {
                    return true
                }
            }
        }
    }
    for (let i = 2; i < diagonalMap.length; i++) {
        for (let j = 0; j < edgeX; j++) {
            let cell = diagonalMap[i][j];
            if (cell === 'blue') {
                if (cell === diagonalMap[i - 1][j + 1] && cell === diagonalMap[i - 2][j + 2] && cell === diagonalMap[i - 3][j + 3]) {
                    return true
                }
            }
        }
    }

}

const cell = document.getElementsByClassName('cell')

function tie(){
    let count = 0
    for(let i = 0; i < cell.length; i ++){
        if(cell[i].childElementCount == 1){
            count ++
        }
        if(count == cell.length){
            return true
        }
    }    
}

function reset(){
    const btnReset = document.createElement('button')
    btnReset.innerText = 'Restart'
    body.appendChild(btnReset)

    btnReset.addEventListener('click', () =>{
        for(let i = 0; i < cell.length; i ++){
            cell[i].innerHTML = ""
        }
    }) 
    
}
reset()

