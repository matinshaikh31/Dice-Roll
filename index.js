
//FOR IMAGE 1

var randomNumber1 = Math.floor(Math.random()*7);

var randomDiceImg = "dice" + randomNumber1 + ".png";  //give dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImg ; //give images/dice1.png - iamages/dice6.png


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


//FOR  IMAGE2

var randomNumber2 = Math.floor(Math.random()*7);

var randomDiceImg2 = "dice" + randomNumber2 + ".png";  //give dice1.png - dice6.png

var randomImageSource2 = "images/" + randomDiceImg2 ; //give images/dice1.png - iamages/dice6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);



//WINNERS


if(randomNumber1>randomNumber2){

    document.querySelector("h1").innerHTML = "Player 1 Won";
}

else if( randomNumber1 === randomNumber2){

    document.querySelector("h1").innerHTML = "TIE";


}

else{
    document.querySelector("h1").innerHTML = "Player 2 Won"
}


