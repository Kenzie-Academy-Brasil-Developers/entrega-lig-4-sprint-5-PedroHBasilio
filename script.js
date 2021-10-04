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

//Sid
