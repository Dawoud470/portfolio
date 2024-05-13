const projectDone = [
    {
        img: "images/pexels-miguel-á-padriñán-3785927.jpg",
        link: "https://github.com/gerismumo",
        name: "Cummins page"
    },
    {
        img: "images/pexels-photomix-company-230544.jpg",
        link: "https://github.com/gerismumo",
        name: "Landing page"
    },
    {
        img: "images/pexels-tranmautritam-326522.jpg",
        link: "https://github.com/gerismumo",
        name: "Aroma cafe"
    },
    {
        img: "images/pexels-mikael-blomkvist-6476595.jpg",
        link: "https://github.com/gerismumo",
        name: "Essay page"
    },
    {
        img: "images/pexels-cottonbro-studio-5077053.jpg",
        link: "https://github.com/gerismumo",
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
