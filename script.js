// Inti









// Pedro







<<<<<<< HEAD

//Sid
=======
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
>>>>>>> e34344f1ee5c28952a807b0ce2540c783d1eb9e5
