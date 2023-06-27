const allBoxes = document.querySelectorAll(".section-box");


const observerCallback = (entries, observer) => {
    const [entry] = entries;
    entry.target.classList.remove("box-hidden")
    observer.unobserve(entry.target)
}


const observer = new IntersectionObserver(observerCallback, {root: null, threshold: "0.35"})

allBoxes.forEach(box => {
    box.classList.add("box-hidden")

    observer.observe(box)
})