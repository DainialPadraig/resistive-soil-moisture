let moisture = 0
basic.forever(function () {
    moisture = pins.analogReadPin(AnalogPin.P1)
    basic.showNumber(moisture)
})
