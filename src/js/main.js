function texAnimation(elemento) {
    const animation = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    animation.forEach((letra, i) => {
        console.log(i)
        setTimeout(function() {
            elemento.innerHTML += letra
        }, 80 * i)
    });

}
const titulo = document.querySelector('.ola')
texAnimation(titulo)


/*MENU REPONSIVO*/




function MenuShow1() {
    const menuToggle = document.querySelector('.toggle')
    const menuMo = document.querySelector('.menu-mobile')
    const rotate = document.querySelector('section')

    
    rotate.classList.toggle('imgNone')

    menuToggle.classList.toggle('active')
    menuMo.classList.toggle('menuShow')
}

function MenuShow2() {
    const menuToggle = document.querySelector('.toggle')
    const menuMo = document.querySelector('.menu-mobile')


    menuToggle.classList.toggle('active')
    menuMo.classList.toggle('menuShow')
}

function MenuShow3() {
    const menuToggle = document.querySelector('.toggle')
    const menuMo = document.querySelector('.menu-mobile')
    const rotate = document.querySelector('main')

    
    rotate.classList.toggle('imgNone')

    menuToggle.classList.toggle('active')
    menuMo.classList.toggle('menuShow')
}