const showButton = document.querySelector(".menu__show")
const menuContent = document.querySelector(".menu__content")
const hideButton = document.querySelector(".menu__hide")

showButton.addEventListener("click", () => {
    menuContent.style.display = "block"
    showButton.style.display = "none"
    hideButton.style.display = "block"
})

hideButton.addEventListener("click", () => {
    menuContent.style.display = "none"
    showButton.style.display = "block"
    hideButton.style.display = "none"
})



const leftButton = document.querySelector(".slider__left")
const rightButton = document.querySelector(".slider__right")
const sliderContainer = document.querySelector(".slider__container")
const shiftWidth = 195

rightButton.addEventListener("mousemove", () => { if (Number(sliderContainer.style.left.slice(0, -2)) != -585) { rightButton.style.opacity = '1' } })
rightButton.addEventListener("mouseout", () => { checkOpacity() })
rightButton.addEventListener("click", rightShift)
leftButton.addEventListener("mousemove", () => { if (Number(sliderContainer.style.left.slice(0, -2)) != 0) { leftButton.style.opacity = '1' } })
leftButton.addEventListener("mouseout", () => { checkOpacity() })
leftButton.addEventListener("click", leftShift)
checkOpacity()

function rightShift() {
    console.log(sliderContainer.style.left)
    console.log(sliderContainer.style.left.slice(0, -2))
    if (Number(sliderContainer.style.left.slice(0, -2)) > -490) {
        sliderContainer.style.left = `${Number(sliderContainer.style.left.slice(0, -2)) - shiftWidth}px`
    }
    checkOpacity()
}

function leftShift() {
    if (Number(sliderContainer.style.left.slice(0, -2)) < 0) {
        sliderContainer.style.left = `${Number(sliderContainer.style.left.slice(0, -2)) + shiftWidth}px`
    }
    checkOpacity()
}

function checkOpacity() {
    if (Number(sliderContainer.style.left.slice(0, -2)) == -585) {
        rightButton.style.opacity = '0.1'
        rightButton.style.cursor = 'default'

    } else {
        rightButton.style.opacity = '0.5'
        rightButton.style.cursor = 'pointer'

    }
    if (Number(sliderContainer.style.left.slice(0, -2)) == 0) {
        leftButton.style.opacity = '0.1'
        leftButton.style.cursor = 'default'
    } else {
        leftButton.style.opacity = '0.5'
        leftButton.style.cursor = 'pointer'
    }
}