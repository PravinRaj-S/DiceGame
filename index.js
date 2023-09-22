function rollDice(){
    var randomnumber1 = Math.floor(Math.random() * 6) + 1 ;
    var randomnumber2 = Math.floor(Math.random() * 6) + 1 ;

    var dice1 = document.querySelector(".img1");
    var dice2 = document.querySelector(".img2");
    var heading = document.querySelector("h1");
    dice1.setAttribute("src", "images/dice"+randomnumber1+".png") ;
    dice2.setAttribute("src", "images/dice"+randomnumber2+".png") ;

    if(randomnumber1>randomnumber2){
        heading.innerHTML = "Player1 Wins😎"
    }else if(randomnumber1<randomnumber2){
        heading.innerHTML = "Player2 Wins😎"
    }else{
        heading.innerHTML = "Draw😅"
    }
}