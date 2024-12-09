function sayfaDegis(url){
        window.location.href = url;
};

let a = 0;

// const acilisDivi = document.getElementById("lebleb");
// const acilisDivBaslik = document.getElementById("lebBaslik");
// const genel = document.getElementById("contan");
// const scroll = document.getElementById("container");
// const contan = document.getElementById("contan");
// const navbarrr = document.getElementById("navbarrr");
// const loggo = document.getElementById("loggo");
// const menuList1 = document.getElementById("menuList1");
// const burgerButon = document.getElementById("burgerButon");
// const girisIndex = document.getElementById("girisIndex");
// const metinn = document.getElementById("metinn");
// const icMet1 = document.getElementById("icMet1");
// const girisCards = document.getElementById("girisCards");
// const fotter = document.getElementById("fotter");
// const navvlinks = document.getElementById("navvlinks");
// const yazi1 = document.getElementById("yazi1");
// const yazi2 = document.getElementById("yazi2");
// const altloggo = document.getElementById("altloggo");
// const sosyallinks = document.getElementById("sosyallinks");
// const girisImg = document.getElementById("girisImg");



// const ahmet = document.getElementById("metin1");

// function goster(a){
//     window.alert(a)
// }

// window.onload() = function(){
//     document.getElementById("lebleb").style.backgroundColor = "white";
//     document.getElementById("lebleb").style.visibility = "hidden";
// };
const acilisDivi = document.getElementById("lebleb");
const acilisDivBaslik = document.getElementById("lebBaslik");
const genel = document.getElementById("contan");
const scroll = document.getElementById("container");
const contan = document.getElementById("contan");
const navbarrr = document.getElementById("navbarrr");
const loggo = document.getElementById("loggo");
const menuList1 = document.getElementById("menuList1");
const burgerButon = document.getElementById("burgerButon");
const girisIndex = document.getElementById("girisIndex");
const metinn = document.getElementById("metinn");
const icMet1 = document.getElementById("icMet1");
const girisCards = document.getElementById("girisCards");
const fotter = document.getElementById("fotter");
const navvlinks = document.getElementById("navvlinks");
const yazi1 = document.getElementById("yazi1");
const yazi2 = document.getElementById("yazi2");
const altloggo = document.getElementById("altloggo");
const sosyallinks = document.getElementById("sosyallinks");
const girisImg = document.getElementById("girisImg");
const sayfaAdi = window.location.pathname;
let ekranGen = window.innerWidth;
const burgerMenuButon = document.getElementById("burgerMenuButon");
const galeriBolum = document.getElementById("galeriBolum");
const resBut1 = document.getElementById("resBut1");
const resBut2 = document.getElementById("resBut2");
const resBut3 = document.getElementById("resBut3");
const resBut4 = document.getElementById("resBut4");
const resBut5 = document.getElementById("resBut5");
const resBut6 = document.getElementById("resBut6");
const resBut7 = document.getElementById("resBut7");
const resBut8 = document.getElementById("resBut8");
const resBut9 = document.getElementById("resBut9");
const resBut10 = document.getElementById("resBut10");
const resBut11 = document.getElementById("resBut11");
const resBut12 = document.getElementById("resBut12");
const resBut13 = document.getElementById("resBut13");
const resBut14 = document.getElementById("resBut14");
// const galeriAcilir = document.getElementsByClassName("icerikGoster");
const icerik1 = document.getElementById("icerik1");
const icerik2 = document.getElementById("icerik2");
const icerik3 = document.getElementById("icerik3");
const icerik4 = document.getElementById("icerik4");
const icerik5 = document.getElementById("icerik5");
const icerik6 = document.getElementById("icerik6");
const icerik7 = document.getElementById("icerik7");
const icerik8 = document.getElementById("icerik8");
const icerik9 = document.getElementById("icerik9");
const icerik10 = document.getElementById("icerik10");
const icerik11 = document.getElementById("icerik11");
const icerik12 = document.getElementById("icerik12");
const icerik13 = document.getElementById("icerik13");
const icerik14 = document.getElementById("icerik14");

const metins1 = document.getElementById("metins1");
const metins1P = document.getElementById("metins1P");
const imaj1 = document.getElementById("gorImaj");

const metins2 = document.getElementById("metins2");
const metins2P = document.getElementById("metins2P");
const imaj2 = document.getElementById("gorImaj1");

const metins3 = document.getElementById("metins3");
const metins3P = document.getElementById("metins3P");
const imaj3 = document.getElementById("gorImaj2");

const metins4 = document.getElementById("metins4");
const metins4P = document.getElementById("metins4P");
const imaj4 = document.getElementById("gorImaj3");

const metins5 = document.getElementById("metins5");
const metins5P = document.getElementById("metins5P");
const imaj5 = document.getElementById("gorImaj4");

const metins6 = document.getElementById("metins6");
const metins6P = document.getElementById("metins6P");
const imaj6 = document.getElementById("gorImaj5");

const metins7 = document.getElementById("metins7");
const metins7P = document.getElementById("metins7P");
const imaj7 = document.getElementById("gorImaj6");

const metins8 = document.getElementById("metins8");
const metins8P = document.getElementById("metins8P");
const imaj8 = document.getElementById("gorImaj7");

const metins9 = document.getElementById("metins9");
const metins9P = document.getElementById("metins9P");
const imaj9 = document.getElementById("gorImaj8");

const metins10 = document.getElementById("metins10");
const metins10P = document.getElementById("metins10P");
const imaj10 = document.getElementById("gorImaj9");

const metins11 = document.getElementById("metins11");
const metins11P = document.getElementById("metins11P");
const imaj11 = document.getElementById("gorImaj10");

const metins12 = document.getElementById("metins12");
const metins12P = document.getElementById("metins12P");
const imaj12 = document.getElementById("gorImaj11");

const metins13 = document.getElementById("metins13");
const metins13P = document.getElementById("metins13P");
const imaj13 = document.getElementById("gorImaj12");

const metins14 = document.getElementById("metins14");
const metins14P = document.getElementById("metins14P");
const imaj14 = document.getElementById("gorImaj13");



// const butons = document.getElementsByClassName("butons");
// const butons = document.querySelectorAll(".galeriSection button");

function resetTemel(){
    menuList1.removeAttribute("style");
    burgerButon.removeAttribute("style");
    navbarrr.removeAttribute("style");
    fotter.removeAttribute("style");
    console.log("reset çalışmıyor");
};

