// create 4 "buttons" of some kind
// color code those buttons
// make the buttons light up
// make the lights go in a random pattern that repeats with an extra light every turn after a user repeats the pattern by pressing the button
// when a user makes a mistake alert them that they lost and give them the option to try again


//make colors glow when clicked on
// function glowUp() {
//     var grabColor = document.getElementsByClassName('main-buttons')[0]
//     grabColor.addEventListener('click', function() {
//         grabColor.style.background = '#4682B4'
//          })
// }

var blueButton = document.getElementsByClassName('main-buttons')[0]
var redButton = document.getElementsByClassName('main-buttons')[1]
var greenButton = document.getElementsByClassName('main-buttons')[3]
var yellowButton = document.getElementsByClassName('main-buttons')[2]

function glowUp() {
    for (i = 0; i < 4; i++) {
    var grabColor = document.getElementsByClassName('main-buttons')[i]
    grabColor.addEventListener('click', function() {
        this.style.background = '#4682B4'
        setTimeout(function() {blueButton.style.background = 'blue'}, 1000)
        setTimeout(function() {redButton.style.background = 'red'}, 1000)
        setTimeout(function() {greenButton.style.background = 'green'}, 1000)
        setTimeout(function() {yellowButton.style.background = 'yellow'}, 1000)
        })
    }
}

glowUp()

// glowUp.setTimeout(hello, 1000)
// setTimeout(anonfunction(change color back to original), time in ms)
