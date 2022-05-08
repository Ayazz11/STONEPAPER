
// BUTTON 1ST == PLAY
document.getElementById("add").addEventListener('click', function () {
    showAlert2();
  
})

function showAlert2(){
    if(document.getElementsByTagName("input")[0].value==='' || document.getElementsByTagName("input")[1].value==='' ){

        if(localStorage.length==0){
            alert("PLEASE ADD YOUR NAME");
        }

       else{
           alert("You Have already entered the details")
        deleteData();
       }
    }

   
  
    else{
        addNames();  // STORE INPUTS IN LOCAL STORAGE
        replaceName();   // REPLACES THE PLAYER1 FROM INPUT1
        replaceName2();  
        refreshInput(); // REPLACES THE PLAYER2 FROM INPUT2
    }
}


// BUTTON 2ND = ADD NAMES 

var btn = document.getElementById("play");
btn.addEventListener("click", function () {
    showAlert();

   
})


function showAlert(){
    if(localStorage.length===0){
        alert("PLEAE ENTER NAMES FIRST")
    }
    else{
        startPlaying();
        showOutput();
        showResult();
    }
}


// BUTTON 3RD - DELETE

document.querySelector("#del").addEventListener("click" , deleteData)



// ************************** STORING VALUES OF INPUT IN LOCAL STORAGE************************//
function addNames() {
    let inputs = document.getElementsByTagName("input");
    let input1 = inputs[0].value;  // VALUE OF INPUT 1
    let input2 = inputs[1].value;  // VALUE OF INPUT 2






    // CASE 1 : IF NOTHING IS STORED IN THE LOCAL STORAGE

    if (localStorage.getItem('player1') == null) {
        let name1 = [];   // CREATE AN EMPTY ARRAY
        name1.push([input1]);   // PUSH VALE OF INPUT1 IN THE ARRAY
        localStorage.setItem('player1', JSON.stringify(name1));  // STORE THE VALUE OF THE INPUT1 IN LOCAL STORAGE AS A STRING**

    }

    // CASE:2 WHEN SOMETHING IS ALREADY STORED INSIDE THE LOCAL STORAGE.
    else {
        name1 = localStorage.getItem('player1');  // STORE THE PREVIOUS VALUE  ****************NOTE: GETITEM WILLL RETURN A STRING**********
        name1 = JSON.parse(name1);   //  CONVERT THE STRING VALUE IN ARRAY FORM
        name1.push([input1]);    // PUSH THE NEW VALUE IN THE SAME ARRAY
        localStorage.setItem('player1', JSON.stringify(name1)); // STORE THE NEW VALUE IN LOCAL STORAGE AS A STRING***

    }


    //  REPEAT SAME FOR 2ND INPUT


    if (localStorage.getItem('player2') == null) {
        let name2 = [];
        name2.push([input2]);
        localStorage.setItem('player2', JSON.stringify(name2));
    }
    else {
        name2 = localStorage.getItem('player2');
        name2 = JSON.parse(name2);
        name2.push([input2]);
        localStorage.setItem('player2', JSON.stringify(name2));
    }




}
// DISPLAYING THE INPUT VALUE IN PARA




// NOTE: localStorage.getItem('') will give a string to convert it into array use JSON.parse



function replaceName() {
    let strlen = JSON.parse(localStorage.getItem('player1')).length;  // LENGTH OF THE ARRAY IN WHICH INPUT 1 IS STORED
    let p1 = document.querySelectorAll("#box1 p")[0];  // targeting the player 1 para
    p1.textContent = JSON.parse(localStorage.getItem('player1'))[strlen - 1];  // changing text content of p1 to ******THE LAST INPUT FROM USER*********

    return p1.textContent;
  

    // NOTE THAT THE LAST INPUT WILL BE AT THE POSITION (STRLEN-1)
}


// REPEAT SAME FOR 2ND INPUT

function replaceName2() {
    let strlen2 = JSON.parse(localStorage.getItem('player2')).length;
    let p2 = document.querySelectorAll("#box2 p")[0];
    p2.textContent = JSON.parse(localStorage.getItem('player2'))[strlen2 - 1];
    return p2.textContent;
}

function refreshInput(){
    document.getElementsByClassName("names")[0].value=null;
    document.getElementsByClassName("names")[1].value=null;
}






// creates random images 

