//Sid
const body = document.getElementById('body')
const header = document.createElement('header')
const playerScore = document.createElement('section')
const footer = document.createElement('footer')
const playerTurn = document.createElement('h1')
const player1Points = document.createElement('h2')
const player2Points = document.createElement('h2')
const timer = document.createElement('div')
const win = document.createElement('div')
win.classList = 'win'
win.style.display = 'none'
let playerSignTurn = document.createElement('div')
playerScore.id = 'score'
player1Points.id = 'play1'
player2Points.id = 'play2'
playerSignTurn.classList = 'discA-style'
playerSignTurn.id = "roll"
let currentPointP1 = 0
let currentPointP2 = 0
let time = 30
body.appendChild(win)

function createHud() {
    playerTurn.innerText = `Turno:`
    player1Points.innerText = `Placar: ${currentPointP1}`
    player2Points.innerText = `Placar: ${currentPointP2}`
    body.appendChild(playerScore)

    if (screen.width > 700) {
        body.appendChild(header)
        header.appendChild(playerTurn)
        header.appendChild(playerSignTurn)
    } else if (screen.width < 700) {
        footer.appendChild(header)
        header.appendChild(playerTurn)
        header.appendChild(playerSignTurn)
    }
    playerScore.appendChild(player1Points)
    playerScore.appendChild(player2Points)
}
createHud()

// function UpdateHud() {}
// UpdateHud()

let map = []
let horizontal = []
let diagonalMap = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

function createField() {
    const fieldSection = document.createElement('section')
    fieldSection.id = 'field'

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
body.appendChild(footer)
footer.appendChild(timer)
setInterval(function() {
        playerSignTurn.style.animationName = "none"
        time--;
        timer.innerText = `00:${time}`
        if (time < 10) {
            timer.innerText = `00:0${time}`
        }
        if (time === 0) {
            time = 30
        }
    }, 1000)
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
            victoryDiagonal()
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
            playerSignTurn.classList = 'discB-style'
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
            playerSignTurn.classList = 'discA-style'
            currentPlayer = 1;
            lastPlayer = 2
                //map
            diagonalMap[lastChild.id[0]][lastChild.id[2]] = "blue"
            map[lastChild.id[0]][lastChild.id[2]] = "blue"
            horizontal[lastChild.id[2]][lastChild.id[0]] = "blue"

        }
    }
    playerSignTurn.style.animationName = 'roll'
    time = 31
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


function victoryDiagonal() {

    const edgeX = diagonalMap[0].length - 2;
    const edgeY = diagonalMap.length - 2;
    console.log(diagonalMap)
    for (let i = 0; i < edgeY; i++) {
        for (let j = 0; j < edgeX; j++) {
            let cell = diagonalMap[i][j];
            if (cell === 'red') {
                if (cell === diagonalMap[i + 1][j + 1] && cell === diagonalMap[i + 2][j + 2] && cell === diagonalMap[i + 3][j + 3]) {
                    console.log('victory')
                }
            }
        }
    }
    for (let i = 2; i < diagonalMap.length; i++) {
        for (let j = 0; j < edgeX; j++) {
            let cell = diagonalMap[i][j];
            if (cell === 'red') {
                if (cell === diagonalMap[i - 1][j + 1] && cell === diagonalMap[i - 2][j + 2] && cell === diagonalMap[i - 3][j + 3]) {
                    console.log('victory')
                }
            }
        }
    }

    for (let i = 0; i < edgeY.length; i++) {
        for (let j = 0; j < edgeX; j++) {
            let cell = diagonalMap[i][j];
            if (cell === 'blue') {
                if (cell === diagonalMap[i + 1][j + 1] && cell === diagonalMap[i + 2][j + 2] && cell === diagonalMap[i + 3][j + 3]) {
                    console.log('victory')
                }
            }
        }
    }
    for (let i = 2; i < diagonalMap.length; i++) {
        for (let j = 0; j < edgeX; j++) {
            let cell = diagonalMap[i][j];
            if (cell === 'blue') {
                if (cell === diagonalMap[i - 1][j + 1] && cell === diagonalMap[i - 2][j + 2] && cell === diagonalMap[i - 3][j + 3]) {
                    console.log('victory')
                }
            }
        }
    }

}