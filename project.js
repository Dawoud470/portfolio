const projectDone = [
    {
        img: "pexels-miguel-á-padriñán-3785927.jpg",
        link: "",
        name: "Cummins page"
    },
    {
        img: "pexels-photomix-company-230544.jpg",
        link: "",
        name: "Landing page"
    },
    {
        img: "pexels-tranmautritam-326522.jpg",
        link: "",
        name: "Aroma cafe"
    },
    {
        img: "pexels-mikael-blomkvist-6476595.jpg",
        link: "",
        name: "Essay page"
    },
    {
        img: "pexels-cottonbro-studio-5077053.jpg",
        link: "",
        name: "Peter airanb"
    }
]
const gridContainer = document.querySelector(".grid-container");

window.addEventListener("DOMContentLoaded", function(){
    displayGridItems(projectDone);

});

function displayGridItems(gridItems){
    let displayItems = gridItems.map(function(item){
        return `<div class="proj-done">
        <figure class="fig-img">
            <img src="${item.img}" alt="${item.name}">
            <figcaption>
                <a href= "${item.link}">${item.name}</a>
            </figcaption>
        </figure>
         </div>`
    });
    displayItems = displayItems.join("");
    gridContainer.innerHTML = displayItems; 
}
