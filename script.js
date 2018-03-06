var blueButton = document.getElementsByClassName('main-buttons')[3]
var redButton = document.getElementsByClassName('main-buttons')[2]
var greenButton = document.getElementsByClassName('main-buttons')[1]
var yellowButton = document.getElementsByClassName('main-buttons')[0]
       
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
    lightsOff()
    game.lightSequence.push(lightUp.classList[0])
    playLastSequence()
    console.log(game.lightSequence)
}

function handleUserChoice () { 
        console.log('this is round ' + game.round)
        if (JSON.stringify(game.lightSequence) === JSON.stringify(game.userSequence)) {
        game.userSequence = []// clear userSequence array
        console.log(game.userSequence)
        game.round += 100
        scoreBoard()
        console.log(game.round)
        glowUp()
        } else {
        alert('Wrong button! Game Over!')
        location.reload()
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
            lightsOff()
        })
    }
}

clickListener()

//return the last lightSequence 
function playLastSequence() {
    for (let i = 0; i < game.lightSequence.length; i++) {
        var colors = {
             blue: blueButton,
             red:redButton,
             green: greenButton,
             yellow: yellowButton
        }
        function lightUp () {
            setTimeout(function () {colors[game.lightSequence[i]].style.opacity = '0.5' 
            console.log('the result is ' + game.lightSequence[i])
            lightsOff()
        }, (i + 1) * 1000)
        }
        lightUp()
    }
}

function scoreBoard () {
    var score = document.getElementsByClassName('score')[0].textContent = `Score: ${game.round}`
}

// opacity https://www.w3schools.com/jsref/prop_style_opacity.asp
// random numbers javascript & jquery book
