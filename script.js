// Inti









// Pedro







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