const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);

const button = document.getElementsByClassName("styled");
button[0].addEventListener("click", (event) => {
    alert("You clicked this button!");
});
button[1].addEventListener("click", (event) => {
    alert("You clicked that button!");
});
button[2].addEventListener("click", (event) => {
    alert("You clicked another button!");
});
