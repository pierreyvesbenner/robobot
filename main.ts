radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 8) {
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
        basic.showLeds(`
            . . # . .
            # . . # .
            # # # # #
            # . . # .
            . . # . .
            `)
        kitronik_servo_lite.right()
    }
})
radio.setGroup(1)
