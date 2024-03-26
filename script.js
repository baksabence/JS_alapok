window.addEventListener("load", function() {
    elemekElerese1();
    elemekElerese2();
    elemekElerese3();
    elemekElerese4();
    elemekFormazasa1();
    esemenyKezeles1();
    esemenyKezeles2();
    esemenyKezeles3();
    esemenyKezeles4();
    sajatFeladat();
});

function elemekElerese1() {
    /**Ide jön az első feladat */
    let ELSOKIIR = $("#f1").html()
    console.log(ELSOKIIR)
}
function elemekElerese2() {
    /**Ide jön az 2.  feladat */
    $("#ide").html("<p>Jó reggelt!</p>")
    
}
function elemekElerese3() {
    $(".ide").html("<p>Jó reggelt!</p>")
}

function elemekElerese4(){
    // 4. feladat
    const RANDOMFELADAT = $(".lista")
    let txt = "<ul>"
    for(let index = 0; index < 5; index++){
        let randSzam = Math.floor(Math.random() *20)+10
        txt += `<li>${randSzam}</li>`

    }
    txt += "</ul>"

    RANDOMFELADAT.html(txt)    
}

function elemekFormazasa1(){
    const FORMAZOTT = $(".lista")
    FORMAZOTT.addClass("formazott")
}

function esemenyKezeles1(){
    const ESEMENYKEZELES = $(".lista")
    ESEMENYKEZELES.on("click", function(){
        $(".kattintasutan").html(ESEMENYKEZELES.html())
    })
}

function esemenyKezeles2(){
    const FELADATMEGFOG = $(".feladat")
    FELADATMEGFOG.html("<button> OK </button>")
    const BUTTONMEGFOG = $(".feladat button")


    BUTTONMEGFOG.on("click", function(){
        $(".feladat").html("<div id='szepkep'><img src='szepkep.jpg' alt='szepkep'></div>")
        esemenyKezeles3();
    })
}


function esemenyKezeles3(){
    const ELOZOKEPMEGFOG = $("#szepkep")
    ELOZOKEPMEGFOG.on("mouseover", function(event){
        $(event.target).css("width", "500px")

    })

    ELOZOKEPMEGFOG.on("mouseout", function(event){
        $(event.target).css("width", "100%")

    })
}


function esemenyKezeles4(){
    const TAROLOELEMEKMEGFOG = $(".tarolo")
    const TAROLOELEMEKMEGJELENIT = $(".megjelenito")

    for(let i = 0; i < TAROLOELEMEKMEGFOG.length; i++){
        TAROLOELEMEKMEGFOG.on("click", function(event){
            TAROLOELEMEKMEGJELENIT.html(event.target)
        })
    }
}


function sajatFeladat(){
    const GOMBMEGFOG = $(".sajatdivem button")
    const CLASSMEGFOG = $(".ideird")
    GOMBMEGFOG.on("click", function(){
        let randSzam = Math.floor(Math.random() *9)+17
        $(".ideird").append(" <p> A te életkorod:  " + randSzam)
    })
}









