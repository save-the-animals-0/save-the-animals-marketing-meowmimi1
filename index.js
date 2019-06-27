let nav = document.querySelectorAll("nav");
nav[0].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "blue";
    event.target.style.transition = "3s";
});
nav[0].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "green";
    event.target.style.transition = "3s";
});