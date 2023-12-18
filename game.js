let handImgArr=[
    "./assets/paper-hand.png",
    "./assets/rock-hand.png",
    "./assets/scissors-hand.png"
]

// function to create computer hand image
let complogo = document.getElementById("complogo")
function Createcomplogo(){
    let compImg=document.createElement("img");
    let randomIndex=getRandomInt(0,handImgArr.length);
    let comphandimgsrc=handImgArr[randomIndex];
    compImg.src=comphandimgsrc;
    complogo.innerHTML= `<img src="${comphandimgsrc}">`;

 

    if((imgholder.innerHTML==`<img src ="${handImgArr[0]}">` &&  complogo.innerHTML==`<img src="${handImgArr[1]}">`)||
    (imgholder.innerHTML==`<img src ="${handImgArr[1]}">` &&  complogo.innerHTML==`<img src="${handImgArr[2]}">`) ||
    (imgholder.innerHTML==`<img src ="${handImgArr[2]}">` &&  complogo.innerHTML==`<img src="${handImgArr[0]}">`)
    ){
        console.log("you won");
     
    }
    else{
        console.log("comp won")
    }

}


// adding eventlisner and computer function to hand logo
let Rock = document.getElementById("rock");
let Paper = document.getElementById("paper");
let Scissors = document.getElementById("scissors");
let imgholder=document.getElementById("handsign");


let score=0;
function calcScore(){
    Rock.addEventListener('click',function(){
        imgholder.innerHTML= '<img  src="./assets/rock-hand.png">';
        Createcomplogo();
    })
    Paper.addEventListener('click',function(){
        imgholder.innerHTML= '<img  src="./assets/paper-hand.png">';
        Createcomplogo();
    })
    Scissors.addEventListener('click',function(){
        imgholder.innerHTML= '<img  src="./assets/scissors-hand.png">';
        Createcomplogo();
    })


}
calcScore()





// logic for score
let userScore = document.getElementById("user-score");
let compScore = document.getElementById("comp-score");








// helper function to get random integer
function getRandomInt(min,max){
    min=Math.ceil(min);
    max=Math.floor(max);
    let randomno= Math.floor(Math.random()*(max-min)+min);
    return randomno

}