const titulo = document.querySelector("#text");
    typeWriter(titulo);

function typeWriter(elemento){
    const textArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";

    textArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i)
    });
}