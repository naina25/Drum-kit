document.querySelectorAll('.drum').forEach(drum => drum.addEventListener('click', function () {
    let keyinnerHTML = this.innerHTML;
    switchEvents(keyinnerHTML);
    buttonAnimation(keyinnerHTML);
    setTimeout(buttonAnimationRemove,1500,keyinnerHTML);
}));

document.addEventListener('keydown', function(event){
    switchEvents(event.key);
    buttonAnimation(event.key);
    setTimeout(buttonAnimationRemove,1500,event.key);
})

function switchEvents(eventName){
    switch (eventName) {
        case "w":
            let audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            let audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
            break;
        case "s":
            let audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
            break;
        case "d":
            let audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
            break;
        case "j":
            let audio5 = new Audio("sounds/snare.mp3");
            audio5.play();
            break;
        case "k":
            let audio6 = new Audio("sounds/crash.mp3");
            audio6.play();
            break;
        case "l":
            let audio7 = new Audio("sounds/kick-bass.mp3");
            audio7.play();
            break; 
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add('pressed');
}
function buttonAnimationRemove(currentKey2){
    let activeButton = document.querySelector(`.${currentKey2}`);
    activeButton.classList.remove('pressed');
}