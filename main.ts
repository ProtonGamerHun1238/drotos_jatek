input.onButtonPressed(Button.A, function () {
    basic.showNumber(hozzaeres)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
let hozzaeres = 0
hozzaeres = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        hozzaeres += 1
        basic.showIcon(IconNames.Skull)
        basic.pause(1000)
    } else if (!(input.pinIsPressed(TouchPin.P1))) {
        basic.showIcon(IconNames.Happy)
    }
})
