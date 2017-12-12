// create 4 "buttons" of some kind
// color code those buttons
// make the buttons light up
// make the lights go in a random pattern that repeats with an extra light every turn after a user repeats the pattern by pressing the button
// when a user makes a mistake alert them that they lost and give them the option to try again


var blueButton = document.getElementsByClassName('main-buttons')[0]
var redButton = document.getElementsByClassName('main-buttons')[1]
var greenButton = document.getElementsByClassName('main-buttons')[3]
var yellowButton = document.getElementsByClassName('main-buttons')[2]

//make colors glow when clicked on
function userInput() {
    for (i = 0; i < 4; i++) {
    var grabColor = document.getElementsByClassName('main-buttons')[i]
    grabColor.addEventListener('click', function() {
        this.style.opacity = '0.5'
        setTimeout(function() {blueButton.style.opacity = '1'}, 500)
        setTimeout(function() {redButton.style.opacity = '1'}, 500)
        setTimeout(function() {greenButton.style.opacity = '1'}, 500)
        setTimeout(function() {yellowButton.style.opacity = '1'}, 500)
        })
    }
}

userInput()

// var random = Math.floor((Math.random() * 4) + 1)
var lightSequence = []

function glowUp () {
    for (i = 0; i < 100; i++) {
        var  randomColor = document.getElementsByClassName('main-buttons')[i]
        lightSequence = this.random //select a random button
        // setTimeout(function() {blueButton.style.opacity = '1'}, 500)
        // setTimeout(function() {redButton.style.opacity = '1'}, 500)
        // setTimeout(function() {greenButton.style.opacity = '1'}, 500)
        // setTimeout(function() {yellowButton.style.opacity = '1'}, 500)
        if (userInput !== lightSequence) {
            alert('Wrong button! Game Over.')
        }
    }
}

// while loop to loop through a randomize function to make items light up by their self.
// store every item that gets looped through in an empty array
// await user input before adding more items
// if user input !== value in array end loop

// opacity https://www.w3schools.com/jsref/prop_style_opacity.asp
// random numbers javascript & jquery book
