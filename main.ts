input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
    music.playMelody("- - G A B C5 - - ", 130)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
    music.playMelody("A A A A - - - - ", 130)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        # . . . #
        `)
    music.playMelody("- B A G - - - - ", 130)
})
basic.forever(function () {
	
})
