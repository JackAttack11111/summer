document.addEventListener("DOMContentLoaded", (event) => {
    gsap.fromTo(
        "#headText",
        { autoAlpha: 0, y: 100 },
        { autoAlpha: 1, y: 0, duration: 0.75 }
    )
 });