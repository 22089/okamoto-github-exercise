input.onGesture(Gesture.LogoUp, function () {
    led.unplot(x, y)
    y += 1
})
input.onGesture(Gesture.TiltLeft, function () {
    led.unplot(x, y)
    x += -1
})
input.onGesture(Gesture.TiltRight, function () {
    led.unplot(x, y)
    x += 1
})
input.onGesture(Gesture.LogoDown, function () {
    led.unplot(x, y)
    y += -1
})
let y = 0
let x = 0
x = 0
y = 0
let target_y = 0
led.plot(x, y)
basic.forever(function () {
    led.plot(x, y)
})
