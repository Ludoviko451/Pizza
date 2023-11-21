// let container = document.querySelectorAll("a");

// console.log(container)

// container.forEach(function(elemento){
//     console.log(elemento)
// })


 let links = document.querySelectorAll(".close");


 links.forEach(function(element) {
    element.addEventListener('click', function(ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');
        // Remover las clases
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");
        content.classList.add("animate__fadeOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "../index.html"
        }, 600);
    })
 })

// let iconos = document.querySelectorAll("i")

// iconos.forEach(function(element){
//     element.classList.remove("fa-star")
// })