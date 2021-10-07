// INTI - COMEÇO
const initialScreen = document.querySelector(".initial-screen");
initialScreen.classList.add("initial-screen");
const blurDiv = document.querySelector("#blur");
const boxSelectionModes = document.createElement("div");
boxSelectionModes.classList.add("box-selection");
//boxSelectionModes.textContent = "Escolha qual nível quer jogar:";
blurDiv.appendChild(boxSelectionModes);

// const easyMode = document.createElement("button");
const normalMode = document.createElement("button");
// const hardMode = document.createElement("button");

// easyMode.classList.add("btn-select");
normalMode.classList.add("btn-select");
// hardMode.classList.add("btn-select");

// easyMode.id = "easy";
normalMode.id = "normal";
// hardMode.id = "hard";

// easyMode.textContent = "Fácil";
normalMode.textContent = "JOGAR";
// hardMode.textContent = "Difícil";

const btnFlex = document.createElement("div");
btnFlex.classList.add("btn-mobile");
boxSelectionModes.appendChild(btnFlex);

// btnFlex.appendChild(easyMode);
btnFlex.appendChild(normalMode);
// btnFlex.appendChild(hardMode);

const bgSound = document.getElementById("intro");

let numColunas = 7;
let numLinhas = 6;

// boxSelectionModes.addEventListener("click", (evt) => {
//     let selectedMode = evt.target.id;

//     if (selectedMode === "easy") {
//         numColunas = 5;
//         numLinhas = 4;
//     }
//     if (selectedMode === "normal") {
//         numColunas = 7;
//         numLinhas = 6;
//     }
//     if (selectedMode === "hard") {
//         numColunas = 10;
//         numLinhas = 7;
//     }
//     createField(numColunas, numLinhas)

//     // chamar função de reproduzir a musica tema do jogo
//     initialScreen.classList.remove("initial-screen");
//     initialScreen.classList.add("initial-none");

// });
// INTI - FINAL

normalMode.addEventListener("click", (evt) => {
    let confirma = evt.target;
    const taunt = document.getElementById("intro");
    taunt.play();
    if (confirma.id === "normal") {
        initialScreen.classList.remove("initial-screen");
        initialScreen.classList.add("initial-none");
    }
});
//Sid
const body = document.getElementById("body");
const header = document.createElement("header");
const footer = document.createElement("footer");

const playerScore = document.createElement("section");

const player1Points = document.createElement("h2");
const player2Points = document.createElement("h2");

const timer = document.createElement("div");
const win = document.createElement("div");
win.classList = "win";
win.style.display = "none";

let playerSignTurn = document.createElement("div");
playerSignTurn.classList = "discA-style";
playerSignTurn.id = "roll";

playerScore.id = "score";
player1Points.id = "play1";
player2Points.id = "play2";

let currentPointP1 = 0;
let currentPointP2 = 0;
let time = 30;
body.appendChild(win);

function createHud() {

    player1Points.innerText = `TeamCap: ${currentPointP1}`;
    player2Points.innerText = `TeamIron: ${currentPointP2}`;
    body.appendChild(playerScore);

    if (screen.width > 700) {
        body.appendChild(header);

        header.appendChild(playerSignTurn);
    } else if (screen.width < 700) {
        footer.appendChild(header);

        header.appendChild(playerSignTurn);
    }
    playerScore.appendChild(player1Points);
    playerScore.appendChild(player2Points);
}
createHud();

let map = [];
let horizontal = [];
let diagonalMap = [
    []
];

// let numColunas = 7;
// let numLinhas = 6;

const fieldSection = document.createElement("section");
fieldSection.id = "field";
body.appendChild(fieldSection);

function createField(column, quad) {
    for (let i = 0; i < column; i++) {
        const createColumn = document.createElement("section");
        createColumn.classList = "column";
        createColumn.id = `${i}`;
        fieldSection.appendChild(createColumn);
        for (let j = 0; j < quad; j++) {
            const createQuad = document.createElement("div");
            createQuad.classList = "cell";
            createQuad.dataset.pos = `${i}-${j}`;
            createQuad.id = `${i}-${j}`;
            createColumn.appendChild(createQuad);
        }
        createMap(column, quad)

    }
}
createField(numColunas, numLinhas);


