// This is will only be affected for the first button


// document.querySelectorAll("button").addEventListener("click", yoyos);

// function yoyos(){
//     alert("Sup anyone called ?");
// }


// This will be affected for all the buttons
//detects button clicked
for(var i = 0; i < document.querySelectorAll("button").length; i++){

    document.querySelectorAll("button")[i].addEventListener("click", yoyos);
    
    function yoyos(){
        
        //var audio = new Audio("./sounds/tom-1.mp3");
        //audio.play();

        //this.style.color = "white";
        //cuz of this if we clicl on the buttons the text color of it will change
        var buttoninnerHTML = this.innerHTML;
        makesound(buttoninnerHTML);
        buttonAnimation(buttoninnerHTML);

        switch(buttoninnerHTML){
            case "w":
                var audio1 = new Audio("./sounds/tom-1.mp3");
                audio1.play();
                break;
        
            case "a":
                var audio2 = new Audio("./sounds/tom-2.mp3");
                audio2.play();
                break;

            case "s":
                var audio3 = new Audio("./sounds/tom-3.mp3");
                audio3.play();
                break;
            
            case "d":
                var audio4 = new Audio("./sounds/tom-4.mp3");
                audio4.play();
                break;
            
            case "j":
                var audio5 = new Audio("./sounds/snare.mp3");
                audio5.play();
                break;
            
            case "k":
                var audio6 = new Audio("./sounds/crash.mp3");
                audio6.play();
                break;

            case "l":
                var audio7 = new Audio("./sounds/kick-bass.mp3");
                audio7.play();
                break;

            default:
                buttoninnerHTML;
        }
    
    }   


    
}

/*
This code will show which key was pressed in the keyboard.
we can see it in the console.

document.addEventListener('keydown', function(event){
    
    console.log(event);
});

*/

//this code detects the keystroke
document.addEventListener('keydown', function(event){
    
    makesound(event.key);
    buttonAnimation(event.key);
});


function makesound(key){

    switch(key){
            case "w":
                var audio1 = new Audio("./sounds/tom-1.mp3");
                audio1.play();
                break;
        
            case "a":
                var audio2 = new Audio("./sounds/tom-2.mp3");
                audio2.play();
                break;

            case "s":
                var audio3 = new Audio("./sounds/tom-3.mp3");
                audio3.play();
                break;
            
            case "d":
                var audio4 = new Audio("./sounds/tom-4.mp3");
                audio4.play();
                break;
            
            case "j":
                var audio5 = new Audio("./sounds/snare.mp3");
                audio5.play();
                break;
            
            case "k":
                var audio6 = new Audio("./sounds/crash.mp3");
                audio6.play();
                break;

            case "l":
                var audio7 = new Audio("./sounds/kick-bass.mp3");
                audio7.play();
                break;

            default:
                key;

}
}


function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){

        activeButton.classList.remove("pressed");
    }, 100);
}

