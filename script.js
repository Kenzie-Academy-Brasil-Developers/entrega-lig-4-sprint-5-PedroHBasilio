// INTI - COMEÇO
const initialScreen = document.querySelector(".initial-screen");
initialScreen.classList.add("initial-screen");

const boxSelectionModes = document.createElement("div");
boxSelectionModes.classList.add("box-selection");
boxSelectionModes.textContent = "Escolha qual nível quer jogar:";
initialScreen.appendChild(boxSelectionModes);

const easyMode = document.createElement("button");
const normalMode = document.createElement("button");
const hardMode = document.createElement("button");

easyMode.classList.add("btn-select");
normalMode.classList.add("btn-select");
hardMode.classList.add("btn-select");

easyMode.id = "easy";
normalMode.id = "normal";
hardMode.id = "hard";

easyMode.textContent = "Fácil";
normalMode.textContent = "Médio";
hardMode.textContent = "Difícil";

const btnFlex = document.createElement("div");
btnFlex.classList.add("btn-mobile");
boxSelectionModes.appendChild(btnFlex);

btnFlex.appendChild(easyMode);
btnFlex.appendChild(normalMode);
btnFlex.appendChild(hardMode);

let numColunas;
let numLinhas;

boxSelectionModes.addEventListener("click", (evt) => {
  let selectedMode = evt.target.id;

  if (selectedMode === "easy") {
    numColunas = 5;
    numLinhas = 4;
  }
  if (selectedMode === "normal") {
    numColunas = 7;
    numLinhas = 6;
  }
  if (selectedMode === "hard") {
    numColunas = 10;
    numLinhas = 7;
  }

  // chamar função de reproduzir a musica tema do jogo
  initialScreen.classList.remove("initial-screen");
  initialScreen.classList.add("initial-none");
});
// INTI - FINAL

//Sid
let map = [];
let horizontal = [];

let diagonal = [];
let diagonalMap = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

function createField() {
  const fieldSection = document.createElement("section");
  fieldSection.id = "field";
  const body = document.getElementById("body");
  body.appendChild(fieldSection);
  for (let i = 0; i < 7; i++) {
    const createColumn = document.createElement("section");
    createColumn.classList = "column";
    createColumn.id = `${i}`;
    fieldSection.appendChild(createColumn);
    //map
    map.push([i]);
    for (let j = 0; j < 6; j++) {
      const createQuad = document.createElement("div");
      createQuad.classList = "cell";
      createQuad.dataset.pos = `${i}-${j}`;
      createQuad.id = `${i}-${j}`;
      createColumn.appendChild(createQuad);

      //map
      map[i][j] = `${i}-${j}`;
    }
  }
}
createField();

console.log(map);

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

function adicionandoBall() {
  for (let i = 0; i < test.length; i++) {
    test[i].addEventListener("click", function (evt) {
      createBall(test[i]);
      victoryVertical(map[i]);
      victoryDiagonal();
      for (let i = 0; i < horizontal.length; i++) {
        victoryHorizontal(horizontal[i]);
      }
    });
  }
}
adicionandoBall();

let currentPlayer = 1;
let lastPlayer = 2;

function createBall(x) {
  if (currentPlayer === 1) {
    if (addBall(x)) {
      const discA = document.createElement("div");
      discA.classList.add("discA-style");
      lastChild.appendChild(discA);
      // chamar funções de checar vitória e empate
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
      // chamar funções de checar vitória e empate
      currentPlayer = 1;
      lastPlayer = 2;
      //map
      diagonalMap[lastChild.id[0]][lastChild.id[2]] = "blue";
      map[lastChild.id[0]][lastChild.id[2]] = "blue";
      horizontal[lastChild.id[2]][lastChild.id[0]] = "blue";
    }
  }
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
      console.log(`${lastPlayer} ganhou Vertical`);
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
      console.log(`${lastPlayer} ganhou Horizontal`);
    }
  }
}

function arrHorizontal() {
  for (let linha = 0; linha < 6; linha++) {
    horizontal.push([linha]);
    for (let coluna = 0; coluna < 7; coluna++) {
      horizontal[linha][coluna] = map[coluna][linha];
    }
  }
}
arrHorizontal();

console.log(diagonal);

function victoryDiagonal() {
  const edgeX = diagonalMap[0].length - 2;
  const edgeY = diagonalMap.length - 2;
  console.log(diagonalMap);
  for (let i = 0; i < edgeY; i++) {
    for (let j = 0; j < edgeX; j++) {
      let cell = diagonalMap[i][j];
      if (cell === "red") {
        if (
          cell === diagonalMap[i + 1][j + 1] &&
          cell === diagonalMap[i + 2][j + 2] &&
          cell === diagonalMap[i + 3][j + 3]
        ) {
          console.log("victory");
        }
      }
    }
  }
  for (let i = 2; i < diagonalMap.length; i++) {
    for (let j = 0; j < edgeX; j++) {
      let cell = diagonalMap[i][j];
      if (cell === "red") {
        if (
          cell === diagonalMap[i - 1][j + 1] &&
          cell === diagonalMap[i - 2][j + 2] &&
          cell === diagonalMap[i - 3][j + 3]
        ) {
          console.log("victory");
        }
      }
    }
  }

  for (let i = 0; i < edgeY; i++) {
    for (let j = 0; j < edgeX; j++) {
      let cell = diagonalMap[i][j];
      if (cell === "blue") {
        if (
          cell === diagonalMap[i + 1][j + 1] &&
          cell === diagonalMap[i + 2][j + 2] &&
          cell === diagonalMap[i + 3][j + 3]
        ) {
          console.log("victory");
        }
      }
    }
  }
  for (let i = 2; i < diagonalMap.length; i++) {
    for (let j = 0; j < edgeX; j++) {
      let cell = diagonalMap[i][j];
      if (cell === "blue") {
        if (
          cell === diagonalMap[i - 1][j + 1] &&
          cell === diagonalMap[i - 2][j + 2] &&
          cell === diagonalMap[i - 3][j + 3]
        ) {
          console.log("victory");
        }
      }
    }
  }
}
