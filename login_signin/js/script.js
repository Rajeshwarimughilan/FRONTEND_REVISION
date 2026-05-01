const ltogglebtn = document.getElementById("ltogglebtn");
const stogglebtn = document.getElementById("stogglebtn");
const loginpage = document.getElementById("loginpage");
const signinpage = document.getElementById("signinpage");
const lformstatus = document.getElementById("lformstatus");
const sformstatus = document.getElementById("sformstatus");

ltogglebtn.addEventListener("click", () => {
    loginpage.classList.add("active");
    signinpage.classList.remove("active");

    ltogglebtn.classList.add("active");
    stogglebtn.classList.remove("active");
});

stogglebtn.addEventListener("click", () => {
    loginpage.classList.remove("active");
    signinpage.classList.add("active");

    ltogglebtn.classList.remove("active");
    stogglebtn.classList.add("active");
});

function validateemail(email){
    return email.includes("@") && email.includes(".");
}

function validatepassword(password){
    return password.length >= 6;
}

loginpage.addEventListener("submit", (e) => {
    e.preventDefault();

    const password = document.getElementById("lpassword").value.trim();
    const email = document.getElementById("lemail").value.trim();

    if(!validateemail(email)){
        lformstatus.textContent = "check email";
        lformstatus.style.color = "red";
        return;
    }
    if(!validatepassword(password)){
        lformstatus.textContent = "check password, it's weak";
        lformstatus.style.color = "red";
        return;
    }

    lformstatus.textContent = "submitting...";

    setTimeout(() => {
       lformstatus.textContent = "submitted successfully"; 
       lformstatus.style.color = "green";
       loginpage.reset();
    }, 1500);

});

signinpage.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("sname").value.trim();
    const email = document.getElementById("semail").value.trim();
    const password = document.getElementById("password").value.trim();

    if(!validateemail(email)){
        sformstatus.textContent = "check email";
        sformstatus.style.color = "red";
        return;
    }

    if(!validatepassword(password)){
        sformstatus.textContent = "check password, it's weak";
        sformstatus.style.color = "red";
        return;
    }

    sformstatus.textContent = "submitting...";

    setTimeout(() => {
       sformstatus.textContent = "submitted successfully"; 
       sformstatus.style.color = "green";
       signinpage.reset();
    }, 1500);

});