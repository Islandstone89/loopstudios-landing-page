
/* Select open menu button */
/* let btnOpenMenu = document.querySelector(".js-open-menu"); */

/* Select close menu button */
/* let btnOpenMenu = document.querySelector(".js-open-menu"); */

let buttons = document.querySelectorAll(".btn");

/* function test() {
    alert("Hello");
}

buttons.forEach((button) => {
    button.addEventListener("click", test)
}); */

buttons.forEach((button) => {
    button.addEventListener("click", (e => {
        alert("Hi")
    }))
});