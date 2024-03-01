window.addEventListener("load", function () {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
});

function elemekElerese1() {
    /**Ide jön az első feladat */
    const ELSOKIIR = document.querySelectorAll("section h2") [0]
    let TART = document.getElementById("f1").innerHTML
    console.log(TART)
}
function elemekElerese2() {
    /**Ide jön az 2.  feladat */
    document.getElementById("ide").innerHTML = "Jó reggelt!";
}
function elemekElerese3() {
    /**Ide jön az 3. feladat */
    const CLASSKIIR = document.getElementsByClassName("ide")
    CLASSKIIR[0].innerHTML = `<p> Jó reggelt! </p>`
}

function elemekElerese4(){
    // 4. feladat
    const RANDOMFELADAT = document.getElementsByClassName("lista")[0]
    let txt = "<ul>"
    for(let index = 0; index < 5; index++){
        let randSzam = Math.floor(Math.random() *20)+10
        txt += `<li>${randSzam}</li>`

    }
    txt += "</ul>"

    RANDOMFELADAT.innerHTML += txt    
}

function elemekFormazasa1(){
    const FORMAZOTT = document.getElementsByClassName("lista")[0]
    FORMAZOTT.classList.add("formazott")

}
