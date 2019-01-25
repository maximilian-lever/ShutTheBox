//DOM variables
var roll = document.getElementById("roll"),
    reset = document.getElementById("reset"),
    banner = document.getElementById("banner"),
    hide = "none",
    show = "block",
    div = ["firstDice","secondDice","Total",];

//games variables
var dieOne = 0,
    dieTwo = 0,
    total = 0,
    boxShut = 78,
    loss = false;

reset.style.display = hide;
banner.style.display = hide;

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
        reset.style.display = show;
    }
}

document.getElementById("reset").addEventListener("click", 
    function reset(){
        dieOne = 0,
        dieTwo = 0,
        total = 0,
        boxShut = 78,
        loss = false;
        document.getElementById("firstDice").innerHTML = 1;
        document.getElementById("secondDice").innerHTML = 1;
        document.getElementById("Total").innerHTML = "Total=" + total;
        for(var i = 0;i<3;i++){
            document.getElementById(div[i]).style.display = show;
        }
        document.getElementById("rbOne").style.display = show;
        document.getElementById('rbOne').checked = false;
        document.getElementById("rbTwo").style.display = show;
        document.getElementById('rbTwo').checked = false;
        document.getElementById("rbThree").style.display = show;
        document.getElementById('rbThree').checked = false;
        document.getElementById("rbFour").style.display = show;
        document.getElementById('rbFour').checked = false;
        document.getElementById("rbFive").style.display = show;
        document.getElementById('rbFive').checked = false;
        document.getElementById("rbSix").style.display = show;
        document.getElementById('rbSix').checked = false;
        document.getElementById("rbSeven").style.display = show;
        document.getElementById('rbSeven').checked = false;
        document.getElementById("rbEight").style.display = show;
        document.getElementById('rbEight').checked = false;
        document.getElementById("rbNine").style.display = show;
        document.getElementById('rbNine').checked = false;
        document.getElementById("rbTen").style.display = show;
        document.getElementById('rbTen').checked = false;
        document.getElementById("rbEleven").style.display = show;
        document.getElementById('rbEleven').checked = false;
        document.getElementById("rbTwelve").style.display = show;
        document.getElementById('rbTwelve').checked = false;
        roll.style.display = show;
        document.getElementById("reset").style.display = hide;
        document.getElementById("banner").style.display = hide;
    }
)

document.getElementById("roll").addEventListener("click", 
    function rollDice(){
            document.getElementById("firstDice").innerHTML = "*";
            document.getElementById("secondDice").innerHTML = "*";
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
            document.getElementById("firstDice").innerHTML = dieOne;
            document.getElementById("secondDice").innerHTML = dieTwo;
            document.getElementById("Total").innerHTML = "Total=" + total;
    }
);

document.getElementById("rbOne").addEventListener("click",
    function rbOne(){
        if((total-1)>=0){
            total = total - 1;
            boxShut = boxShut - 1;
            document.getElementById("rbOne").style.display = "none";
            document.getElementById("Total").innerHTML = "Total=" + total;
            zero();
            gameOver();
        }else{
            loss = true;
            gameOver();
        }
    }
)

document.getElementById("rbTwo").addEventListener("click",
    function rbOne(){
        if((total-2)>=0){
            total = total - 2;
            boxShut = boxShut - 2;
            document.getElementById("rbTwo").style.display = "none";
            document.getElementById("Total").innerHTML = "Total=" + total;
            zero();
            gameOver();
        }else{
            loss = true;
            gameOver();
        }
    }
)

document.getElementById("rbThree").addEventListener("click",
    function rbOne(){
        if((total-3)>=0){
            total = total - 3;
            boxShut = boxShut - 3;
            document.getElementById("rbThree").style.display = "none";
            document.getElementById("Total").innerHTML = "Total=" + total;
            zero();
            gameOver();
        }else{
            loss = true;
            gameOver();
        }
    }
)

document.getElementById("rbFour").addEventListener("click",
    function rbOne(){
        if((total-4)>=0){
            total = total - 4;
            boxShut = boxShut - 4;
            document.getElementById("rbFour").style.display = "none";
            document.getElementById("Total").innerHTML = "Total=" + total;
            zero();
            gameOver();
        }else{
            loss = true;
            gameOver();
        }
    }
)

document.getElementById("rbFive").addEventListener("click",
    function rbOne(){
        if((total-5)>=0){
            total = total - 5;
            boxShut = boxShut - 5;
            document.getElementById("rbFive").style.display = "none";
            document.getElementById("Total").innerHTML = "Total=" + total;
            zero();
            gameOver();
        }else{
            loss = true;
            gameOver();
        }
    }
)

document.getElementById("rbSix").addEventListener("click",
    function rbOne(){
        if((total-6)>=0){
            total = total - 6;
            boxShut = boxShut - 6;
            document.getElementById("rbSix").style.display = "none";
            document.getElementById("Total").innerHTML = "Total=" + total;
            zero();
            gameOver();
        }else{
            loss = true;
            gameOver();
        }
    }
)

document.getElementById("rbSeven").addEventListener("click",
    function rbOne(){
        if((total-7)>=0){
            total = total - 7;
            boxShut = boxShut - 7;
            document.getElementById("rbSeven").style.display = "none";
            document.getElementById("Total").innerHTML = "Total=" + total;
            zero();
            gameOver();
        }else{
            loss = true;
            gameOver();
        }
    }
)

document.getElementById("rbEight").addEventListener("click",
    function rbOne(){
        if((total-8)>=0){
            total = total - 8;
            boxShut = boxShut - 8;
            document.getElementById("rbEight").style.display = "none";
            document.getElementById("Total").innerHTML = "Total=" + total;
            zero();
            gameOver();
        }else{
            loss = true;
            gameOver();
        }
    }
)

document.getElementById("rbNine").addEventListener("click",
    function rbOne(){
        if((total-9)>=0){
            total = total - 9;
            boxShut = boxShut - 9;
            document.getElementById("rbNine").style.display = "none";
            document.getElementById("Total").innerHTML = "Total=" + total;
            zero();
            gameOver();
        }else{
            loss = true;
            gameOver();
        }
    }
)

document.getElementById("rbTen").addEventListener("click",
    function rbOne(){
        if((total-10)>=0){
            total = total - 10;
            boxShut = boxShut - 10;
            document.getElementById("rbTen").style.display = "none";
            document.getElementById("Total").innerHTML = "Total=" + total;
            zero();
            gameOver();
        }else{
            loss = true;
            gameOver();
        }
    }
)

document.getElementById("rbEleven").addEventListener("click",
    function rbOne(){
        if((total-11)>=0){
            total = total - 11;
            boxShut = boxShut - 11;
            document.getElementById("rbEleven").style.display = "none";
            document.getElementById("Total").innerHTML = "Total=" + total;
            zero();
            gameOver();
        }else{
            loss = true;
            gameOver();
        }
    }
)

document.getElementById("rbTwelve").addEventListener("click",
    function rbOne(){
        if((total-12)>=0){
            total = total - 12;
            boxShut = boxShut - 12;
            document.getElementById("rbTwelve").style.display = "none";
            document.getElementById("Total").innerHTML = "Total=" + total;
            zero();
            gameOver();
        }else{
            loss = true;
            gameOver();
        }
    }
)