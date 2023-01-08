const depart = document.querySelector('#launch')
const bouton1 = document.querySelector('#start')
const bouton2 = document.querySelector('#troll')
const instrument = document.querySelector('.hidden')

bouton1.addEventListener('click', () => {
    instrument.classList.remove('hidden')
    launch.classList.add('hidden')
})

bouton2.addEventListener('mouseover',() => {
    // Pour que le bouton puisse aller aussi bien à gauche qu'à droite
    resul_min = Math.floor(Math.random()* (2/5)*window.innerWidth)
    result_max = Math.floor(Math.random()* (2/5)*window.innerWidth)
    bouton2.style.transform = `translate(${result_max-resul_min}px, ${Math.floor(Math.random()* (2/5)*window.innerHeight)}px)`
    bouton2.style.transition = "all 0.1s ease"
})




// Chargement de tous les sons de la batterie

const haut_gauche = document.querySelector('#haut_gauche')
let audio_haut_gauche = new Audio("./audio/Haut-gauche.mp3")

const haut_droit = document.querySelector('#haut_droit')
let audio_haut_droit = new Audio("./audio/Haut-droit.mp3")

const bas_droit = document.querySelector('#bas_droit')
let audio_bas_droit = new Audio("./audio/Bas-droit.mp3")

const bas_gauche = document.querySelector('#bas_gauche')
let audio_bas_gauche = new Audio("./audio/Bas-gauche.mp3")

const centre = document.querySelector('#centre')
let audio_centre = new Audio("./audio/Centre.mp3")

const symbale_gauche = document.querySelector('#symbale_gauche')
let audio_symbale_gauche = new Audio("./audio/Symbale-haut-gauche.mp3")

const symbale_droit = document.querySelector('#symbale_droit')
let audio_symbale_droit = new Audio("./audio/Symbale-haut-droit.mp3")

const symbale_bas_gauche = document.querySelector('#symbale_bas_gauche')
let audio_symbale_bas_gauche = new Audio("./audio/Symbale-bas-gauche.mp3")



// Mise en place

const all = document.querySelector('*')

let encouragement = document.querySelector("#texte2")
let compteur = 0
const contenu = document.querySelectorAll("div")

let liste = ["YEAH !!!", "OUAW !!!", "OH JE VIBE", "MAIS QUEL TALENT", "J'AIME BIEN ÇA LÀ"]

const check_cnt = (valeur) => {
    if (valeur >= 8){
        compteur = 0
        encouragement.innerHTML = liste[Math.floor(Math.random()* liste.length)]
        encouragement.classList.toggle("bigger")
        encouragement.classList.toggle("twist")
        contenu.forEach(part => {
            part.classList.toggle('change_color')
        })
        encouragement.style.color = "white"
        all.style.backgroundColor = `rgb(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)})`
    }
    if (valeur == 4){
        contenu.forEach(part => {
            part.classList.toggle('change_color')
        })
    }
}


haut_gauche.addEventListener('click', () => {
    haut_gauche.style.backgroundColor = "rgb(200, 200, 200)"
    audio_haut_gauche.play()
    compteur++
    check_cnt(compteur)
    console.log(compteur)
    setInterval(() => {
        haut_gauche.style.backgroundColor = "grey"
    },500)
}) 

haut_droit.addEventListener('click', () => {
    haut_droit.style.backgroundColor = "rgb(200, 200, 200)"
    audio_haut_droit.play()
    compteur++
    check_cnt(compteur)
    console.log(compteur)
    setInterval(() => {
        haut_droit.style.backgroundColor = "grey"
    },500)
}) 

bas_droit.addEventListener('click', () => {
    bas_droit.style.backgroundColor = "rgb(200, 200, 200)"
    audio_bas_droit.play()
    compteur++
    check_cnt(compteur)
    console.log(compteur)
    setInterval(() => {
        bas_droit.style.backgroundColor = "grey"
    },500)
}) 

bas_gauche.addEventListener('click', () => {
    bas_gauche.style.backgroundColor = "rgb(200, 200, 200)"
    audio_bas_gauche.play()
    compteur++
    check_cnt(compteur)
    console.log(compteur)
    setInterval(() => {
        bas_gauche.style.backgroundColor = "grey"
    },500)
}) 

centre.addEventListener('click', () => {
    centre.style.backgroundColor = "rgb(200, 200, 200)"
    audio_centre.play()
    compteur++
    check_cnt(compteur)
    console.log(compteur)
    setInterval(() => {
        centre.style.backgroundColor = "grey"
    },500)
}) 

symbale_gauche.addEventListener('click', () => {
    symbale_gauche.style.backgroundColor = "rgb(150, 150, 0)"
    audio_symbale_gauche.play()
    compteur++
    check_cnt(compteur)
    console.log(compteur)
    setInterval(() => {
        symbale_gauche.style.backgroundColor = "rgb(182, 182, 0)"
    },500)
}) 

symbale_droit.addEventListener('click', () => {
    symbale_droit.style.backgroundColor = "rgb(150, 150, 0)"
    audio_symbale_droit.play()
    compteur++
    check_cnt(compteur)
    console.log(compteur)
    setInterval(() => {
        symbale_droit.style.backgroundColor = "rgb(182, 182, 0)"
    },500)
}) 

symbale_bas_gauche.addEventListener('click', () => {
    symbale_bas_gauche.style.backgroundColor = "rgb(150, 150, 0)"
    audio_symbale_bas_gauche.play()
    compteur++
    check_cnt(compteur)
    console.log(compteur)
    setInterval(() => {
        symbale_bas_gauche.style.backgroundColor = "rgb(182, 182, 0)"
    },500)
}) 