function ShowAlert() {
    console.log("terve!");
    alert("Hei!");

}
function showText(text) {
    let elem = document.getElementById("teksti-kappale");
    elem.textContent = text;
}

function toggleClass(elemId, className){
    let elem = document.getElementById(elemId);
    elem.classList.toggle(className);
}
function switchImage(imgId,path) {
    let img = document.getElementById(imgId);
    img.src = path;
}



