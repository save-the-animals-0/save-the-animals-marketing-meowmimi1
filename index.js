let nav = document.querySelectorAll("nav");
nav[0].addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "lightblue";
    event.target.style.transition = "3s";
});
nav[0].addEventListener("mouseleave", (event) => {
    event.target.style.backgroundColor = "lightgreen";
    event.target.style.transition = "3s";
});

let paragraph = document.querySelector('p')
paragraph.addEventListener('click' , (event) => {
    event.target.style.color = 'lightgreen';
});

const h1 = document.querySelectorAll('h1');
h1[0].addEventListener('click', (event) => event.target.style.color = 'crimson');
h1[0].addEventListener('click', (event) => event.stopPropagation());
const foot = document.querySelector('footer');
    foot.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = "lightblue";
    });