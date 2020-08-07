speakPrevious();
function speakPrevious() {
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(window.value);
    synth.speak(utterThis);
}

getNewRandomColor();
function getNewRandomColor() {
    var myArray = ['red', 'DarkOrange', 'yellow', 'green', 'blue', 'purple'];
    var rand = myArray[Math.floor(Math.random() * myArray.length)]; document.getElementsByTagName("body")[0].style.backgroundColor = rand;
    var oldRand = rand;
    window.value = oldRand;
}