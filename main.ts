input.onPinPressed(TouchPin.P0, function () {
    led.unplot(x, y)
    y += -1
})
input.onButtonPressed(Button.A, function () {
    led.unplot(x, y)
    x += -1
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, y)
    x += 1
})
input.onPinPressed(TouchPin.P1, function () {
    led.unplot(x, y)
    y += 1
})
let y = 0
let x = 0
x = 0
y = 0
led.plot(x, y)
basic.forever(function () {
    led.plot(x, y)
})
