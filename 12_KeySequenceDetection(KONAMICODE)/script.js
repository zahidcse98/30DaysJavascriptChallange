const pressedArray = [];
const secretCode = 'zahidcse98';

window.addEventListener('keyup', (e)=> {
    console.log(e.key);
    pressedArray.push(e.key);
    pressedArray.splice(-secretCode.length -1, pressedArray.length - secretCode.length);
    if(pressedArray.join('').includes(secretCode)) {
        console.log('Ding!! Ding!!');
        cornify_add();
    }
    console.log(pressedArray);
})