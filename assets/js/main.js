const menus = document.querySelectorAll('.accordion_menu')

menus.forEach(menu=>{
    const arrIcon = menu.querySelector('.arrow_icon')
    const accCont = menu.querySelector('.accordion_value')
    const header = menu.querySelector('.accordion_title')

    header.addEventListener('click', ()=>{
        const openItem = document.querySelector('.openItem')
        const openArrow = document.querySelector('.invertArrow')
        const openHeader = document.querySelector('.openHead')

        toggleOpen(accCont)
        toggleArrow(arrIcon)
        toggleHeader(header)

        if(openItem && openItem !== accCont){
            toggleOpen(openItem)
            toggleArrow(openArrow)
            toggleHeader(openHeader)
        } 

    })
})

const toggleOpen = (item)=>{
    item.classList.toggle('openItem')
    
}
const toggleHeader = (item)=>{
    item.classList.toggle('openHead')
    
}
const toggleArrow = (item)=>{
    if(item.classList.contains('invertArrow')){
        item.classList.remove('invertArrow')
    }
    else{
        item.classList.add('invertArrow')
    }
}

