/*
sequence our calls:
1. fn fade a light out (opacity: 0.5)
2. fn fade a light back in (opacity: 1)
3. currentStepInSequence:
    - call fadeLightOut
        - call fadeLightIn
            - increment sequence counter
            - call currentStepInSequence
4. Clean up commented out code
*/

var blueButton = document.getElementsByClassName('main-buttons')[0]
var redButton = document.getElementsByClassName('main-buttons')[1]
var greenButton = document.getElementsByClassName('main-buttons')[3]
var yellowButton = document.getElementsByClassName('main-buttons')[2]
       
//object for running the game and rounds
var game = {
    round: 0,
    lights: ['blue', 'red', 'green', 'yellow'],
    lightSequence: [],
    userSequence: []
}

// turns lights off after set amount of time
function lightsOff () {
    setTimeout(function() {blueButton.style.opacity = '1'}, 500)
    setTimeout(function() {redButton.style.opacity = '1'}, 500)
    setTimeout(function() {greenButton.style.opacity = '1'}, 500)
    setTimeout(function() {yellowButton.style.opacity = '1'}, 500)
}

//lets simon select random lights
function glowUp () {
    playLastSequence()
    let randomLight = (Math.floor(Math.random() * game.lights.length))
    var lightUp = document.getElementsByClassName('main-buttons')[randomLight]
    lightUp.style.opacity = '0.5'
    lightsOff()
    game.lightSequence.push(lightUp.classList[0])
    console.log(game.lightSequence)
    // handleUserChoice() // not running this b/c lightSequence != empty beggining userSequence 
}

//not running if game.round === 0 w/ glowUp() b/c it runs twice and then fails
function handleUserChoice () { 
        console.log('this is round ' + game.round)
        if (JSON.stringify(game.lightSequence) === JSON.stringify(game.userSequence)) {
        game.userSequence = []// clear userSequence array
        console.log(game.userSequence)
        // glowUp()
        //run glowUp or light up lights again
        game.round ++
        console.log(game.round)
        glowUp()
        //clear userSequence array, return lightSequence array and start glowUp again
        // stringify and compare whole array
        } else {
        alert('Wrong button! Game Over!')
        }
    }
    
//button runs glowUp...want it to run initial game glow
function startButton () {
    let start = document.getElementsByClassName('start-button')[0]
    start.addEventListener('click', () => {
        glowUp()
    })
    /// re write start.addEventListener('click', glowUp)
}

startButton()

//button simply runs handleUserChoice for now
function compareButton () {
    let compare = document.getElementsByClassName('compare-button')[0]
    compare.addEventListener('click', () => {
        handleUserChoice()
    })
}

compareButton()

//make lights glow when clicked on
function clickListener() {
    for (i = 0; i < 4; i++) {
     let grabColor = document.getElementsByClassName('main-buttons')[i]
     grabColor.addEventListener('click', function() {
         this.style.opacity = '0.5'
         console.log('userInput', this, this.classList[0])
         game.userSequence.push(this.classList[0])//outputs color instead of class name
            // game.userSequence.push(this) // push the choice into userchoices array
            // increment the round counter
            //turns glowing lights back to normal color
            lightsOff()
            scoreBoard()
        })
    }
}

clickListener()

// return the last lightSequence 
function playLastSequence() {
    for (i = 0; i < game.lightSequence.length; i++) {
        var reLight = game.lightSequence[i]
        console.log('this is reLight' + game.lightSequence[i])
        var colors = {
             blue: blueButton,
             red:redButton,
             green: greenButton,
             yellow: yellowButton
        }
        //only replays the last light
        function lightUp () {
            setTimeout(function() {colors[game.lightSequence[0]].style.opacity = '0.5'}, i * 500)
            setTimeout(function() {colors[game.lightSequence[1]].style.opacity = '0.5'}, i * 500)
            setTimeout(function() {colors[game.lightSequence[3]].style.opacity = '0.5'}, i * 500)
            setTimeout(function() {colors[game.lightSequence[2]].style.opacity = '0.5'}, i * 500)
        // colors[game.lightSequence[i]].style.opacity = '0.5'
        }
        lightUp()
        console.log('the resule of lightUp is ' + lightUp())
    }
}

function scoreBoard () {
    var score = document.getElementsByClassName('score')[0].textContent = game.round
}

// scoreBoard()
// opacity https://www.w3schools.com/jsref/prop_style_opacity.asp
// random numbers javascript & jquery book
