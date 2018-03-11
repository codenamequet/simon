const blueButton = document.getElementsByClassName('main-buttons')[3]
const redButton = document.getElementsByClassName('main-buttons')[2]
const greenButton = document.getElementsByClassName('main-buttons')[1]
const yellowButton = document.getElementsByClassName('main-buttons')[0]
       
//object for running the game and rounds
const game = {
    round: 0,
    lights: ['blue', 'red', 'green', 'yellow'],
    lightSequence: [],
    userSequence: []
}

// turns lights off after set amount of time
const lightsOff = () => {
    setTimeout(() => {blueButton.style.opacity = '1'}, 500)
    setTimeout(() => {redButton.style.opacity = '1'}, 500)
    setTimeout(() => {greenButton.style.opacity = '1'}, 500)
    setTimeout(() => {yellowButton.style.opacity = '1'}, 500)
}

//lets simon select random lights
const glowUp = () => {
    let randomLight = (Math.floor(Math.random() * game.lights.length))
    let lightUp = document.getElementsByClassName('main-buttons')[randomLight]
    lightsOff()
    game.lightSequence.push(lightUp.classList[0])
    playLastSequence()
    console.log(game.lightSequence)
}

const handleUserChoice = () => {
    if (JSON.stringify(game.lightSequence) === JSON.stringify(game.userSequence)) {
        game.userSequence = []// clear userSequence array
        console.log(game.userSequence)
        game.round += 100
        console.log(game.round)
        glowUp()
        } else {
        alert('Wrong button! Game Over!')
        location.reload()
    }
}

//working on a funtion that gives user a set amount of time before ending game

let delay = () => {
    for (i = 0; i < 100; i ++) {
        setTimeout(() => {
            clickListener
        }, (i + 3) * 1000)
    }
}
// delay ()

//button runs glowUp to start the game
const startButton = () => {
    let start = document.getElementsByClassName('start-button')[0]
    start.addEventListener('click', () => {
        glowUp()
    })
}

startButton()

//button simply runs handleUserChoice for now
const endTurn = () => {
    let compare = document.getElementsByClassName('compare-button')[0]
    compare.addEventListener('click', () => {
        handleUserChoice()
    })
}

endTurn()

//make lights glow when clicked on
const clickListener = () => {
    for (i = 0; i < 4; i++) {
        let grabColor = document.getElementsByClassName('main-buttons')[i]
        grabColor.addEventListener('click', function() {
            this.style.opacity = '0.5'
            console.log('userInput', this, this.classList[0])
            game.userSequence.push(this.classList[0])//outputs color instead of class name
               lightsOff()
               scoreBoard()
           })
       }
}

clickListener()

//return the last lightSequence 
const playLastSequence = () => {
    for (let i = 0; i < game.lightSequence.length; i++) {
        const colors = {
             blue: blueButton,
             red:redButton,
             green: greenButton,
             yellow: yellowButton
        }
        //only replays the last light
        function lightUp () {
            setTimeout(function () {colors[game.lightSequence[i]].style.opacity = '0.5' 
            console.log('the result is ' + game.lightSequence[i])
            lightsOff()
        }, (i + 1) * 1000)
        }
        lightUp()
    }
}

const scoreBoard = () => {
    let score = document.getElementsByClassName('score')[0].textContent = `Score: ${game.round}`
}
