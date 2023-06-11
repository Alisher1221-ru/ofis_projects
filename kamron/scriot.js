let BTN = document.querySelector(".BTN")
let Menu = document.querySelector(".Menu")
let Gl__text = document.querySelector("h1")
let foot__text = document.querySelector(".h3")
let foot__text1 = document.querySelector(".h4")
let foot__text2 = document.querySelector(".h5")
let foot__text3 = document.querySelector(".h6")

let nul = 0

function Btn() {
    nul ++
    if (nul%2 == 1) {
        Menu.style.cssText=`
        background-color:var(--black);
        `
        Gl__text.style.cssText=`
        color: var(--whiter);
        `
        foot__text.style.cssText=`
        color: var(--whiter);
        `
        foot__text1.style.cssText=`
        color: var(--whiter);
        `
        foot__text2.style.cssText=`
        color: var(--whiter);
        `
        foot__text3.style.cssText=`
        color: var(--whiter);
        `
    }
    else{
        Menu.style.cssText=`
        background-color:var(--white);
        `
        Gl__text.style.cssText=`
        color: var(--black);
        `
        foot__text.style.cssText=`
        color: var(--black);
        `
        foot__text1.style.cssText=`
        color: var(--black);
        `
        foot__text2.style.cssText=`
        color: var(--black);
        `
        foot__text3.style.cssText=`
        color: var(--black);
        `
    }
}