function acilmaEkrani(){
        console.log("çalışıyor1");
        // acilisDivi.style.visibility = "hidden";
        acilisDivi.style.filter = "opacity(0)";
        // acilisDivi.style.position = "50 50";
        acilisDivi.style.fontSize = "large";
        // acilisDivi.style.backgroundSize = "20px";
        // acilisDivBaslik.style.position = "100 250"; 
        // acilisDivi.style.color = "transparent";
        acilisDivi.style.visibility = "hidden";
        console.log(acilisDivi.style.width);
        // acilisDivi.style.display = "none";  
        // console.log("hata burada");
        genel.style.filter = "opacity(1)";
        genel.style.overflow = "visible";
        genel.style.transition = "ease-in-out 6s";
        acilisDivi.style.transition = "ease-in-out 4s";
        console.log("fonksiyonun bittiği yer burası");
        console.log("açılma ekranı çalışmıyor");

};

function kucukEkran(){
        console.log("çalışıyor1");
        acilmaEkrani();
        console.log("çalışıyor2");
        menuList1.style.display = "none";
        console.log("sssssss");
        burgerButon.style.display = "flex";
        navbarrr.style.justifyContent = "space-between";
        console.log(this.innerWidth);
        // acilisDivi.style.backgroundColor = "black";
        acilisDivi.style.width = "100%";
        // acilisDivBaslik.style. 

        // this.document.getElementById("contan").style.flexDirection = "row";
        contan.style.flexWrap = "nowrap";
        contan.style.width = ekranGen;
        girisIndex.style.display = "flex";
        girisIndex.style.flexDirection = "column";
        girisIndex.style.margin = "0";
        girisIndex.style.height = "100%";

        girisImg.style.width = ekranGen;
        girisImg.style.margin = "0";
        girisImg.style.padding = "0";
        metinn.style.fontSize = "small";
        metinn.style.display = "flex";
        metinn.style.flexDirection = "column";
        metinn.style.margin = "0";
            // document.getElementById("metinn").style.position = "relative";
        icMet1.style.flexDirection = "column";
        icMet1.textContent = " Çorum, tarihi dokusunun yanı sıra doğal güzellikleriyle de ziyaretçilerini büyüler. Boğazköy Milli Parkı ve İncesu Kanyonu gibi doğa harikası alanlar, doğa severler için keşfedilmeyi bekleyen yerlerdir. Aynı zamanda Çorum, tarıma dayalı ekonomisiyle de tanınır ve özellikle leblebisiyle ünlüdür. Çorum leblebisi, hem Türkiye genelinde hem de yurtdışında büyük bir ilgi görür. Bu ürün, şehrin sembollerinden biri haline gelmiştir. Şehrin geleneksel el sanatları da oldukça dikkat çekicidir. Özellikle bakır işçiliği, ahşap oymacılığı ve dokumacılık gibi el sanatları, Çorum'un zengin kültürel mirasını yansıtır.";
            // document.getElementById("metinn").style.overflow = "hidden";

            // console.log(document.getElementById("contan").style.width);
        girisCards.style.flexDirection = "column";
        girisCards.style.margin = "0";
          // document.getElementById("girisCards").style.position = "relative";

        fotter.style.flexDirection = "column";
        fotter.style.height = "100%";
          // document.getElementById("fotter").style.width = "100%";
        fotter.style.margin = "0";
        fotter.style.justifyContent = "center";

        altloggo.style.height = "100%";
        altloggo.style.alignSelf = "center";

        navvlinks.style.alignItems = "center";

        yazi1.style.alignItems = "center";
        yazi2.style.alignItems = "center";
        sosyallinks.style.alignItems = "center";




            // document.getElementById("navbarrr").style.width = window.innerWidth;
            // document.getElementById("loggo").style.width = (window.innerWidth*0.5);
            burgerButon.addEventListener("click", function(){
                
                if (burgerMenuButon.style.display === "none"){  
                    // burgerButon.style.display = "none";
                    // menuList1.style.display = "flex";
                    // menuList1.style.flexDirection = "column";
                    burgerMenuButon.style.display = "flex";
                                // navbarrr.style.flexDirection = "column";
                                // burgerButon.style.backgroundColor = "black";
                }
                else{
                    burgerButon.style.display = "flex";
                    burgerMenuButon.style.display = "none";
                }
            })
};

function normalEkran(){
            // menuList1.style.display = "flex";
            resetTemel();
            metinn.removeAttribute("style");
            girisIndex.removeAttribute("style");
            girisCards.removeAttribute("style");
};

function tarihKucuk(){
    acilmaEkrani();
    console.log("çalışıyor2");
    menuList1.style.display = "none";
    console.log("sssssss");
    burgerButon.style.display = "flex";
    navbarrr.style.justifyContent = "space-between";
    console.log(this.innerWidth);
    // acilisDivi.style.backgroundColor = "black";
    acilisDivi.style.width = "100%";
    // acilisDivBaslik.style. 

    // this.document.getElementById("contan").style.flexDirection = "row";
    contan.style.flexWrap = "nowrap";
    contan.style.width = ekranGen;
    fotter.style.flexDirection = "column";
    fotter.style.height = "100%";
          // document.getElementById("fotter").style.width = "100%";
    fotter.style.margin = "0";
    fotter.style.justifyContent = "center";

    altloggo.style.height = "100%";
    altloggo.style.alignSelf = "center";

    navvlinks.style.alignItems = "center";

    yazi1.style.alignItems = "center";
    yazi2.style.alignItems = "center";
    sosyallinks.style.alignItems = "center";




   // document.getElementById("navbarrr").style.width = window.innerWidth;
      // document.getElementById("loggo").style.width = (window.innerWidth*0.5);
    burgerButon.addEventListener("click", function(){
         console.log("butona tıkladım");       
        if (burgerMenuButon.style.display === "none"){  
                  // burgerButon.style.display = "none";
                    // menuList1.style.display = "flex";
                    // menuList1.style.flexDirection = "column";
            burgerMenuButon.style.display = "flex";
                                // navbarrr.style.flexDirection = "column";
                                // burgerButon.style.backgroundColor = "black";
            }
        else{
            // burgerButon.style.display = "flex";
            burgerMenuButon.style.display = "none";
            }
        })
        console.log("tarihkucuk çalışmıyor");
    
};

function tarihGizle(){
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
    console.log("tarih gizle çalışmıyor");

};

function galeriPage(){
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

};

