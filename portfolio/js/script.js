const projects = [
    {title: "TorpedoX" ,desc : "An AI/ML tool for classifying cryptographic algorithms"},
    {title : "CMS Platform", desc : "Responsive dynamic website with CMS dashboard and role specific access."}
];

const container = document.getElementById("projectcontainer");
const emptystate = document.getElementById("emptystate");
const form = document.getElementById("contactform");
const formstatus = document.getElementById("formstatus");
const hirebtn = document.getElementById("hireme");

function renderProject(){
    container.innerHTML = "";

    if(projects.length === 0){
        emptystate.classList.remove("hidden");
        return;
    }

    emptystate.classList.add("hidden");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.classList.add("project-card");

        card.innerHTML = `
        <h3>${project.title}</h3> 
        <p>${project.desc}</p>
        `;

        container.appendChild(card);
    });
}
form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if(!name || !email){
        formstatus.textContent = "Please fill required details";
        formstatus.style.color = "red";
        return;
    }

    formstatus.textContent = "Sending...";

    setTimeout(() => {
        formstatus.textContent = "Message sent successfully";
        formstatus.style.color = "green";
        form.reset();
    }, 1500);
});

hirebtn.addEventListener("click", () => {
    alert("Thankyou for your Interest");
});

renderProject();