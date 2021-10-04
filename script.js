// Inti
let currentPlayer = 1;

fieldSection.addEventListener("click", (evt) => {
  const selectedColumn = evt.currentTarget;

  if (currentPlayer === 1) {
    if (addBall === false) {
      const discA = document.createElement("div");
      discA.classList.add("discA-style");
      selectedColumn.appendChild(discA);
      // chamar funções de checar vitória e empate
      currentPlayer = 2;
    }
  }

  if (currentPlayer === 2) {
    if (addBall === false) {
      const discB = document.createElement("div");
      discB.classList.add("discB-style");
      selectedColumn.appendChild(discB);
      // chamar funções de checar vitória e empate
      currentPlayer = 1;
    }
  }
});

// inti - final

// Pedro

function addBall(){
    for(let i = 6; i >= 0; i --){
        if(column.children[i].childElementCount === 0){
            return true
        }
    }
    return false
}



//Sid


function createField() {
    const fieldSection = document.createElement('section')
    fieldSection.id = 'field'
    const body = document.getElementById('body')
    body.appendChild(fieldSection)
    for (let i = 0; i < 7; i++) {
        const createColumn = document.createElement('section')
        createColumn.classList = 'column'
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
