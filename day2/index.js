const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const progress = document.getElementById("progress")
const circles = document.querySelectorAll(".circle")

let currentActive = 1


nextButton.onclick = () => {
    currentActive = currentActive > circles.length ? circles.length : currentActive + 1
    update()

}

prevButton.onclick = () => {
    currentActive = currentActive < 1 ? 1 : currentActive - 1
    update()
}

const update = () => {
    circles.forEach((e, index) => {
        if(index < currentActive) {
            e.classList.add("active")
        } else {
            e.classList.remove("active")
        }
    })
    if (currentActive === 1) {
        prevButton.disabled = true
    } else if (currentActive === circles.length) {
        nextButton.disabled = true
    } else {
        prevButton.disabled = false
        nextButton.disabled = false
    }

    const actives = document.querySelectorAll(".active")
    const currentWidth = ((actives.length - 1) / (circles.length - 1)) * 100

    progress.style.width = `${currentWidth}%`
}