function galeriKucuk(){
    console.log("çalışıyor1");
    acilmaEkrani();
    console.log("çalışıyor2");
    menuList1.style.display = "none";
    console.log("sssssss");
    burgerButon.style.display = "flex";
    navbarrr.style.justifyContent = "space-between";
    console.log(this.innerWidth);
    // acilisDivi.style.backgroundColor = "black";
    acilisDivi.style.width = "100%";
    // acilisDivBaslik.style. 

    // this.document.getElementById("contan").style.flexDirection = "row";
    contan.style.flexWrap = "nowrap";
    contan.style.width = ekranGen;

    galeriBolum.style.display = "flex";
    galeriBolum.style.flexDirection = "column";
    galeriBolum.style.width = "100%";
    resBut1.style.width = "100%";
    resBut2.style.width = "100%";
    resBut3.style.width = "100%";
    resBut4.style.width = "100%";
    resBut5.style.width = "100%";
    resBut6.style.width = "100%";
    resBut7.style.width = "100%";
    resBut8.style.width = "100%";
    resBut9.style.width = "100%";
    resBut10.style.width = "100%";
    resBut11.style.width = "100%";
    resBut12.style.width = "100%";
    resBut13.style.width = "100%";
    resBut14.style.width = "100%";
    
    icerik1.style.flexDirection = "column";
    icerik1.style.width = "100%";
    metins1.style.width = "90%";
    imaj1.style.width = "100%";
    imaj1.style.padding = "0";
    metins1P.style.width = "100%";
    metins1P.style.padding = "0";
    
    icerik2.style.flexDirection = "column";
    icerik2.style.width = "100%";
    metins2.style.width = "90%";
    imaj2.style.width = "100%";
    imaj2.style.padding = "0";
    metins2P.style.width = "100%";
    metins2P.style.padding = "0";
    
    icerik3.style.flexDirection = "column";
    icerik3.style.width = "100%";
    metins3.style.width = "90%";
    imaj3.style.width = "100%";
    imaj3.style.padding = "0";
    metins3P.style.width = "100%";
    metins3P.style.padding = "0";

    icerik4.style.flexDirection = "column";
    icerik4.style.width = "100%";
    metins4.style.width = "90%";
    imaj4.style.width = "100%";
    imaj4.style.padding = "0";
    metins4P.style.width = "100%";
    metins4P.style.padding = "0";

    icerik5.style.flexDirection = "column";
    icerik5.style.width = "100%";
    metins5.style.width = "90%";
    imaj5.style.width = "100%";
    imaj5.style.padding = "0";
    metins5P.style.width = "100%";
    metins5P.style.padding = "0";

    icerik6.style.flexDirection = "column";
    icerik6.style.width = "100%";
    metins6.style.width = "90%";
    imaj6.style.width = "100%";
    imaj6.style.padding = "0";
    metins6P.style.width = "100%";
    metins6P.style.padding = "0";

    icerik7.style.flexDirection = "column";
    icerik7.style.width = "100%";
    metins7.style.width = "90%";
    imaj7.style.width = "100%";
    imaj7.style.padding = "0";
    metins7P.style.width = "100%";
    metins7P.style.padding = "0";

    icerik8.style.flexDirection = "column";
    icerik8.style.width = "100%";
    metins8.style.width = "90%";
    imaj8.style.width = "100%";
    imaj8.style.padding = "0";
    metins8P.style.width = "100%";
    metins8P.style.padding = "0";

    icerik9.style.flexDirection = "column";
    icerik9.style.width = "100%";
    metins9.style.width = "90%";
    imaj9.style.width = "100%";
    imaj9.style.padding = "0";
    metins9P.style.width = "100%";
    metins9P.style.padding = "0";

    icerik10.style.flexDirection = "column";
    icerik10.style.width = "100%";
    metins10.style.width = "90%";
    imaj10.style.width = "100%";
    imaj10.style.padding = "0";
    metins10P.style.width = "100%";
    metins10P.style.padding = "0";

    icerik11.style.flexDirection = "column";
    icerik11.style.width = "100%";
    metins11.style.width = "90%";
    imaj11.style.width = "100%";
    imaj11.style.padding = "0";
    metins11P.style.width = "100%";
    metins11P.style.padding = "0";

    icerik12.style.flexDirection = "column";
    icerik12.style.width = "100%";
    metins12.style.width = "90%";
    imaj12.style.width = "100%";
    imaj12.style.padding = "0";
    metins12P.style.width = "100%";
    metins12P.style.padding = "0";

    icerik13.style.flexDirection = "column";
    icerik13.style.width = "100%";
    metins13.style.width = "90%";
    imaj13.style.width = "100%";
    imaj13.style.padding = "0";
    metins13P.style.width = "100%";
    metins13P.style.padding = "0";

    icerik14.style.flexDirection = "column";
    icerik14.style.width = "100%";
    metins14.style.width = "90%";
    imaj14.style.width = "100%";
    imaj14.style.padding = "0";
    metins14P.style.width = "100%";
    metins14P.style.padding = "0";


    galeriBolum.style.margin = "0";
    

    fotter.style.flexDirection = "column";
    fotter.style.height = "100%";
      // document.getElementById("fotter").style.width = "100%";
    fotter.style.margin = "0";
    fotter.style.justifyContent = "center";

    altloggo.style.height = "100%";
    altloggo.style.alignSelf = "center";

    navvlinks.style.alignItems = "center";

    yazi1.style.alignItems = "center";
    yazi2.style.alignItems = "center";
    sosyallinks.style.alignItems = "center";




        // document.getElementById("navbarrr").style.width = window.innerWidth;
        // document.getElementById("loggo").style.width = (window.innerWidth*0.5);
        burgerButon.addEventListener("click", function(){
            
            if (burgerMenuButon.style.display === "none"){  
                // burgerButon.style.display = "none";
                // menuList1.style.display = "flex";
                // menuList1.style.flexDirection = "column";
                burgerMenuButon.style.display = "flex";
                            // navbarrr.style.flexDirection = "column";
                            // burgerButon.style.backgroundColor = "black";
            }
            else{
                burgerButon.style.display = "flex";
                burgerMenuButon.style.display = "none";
            }
        })
};

