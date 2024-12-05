function sayfaDegis(url){
        window.location.href = url;
}

let a = 0;

const acilisDivi = document.getElementById("lebleb");
const acilisDivBaslik = document.getElementById("lebBaslik");
const genel = document.getElementById("contan");
const scroll = document.getElementById("container");
// const ahmet = document.getElementById("metin1");

// function goster(a){
//     window.alert(a)
// }

// window.onload() = function(){
//     document.getElementById("lebleb").style.backgroundColor = "white";
//     document.getElementById("lebleb").style.visibility = "hidden";
// };

window.addEventListener("load", function(){
    const sayfaAdi = window.location.pathname;
    if (sayfaAdi === "/index.html"){
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
}
else if (sayfaAdi === "/tarih.html"){
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
    document.getElementById("metin1").style.visibility = "hidden";
    document.getElementById("metin2").style.visibility = "hidden";
    document.getElementById("metin3").style.visibility = "hidden";
    document.getElementById("metin4").style.visibility = "hidden";
    document.getElementById("metin5").style.visibility = "hidden";
    document.getElementById("metin6").style.visibility = "hidden";
    document.getElementById("metin7").style.visibility = "hidden";
    document.getElementById("metin8").style.visibility = "hidden";
    document.getElementById("metin9").style.visibility = "hidden";
    document.getElementById("metin10").style.visibility = "hidden";
}
else if (sayfaAdi === "/galeri.html"){
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
    document.getElementById("icerik1").style.visibility = "hidden";
    document.getElementById("icerik2").style.visibility = "hidden";
    document.getElementById("icerik3").style.visibility = "hidden";
    document.getElementById("icerik4").style.visibility = "hidden";
    document.getElementById("icerik5").style.visibility = "hidden";
    document.getElementById("icerik6").style.visibility = "hidden";
    document.getElementById("icerik7").style.visibility = "hidden";
    document.getElementById("icerik8").style.visibility = "hidden";
    document.getElementById("icerik9").style.visibility = "hidden";
    document.getElementById("icerik10").style.visibility = "hidden";
    document.getElementById("icerik11").style.visibility = "hidden";
    document.getElementById("icerik12").style.visibility = "hidden";
    document.getElementById("icerik13").style.visibility = "hidden";
    document.getElementById("icerik14").style.visibility = "hidden";
}
else if (sayfaAdi === "/neyapilir.html"){
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

    const tarih = document.getElementById("tarih");
    const gezi = document.getElementById("gezi");
    const yemek = document.getElementById("yemek");
    const kultur = document.getElementById("kultur");

    const tarihCard1 = document.getElementById("tarihcard1");
    const tarihCard2 = document.getElementById("tarihcard2");
    const geziCard1 = document.getElementById("gezicard1");
    const geziCard2 = document.getElementById("gezicard2");
    const geziCard3 = document.getElementById("gezicard3");
    const kulturCard1 = document.getElementById("kulturcard1");
    const kulturCard2 = document.getElementById("kulturcard2");
    const kulturCard3 = document.getElementById("kulturcard3");
    const yemekCard1 = document.getElementById("yemekcard1");
    const yemekCard2 = document.getElementById("yemekcard2");
    const yemekCard3 = document.getElementById("yemekcard3");
    const yemekCard4 = document.getElementById("yemekcard4");
    


    tarih.addEventListener("change",function(){
    if (tarih.checked === true){
        // document.getElementById("card2").style.visibility = "hidden";
        // document.getElementById("card1").style.visibility = "hidden";
        // gezicards.style.display = "none";
        // yemekcards.style.display = "none";
        // ku.style.display = "none";
        // card2.style.display = "none";
        // console.log("bbbbbbbb");
        // document.getElementsByClassName("yapilacaklarCards").style.transition = "ease 3s";
        geziCard1.style.display = "none";
        geziCard2.style.display = "none";
        geziCard3.style.display = "none";
        kulturCard1.style.display = "none";
        kulturCard2.style.display = "none";
        kulturCard3.style.display = "none";
        yemekCard1.style.display = "none";
        yemekCard2.style.display = "none";
        yemekCard3.style.display = "none";
        yemekCard4.style.display = "none";
        // document.getElementById("yapilicaklarElemen").style.transition = ("ease 5s");
    }
    else{
        // tarihcards.style.display = "flex";
        // card2.style.display = "flex";
        tarihCard1.style.display = "flex";
        tarihCard2.style.display = "flex";
        geziCard1.style.display = "flex";
        geziCard2.style.display = "flex";
        geziCard3.style.display = "flex";
        kulturCard1.style.display = "flex";
        kulturCard2.style.display = "flex";
        kulturCard3.style.display = "flex";
        yemekCard1.style.display = "flex";
        yemekCard2.style.display = "flex";
        yemekCard3.style.display = "flex";
        yemekCard4.style.display = "flex";
        // document.getElementById("yapilicaklarElemen").style.transition = ("ease 5s");

    }
    });
    gezi.addEventListener("change",function(){
    if (gezi.checked === true){
        // document.getElementById("card2").style.visibility = "visible";
        // document.getElementById("card1").style.visibility = "visible";
        tarihCard1.style.display = "none";
        tarihCard2.style.display = "none";
        // geziCard3.style.display = "none";
        kulturCard1.style.display = "none";
        kulturCard2.style.display = "none";
        kulturCard3.style.display = "none";
        yemekCard1.style.display = "none";
        yemekCard2.style.display = "none";
        yemekCard3.style.display = "none";
        yemekCard4.style.display = "none";

    }
    else{
        // card1.style.display = "flex";
        // card2.style.display = "flex";
        // card3.style.display = "flex";
        // card4.style.display = "flex";
        tarihCard1.style.display = "flex";
        tarihCard2.style.display = "flex";
        geziCard1.style.display = "flex";
        geziCard2.style.display = "flex";
        geziCard3.style.display = "flex";
        kulturCard1.style.display = "flex";
        kulturCard2.style.display = "flex";
        kulturCard3.style.display = "flex";
        yemekCard1.style.display = "flex";
        yemekCard2.style.display = "flex";
        yemekCard3.style.display = "flex";
        yemekCard4.style.display = "flex";

    }
    });
    yemek.addEventListener("change",function(){
        if (yemek.checked === true){
            // document.getElementById("card2").style.visibility = "visible";
            // document.getElementById("card1").style.visibility = "visible";
            // card3.style.display = "none";
            // card4.style.display = "none";
            // console.log("ccccccc");
            geziCard1.style.display = "none";
            geziCard2.style.display = "none";
            geziCard3.style.display = "none";
            kulturCard1.style.display = "none";
            kulturCard2.style.display = "none";
            kulturCard3.style.display = "none";
            tarihCard1.style.display = "none";
            tarihCard2.style.display = "none";
            // yemekCard3.style.display = "none";
            // yemekCard4.style.display = "none";
        }
        else{
            // card1.style.display = "flex";
            // card2.style.display = "flex";
            // card3.style.display = "flex";
            // card4.style.display = "flex";
            tarihCard1.style.display = "flex";
            tarihCard2.style.display = "flex";
            geziCard1.style.display = "flex";
            geziCard2.style.display = "flex";
            geziCard3.style.display = "flex";
            kulturCard1.style.display = "flex";
            kulturCard2.style.display = "flex";
            kulturCard3.style.display = "flex";
            yemekCard1.style.display = "flex";
            yemekCard2.style.display = "flex";
            yemekCard3.style.display = "flex";
            yemekCard4.style.display = "flex";
    
        }
    });
    kultur.addEventListener("change",function(){
        if (kultur.checked === true){
            // document.getElementById("card2").style.visibility = "visible";
            // document.getElementById("card1").style.visibility = "visible";
            // card3.style.display = "none";
            // card4.style.display = "none";
            // console.log("ccccccc");
            geziCard1.style.display = "none";
            geziCard2.style.display = "none";
            geziCard3.style.display = "none";
            tarihCard1.style.display = "none";
            tarihCard2.style.display = "none";
            // kulturCard3.style.display = "none";
            yemekCard1.style.display = "none";
            yemekCard2.style.display = "none";
            yemekCard3.style.display = "none";
            yemekCard4.style.display = "none";
        }
        else{
            // card1.style.display = "flex";
            // card2.style.display = "flex";
            // card3.style.display = "flex";
            // card4.style.display = "flex";
            tarihCard1.style.display = "flex";
            tarihCard2.style.display = "flex";
            geziCard1.style.display = "flex";
            geziCard2.style.display = "flex";
            geziCard3.style.display = "flex";
            kulturCard1.style.display = "flex";
            kulturCard2.style.display = "flex";
            kulturCard3.style.display = "flex";
            yemekCard1.style.display = "flex";
            yemekCard2.style.display = "flex";
            yemekCard3.style.display = "flex";
            yemekCard4.style.display = "flex";

        }
    });
   
}


    // document.getElementById("metin2").style.display = "none";
    // document.getElementById("metin3").style.display = "none";
    // document.getElementById("metin4").style.display = "none";
    // document.getElementById("metin5").style.display = "none";
    // document.getElementById("metin6").style.display = "none";
    // document.getElementById("metin7").style.display = "none";
    // document.getElementById("metin8").style.display = "none";
    // document.getElementById("metin9").style.display = "none";
    // document.getElementById("metin10").style.display = "none";
    // document.getElementById("contan").style.visibility = "visible";
});

