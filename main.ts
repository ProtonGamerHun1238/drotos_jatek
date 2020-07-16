input.onButtonPressed(Button.A, function () {
    basic.showNumber(hozzaeres)
})
input.onButtonPressed(Button.AB, function () {
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    while (asd == 1) {
        hozzaeres = 0
    }
})
let asd = 0
let hozzaeres = 0
hozzaeres = 0
asd = 1
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        hozzaeres += 1
        basic.showIcon(IconNames.Skull)
        basic.pause(500)
    } else if (!(input.pinIsPressed(TouchPin.P1))) {
        basic.showIcon(IconNames.Happy)
    }
})
