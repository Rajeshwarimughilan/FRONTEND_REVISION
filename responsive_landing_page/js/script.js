const menutoggle = document.getElementById("menuToggle");
const navlinks = document.getElementById("nav-links");
const form = document.getElementById("contactform");
const formstatus = document.getElementById("statusform");
const ctabtn = document.getElementById("ctabtn");

menutoggle.addEventListener("click", () =>{
    navlinks.classList.toggle("active");
});

ctabtn.addEventListener("click", () =>{
    alert("welcome, lets get started");
});

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if(!name || !email){
        statusform.textContent = "please fill all fields";
        statusform.style.color = "red";
        return;
    }

    statusform.textContent = "submitting...";

    setTimeout(() => {
        statusform.textContent = "submitted successfully";
        statusform.style.color = "green";
        form.reset();
    }, 1500);
});