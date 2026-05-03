const images = [
    { id: 1, category: "nature", url: "https://picsum.photos/id/1018/400/300" },
    { id: 2, category: "tech", url: "https://picsum.photos/id/180/400/300" },
    { id: 3, category: "people", url: "https://picsum.photos/id/1027/400/300" },
    { id: 4, category: "nature", url: "https://picsum.photos/id/1040/400/300" },
    { id: 5, category: "tech", url: "https://picsum.photos/id/1060/400/300" },
    { id: 6, category: "people", url: "https://picsum.photos/id/1005/400/300" }
];

let currentcategory = "all";
const filters = document.querySelectorAll(".filter");
const status = document.getElementById("status");
const gallery= document.getElementById("gallery");
const emptystate = document.getElementById("emptystate");

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const img = entry.target;
            img.src = img.dataset.src;
            img.onload = () => {
                img.classList.add("loaded");
            };
            obs.unobserve(img);
        }
    });
});

function renderImages(){
    gallery.innerHTML = "";
    status.textContent ="Loading...";

    setTimeout(() => {
        let filteredimg = images.filter(img => {
            return currentcategory === "all" || img.category === currentcategory;
        });

        if(filteredimg.length === 0){
            status.innerHTML = "";
            emptystate.classList.remove("hidden");
            emptystate.style.color = "red";
            return;
        }
        emptystate.classList.add("hidden");
        status.textContent = "";

        filteredimg.forEach(imgdata => {
            const card = document.createElement("div");
            card.classList.add("card");
            const img = document.createElement("img");


            img.dataset.src = imgdata.url;
            img.alt = imgdata.category;

            card.appendChild(img);
            gallery.appendChild(card);

            observer.observe(img);
        });
    },500);
}


filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter.active").classList.remove("active");
        btn.classList.add("active");

        currentcategory = btn.dataset.category;
        renderImages();
    });
});
renderImages();