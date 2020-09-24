document.querySelectorAll('.drum').forEach(drum => drum.addEventListener('click', function () {
    if (this.innerHTML === "w") {
        let audio = new Audio("sounds/tom-1.mp3");
        audio.play();
    }
    if (this.innerHTML === "a") {
        let audio = new Audio("sounds/tom-2.mp3");
        audio.play();
    }
    if (this.innerHTML === "s") {
        let audio = new Audio("sounds/tom-3.mp3");
        audio.play();
    }
    if (this.innerHTML === "d") {
        let audio = new Audio("sounds/tom-4.mp3");
        audio.play();
    }
    if (this.innerHTML === "j") {
        let audio = new Audio("sounds/snare.mp3");
        audio.play();
    }
    if (this.innerHTML === "k") {
        let audio = new Audio("sounds/crash.mp3");
        audio.play();
    }
    if (this.innerHTML === "l") {
        let audio = new Audio("sounds/kick-bass.mp3");
        audio.play();
    }
}));