function galeriReset(){
    resetTemel();
    acilmaEkrani();
    galeriPage();
    galeriBolum.removeAttribute("style");
    resBut1.removeAttribute("style");
    resBut2.removeAttribute("style");
    resBut3.removeAttribute("style");
    resBut4.removeAttribute("style");
    resBut5.removeAttribute("style");
    resBut6.removeAttribute("style");
    resBut7.removeAttribute("style");
    resBut8.removeAttribute("style");
    resBut9.removeAttribute("style");
    resBut10.removeAttribute("style");
    resBut11.removeAttribute("style");
    resBut12.removeAttribute("style");
    resBut13.removeAttribute("style");
    resBut14.removeAttribute("style");

    icerik1.removeAttribute("style");
    metins1.removeAttribute("style");
    imaj1.removeAttribute("style");
    metins1P.removeAttribute("style");

    icerik2.removeAttribute("style");
    metins2.removeAttribute("style");
    imaj2.removeAttribute("style");
    metins2P.removeAttribute("style");

    icerik3.removeAttribute("style");
    metins3.removeAttribute("style");
    imaj3.removeAttribute("style");
    metins3P.removeAttribute("style");

    icerik4.removeAttribute("style");
    metins4.removeAttribute("style");
    imaj4.removeAttribute("style");
    metins4P.removeAttribute("style");

    icerik5.removeAttribute("style");
    metins5.removeAttribute("style");
    imaj5.removeAttribute("style");
    metins5P.removeAttribute("style");

    icerik6.removeAttribute("style");
    metins6.removeAttribute("style");
    imaj6.removeAttribute("style");
    metins6P.removeAttribute("style");

    icerik7.removeAttribute("style");
    metins7.removeAttribute("style");
    imaj7.removeAttribute("style");
    metins7P.removeAttribute("style");

    icerik8.removeAttribute("style");
    metins8.removeAttribute("style");
    imaj8.removeAttribute("style");
    metins8P.removeAttribute("style");

    icerik9.removeAttribute("style");
    metins9.removeAttribute("style");
    imaj9.removeAttribute("style");
    metins9P.removeAttribute("style");

    icerik10.removeAttribute("style");
    metins10.removeAttribute("style");
    imaj10.removeAttribute("style");
    metins10P.removeAttribute("style");

    icerik11.removeAttribute("style");
    metins11.removeAttribute("style");
    imaj11.removeAttribute("style");
    metins11P.removeAttribute("style");

    icerik12.removeAttribute("style");
    metins12.removeAttribute("style");
    imaj12.removeAttribute("style");
    metins12P.removeAttribute("style");

    icerik13.removeAttribute("style");
    metins13.removeAttribute("style");
    imaj13.removeAttribute("style");
    metins13P.removeAttribute("style");

    icerik14.removeAttribute("style");
    metins14.removeAttribute("style");
    imaj14.removeAttribute("style");
    metins14P.removeAttribute("style");

};

window.addEventListener("DOMContentLoaded",function(){
    if (sayfaAdi === "/C:/Users/armag/Desktop/corumTanitim/index.html" && ekranGen>800){
        acilmaEkrani();
        console.log("a1");
        window.addEventListener("resize",function(){
            ekranGen = window.innerWidth;
            if (sayfaAdi === "/C:/Users/armag/Desktop/corumTanitim/index.html" && ekranGen>800){
                acilmaEkrani;
                console.log("a2");
                normalEkran();

            }
            else if (sayfaAdi === "/C:/Users/armag/Desktop/corumTanitim/index.html" && ekranGen<=800){
                ekranGen = window.innerWidth;
                kucukEkran();
                console.log("a3");

            }
        });
    }
    else if (sayfaAdi === "/C:/Users/armag/Desktop/corumTanitim/index.html" && ekranGen<=800){
        kucukEkran();
        console.log("a4");

        window.addEventListener("resize",function(){
            if (sayfaAdi === "/C:/Users/armag/Desktop/corumTanitim/index.html" && ekranGen>800){
                // acilmaEkrani();
                ekranGen = window.innerWidth;
                console.log("a5");
                normalEkran();

            }
            else if (sayfaAdi === "/C:/Users/armag/Desktop/corumTanitim/index.html" && ekranGen<=800){
                ekranGen = window.innerWidth;
                kucukEkran();
                console.log("a6");

            }
        });
    }
    else if (sayfaAdi === '/C:/Users/armag/Desktop/corumTanitim/tarih.html' && ekranGen>800){
    acilmaEkrani();
    // tarihKucuk();
    tarihGizle();
    // resetTemel();
    window.addEventListener("resize",function(){
        ekranGen = window.innerWidth;
        if (sayfaAdi === '/C:/Users/armag/Desktop/corumTanitim/tarih.html' && ekranGen>800){
            ekranGen = window.innerWidth;
            acilmaEkrani();
            // tarihKucuk();
            tarihGizle();
            resetTemel();
        }
        else if(sayfaAdi === '/C:/Users/armag/Desktop/corumTanitim/tarih.html' && ekranGen<=800){
            ekranGen = window.innerWidth;
            tarihGizle();
            tarihKucuk();
        }
    })
    }
    else if (sayfaAdi === '/C:/Users/armag/Desktop/corumTanitim/tarih.html' && ekranGen<=800){
        ekranGen = window.innerWidth;
        tarihGizle();
        tarihKucuk();
        window.addEventListener("resize",function(){
            ekranGen = window.innerWidth;
            if (sayfaAdi === '/C:/Users/armag/Desktop/corumTanitim/tarih.html' && ekranGen>800){
                ekranGen = window.innerWidth;
                resetTemel();
                acilmaEkrani();
                // tarihKucuk();
                tarihGizle();
                console.log("mantık hatası aldığımız yer burası");
            }
            else if(sayfaAdi === '/C:/Users/armag/Desktop/corumTanitim/tarih.html' && ekranGen<=800){
                ekranGen = window.innerWidth;
                tarihGizle();
                tarihKucuk();
            }
        })
    }
    else if (sayfaAdi === '/C:/Users/armag/Desktop/corumTanitim/galeri.html' && ekranGen>800){
        acilmaEkrani();
        galeriPage();
        window.addEventListener("resize",function(){
            ekranGen = window.innerWidth;
            if (sayfaAdi === '/C:/Users/armag/Desktop/corumTanitim/galeri.html' && ekranGen>800){
            // galeriPage();
            galeriReset();
        
        }
            else if (sayfaAdi === '/C:/Users/armag/Desktop/corumTanitim/galeri.html' && ekranGen<=800){
                galeriKucuk();
            }
        })
    }
    else if (sayfaAdi === '/C:/Users/armag/Desktop/corumTanitim/galeri.html' && ekranGen<=800){
        acilmaEkrani();
        galeriKucuk();
        window.addEventListener("resize",function(){
            ekranGen = window.innerWidth;
            if (sayfaAdi === '/C:/Users/armag/Desktop/corumTanitim/galeri.html' && ekranGen<=800){
            galeriKucuk();
        
        }
            else if (sayfaAdi === '/C:/Users/armag/Desktop/corumTanitim/galeri.html' && ekranGen>800){
            // galeriPage();
            galeriReset();
            }
        })
    }
});



// window.addEventListener("DOMContentLoaded", function(){
//     console.log(window.innerHeight);
//     console.log(window.innerWidth);

//     burgerMenuButon.style.display = "none";

