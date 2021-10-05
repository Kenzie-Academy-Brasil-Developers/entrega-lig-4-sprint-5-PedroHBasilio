//Sid
let map = []
let horizontal = []
let diagonal = []

function createField() {
    const fieldSection = document.createElement('section')
    fieldSection.id = 'field'
    const body = document.getElementById('body')
    body.appendChild(fieldSection)
    for (let i = 0; i < 7; i++) {
        const createColumn = document.createElement('section')
        createColumn.classList = 'column'
        createColumn.id = `${i}`
        fieldSection.appendChild(createColumn)
            //map
        map.push([i])
        for (let j = 0; j < 6; j++) {
            const createQuad = document.createElement('div')
            createQuad.classList = 'cell'
            createQuad.dataset.pos = `${i}-${j}`
            createQuad.id = `${i}-${j}`
            createColumn.appendChild(createQuad)

            //map
            map[i][j] = `${i}-${j}`

        }
    }
}
createField()


console.log(map)

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
            victoryVertical(map[i])
            for (let i = 0; i < horizontal.length; i++) {
                victoryHorizontal(horizontal[i])

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
            console.log(`${lastPlayer} ganhou Vertical`)
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

            console.log(`${lastPlayer} ganhou Horizontal`)
        }
    }
}

function arrHorizontal() {

    for (let linha = 0; linha < 6; linha++) {
        horizontal.push([linha])
        for (let coluna = 0; coluna < 7; coluna++) {
            horizontal[linha][coluna] = map[coluna][linha]
        }
    }
}
arrHorizontal()

function arrDiagonal(){
    
    for(let i = 0; i <= 6; i ++){
        diagonal.push([i])
    }
}
arrDiagonal()
console.log(diagonal)

function victoryDiagonal(){
    let quadrado
    for(let i = 0; i < map.length; i++)
    quadrado = posição[i]
    if (quadrado === vermelho) {
        if ( (quadrado === linha[i+1] && quadrado === linha[i+2] && quadrado === linha[i+3]) && (quadrado === coluna[i+1] && quadrado === coluna[i+2] && quadrado === coluna[i+3]) {
            // chama função de vitoria
        }
    }
}