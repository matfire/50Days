const pictures = document.querySelectorAll(".panel")

pictures.forEach((e) => {
    e.addEventListener("click", (click) => {
        document.querySelector(".panel.active")?.classList.remove("active")
        e.classList.add("active")
    })
})