//     // console.log("hataaaaaaa");
//     console.log(sayfaAdi);
//     if (sayfaAdi === "/C:/Users/armag/Desktop/corumTanitim/index.html" && ekranGen<=800){
//         console.log("çalışıyor1");
//         // acilisDivi.style.visibility = "hidden";
//         acilisDivi.style.filter = "opacity(0)";
//         // acilisDivi.style.position = "50 50";
//         acilisDivi.style.fontSize = "large";
//         // acilisDivi.style.backgroundSize = "20px";
//         // acilisDivBaslik.style.position = "100 250"; 
//         // acilisDivi.style.color = "transparent";
//         acilisDivi.style.visibility = "hidden";
//         console.log(Number(acilisDivi.style.width));
//         // acilisDivi.style.display = "none";  
//         // console.log("hata burada");
//         genel.style.filter = "opacity(1)";
//         genel.style.overflow = "visible";
//         genel.style.transition = "ease-in-out 6s";
//         acilisDivi.style.transition = "ease-in-out 4s";
//         console.log("çalışıyor2");
//         menuList1.style.display = "none";
//         console.log("sssssss");
//         burgerButon.style.display = "flex";
//         navbarrr.style.justifyContent = "space-between";
//         console.log(this.innerWidth);
//         // acilisDivi.style.backgroundColor = "black";
//         acilisDivi.style.width = "100%";
//         // acilisDivBaslik.style. 

//         // this.document.getElementById("contan").style.flexDirection = "row";
//         contan.style.flexWrap = "nowrap";
//         contan.style.width = ekranGen;
//         girisIndex.style.display = "flex";
//         girisIndex.style.flexDirection = "column";
//         girisIndex.style.margin = "0";
//         girisIndex.style.height = "100%";

//         girisImg.style.width = ekranGen;
//         girisImg.style.margin = "0";
//         girisImg.style.padding = "0";
//         metinn.style.fontSize = "small";
//         metinn.style.display = "flex";
//         metinn.style.flexDirection = "column";
//         metinn.style.margin = "0";
//             // document.getElementById("metinn").style.position = "relative";
//         icMet1.style.flexDirection = "column";
//         icMet1.textContent = " Çorum, tarihi dokusunun yanı sıra doğal güzellikleriyle de ziyaretçilerini büyüler. Boğazköy Milli Parkı ve İncesu Kanyonu gibi doğa harikası alanlar, doğa severler için keşfedilmeyi bekleyen yerlerdir. Aynı zamanda Çorum, tarıma dayalı ekonomisiyle de tanınır ve özellikle leblebisiyle ünlüdür. Çorum leblebisi, hem Türkiye genelinde hem de yurtdışında büyük bir ilgi görür. Bu ürün, şehrin sembollerinden biri haline gelmiştir. Şehrin geleneksel el sanatları da oldukça dikkat çekicidir. Özellikle bakır işçiliği, ahşap oymacılığı ve dokumacılık gibi el sanatları, Çorum'un zengin kültürel mirasını yansıtır.";
//             // document.getElementById("metinn").style.overflow = "hidden";

//             // console.log(document.getElementById("contan").style.width);
//         girisCards.style.flexDirection = "column";
//         girisCards.style.margin = "0";
//           // document.getElementById("girisCards").style.position = "relative";

//         fotter.style.flexDirection = "column";
//         fotter.style.height = "100%";
//           // document.getElementById("fotter").style.width = "100%";
//         fotter.style.margin = "0";
//         fotter.style.justifyContent = "center";

//         altloggo.style.height = "100%";
//         altloggo.style.alignSelf = "center";

//         navvlinks.style.alignItems = "center";

//         yazi1.style.alignItems = "center";
//         yazi2.style.alignItems = "center";
//         sosyallinks.style.alignItems = "center";




//             // document.getElementById("navbarrr").style.width = window.innerWidth;
//             // document.getElementById("loggo").style.width = (window.innerWidth*0.5);
//             burgerButon.addEventListener("click", function(){
                
//                 if (burgerMenuButon.style.display === "none"){  
//                     // burgerButon.style.display = "none";
//                     // menuList1.style.display = "flex";
//                     // menuList1.style.flexDirection = "column";
//                     burgerMenuButon.style.display = "flex";
//                                 // navbarrr.style.flexDirection = "column";
//                                 // burgerButon.style.backgroundColor = "black";
//                 }
//                 else{
//                     burgerButon.style.display = "flex";
//                     burgerMenuButon.style.display = "none";
//                 }
//             })
//             window.addEventListener("resize",function(){
//                 if (sayfaAdi === "/C:/Users/armag/Desktop/corumTanitim/index.html" && ekranGen<=800){
//                     console.log("çalışıyor1");
//                     // acilisDivi.style.visibility = "hidden";
//                     acilisDivi.style.filter = "opacity(0)";
//                     // acilisDivi.style.position = "50 50";
//                     acilisDivi.style.fontSize = "large";
//                     // acilisDivi.style.backgroundSize = "20px";
//                     // acilisDivBaslik.style.position = "100 250"; 
//                     // acilisDivi.style.color = "transparent";
//                     acilisDivi.style.visibility = "hidden";
//                     console.log(Number(acilisDivi.style.width));
//                     // acilisDivi.style.display = "none";  
//                     // console.log("hata burada");
//                     genel.style.filter = "opacity(1)";
//                     genel.style.overflow = "visible";
//                     genel.style.transition = "ease-in-out 6s";
//                     acilisDivi.style.transition = "ease-in-out 4s";
//                     console.log("çalışıyor2");
//                     menuList1.style.display = "none";
//                     console.log("sssssss");
//                     burgerButon.style.display = "flex";
//                     navbarrr.style.justifyContent = "space-between";
//                     console.log(this.innerWidth);
//                     // acilisDivi.style.backgroundColor = "black";
//                     acilisDivi.style.width = "100%";
//                     // acilisDivBaslik.style. 
            
//                     // this.document.getElementById("contan").style.flexDirection = "row";
//                     contan.style.flexWrap = "nowrap";
//                     contan.style.width = ekranGen;
//                     girisIndex.style.display = "flex";
//                     girisIndex.style.flexDirection = "column";
//                     girisIndex.style.margin = "0";
//                     girisIndex.style.height = "100%";
            
//                     girisImg.style.width = ekranGen;
//                     girisImg.style.margin = "0";
//                     girisImg.style.padding = "0";
//                     metinn.style.fontSize = "small";
//                     metinn.style.display = "flex";
//                     metinn.style.flexDirection = "column";
//                     metinn.style.margin = "0";
//                         // document.getElementById("metinn").style.position = "relative";
//                     icMet1.style.flexDirection = "column";
//                     icMet1.textContent = " Çorum, tarihi dokusunun yanı sıra doğal güzellikleriyle de ziyaretçilerini büyüler. Boğazköy Milli Parkı ve İncesu Kanyonu gibi doğa harikası alanlar, doğa severler için keşfedilmeyi bekleyen yerlerdir. Aynı zamanda Çorum, tarıma dayalı ekonomisiyle de tanınır ve özellikle leblebisiyle ünlüdür. Çorum leblebisi, hem Türkiye genelinde hem de yurtdışında büyük bir ilgi görür. Bu ürün, şehrin sembollerinden biri haline gelmiştir. Şehrin geleneksel el sanatları da oldukça dikkat çekicidir. Özellikle bakır işçiliği, ahşap oymacılığı ve dokumacılık gibi el sanatları, Çorum'un zengin kültürel mirasını yansıtır.";
//                         // document.getElementById("metinn").style.overflow = "hidden";
            
