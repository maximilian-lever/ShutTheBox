//DOM variables
var hide = "none",
    show = "block",
    div = ["firstDice","secondDice","total"],
    rbDOM = [document.getElementById("rbOne"),
             document.getElementById("rbTwo"),
             document.getElementById("rbThree"),
             document.getElementById("rbFour"),
             document.getElementById("rbFive"),
             document.getElementById("rbSix"),
             document.getElementById("rbSeven"),
             document.getElementById("rbEight"),
             document.getElementById("rbNine"),
             document.getElementById("rbTen"),
             document.getElementById("rbEleven"),
             document.getElementById("rbTwelve")];
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
    twoDice = true,
    loss = false;
console.log("Running.")
main();
//test();
function main(){
    reset.style.display = hide;
    banner.style.display = hide;  
}
function test(){
    //roll.style.display = hide;
    roll.style.display = show;
    reset.style.display = hide;
    //reset.style.display = show;
    banner.style.display = hide;
    //banner.style.display = show;
}
function button(tile){
    console.log("Radio button " + tile + " has been pressed.")
    total = total - tile;
    rbDOM[(tile-1)].style.display = hide;
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
        banner.innerHTML = "BOX SHUT.";
        reset.style.display = show;
    }
}
function sevenToTwelve(){
    if(radioButtonArray[6]===true && radioButtonArray[7]===true && radioButtonArray[8]===true && radioButtonArray[9]===true && radioButtonArray[10]===true && radioButtonArray[11]===true){
        twoDice = false
        console.log("twoDice:"+twoDice)
    }
    console.log("sevenToTwelve() has run.")
}
roll.addEventListener("click", 
    function rollDice(){
        firstDice.innerHTML = "*";
        secondDice.innerHTML = "*";
        if(twoDice === true){
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
        }else{
            secondDice.style.display = hide;
            dieOne = Math.floor(Math.random()*7);
            while (dieOne == 0) {
                dieOne = Math.floor(Math.random()*7);
            }
            total = dieOne;
            roll.style.display = hide;
            firstDice.innerHTML = dieOne;
        }
        
        document.getElementById(div[2]).innerHTML = "Total=" + total;
        console.log("Roll dice has been pressed.")
    }
)
reset.addEventListener("click",
    function resetClass(){
        dieOne = 0,
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
        twoDice = true,
        loss = false;
        firstDice.innerHTML = 1;
        secondDice.innerHTML = 1;
        document.getElementById(div[2]).innerHTML = "Total=" + total;
        for(var i = 0;i<3;i++){
            document.getElementById(div[i]).style.display = show;
        }
        for(var i = 0;i<12;i++){
            rbDOM[i].style.display = show;
            rbDOM[i].checked = false;
        }
        roll.style.display = show;
        reset.style.display = hide;
        banner.style.display = hide;
        console.log("Reset has been pressed.")
    }
)
rbDOM[0].addEventListener("click",
    function(){
        radioButtonClass(0)
        button(1)
    }
)
rbDOM[1].addEventListener("click",
    function(){
        radioButtonClass(1)
        button(2)
    }
)
rbDOM[2].addEventListener("click",
    function(){
        radioButtonClass(2)
        button(3)
    }
)
rbDOM[3].addEventListener("click",
    function(){
        radioButtonClass(3)
        button(4)
    }
)
rbDOM[4].addEventListener("click",
    function(){
        radioButtonClass(4)
        button(5)
    }
)
rbDOM[5].addEventListener("click",
    function(){
        radioButtonClass(5)
        button(6)
    }
)
rbDOM[6].addEventListener("click",
    function(){
        radioButtonClass(6)
        button(7)
    }
)
rbDOM[7].addEventListener("click",
    function(){
        radioButtonClass(7)
        button(8)
    }
)
rbDOM[8].addEventListener("click",
    function(){
        radioButtonClass(8)
        button(9)
    }
)
rbDOM[9].addEventListener("click",
    function(){
        radioButtonClass(9)
        button(10)
    }
)
rbDOM[10].addEventListener("click",
    function(){
        radioButtonClass(10)
        button(11)
    }
)
rbDOM[11].addEventListener("click",
    function(){
        radioButtonClass(11)
        button(12)
    }
)