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
    var lightUp = document.getElementsByClassName('main-buttons')[randomLight]
    lightUp.style.opacity = '0.5'
    lightsOff()
    game.lightSequence.push(lightUp.classList[0])
    console.log(game.lightSequence)
    // game.round ++
    // handleUserChoice()
    // console.log('this is round ' + game.round)
}
function handleUserChoice () { 
        console.log('this is round ' + game.round)
        if (JSON.stringify(game.lightSequence) === JSON.stringify(game.userSequence)) {
        game.userSequence = []// clear userSequence array
        console.log(game.userSequence)
        // glowUp()
        //run glowUp or light up lights again
        game.round ++
        console.log(game.round)
        //glowUp()
        //clear userSequence array, return lightSequence array and start glowUp again
        // stringify and compare whole array
        } else {
        console.log('You failed!')
        }
    }

function startButton () {
    let start = document.getElementsByClassName('start-button')[0]
    start.addEventListener('click', function() {
        glowUp()
        // handleUserChoice()
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

// return the last lightSequence 
function playLastSequence() {
    var reLight = game.lightSequence
    reLight.style.opacity = '0.5'
}
// for loop through lightSequence indexes target dom elements
//add a handleUserChoice function here

// If lightSequence = userSequence move on to the next round and run glow up again
// If lightSequence != userSequence give failure message
// after returning true clear both arrays before staring glowUp again
// make glowUp re-run it's array and then add 1 more to it
// function handleUserChoice () { 
//     for (i = 0; i < game.round; i++) {
//         console.log('this is round ' + game.round)
//         if (game.round === 1) {
//             return 
//         } else if (JSON.stringify(game.lightSequence) === JSON.stringify(game.userSequence)) {
//         game.userSequence.length = // clear userSequence array
//         console.log(game.userSequence)
//         // game.round ++
//         // console.log(game.round)
//         //glowUp()
//         //clear userSequence array, return lightSequence array and start glowUp again
//         // stringify and compare whole array
//         } else {
//         console.log('You failed!')
//         }
//     }
// }

// function handleUserChoice () {
//     if (game.lightSequence[i] === game.userSequence[i]) {
//         game.round ++
//         console.log(game.round++)
//         userSequence = []
//         console.log(userSequence)
//         //glowUp()
//     } else {
//         console.log('You failed!')
//     }
// }

// opacity https://www.w3schools.com/jsref/prop_style_opacity.asp
// random numbers javascript & jquery book