//                         // console.log(document.getElementById("contan").style.width);
//                     girisCards.style.flexDirection = "column";
//                     girisCards.style.margin = "0";
//                       // document.getElementById("girisCards").style.position = "relative";
            
//                     fotter.style.flexDirection = "column";
//                     fotter.style.height = "100%";
//                       // document.getElementById("fotter").style.width = "100%";
//                     fotter.style.margin = "0";
//                     fotter.style.justifyContent = "center";
            
//                     altloggo.style.height = "100%";
//                     altloggo.style.alignSelf = "center";
            
//                     navvlinks.style.alignItems = "center";
            
//                     yazi1.style.alignItems = "center";
//                     yazi2.style.alignItems = "center";
//                     sosyallinks.style.alignItems = "center";
            
            
            
            
//                         // document.getElementById("navbarrr").style.width = window.innerWidth;
//                         // document.getElementById("loggo").style.width = (window.innerWidth*0.5);
//                         burgerButon.addEventListener("click", function(){
                            
//                             if (burgerMenuButon.style.display === "none"){  
//                                 // burgerButon.style.display = "none";
//                                 // menuList1.style.display = "flex";
//                                 // menuList1.style.flexDirection = "column";
//                                 burgerMenuButon.style.display = "flex";
//                                             // navbarrr.style.flexDirection = "column";
//                                             // burgerButon.style.backgroundColor = "black";
//                             }
//                             else{
//                                 burgerButon.style.display = "flex";
//                                 burgerMenuButon.style.display = "none";
//                             }
//                         })
//                 }
                
//                 else if (sayfaAdi === "/C:/Users/armag/Desktop/corumTanitim/index.html" && ekranGen>800){
//                     console.log("çalışıyor3");
//                     // acilisDivi.style.visibility = "hidden";
//                     acilisDivi.style.filter = "opacity(0)";
//                     // acilisDivi.style.position = "50 50";
//                     acilisDivi.style.fontSize = "large";
//                     // acilisDivi.style.backgroundSize = "20px";
//                     // acilisDivBaslik.style.position = "100 250"; 
//                     // acilisDivi.style.color = "transparent";
//                     acilisDivi.style.visibility = "hidden";
//                     console.log(Number(acilisDivi.style.width));
//                     // acilisDivi.style.display = "none";  
//                     // console.log("hata burada");
//                     genel.style.filter = "opacity(1)";
//                     genel.style.overflow = "visible";
//                     genel.style.transition = "ease-in-out 6s";
//                     acilisDivi.style.transition = "ease-in-out 4s";
//                 }
//             });
        
//     }

//     else if (sayfaAdi === "/C:/Users/armag/Desktop/corumTanitim/index.html" && ekranGen>800){
//         console.log("çalışıyor3");
//         // acilisDivi.style.visibility = "hidden";
//         acilisDivi.style.filter = "opacity(0)";
//         // acilisDivi.style.position = "50 50";
//         acilisDivi.style.fontSize = "large";
//         // acilisDivi.style.backgroundSize = "20px";
//         // acilisDivBaslik.style.position = "100 250"; 
//         // acilisDivi.style.color = "transparent";
//         acilisDivi.style.visibility = "hidden";
//         console.log(Number(acilisDivi.style.width));
//         // acilisDivi.style.display = "none";  
//         // console.log("hata burada");
//         genel.style.filter = "opacity(1)";
//         genel.style.overflow = "visible";
//         genel.style.transition = "ease-in-out 6s";
//         acilisDivi.style.transition = "ease-in-out 4s";
//     }
    
// });


    // window.addEventListener("resize",function () {
    //     console.log("burası çalışıyor mu ?")
       
    // })

  
//     if (sayfaAdi === "/C:/Users/armag/Desktop/corumTanitim/index.html"){
//     // document.getElementById("lebleb").style.backgroundColor = "white";
//     // acilisDivi.style.visibility = "hidden";
//     acilisDivi.style.filter = "opacity(0)";
//     // acilisDivi.style.position = "50 50";
//     acilisDivi.style.fontSize = "large";
//     // acilisDivi.style.backgroundSize = "20px";
//     // acilisDivBaslik.style.position = "100 250"; 
//     // acilisDivi.style.color = "transparent";
//     acilisDivi.style.visibility = "hidden";
//     console.log(Number(acilisDivi.style.width));
//     // acilisDivi.style.display = "none";  
//     console.log("hata burada");
//     genel.style.filter = "opacity(1)";
//     genel.style.overflow = "visible";
//     genel.style.transition = "ease-in-out 6s";
//     acilisDivi.style.transition = "ease-in-out 4s";
//     // acilisDivi.style.display = "none";
//     window.addEventListener("resize", function(){
//         if(ekranGen <= 778){
//             menuList1.style.display = "none";
//             console.log("sssssss");
//             burgerButon.style.display = "flex";
//             navbarrr.style.justifyContent = "space-between";
//             console.log(this.innerWidth);

//             // acilisDivi.style.backgroundColor = "black";
//             acilisDivi.style.width = "100%";
//             // acilisDivBaslik.style. 

//             // this.document.getElementById("contan").style.flexDirection = "row";
//             contan.style.flexWrap = "nowrap";
//             contan.style.width = ekranGen;
//             girisIndex.style.display = "flex";
//             girisIndex.style.flexDirection = "column";
//             girisIndex.style.margin = "0";
//             girisIndex.style.height = "100%";

//             girisImg.style.width = ekranGen;
//             girisImg.style.margin = "0";
//             girisImg.style.padding = "0";

//             metinn.style.fontSize = "small";
//             metinn.style.display = "flex";
//             metinn.style.flexDirection = "column";
//             metinn.style.margin = "0";
//             // document.getElementById("metinn").style.position = "relative";

//             icMet1.style.flexDirection = "column";
//             icMet1.textContent = " Çorum, tarihi dokusunun yanı sıra doğal güzellikleriyle de ziyaretçilerini büyüler. Boğazköy Milli Parkı ve İncesu Kanyonu gibi doğa harikası alanlar, doğa severler için keşfedilmeyi bekleyen yerlerdir. Aynı zamanda Çorum, tarıma dayalı ekonomisiyle de tanınır ve özellikle leblebisiyle ünlüdür. Çorum leblebisi, hem Türkiye genelinde hem de yurtdışında büyük bir ilgi görür. Bu ürün, şehrin sembollerinden biri haline gelmiştir. Şehrin geleneksel el sanatları da oldukça dikkat çekicidir. Özellikle bakır işçiliği, ahşap oymacılığı ve dokumacılık gibi el sanatları, Çorum'un zengin kültürel mirasını yansıtır.";
//             // document.getElementById("metinn").style.overflow = "hidden";

