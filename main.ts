radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . # # # .
            `)
        kitronik_servo_lite.forward()
    }
    if (receivedNumber == 14) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showLeds(`
            . # # # .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        kitronik_servo_lite.backward()
    }
    if (receivedNumber == 12) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
        basic.showLeds(`
            . . # . .
            . # . . #
            # # # # #
            . # . . #
            . . # . .
            `)
        kitronik_servo_lite.left()
    }
    if (receivedNumber == 13) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.showLeds(`
            . . # . .
            # . . # .
            # # # # #
            # . . # .
            . . # . .
            `)
        kitronik_servo_lite.right()
    }
    if (receivedNumber == 15) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        kitronik_servo_lite.stop()
    }
    if (receivedNumber == 16) {
        strip.showRainbow(1, 360)
        basic.showLeds(`
            # # # # #
            # . # . #
            # # . # #
            # . # . #
            # # # # #
            `)
        kitronik_servo_lite.right()
        kitronik_servo_lite.backward()
        kitronik_servo_lite.left()
        kitronik_servo_lite.forward()
        kitronik_servo_lite.stop()
    }
})
let strip: neopixel.Strip = null
radio.setGroup(1)
strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
