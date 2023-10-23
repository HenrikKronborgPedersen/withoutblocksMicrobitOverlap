// Change the program so that it is able to take inputs for two intervals: [a,b] and [c,d]. Endpoints should be positive and whole numbers.
// Write a function that determines if they overlap.
input.onButtonPressed(Button.A, function () {
    i += 1
    basic.showNumber(i)
})
function overlap (interval: any[]) {
    for (let indeks = 0; indeks <= 1; indeks++) {
        if (interval[indeks] == interval[2]) {
            overlappet = true
        }
        if (interval[indeks] == interval[3]) {
            overlappet = true
        }
    }
    if (overlappet) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(2000)
}
input.onButtonPressed(Button.AB, function () {
    overlap(interval)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    interval.push(i)
    i = 0
})
let i = 0
let overlappet = false
let interval: number[] = []
interval = []
let taeller = 0
overlappet = false
