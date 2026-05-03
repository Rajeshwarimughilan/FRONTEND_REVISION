let fields = [];

const fieldtype = document.getElementById("fieldtype");
const addbtn = document.getElementById("addbtn");
const submitbtn = document.getElementById("submitbtn");
const form = document.getElementById("dynamicform");
const formstatus = document.getElementById("formstatus");

addbtn.addEventListener("click", () => {
    const type = fieldtype.value;

    const field = {
        id: Date.now(),
        type,
        label: type.toUpperCase(),
        value: ""
    }

    fields.push(field);
    renderfields();
});

function renderfields(){
    form.innerHTML = "";
    if(fields.length === 0){
        form.innerHTML = `<p>No Fields created yet</p>`;
    }

    fields.forEach(field => {
        const div = document.createElement("div");
        div.classList.add("field");

        div.innerHTML = `<label>${field.type.toUpperCase()}</label>
        <input type = "${field.type}" data-id="${field.id}" placeholder="${field.type.toUpperCase()} field">
        <p id="error-${field.id}"></p>`;

        form.appendChild(div);
    });
}

form.addEventListener("input", (e) =>{
    const id = Number(e.target.dataset.id);
    const value = e.target.value;

    fields = fields.map((field) => {
        if(field.id === id){
            return {...field, value};
        }
        return field;
    });
});

function validatefield(field){
    if(!field.value){
        return "Enter value, Field is empty!";
    }

    if(field.type === "email" && !field.value.includes("@")){
        return "invalid Email";
    }

    if(field.type === "number" && !field.value.isNaN(field.value)){
        return "invalid Number";
    }
    return "";
}

submitbtn.addEventListener("click", () => {

    let isvalid = true;

    if(fields.length === 0){
        formstatus.innerText = "Add at least one field";
        formstatus.style.color = "red";
        return;
    }

    fields.forEach(field => {
        const fielderr = validatefield(field);
        const fieldE1 = document.getElementById(`error-${field.id}`);

        if(fielderr){
            fieldE1.innerText = fielderr;
            isvalid = false;
        }
        else{
            fieldE1.innerText = "";
        }
    });

    
    if(!isvalid){
        formstatus.innerText = "Invalid form fields"
        formstatus.style.color = "red";
    }
    else{
        formstatus.innerText = "Form submitted successfully";
        formstatus.style.color = "green";
    }
});