//INTI - COMEÇO

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

let numColunas = 0
let numLinhas = 0

function level(){
    boxSelectionModes.addEventListener("click", (evt) => {
    let selectedMode = evt.target.id;

    if (selectedMode === "easy") {
        numColunas = 5;
        numLinhas = 4;
    }
    else if (selectedMode === "normal") {
        numColunas = 7;
        numLinhas = 6;
    }
    else if (selectedMode === "hard") {
        numColunas = 10;
        numLinhas = 7;
    }
    createField(numColunas, numLinhas)
    

    // chamar função de reproduzir a musica tema do jogo
    initialScreen.classList.add("initial-none");
    });
}
//INTI - FINAL