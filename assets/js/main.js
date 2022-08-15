const menus = document.querySelectorAll('.accordion_menu')

menus.forEach(menu=>{
    const arrIcon = menu.querySelector('.arrow_icon')
    const accCont = menu.querySelector('.accordion_value')

    arrIcon.addEventListener('click', ()=>{
        const openItem = document.querySelector('.openItem')

        toggleOpen(accCont)
        toggleArrow(arrIcon)
        arrIcon.classList.toggle('invertArrow')

        if(openItem && openItem !== accCont){
            toggleOpen(openItem)
        } 

    })
})

const toggleOpen = (item)=>{
    if(item.classList.contains('openItem')){
        item.classList.remove('openItem')
    }
    else{
        item.classList.add('openItem')
    }
}
const toggleArrow = (item)=>{
    if(item.classList.contains('invertArrow')){
        item.classList.remove('invertArrow')
    }
    else{
        item.classList.add('invertArrow')
    }
}