//             // console.log(document.getElementById("contan").style.width);
//             girisCards.style.flexDirection = "column";
//             girisCards.style.margin = "0";
//             // document.getElementById("girisCards").style.position = "relative";

//             fotter.style.flexDirection = "column";
//             fotter.style.height = "100%";
//             // document.getElementById("fotter").style.width = "100%";
//             fotter.style.margin = "0";
//             fotter.style.justifyContent = "center";

//             altloggo.style.height = "100%";
//             altloggo.style.alignSelf = "center";

//             navvlinks.style.alignItems = "center";

//             yazi1.style.alignItems = "center";

//             yazi2.style.alignItems = "center";

//             sosyallinks.style.alignItems = "center";


//             // document.getElementById("navbarrr").style.width = window.innerWidth;
//             // document.getElementById("loggo").style.width = (window.innerWidth*0.5);

//             burgerButon.addEventListener("click", function(){
                
//               if (menuList1.style.display === "none"){  
//                 // burgerButon.style.display = "none";
//                 menuList1.style.display = "flex";
//                 menuList1.style.flexDirection = "column";
//                 // navbarrr.style.flexDirection = "column";
//                 // burgerButon.style.backgroundColor = "black";
//             }
//             else{
//                 burgerButon.style.display = "flex";
//                 menuList1.style.display = "none";
//             }
//             })

            

            
//         }
//         else{
//             // menuList1.style.display = "flex";
//             menuList1.removeAttribute("style");
//             burgerButon.removeAttribute("style");
//             metinn.removeAttribute("style");
//             navbarrr.removeAttribute("style");
//             fotter.removeAttribute("style");
//             girisIndex.removeAttribute("style");
//             girisCards.removeAttribute("style");

//         }
//     });
    
//     }
//     else if (sayfaAdi === "/tarih.html"){
//         // document.getElementById("lebleb").style.backgroundColor = "white";
//     // acilisDivi.style.visibility = "hidden";
//     acilisDivi.style.filter = "opacity(0)";
//     // acilisDivi.style.position = "50 50";
//     acilisDivi.style.fontSize = "large";
//     // acilisDivi.style.backgroundSize = "20px";
//     // acilisDivBaslik.style.position = "100 250"; 
//     // acilisDivi.style.color = "transparent";
//     acilisDivi.style.visibility = "hidden";
//     genel.style.filter = "opacity(1)";
//     genel.style.overflow = "visible";
//     genel.style.transition = "ease-in-out 6s";
//     acilisDivi.style.transition = "ease-in-out 4s";
//     // acilisDivi.style.scrollBehavior = "smooth";
//     // acilisDivi.style.backgroundImage = "none";
//     document.getElementById("metin1").style.visibility = "hidden";
//     document.getElementById("metin2").style.visibility = "hidden";
//     document.getElementById("metin3").style.visibility = "hidden";
//     document.getElementById("metin4").style.visibility = "hidden";
//     document.getElementById("metin5").style.visibility = "hidden";
//     document.getElementById("metin6").style.visibility = "hidden";
//     document.getElementById("metin7").style.visibility = "hidden";
//     document.getElementById("metin8").style.visibility = "hidden";
//     document.getElementById("metin9").style.visibility = "hidden";
//     document.getElementById("metin10").style.visibility = "hidden";
//     }   
//     else if (sayfaAdi === "/galeri.html"){
//     // document.getElementById("lebleb").style.backgroundColor = "white";
//     // acilisDivi.style.visibility = "hidden";
//     acilisDivi.style.filter = "opacity(0)";
//     // acilisDivi.style.position = "50 50";
//     acilisDivi.style.fontSize = "large";
//     // acilisDivi.style.backgroundSize = "20px";
//     // acilisDivBaslik.style.position = "100 250"; 
//     // acilisDivi.style.color = "transparent";
//     acilisDivi.style.visibility = "hidden";
//     genel.style.filter = "opacity(1)";
//     genel.style.overflow = "visible";
//     genel.style.transition = "ease-in-out 6s";
//     acilisDivi.style.transition = "ease-in-out 4s";
//     document.getElementById("icerik1").style.visibility = "hidden";
//     document.getElementById("icerik2").style.visibility = "hidden";
//     document.getElementById("icerik3").style.visibility = "hidden";
//     document.getElementById("icerik4").style.visibility = "hidden";
//     document.getElementById("icerik5").style.visibility = "hidden";
//     document.getElementById("icerik6").style.visibility = "hidden";
//     document.getElementById("icerik7").style.visibility = "hidden";
//     document.getElementById("icerik8").style.visibility = "hidden";
//     document.getElementById("icerik9").style.visibility = "hidden";
//     document.getElementById("icerik10").style.visibility = "hidden";
//     document.getElementById("icerik11").style.visibility = "hidden";
//     document.getElementById("icerik12").style.visibility = "hidden";
//     document.getElementById("icerik13").style.visibility = "hidden";
//     document.getElementById("icerik14").style.visibility = "hidden";
//     }
//     else if (sayfaAdi === "/neyapilir.html"){
//   // document.getElementById("lebleb").style.backgroundColor = "white";
//     // acilisDivi.style.visibility = "hidden";
//     acilisDivi.style.filter = "opacity(0)";
//     // acilisDivi.style.position = "50 50";
//     acilisDivi.style.fontSize = "large";
//     // acilisDivi.style.backgroundSize = "20px";
//     // acilisDivBaslik.style.position = "100 250"; 
//     // acilisDivi.style.color = "transparent";
//     acilisDivi.style.visibility = "hidden";
//     genel.style.filter = "opacity(1)";
//     genel.style.overflow = "visible";
//     genel.style.transition = "ease-in-out 6s";
//     acilisDivi.style.transition = "ease-in-out 4s";

//     const tarih = document.getElementById("tarih");
//     const gezi = document.getElementById("gezi");
//     const yemek = document.getElementById("yemek");
//     const kultur = document.getElementById("kultur");

//     const tarihCard1 = document.getElementById("tarihcard1");
//     const tarihCard2 = document.getElementById("tarihcard2");
//     const geziCard1 = document.getElementById("gezicard1");
//     const geziCard2 = document.getElementById("gezicard2");
//     const geziCard3 = document.getElementById("gezicard3");
//     const kulturCard1 = document.getElementById("kulturcard1");
//     const kulturCard2 = document.getElementById("kulturcard2");
//     const kulturCard3 = document.getElementById("kulturcard3");
//     const yemekCard1 = document.getElementById("yemekcard1");
//     const yemekCard2 = document.getElementById("yemekcard2");
//     const yemekCard3 = document.getElementById("yemekcard3");
//     const yemekCard4 = document.getElementById("yemekcard4");
    


