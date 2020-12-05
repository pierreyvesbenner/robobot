radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        kitronik_servo_lite.driveForwards(100)
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
