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
const test = document.querySelectorAll('.column')
    //console.log(test)

function addBall(a) {
    for (let i = 0; i < test.length; i--) {
        if (a.children[i].childElementCount === 0) {
            console.log("true")
            return true
        }
    }
    console.log("false")
    return false
}

// Inti

// document.addEventListener('click', (evt) => {

//     const teste = document.querySelectorAll('div')
//     evt.stopPropagation()

//     // console.log(teste)
//     console.log(teste2)
//         //console.log(teste.dataset.pos)
// })
// for()
// {
//     if(evt.id == objeto.id)
//     {
//         append
//     }
// }
function adicionandoBall() {
    for (let i = 0; i < test.length; i++) {
        test[i].addEventListener('click', function(evt) {
            createBall(test[i])
        })
    }
}
adicionandoBall()

let currentPlayer = 1;

function createBall(x) {

    console.log('to aqui')
    console.log(currentPlayer)
        // x.addEventListener("click", (evt) => {
        //const selectedColumn = evt.currentTarget;

    console.log(x)
    if (currentPlayer === 1) {
        if (addBall(x)) {
            const discA = document.createElement("div");
            discA.classList.add("discA-style");
            x.appendChild(discA);
            // chamar funções de checar vitória e empate
            currentPlayer = 2;
        }
    } else if (currentPlayer === 2) {
        if (addBall(x)) {
            const discB = document.createElement("div");
            discB.classList.add("discB-style");
            x.appendChild(discB);
            // chamar funções de checar vitória e empate
            currentPlayer = 1;
        }
    }
    //});
}
//createBall()

// inti - final