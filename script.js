let contenedorTop = document.getElementById("topContainer")
let contenedorBottom = document.getElementById("bottomContainer")


function aparecer(whichOne) {
    whichOne.style.opacity = "1";
    whichOne.style.transition = "3s";
}

aparecer(contenedorTop)
aparecer(contenedorBottom)