function createMap(numColunas, numLinhas) {
    for (let i = 0; i < numColunas; i++) {
        //map
        map.push([i]);
        diagonalMap.push([i]);
        for (let j = 0; j < numLinhas; j++) {
            //map
            map[i][j] = `${i}-${j}`;
            diagonalMap[i][j] = `${i}-${j}`;
        }
    }
}
// createField(numColunas, numLinhas)
body.appendChild(footer);
footer.appendChild(timer);
setInterval(function() {
    time--;
    timer.innerText = `00:${time}`;
    if (time < 10) {
        timer.innerText = `00:0${time}`;
    }
    if (time === 0) {
        if (currentPlayer === 1) {
            currentPlayer = 2;
            playerSignTurn.classList = "discB-style";
        } else {
            currentPlayer = 1;
            playerSignTurn.classList = "discA-style";
        }
        time = 30;
    }
}, 1000);
// Pedro
const test = document.querySelectorAll(".column");
let lastChild;

function addBall(a) {
    for (let i = 0; i < test.length; i++) {
        if (a.children[i].childElementCount === 0) {
            lastChild = a.children[i];
            return true;
        }
    }
}
// Inti
score1 = 0;
score2 = 0;
let consectiveCap = 0;
let consectiveIron = 0;

const field = document.getElementById("field");

function adicionandoBall() {
    bgSound.play()
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('click', function(evt) {
            createBall(test[i])
            if (victoryVertical(map[i])) {
                if (lastPlayer == 1) {
                    score1++
                    consectiveIron = 0
                    consectiveCap++
                    player1Points.innerText = `teamCap:${score1}`

                }
                if (lastPlayer == 2) {
                    score2++
                    consectiveCap = 0
                    consectiveIron++
                    player2Points.innerText = `TeamIron:${score2}`

                }
                victorious()
                console.log(consectiveCap)
                console.log(consectiveIron)
                console.log('vertical')
            }
            if (victoryDiagonal()) {
                if (lastPlayer == 1) {
                    score1++
                    consectiveIron = 0
                    consectiveCap++
                    player1Points.innerText = `teamCap:${score1}`

                }
                if (lastPlayer == 2) {
                    score2++
                    consectiveCap = 0
                    consectiveIron++
                    player2Points.innerText = `TeamIron:${score2}`

                }
                victorious()
                console.log('diagonal')
            }
            if (victoryArrayHorizontal()) {
                if (lastPlayer == 1) {
                    score1++
                    consectiveIron = 0
                    consectiveCap++
                    player1Points.innerText = `teamCap:${score1}`

                }
                if (lastPlayer == 2) {
                    score2++
                    consectiveCap = 0
                    consectiveIron++
                    player2Points.innerText = `TeamIron:${score2}`

                }
                victorious()
                console.log('Horizontal')
            }

            if (tie()) {
                win.id = "draw"
                setTimeout(function() {
                    win.style.display = 'flex'
                }, 1500)

                setTimeout(function() {
                    win.style.display = 'none'
                }, 3000)
                time = 31
                setTimeout(function() {
                    resetBoard()
                }, 2500)

            }
        })
        console.log(consectiveCap)
        console.log(consectiveIron)
    }
}
adicionandoBall();

function victorious() {
    const tauntCap = document.getElementById("capTaunt");
    const tauntIron = document.getElementById("ironTaunt");
    let consec = false;
    if (consectiveCap == 3) {
        win.id = "capConsecutiveWin";
        consec = true;
    } else if (consectiveIron == 3) {
        win.id = "ironConsecutiveWin";
        consec = true;
    } else if (lastPlayer === 1) {
        win.id = "capWin";
    } else {
        win.id = "ironWin";
    }

    if (consec === false) {
        setTimeout(function() {
            win.style.display = "flex";
        }, 800);
        setTimeout(() => {
            win.style.display = "none";
        }, 2700);
        setTimeout(function() {
            resetBoard();
        }, 800);
    } else if (consec === true && win.id === "capConsecutiveWin") {
        setTimeout(function() {
            tauntCap.play();
            win.style.display = "flex";
        }, 800);
        setTimeout(() => {
            win.style.display = "none";
        }, 2800);
        setTimeout(function() {
            resetBoard();
        }, 800);
    } else if (consec === true && win.id === "ironConsecutiveWin") {
        setTimeout(function() {
            tauntIron.play();
            win.style.display = "flex";
        }, 800);
        setTimeout(() => {
            win.style.display = "none";
        }, 4700);
        setTimeout(function() {
            resetBoard();
        }, 800);
    }
}
let currentPlayer = 1;
let lastPlayer = 2;

