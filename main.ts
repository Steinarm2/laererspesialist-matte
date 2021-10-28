input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    tabell[Index] = input.temperature()
    Index += 1
})
input.onButtonPressed(Button.B, function () {
    serial.writeNumbers(tabell)
})
let Index = 0
let tabell: number[] = []
tabell = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
Index = 0
basic.forever(function () {
    if (Index == 10) {
        basic.showString("Minne Fullt ")
    }
})