// let buton1 = document.getElementById("buton1");
// let icerik1 = document.getElementById(a);
// document.getElementsByClassName("icerikMetni").style.display = "none";

// document.getElementById(a).style.display = "none";

function butonac(a){
    if (document.getElementById(a).style.visibility === "hidden"){
        document.getElementById(a).style.visibility = "visible";
        document.getElementById(a).style.height = "100%";
        
    }
    else{
        document.getElementById(a).style.visibility = "hidden"; 
        document.getElementById(a).style.height = "0";

    }
};

function galIcGor(x){
    
    if (document.getElementById(x).style.visibility === "hidden"){
        document.getElementById(x).style.visibility = "visible";
        document.getElementById("contan2").style.overflow = "hidden";
        window.scrollTo ({top : 0, behavior : "smooth"});
        document.getElementById(x).style.display = "flex";
        document.getElementById(x).style.position = "fixed";
        console.log("aaaaa11111");
        document.getElementById(x).style.zIndex = "1000";
    }
    else{
        document.getElementById(x).style.visibility = "hidden";
        document.getElementById("contan2").style.overflow = "visible";  
        document.getElementById(x).style.display = "none";
        console.log("aaaaa1122222");

    }
};

function galIcCikis(x){
    if (document.getElementById(x).style.visibility === "visible"){
        // document.getElementById(x).style.visibilty = "hidden";
        document.getElementById(x).style.display = "none";
        document.getElementById("contan2").style.overflow = "visible";  
        console.log("aaaaaa");
    }
    else{
        document.getElementById(x).style.visibilty = "visible";
        document.getElementById(x).style.display = "flex";
        // document.getElementById("contan2").style.overflow = "visible";  
        console.log("aaaaa2222233333");

    }
};