function createBall(x) {
    if (currentPlayer === 1) {
        console.log("click");
        if (addBall(x)) {
            const discA = document.createElement("div");
            discA.classList.add("discA-style");
            lastChild.appendChild(discA);
            currentPlayer = 2;
            lastPlayer = 1;
            //map
            diagonalMap[lastChild.id[0]][lastChild.id[2]] = "red";
            map[lastChild.id[0]][lastChild.id[2]] = "red";
            horizontal[lastChild.id[2]][lastChild.id[0]] = "red";
        }
    } else if (currentPlayer === 2) {
        if (addBall(x)) {
            const discB = document.createElement("div");
            discB.classList.add("discB-style");
            lastChild.appendChild(discB);
            currentPlayer = 1;
            lastPlayer = 2;
            //map
            diagonalMap[lastChild.id[0]][lastChild.id[2]] = "blue";
            map[lastChild.id[0]][lastChild.id[2]] = "blue";
            horizontal[lastChild.id[2]][lastChild.id[0]] = "blue";
        }
    }
    setTimeout(function() {
        playerSignTurn.style.animationName = "roll";
        if (currentPlayer == 2) {
            playerSignTurn.classList = "discB-style";
        } else {
            playerSignTurn.classList = "discA-style";
        }
    }, 550);
    time = 31;
    playerSignTurn.style.animationName = "none";
}
let countV = 1;
let countB = 1;

function victoryVertical(array) {
    let last = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== last) {
            last = array[i];
            countV = 1;
        } else {
            countV++;
        }
        if (4 == countV) {
            return true;
        }
    }
}

function victoryHorizontal(array) {
    let last = null;
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== last) {
            last = array[i];
            countB = 1;
        } else {
            countB++;
        }
        if (countB == 4) {
            return true;
        }
    }
}

function arrHorizontal(nLinha, nColuna) {
    for (let linha = 0; linha < nLinha; linha++) {
        horizontal.push([linha]);
        for (let coluna = 0; coluna < nColuna; coluna++) {
            horizontal[linha][coluna] = map[coluna][linha];
        }
    }
    horizontalHolder = horizontal;
}
arrHorizontal(numLinhas, numColunas);

function victoryArrayHorizontal() {
    for (let i = 0; i < horizontal.length; i++) {
        if (victoryHorizontal(horizontal[i])) {
            return true;
        }
    }
}
const nPlayers = ["red", "blue"];

function victoryDiagonal() {
    const edgeX = diagonalMap[0].length - 2;
    const edgeY = diagonalMap.length - 2;
    for (let p = 0; p <= 1; p++) {
        for (let i = 0; i < edgeY; i++) {
            for (let j = 0; j < edgeX; j++) {
                let cell = diagonalMap[i][j];
                if (cell === nPlayers[p]) {
                    if (
                        cell === diagonalMap[i + 1][j + 1] &&
                        cell === diagonalMap[i + 2][j + 2] &&
                        cell === diagonalMap[i + 3][j + 3]
                    ) {
                        return true;
                    }
                }
            }
        }
        for (let i = 2; i < diagonalMap.length; i++) {
            for (let j = 0; j < edgeX; j++) {
                let cell = diagonalMap[i][j];
                if (cell === nPlayers[p]) {
                    if (
                        cell === diagonalMap[i - 1][j + 1] &&
                        cell === diagonalMap[i - 2][j + 2] &&
                        cell === diagonalMap[i - 3][j + 3]
                    ) {
                        return true;
                    }
                }
            }
        }
    }
}
const cell = document.getElementsByClassName("cell");

function tie() {
    let count = 0;
    for (let i = 0; i < cell.length; i++) {
        if (cell[i].childElementCount == 1) {
            count++;
        }
        if (count == cell.length) {
            return true;
        }
    }
}

function reset() {
    const btnReset = document.createElement('button')
    btnReset.id = "reset"
    btnReset.innerText = 'Restart'
    body.appendChild(btnReset)
    btnReset.addEventListener('click', () => {
        for (let i = 0; i < cell.length; i++) {
            cell[i].innerHTML = ""
        }
        time = 31
        score2 = 0
        score1 = 0
        player1Points.innerText = `teamCap:${score1}`
        player2Points.innerText = `teamIron:${score2}`
    })
}
reset();

function resetBoard() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = "";
    }
    map = [];
    horizontal = [];
    diagonalMap = [];
    createMap(numColunas, numLinhas);
    arrHorizontal(numLinhas, numColunas);
}

// function unloadScrollBars() {
//     document.documentElement.style.overflow = "hidden";
//     document.body.scroll = "no";
// }
// unloadScrollBars();