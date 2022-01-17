document.addEventListener("keypress", function(event){
    playSound(event.key);
    //console.log(event.key);
    playAnimation(event.key);
});


function playSound(key) {
    switch(key){
        case 'a':
            var sound = new Audio('./audios/clap.wav');
            sound.play();
            break;
        case 's':
            var sound = new Audio('./audios/hihat.wav');
            sound.play();
            break;
        case 'd':
            var sound = new Audio('./audios/kick.wav');
            sound.play();
            break;
        case 'f':
            var sound = new Audio('./audios/openhat.wav');
            sound.play();
            break;
        case 'g':
            var sound = new Audio('./audios/boom.wav');
            sound.play();
            break;
        case 'h':
            var sound = new Audio('./audios/ride.wav');
            sound.play();
            break;
        case 'j':
            var sound = new Audio('./audios/snare.wav');
            sound.play();
            break;
        case 'k':
            var sound = new Audio('./audios/tom.wav');
            sound.play();
            break;
        case 'l':
            var sound = new Audio('./audios/tink.wav');
            sound.play();
            break;

        default:
            pass
    }
}


function playAnimation(key){
    let playdiv = document.getElementById(key);
    playdiv.classList.add('playing');
    setTimeout(function(){
        playdiv.classList.remove('playing');
    }, 100);
}