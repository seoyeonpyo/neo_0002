let count = 0
let potentiometer = pins.analogReadPin(AnalogPin.P3)
let round_strip = neopixel.create(DigitalPin.P13, 45, NeoPixelMode.RGB)
let square_strip = neopixel.create(DigitalPin.P16, 64, NeoPixelMode.RGB)
round_strip.setBrightness(20)
square_strip.setBrightness(20)
round_strip.showColor(neopixel.colors(NeoPixelColors.Black))
square_strip.showColor(neopixel.colors(NeoPixelColors.Black))
basic.pause(100)
round_strip.showRainbow(1, 360)
square_strip.showRainbow(1, 360)
basic.forever(function () {
    serial.writeNumber(pins.analogReadPin(AnalogPin.P3))
    serial.writeLine("")
    if (pins.analogReadPin(AnalogPin.P3) > 500) {
        for (let index = 0; index <= 45; index++) {
            round_strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Orange))
            round_strip.show()
            basic.pause(200)
            round_strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Black))
            round_strip.show()
            basic.pause(200)
            count = index + 1
            if (count == 8) {
                count = 0
            }
            round_strip.setPixelColor(count, neopixel.colors(NeoPixelColors.White))
            round_strip.show()
            basic.pause(100)
        }
    }
})
