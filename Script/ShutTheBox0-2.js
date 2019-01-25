//DOM variables
var roll = document.getElementById("roll"),
    reset = document.getElementById("reset"),
    banner = document.getElementById("banner"),
    hide = "none",
    show = "block",
    div = ["firstDice","secondDice","total"],
    rbDOM = ["rbOne",
             "rbTwo",
             "rbThree",
             "rbFour",
             "rbFive",
             "rbSix",
             "rbSeven",
             "rbEight",
             "rbNine",
             "rbTen",
             "rbEleven",
             "rbTwelve"];
//games variables
var dieOne = 0,
    dieTwo = 0,
    total = 0,
    radioButtonArray =[false,
                       false,
                       false,
                       false,
                       false,
                       false,
                       false,
                       false,
                       false,
                       false,
                       false,
                       false],
    sevenToTwelveBool = false,
    loss = false;
console.log("this is running.")
main();
//test();
function main(){
    reset.style.display = hide;
    banner.style.display = hide;  
}
function test(){
    roll.style.display = hide;
    reset.style.display = hide;
    banner.style.display = hide;
    //roll.style.display = show;
    //reset.style.display = show;
    //banner.style.display = show;
}
function button(tile){
    console.log("Radio button " + tile + " has been pressed.")
    total = total - tile;
    document.getElementById(rbDOM[(tile-1)]).style.display = hide;
    document.getElementById("total").innerHTML = "Total=" + total;
    zero();
    if(total<0){
        loss = true;
        gameOver();
    }
    sevenToTwelve();
}
function radioButtonClass(tile){
        radioButtonArray[tile]= true;
}
function sevenToTwelve(){
    if(radioButtonArray[6]===true && radioButtonArray[7]===true && radioButtonArray[8]===true && radioButtonArray[9]===true && radioButtonArray[10]===true && radioButtonArray[11]===true){
        sevenToTwelveBool = true;
    }
    console.log("sevenToTwelve() has run.")
}
function zero(){
    if(total == 0){
        roll.style.display = show;
    }
}
function gameOver(){
    if(loss === true){
        for(var i = 0;i<3;i++){
            document.getElementById(div[i]).style.display = hide;
        }
        banner.innerHTML = "YOU LOST."
        banner.style.display = show;
        reset.style.display = show;
    }else if(boxShut == 0){
        document.getElementById("firstDice").innerHTML = "BOX SHUT.";
        reset.style.display = show;
    }
}
reset.addEventListener("click",
    function reset(){
        dieOne = 0,
        dieTwo = 0,
        total = 0,
        boxShut = 78,
        oneToTen = false,
        loss = false;
        document.getElementById("firstDice").innerHTML = 1;
        document.getElementById("secondDice").innerHTML = 1;
        document.getElementById("total").innerHTML = "Total=" + total;
        for(var i = 0;i<3;i++){
            document.getElementById(div[i]).style.display = show;
        }
        for(var i = 0;i<12;i++){
            document.getElementById(rbDOM[i]).style.display = show;
            document.getElementById(rbDOM[i]).checked = false;
        }
        roll.style.display = show;
        document.getElementById("reset").style.display = hide;
        document.getElementById("banner").style.display = hide;
        console.log("Reset has been pressed.")
    }
)
roll.addEventListener("click", 
    function rollDice(){
        document.getElementById(div[0]).innerHTML = "*";
        document.getElementById(div[1]).innerHTML = "*";
        dieOne = Math.floor(Math.random()*7);
        dieTwo = Math.floor(Math.random()*7);
        while (dieOne == 0) {
            dieOne = Math.floor(Math.random()*7);
        }
        while (dieTwo == 0) {
            dieTwo = Math.floor(Math.random()*7);
        }
        total = dieOne + dieTwo;
        roll.style.display = hide;
        document.getElementById(div[0]).innerHTML = dieOne;
        document.getElementById(div[1]).innerHTML = dieTwo;
        document.getElementById(div[2]).innerHTML = "Total=" + total;
        console.log("Roll dice has been pressed.")
    }
)
document.getElementById(rbDOM[0]).addEventListener("click",
    function(){
        radioButtonClass(0)
        button(1)
    }
)
document.getElementById(rbDOM[1]).addEventListener("click",
    function(){
        radioButtonClass(1)
        button(2)
    }
)
document.getElementById(rbDOM[2]).addEventListener("click",
    function(){
        radioButtonClass(2)
        button(3)
    }
)
document.getElementById(rbDOM[3]).addEventListener("click",
    function(){
        radioButtonClass(3)
        button(4)
    }
)
document.getElementById(rbDOM[4]).addEventListener("click",
    function(){
        radioButtonClass(4)
        button(5)
    }
)
document.getElementById(rbDOM[5]).addEventListener("click",
    function(){
        radioButtonClass(5)
        button(6)
    }
)
document.getElementById(rbDOM[6]).addEventListener("click",
    function(){
        radioButtonClass(6)
        button(7)
    }
)
document.getElementById(rbDOM[7]).addEventListener("click",
    function(){
        radioButtonClass(7)
        button(8)
    }
)
document.getElementById(rbDOM[8]).addEventListener("click",
    function(){
        radioButtonClass(8)
        button(9)
    }
)
document.getElementById(rbDOM[9]).addEventListener("click",
    function(){
        radioButtonClass(9)
        button(10)
    }
)
document.getElementById(rbDOM[10]).addEventListener("click",
    function(){
        radioButtonClass(10)
        button(11)
    }
)
document.getElementById(rbDOM[11]).addEventListener("click",
    function(){
        radioButtonClass(11)
        button(12)
    }
)