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
    let randomLight = (Math.floor(Math.random() * game.lights.length))
    console.log(randomLight)
    var lightUp = document.getElementsByClassName('main-buttons')[randomLight]
    console.log(lightUp.classList[0])
    lightUp.style.opacity = '0.5'
    lightsOff()
    game.lightSequence.push(lightUp.classList[0])
    console.log(game.lightSequence)
    game.round ++
    console.log(game.round)
    console.log(checkArrays)
}

function startButton () {
    let start = document.getElementsByClassName('start-button')[0]
    start.addEventListener('click', function() {
        glowUp()
    })
    /// re write start.addEventListener('click', glowUp)
}

startButton()

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
        })
    }
}

clickListener()

//add a handleUserChoice function here

// If lightSequence = userSequence move on to the next round and run glow up again
// If lightSequence != userSequence give failure message
// after returning true clear both arrays before staring glowUp again
function handleUserChoice () { 
    for (i = 0 ; i < 100; i++) {
        if (game.lightSequence[i] === game.userSequence[i]) {
        game.round ++
        // clear userSequence array
        //glowUp()
        //clear userSequence array, return lightSequence array and start glowUp again
        } else {
        console.log('You failed!')
        }
    }
}
// glowUp()
    // in a for loop
    //  game.userSequence[i] === game.lightSequence[i]

//for loop through game.lights array when color is selected make it match up with button in the html and make that light glow


// click start button to start a round. May change this to equal runGame function
// var newGame = document.getElementsByClassName('start-button')[0] 
// newGame.addEventListener('click', function() {
//     console.log('work')
//     console.log(game.round)
//     console.log(game.lightSequence)
    //should probably stop after starting first round and first light sequence
//     console.log(game.userSequence)
//     if (game.lightSequence === game.userSequence) {
//         game.round ++
//         console.log('work')
//     }
// })

// function runGame () {
//     game.round
//     game.lightSequence
//     game.userSequence
//     if (game.lightSequence === game.userSequence) {
//         game.round ++
//     }
// }

//check out classList

// opacity https://www.w3schools.com/jsref/prop_style_opacity.asp
// random numbers javascript & jquery book
