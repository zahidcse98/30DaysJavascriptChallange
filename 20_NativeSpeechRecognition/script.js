window.SpeechRecognition =window.webKitSpeechRecognition;

const recognition = new webkitSpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    console.log(e);
});

recognition.start();
