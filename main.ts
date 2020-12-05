radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        kitronik_servo_lite.driveBackwards(10)
        basic.showLeds(`
            # # . # #
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
radio.setGroup(1)
