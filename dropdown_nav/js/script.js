const dropdownbtn = document.getElementById("dropbtn");
const burger = document.getElementById("burger");
const navlinks = document.getElementById("navlinks");
const dropdownmenu = document.getElementById("dropdownmenu");

burger.addEventListener("click", (e) => {
    e.stopPropagation();
    navlinks.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!navlinks.contains(e.target) && !burger.contains(e.target)) {
        navlinks.classList.remove("active");
    }
    if (!dropdownmenu.contains(e.target) && !dropdownbtn.contains(e.target)) {
        dropdownmenu.classList.remove("show");
    }
        return;
    });

dropdownbtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownmenu.classList.toggle("show");
}); 