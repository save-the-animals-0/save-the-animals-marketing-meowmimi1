let nav = document.querySelectorAll("nav");
nav[0].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "lightblue";
    event.target.style.transition = "3s";
});
nav[0].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.style.transition = "3s";
});

const foot = document.querySelector('footer');
    foot.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = "lightblue";
    });