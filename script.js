//Sid


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
        for (let j = 0; j < 6; j++) {
            const createQuad = document.createElement('div')
            createQuad.classList = 'cell'
            createQuad.dataset.pos = `${i}-${j}`
            createColumn.appendChild(createQuad)
        }
    }
}
createField()

// Pedro
const column00 = document.getElementById("0")
const column01 = document.getElementById("1")
const column02 = document.getElementById("2")
const column03 = document.getElementById("3")
const column04 = document.getElementById("4")
const column05 = document.getElementById("5")
const column06 = document.getElementById("6")

function addBall(){
    for(let i = 5; i >= 0; i --){
        if(column00.children[i].childElementCount === 0){
            return true
        }
    }
    return false
}

// Inti



function createBall(){    
let currentPlayer = 1;

column00.addEventListener("click", (evt) => {
  const selectedColumn = evt.currentTarget;

  console.log("oi")
  if (currentPlayer === 1) {
    if (addBall()) {
      const discA = document.createElement("div");
      discA.classList.add("discA-style");
      selectedColumn.appendChild(discA);
      // chamar funções de checar vitória e empate
      currentPlayer = 2;
    }
  }

  if (currentPlayer === 2) {
    if (addBall()) {
      const discB = document.createElement("div");
      discB.classList.add("discB-style");
      selectedColumn.appendChild(discB);
      // chamar funções de checar vitória e empate
      currentPlayer = 1;
    }
  }
});
}
createBall()

// inti - final




