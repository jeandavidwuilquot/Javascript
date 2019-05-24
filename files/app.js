let body = document.body;
body.classList.remove("bg-aqua");
body.classList.add("bg-olive");


document.querySelector("#first-paragraph").classList.remove("bg-lime", "gray");
document.querySelector("#first-paragraph").classList.add("aqua");

let silver = document.getElementsByClassName("bg-silver");
silver[0].classList.add("bg-teal");
silver[0].classList.remove("bg-silver");

let b = document.getElementsByTagName("blockquote");
b[0].classList.add("bg-white");

let a = document.querySelector("#my-table");
a.classList.add("bg-purple");

let p = document.querySelectorAll(".container p");
for (let i = 0; i < p.length; i++) {
    p[i].classList.add("shadow");
}

let c = document.querySelector("pre");
c.style.color = "orange";
c.style.backgroundColor = "blue";
c.style.borderTop = "3px solid red";
c.style.borderBottom = "3px solid red";

let d = document.querySelector("h3");
d.innerHTML = "<em>Itelic title ! yeah !</em>";

let e = document.querySelector("h2");
e.innerHTML = "<strong>HTML doens't work !</strong>";


let ul = document.querySelector("ul");
let newElement = document.createElement("li");
newElement.innerHTML = "Mon meilleur ami est <a href='http://www.google.com'>Google</a>";
ul.appendChild(newElement);
let link = document.querySelector("li a");
link.style.color = "orange";


function loop() {
    let abortion = document.querySelector("ol");
    let child = abortion.children;
    for (let i = 0; i <= child.length; i++) {
        abortion.removeChild(child[0])
    }
};
loop();

let tab = ["Silent Teacher", "Code Monkey", "CodeCombat"];
for (let e = 0; e < tab.length; e++) {
let ol = document.querySelector("ol");
let newElement = document.createElement("li");
newElement.innerHTML =tab[e];
ol.appendChild(newElement);
};