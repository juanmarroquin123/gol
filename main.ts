input.onButtonPressed(Button.A, function () {
    PUNTOS = 0
    basic.showNumber(PUNTOS)
})
let PUNTOS = 0
radio.setGroup(10)
PUNTOS = 0
let MSG = 0
basic.showNumber(PUNTOS)
servos.P0.setAngle(90)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P2)) {
        PUNTOS += 1
        basic.showNumber(PUNTOS)
    }
})