// FOR GENERATING RANDOM IMAGES WE WILL CHANGE THE SOURCE STTRIBUTE OF IMG RANDOMLY
function startPlaying() {
    var src1 = "./images/stone.png";
    var src2 = "./images/paper.png";
    var src3 = "./images/scissor.png";
    var arrayImage = [src1, src2, src3];   // ALL THE SOURCE SHOLUD BE STORED IN AN ARRAY


    var randomNumber1 = Math.floor(Math.random() * 3);  // GENERATING RANDOM NUMBER UPTO THE NO. OF IMAGES WE HAVE (3)
    var randomImagesrc1 = arrayImage[randomNumber1];  //GENERATING THE RANDOM SOURCE
    var firstPerson = document.querySelectorAll(".box img")[0]; // TARGETING THE FIRST IMAGE.
    firstPerson.setAttribute("src", randomImagesrc1); // REPLACING THE SRC ATTRIBUTE OF THE FIRST IMAGE WITH RANDOM SOURCE

    // REPEAT THE SAME TO GENERATE RANDOM IMAGE (2)

    var randomNumber2 = Math.floor(Math.random() * 3);
    var randomImagesrc2 = arrayImage[randomNumber2];
    var firstPerson = document.querySelectorAll(".box img")[1];
    firstPerson.setAttribute("src", randomImagesrc2);



}








// *************************** TO KNOW WHAT IS YOUR OUTPUT (stone,paper,scissor)*********************//

function showOutput() {
    // targeting the empty para below each image


    var p1 = document.querySelectorAll("#box1 p")[1];    // BELOW IMAGE 1
    var p2 = document.querySelectorAll("#box2 p")[1];      // BELOW IMAGE 2


    // TARGETING SOURCE OF BOTH IMAGES


    var imageSrc1 = document.querySelectorAll(".box img")[0].getAttribute("src"); // IMAGE SRC 1

    var imageSrc2 = document.querySelectorAll(".box img")[1].getAttribute("src"); //IMAGE SRC 2


    // DEPENDING UPON THE SRC OF IMAGES WE CHANGE THE INNER-TEXT OF THE PARA


    // FOR IMAGE 1
    switch (imageSrc1) {
        case "./images/scissor.png":
            p1.textContent = "scissor";

            break;
        case "./images/stone.png":
            p1.textContent = "ROCK";

            break;
        case "./images/paper.png":
            p1.textContent = "paper";

            break;

        default:
            break;

    }

    // FOR IMAGE 2
    switch (imageSrc2) {
        case "./images/scissor.png":
            p2.textContent = "scissor";

            break;
        case "./images/stone.png":
            p2.textContent = "ROCK";

            break;
        case "./images/paper.png":
            p2.textContent = "paper";

            break;
        default:
            break;
    }
}











// TO SHOW WHICH PLAYER DID WON 


function showResult() {
    var result = document.getElementsByTagName("h2")[0];

    // STORING THE LINKS OF BOTH IMAGES 

    var imageSrc1 = document.querySelectorAll(".box img")[0].getAttribute("src");
    var imageSrc2 = document.querySelectorAll(".box img")[1].getAttribute("src");


    // USING ALL THE POSSIBLE CONDITIONS THAT CAN OCCUR WE GIVE THE RESULT FOR EACH CASE
    if (imageSrc1 === imageSrc2) {
        result.textContent = "Draw";
    }

    else if (imageSrc1 == "./images/stone.png" && imageSrc2 == "./images/paper.png") {
        result.textContent = replaceName2() + "  WINS!!";


    }
    else if (imageSrc1 == "./images/stone.png" && imageSrc2 == "./images/scissor.png") {
        result.textContent = replaceName() + "  WINS!!";


    }
    else if (imageSrc1 == "./images/paper.png" && imageSrc2 == "./images/scissor.png") {
        result.textContent = replaceName2() + "  WINS!!";


    }
    else if (imageSrc1 == "./images/paper.png" && imageSrc2 == "./images/stone.png") {
        result.textContent = replaceName() + "  WINS!!";


    }
    else if (imageSrc1 == "./images/scissor.png" && imageSrc2 == "./images/stone.png") {
        result.textContent = replaceName2() + "  WINS!!";


    }
    else if (imageSrc1 == "./images/scissor.png" && imageSrc2 == "./images/paper.png") {
        result.textContent = replaceName() + "  WINS!!";



    }
    else {
        result.textContent = "I AM WRONG SOMEWHERE";
    }


}


function deleteData(){
    document.querySelectorAll("#box1 p")[0].textContent="Player 1";
    document.querySelectorAll("#box2 p")[0].textContent="Player 2";
    localStorage.clear();
    document.getElementsByTagName("h2")[0].innerText="RESULT";
}
















