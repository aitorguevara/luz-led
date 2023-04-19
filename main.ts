led.enable(false)
let LED = neopixel.create(DigitalPin.P4, 1, NeoPixelMode.RGB)
basic.forever(function () {
    LED.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(1000)
    LED.showColor(neopixel.colors(NeoPixelColors.Purple))
    basic.pause(1000)
})
