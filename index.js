const addElement = () => {
    const main = document.getElementById('main')
    const newElem = document.createElement('div')
    var getValue = document.getElementById('inp')
    console.log(main)
    var id = Date.now()
    newElem.setAttribute('class', 'box')
    newElem.setAttribute('id', id)
    newElem.innerHTML = `<button id=remove onclick=handleRemove(${id}) > <i class="fa-solid fa-xmark"></i> </button>
    <span class="todolist">${getValue.value} </span>
    `
    main.appendChild(newElem)
    getValue.value = ''
    
}


function handleRemove(id) {
    const removeElem = document.getElementById(id)
    console.log(removeElem)
    removeElem.remove()
}

