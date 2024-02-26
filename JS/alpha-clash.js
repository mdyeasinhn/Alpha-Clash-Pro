// function play(){ 
//     //step 1: hidden the home screen.to hide the screen add the class hidden to the home section
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // step 2: remove the section
//     const playgroundSection = document.getElementById('playground');
//     playgroundSection.classList.remove('hidden');
// }

function handelerKeyboardButtonPress(event){
    const playerPress=event.key
    // console.log('playerPress',playerPress);
    //player is expected to place the mouse
    const currentAlphabetElement =document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();


    //check right or wrong key pressed
    if(playerPress  === expectedAlphabet){
        console.log('You get a point');
        //Update score
        //.1 get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore =parseInt(currentScoreText);
        console.log(currentScore);
        //.2 increase the current score
        const newScore= currentScore + 1;

        //.3 show the updated score
        currentScoreElement.innerText = newScore;

        //start a new round 
        removeBackgroundColorById(expectedAlphabet)
        continueGame();

    }else{
        console.log('You missed.you loss a life');

        //step-1: get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText=currentLifeElement.innerText;
        const currentLife=parseInt(currentLifeText);
        //step-2: reduce the current life number
        const newLife=currentLife-1;
        //step-3: display  update  the current life
        currentLifeElement.innerText=newLife
    }
    // console.log(currentAlphabetElement.innerText)
    
}

document.addEventListener('keyup',handelerKeyboardButtonPress);



function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet',alphabet);
    // set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement =document.getElementById('current-alphabet');
    currentAlphabetElement.innerText= alphabet;
    // set background color to alphabet
    setBackgroundColorById(alphabet)


}
function play(){
    hideElementById('home-screen');
    showElementById('playground');
    continueGame()

}