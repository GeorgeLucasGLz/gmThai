const form = document.getElementById('fale-conosco')
const botao = document.getElementById('btn')
const mascara = document.querySelector('#mascara-formulario')
const btnToggle = document.getElementById('btn-toggle')
const Body = document.querySelector('body')
// const marcarForm = document.querySelector('#marcar-treino')


const ulToggleBox = document.querySelector('#links')
const toggleLinks = document.querySelectorAll('#links a')
function showToggle() {

    ulToggleBox.style.visibility = 'visible'
    ulToggleBox.classList.add('toggleBox')
    ulToggleBox.style.transition = "0.4s ease-in-out"

    mascara.style.visibility = "visible"

    toggleLinks.forEach(linksValue => {

        linksValue.classList.add('toggleLinks')

    })



}






function clickButton() {

    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    form.style.transition = "0.4s ease-in"
    ulToggleBox.style.visibility = 'hidden'


}



function desligarMascara() {

    form.style.left = '-340px'
    mascara.style.visibility = "hidden"
    form.style.transform = 'translateX(0%)'
    mascara.style.transition = '0.4s ease-in'

    if (window.innerWidth < 1000){
        ulToggleBox.style.visibility = 'hidden'  
    } else {
        ulToggleBox.style.visibility = 'visible' 
    }
    

}



//Formatar número

function handlePhone(event) {

    let input = event.target
    input.value = formatarCelular(input.value)


}

function formatarCelular(value) {

    if (!value) return ''
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value



}


//Enviar Formulário

function enviarForm() {

    const bossNumber = "+5585986753855"
    const name = document.querySelector('#inputName').value
    const number = document.querySelector('#inputNumber').value
    const message = document.querySelector('#inputText').value
    const msgDefault = "Olá Bem vindo a GM THAI. Sua mensagem será respondida o mais rápido possível."
    const msgInsta = "Aproveite e siga nosso perfil no Instagram: https://www.instagram.com/academia_gmthai/"


    // if (name.length || number.length === 0) {
    //     alert('Preencha as informações')
    // } else {
    const url = "https://api.whatsapp.com/send?phone=" + bossNumber + "&text="
        + msgDefault + "%0A%0A"
        + "Nome: " + name + "." + "%0a"
        + "Número: " + number + "." + "%0a"
        + "Mensagem: " + message + "." + "%0a%0a"
        + msgInsta + "%0A%0A";
    window.open(url, '_blank').focus()


}




//Scrolls

const btnHome = document.getElementById('btn-home')
const btnSpace = document.getElementById('btn-space')
const btnClasses = document.getElementById('btn-classes')
const btnHours = document.getElementById('btn-hours')
const btnCoach = document.getElementById('btn-coach')
const btnPatrocinio = document.getElementById('btn-patrocinio')


function scrollIntoElement(elementSelect, instace = 0) {

    const element = document.querySelectorAll(elementSelect)

    if (element.length > instace) {

        element[instace].scrollIntoView({ behavior: 'smooth' })
    } else {
        return
    }

}

btnHome.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('header')
    mascara.style.visibility = "hidden"
    if (window.innerWidth < 1000){
        ulToggleBox.style.visibility = 'hidden'
    } else{
        ulToggleBox.style.visibility = 'visible'
    }
    

    return
})

btnSpace.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('.space-section')
    mascara.style.visibility = "hidden"

    if (window.innerWidth < 1000){
        ulToggleBox.style.visibility = 'hidden'
    } else{
        ulToggleBox.style.visibility = 'visible'
    }
    return

})

btnClasses.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('.classes-section')
    mascara.style.visibility = "hidden"

    if (window.innerWidth < 1000){
        ulToggleBox.style.visibility = 'hidden'
    } else{
        ulToggleBox.style.visibility = 'visible'
    }

    return

})

btnHours.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('.days-section')
    mascara.style.visibility = "hidden"

    if (window.innerWidth < 1000){
        ulToggleBox.style.visibility = 'hidden'
    } else{
        ulToggleBox.style.visibility = 'visible'
    }

    return
})

btnCoach.addEventListener('click', (event) => {
    event.preventDefault()
    scrollIntoElement('.coach-section')
    mascara.style.visibility = "hidden"

    if (window.innerWidth < 1000){
        ulToggleBox.style.visibility = 'hidden'
    } else{
        ulToggleBox.style.visibility = 'visible'
    }

    return
})

btnPatrocinio.addEventListener('click', (event) => {

    event.preventDefault()
    scrollIntoElement('.patrocinio-section')
    mascara.style.visibility = "hidden"

    if (window.innerWidth < 1000){
        ulToggleBox.style.visibility = 'hidden'
    } else{
        ulToggleBox.style.visibility = 'visible'
    }

    return
})


