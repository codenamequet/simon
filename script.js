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
function lightsOff (index) {
    if (!index) {
        setTimeout(function() {blueButton.style.opacity = '1'}, 500)
        setTimeout(function() {redButton.style.opacity = '1'}, 500)
        setTimeout(function() {greenButton.style.opacity = '1'}, 500)
        setTimeout(function() {yellowButton.style.opacity = '1'}, 500)
    } else {
        setTimeout(function() {blueButton.style.opacity = '1'}, (500 * index))
        setTimeout(function() {redButton.style.opacity = '1'}, (500 * index))
        setTimeout(function() {greenButton.style.opacity = '1'}, (500 * index))
        setTimeout(function() {yellowButton.style.opacity = '1'}, (500 * index))
    }
}

// function lightsOff (light) {
//     for (var i = 0; i < game.lightSequence.length; i++) {
//         setTimeout(function() {light.style.opacity = '1'}, (500 * light.index))
//     }
// }

// var lightsOff2 = lightsOff(i)

//lets simon select random lights
function glowUp () {
    playLastSequence()
    lightsOff()
    let randomLight = (Math.floor(Math.random() * game.lights.length))
    var lightUp = document.getElementsByClassName('main-buttons')[randomLight]
    lightUp.style.opacity = '0.5'
    // lightsOff()
    game.lightSequence.push(lightUp.classList[0])
    console.log(game.lightSequence)
    // handleUserChoice()
}

function handleUserChoice () { 
        console.log('this is round ' + game.round)
        if (JSON.stringify(game.lightSequence) === JSON.stringify(game.userSequence)) {
        game.userSequence = []// clear userSequence array
        console.log(game.userSequence)
        glowUp()
        //run glowUp or light up lights again
        game.round ++
        console.log(game.round)
        //glowUp()
        //clear userSequence array, return lightSequence array and start glowUp again
        // stringify and compare whole array
        } else {
        alert('Wrong button! Game Over!')
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
    // lightsOff(game.lightSequence)
    for (i = 0; i < game.lightSequence.length; i++) {
        var reLight = game.lightSequence[i]
        console.log(game.lightSequence[i])
        var colors = {
             blue: blueButton,
             red: redButton,
             green: greenButton,
             yellow: yellowButton
        }
        colors[reLight].style.opacity = '0.5'
        lightTimeOut(i)
        //stagger time out between inexes of array by a second
    }
}
var timerStart = Date.now()
function lightTimeOut (i) {
    setTimeout(function () {
        console.log(game.lightSequence[i])
        console.log(`time of logging is ${Date.now()-timerStart} and i is ${i}`)
    }, 1000 + (3000 * i))
}
// function turnOff () {
//     for (i = 0; i < game.lightSequence.length; i++) {
        ( function (num) 
        {
            setTimeout(function () { console.log(num);}, 1000 + (3000 * num));
        }) (i);
//     }
// }
// var colors = {
//     blue: blueButton,
//     red: redButton,
//     green: greenButton,
//     yellow: yellowButton
// }
// for loop through lightSequence indexes target dom elements
//add a handleUserChoice function here

// opacity https://www.w3schools.com/jsref/prop_style_opacity.asp
// random numbers javascript & jquery book
