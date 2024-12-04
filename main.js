function sayfaDegis(url){
        window.location.href = url;
}

let a = 0;

const acilisDivi = document.getElementById("lebleb");
const acilisDivBaslik = document.getElementById("lebBaslik");
const genel = document.getElementById("contan");
// function goster(a){
//     window.alert(a)
// }

// window.onload() = function(){
//     document.getElementById("lebleb").style.backgroundColor = "white";
//     document.getElementById("lebleb").style.visibility = "hidden";
// };

window.addEventListener("load", function(){
    // document.getElementById("lebleb").style.backgroundColor = "white";
    // acilisDivi.style.visibility = "hidden";
    acilisDivi.style.filter = "opacity(0)";
    // acilisDivi.style.position = "50 50";
    acilisDivi.style.fontSize = "large";
    // acilisDivi.style.backgroundSize = "20px";
    // acilisDivBaslik.style.position = "100 250"; 
    // acilisDivi.style.color = "transparent";
    acilisDivi.style.visibility = "hidden";
    genel.style.filter = "opacity(1)";
    genel.style.overflow = "visible";
    genel.style.transition = "ease-in-out 6s";
    acilisDivi.style.transition = "ease-in-out 4s";
    // acilisDivi.style.scrollBehavior = "smooth";
    // acilisDivi.style.backgroundImage = "none";
    document.getElementById("metin1").style.display = "none";
    document.getElementById("metin2").style.display = "none";
    document.getElementById("metin3").style.display = "none";
    document.getElementById("metin4").style.display = "none";
    document.getElementById("metin5").style.display = "none";
    document.getElementById("metin6").style.display = "none";
    document.getElementById("metin7").style.display = "none";
    document.getElementById("metin8").style.display = "none";
    document.getElementById("metin9").style.display = "none";
    document.getElementById("metin10").style.display = "none";
    // document.getElementById("contan").style.visibility = "visible";
});

// let buton1 = document.getElementById("buton1");
// let icerik1 = document.getElementById(a);
// document.getElementsByClassName("icerikMetni").style.display = "none";

// document.getElementById(a).style.display = "none";

function butonac(a){
    if (document.getElementById(a).style.display === "none"){
        document.getElementById(a).style.display = "block";
    }
    else{
        document.getElementById(a).style.display = "none"; 
    }
};