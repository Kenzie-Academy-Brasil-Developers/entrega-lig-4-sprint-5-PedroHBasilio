// Inti

/*
1 - adicionar um eventlistener de click na section que foi clicada no tabuleiro
2 - capturar o currenttarget do evt e colocar na 


*/
const discA = document.createElement("div");
const discB = document.createElement("div");
discA.classList.add("discA-style");
discB.classList.add("discB-style");

fieldSection.addEventListener("click", (evt) => {
  const selectedColumn = evt.currentTarget;
  let currentPlayer = 1;

  if (currentPlayer === 1) {
    if (addBall === false) {
      selectedColumn.appendChild(discA);
      currentPlayer = 2;
    }
  }

  if (currentPlayer === 2) {
    if (addBall === false) {
      selectedColumn.appendChild(discB);
      currentPlayer = 1;
    }
  }
});

// inti - final

// Pedro

//Sid