//     tarih.addEventListener("change",function(){
//     if (tarih.checked === true){
//         // document.getElementById("card2").style.visibility = "hidden";
//         // document.getElementById("card1").style.visibility = "hidden";
//         // gezicards.style.display = "none";
//         // yemekcards.style.display = "none";
//         // ku.style.display = "none";
//         // card2.style.display = "none";
//         // console.log("bbbbbbbb");
//         // document.getElementsByClassName("yapilacaklarCards").style.transition = "ease 3s";
//         geziCard1.style.display = "none";
//         geziCard2.style.display = "none";
//         geziCard3.style.display = "none";
//         kulturCard1.style.display = "none";
//         kulturCard2.style.display = "none";
//         kulturCard3.style.display = "none";
//         yemekCard1.style.display = "none";
//         yemekCard2.style.display = "none";
//         yemekCard3.style.display = "none";
//         yemekCard4.style.display = "none";
//         // document.getElementById("yapilicaklarElemen").style.transition = ("ease 5s");
//     }
//     else{
//         // tarihcards.style.display = "flex";
//         // card2.style.display = "flex";
//         tarihCard1.style.display = "flex";
//         tarihCard2.style.display = "flex";
//         geziCard1.style.display = "flex";
//         geziCard2.style.display = "flex";
//         geziCard3.style.display = "flex";
//         kulturCard1.style.display = "flex";
//         kulturCard2.style.display = "flex";
//         kulturCard3.style.display = "flex";
//         yemekCard1.style.display = "flex";
//         yemekCard2.style.display = "flex";
//         yemekCard3.style.display = "flex";
//         yemekCard4.style.display = "flex";
//         // document.getElementById("yapilicaklarElemen").style.transition = ("ease 5s");

//     }
//     });
//     gezi.addEventListener("change",function(){
//     if (gezi.checked === true){
//         // document.getElementById("card2").style.visibility = "visible";
//         // document.getElementById("card1").style.visibility = "visible";
//         tarihCard1.style.display = "none";
//         tarihCard2.style.display = "none";
//         // geziCard3.style.display = "none";
//         kulturCard1.style.display = "none";
//         kulturCard2.style.display = "none";
//         kulturCard3.style.display = "none";
//         yemekCard1.style.display = "none";
//         yemekCard2.style.display = "none";
//         yemekCard3.style.display = "none";
//         yemekCard4.style.display = "none";

//     }
//     else{
//         // card1.style.display = "flex";
//         // card2.style.display = "flex";
//         // card3.style.display = "flex";
//         // card4.style.display = "flex";
//         tarihCard1.style.display = "flex";
//         tarihCard2.style.display = "flex";
//         geziCard1.style.display = "flex";
//         geziCard2.style.display = "flex";
//         geziCard3.style.display = "flex";
//         kulturCard1.style.display = "flex";
//         kulturCard2.style.display = "flex";
//         kulturCard3.style.display = "flex";
//         yemekCard1.style.display = "flex";
//         yemekCard2.style.display = "flex";
//         yemekCard3.style.display = "flex";
//         yemekCard4.style.display = "flex";

//     }
//     });
//     yemek.addEventListener("change",function(){
//         if (yemek.checked === true){
//             // document.getElementById("card2").style.visibility = "visible";
//             // document.getElementById("card1").style.visibility = "visible";
//             // card3.style.display = "none";
//             // card4.style.display = "none";
//             // console.log("ccccccc");
//             geziCard1.style.display = "none";
//             geziCard2.style.display = "none";
//             geziCard3.style.display = "none";
//             kulturCard1.style.display = "none";
//             kulturCard2.style.display = "none";
//             kulturCard3.style.display = "none";
//             tarihCard1.style.display = "none";
//             tarihCard2.style.display = "none";
//             // yemekCard3.style.display = "none";
//             // yemekCard4.style.display = "none";
//         }
//         else{
//             // card1.style.display = "flex";
//             // card2.style.display = "flex";
//             // card3.style.display = "flex";
//             // card4.style.display = "flex";
//             tarihCard1.style.display = "flex";
//             tarihCard2.style.display = "flex";
//             geziCard1.style.display = "flex";
//             geziCard2.style.display = "flex";
//             geziCard3.style.display = "flex";
//             kulturCard1.style.display = "flex";
//             kulturCard2.style.display = "flex";
//             kulturCard3.style.display = "flex";
//             yemekCard1.style.display = "flex";
//             yemekCard2.style.display = "flex";
//             yemekCard3.style.display = "flex";
//             yemekCard4.style.display = "flex";
    
//         }
//     });
//     kultur.addEventListener("change",function(){
//         if (kultur.checked === true){
//             // document.getElementById("card2").style.visibility = "visible";
//             // document.getElementById("card1").style.visibility = "visible";
//             // card3.style.display = "none";
//             // card4.style.display = "none";
//             // console.log("ccccccc");
//             geziCard1.style.display = "none";
//             geziCard2.style.display = "none";
//             geziCard3.style.display = "none";
//             tarihCard1.style.display = "none";
//             tarihCard2.style.display = "none";
//             // kulturCard3.style.display = "none";
//             yemekCard1.style.display = "none";
//             yemekCard2.style.display = "none";
//             yemekCard3.style.display = "none";
//             yemekCard4.style.display = "none";
//         }
//         else{
//             // card1.style.display = "flex";
//             // card2.style.display = "flex";
//             // card3.style.display = "flex";
//             // card4.style.display = "flex";
//             tarihCard1.style.display = "flex";
//             tarihCard2.style.display = "flex";
//             geziCard1.style.display = "flex";
//             geziCard2.style.display = "flex";
//             geziCard3.style.display = "flex";
//             kulturCard1.style.display = "flex";
//             kulturCard2.style.display = "flex";
//             kulturCard3.style.display = "flex";
//             yemekCard1.style.display = "flex";
//             yemekCard2.style.display = "flex";
//             yemekCard3.style.display = "flex";
//             yemekCard4.style.display = "flex";

//         }
//     });
   
//     }


//     // document.getElementById("metin2").style.display = "none";
//     // document.getElementById("metin3").style.display = "none";
//     // document.getElementById("metin4").style.display = "none";
//     // document.getElementById("metin5").style.display = "none";
//     // document.getElementById("metin6").style.display = "none";
//     // document.getElementById("metin7").style.display = "none";
//     // document.getElementById("metin8").style.display = "none";
//     // document.getElementById("metin9").style.display = "none";
//     // document.getElementById("metin10").style.display = "none";
//     // document.getElementById("contan").style.visibility = "visible";






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
        document.getElementById(x).style.visibility = "visible";
        document.getElementById(x).style.display = "flex";
        // document.getElementById("contan2").style.overflow = "visible";  
        console.log("aaaaa2222233333");

    }
};