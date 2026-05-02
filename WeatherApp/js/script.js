const API_KEY = "726714e9f04566f64978ec2c077a4926";

const input = document.getElementById("inputloc");
const btn = document.getElementById("searchbtn");
const status = document.getElementById("status");
const result = document.getElementById("weatherresult");
const cityname = document.getElementById("cityname");
const temperature = document.getElementById("temperature");
const desc = document.getElementById("desc");

btn.addEventListener("click", () => {
    const city = input.value.trim();

    if(!city){
        status.textContent = "Enter city to search";
        return;
    }
    getweather(city);
});

input.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        btn.click();
    }
});


async function getweather(city){
    try{
        status.textContent = "Loading...";
        result.classList.add("hidden");

        const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        if(!response.ok){
            throw new Error("city not found");
        }
        const data = await response.json();
        console.log(data);

        

        cityname.textContent = data.name;
        temperature.textContent = `Temperature : ${data.main.temp}°C`
        desc.textContent = data.weather[0].description;

        status.innerText = "";
        result.classList.remove("hidden");

    }
    catch(err){
        status.textContent = err.message;
        status.style.color = "red";
    }
}