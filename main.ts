servos.P0.setRange(10, 170)
basic.forever(function () {
    servos.P0.setAngle(pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    10,
    170
    ))
})
