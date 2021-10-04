// Inti
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
      // chamar funções de checar vitória
      currentPlayer = 2;
    }
  }

  if (currentPlayer === 2) {
    if (addBall === false) {
      selectedColumn.appendChild(discB);
      // chamar funções de checar vitória
      currentPlayer = 1;
    }
  }
});

// inti - final

// Pedro

//Sid
