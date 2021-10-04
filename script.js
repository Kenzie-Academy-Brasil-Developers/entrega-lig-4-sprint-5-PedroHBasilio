// Inti









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
    const body = document.getElementById('body')
    for (let i = 0; i < 6; i++) {
        const createColumn = document.createElement('section')
        createColumn.classList = 'column'
        body.appendChild(createColumn)
        for (let j = 0; j < 7; j++) {
            const createQuad = document.createElement('div')
            createQuad.classList = 'field'
            createQuad.dataset.pos = `${i}-${j}`
            createColumn.appendChild(createQuad)
        }
    }
}
createField()
