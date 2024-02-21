// function play(){ 
//     //step 1: hidden the home screen.to hide the screen add the class hidden to the home section
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // step 2: remove the section
//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');
// }


function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet',alphabet)

}
function play(){
    hideElementById('home-screen');
    showElementById('playground');
    continueGame()

}