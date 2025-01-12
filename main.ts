input.onButtonPressed(Button.A, function () {
    if (die == 0) {
        basic.clearScreen()
        if (p_pos_x == 2) {
            p_pos_x += -2
        } else if (p_pos_x == 4) {
            p_pos_x += -2
        } else {
        	
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (die == 0) {
        basic.clearScreen()
        if (p_pos_y == 4) {
            p_pos_y = 3
        } else {
            p_pos_y = 4
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (die == 0) {
        basic.clearScreen()
        if (p_pos_x == 2) {
            p_pos_x += 2
        } else if (p_pos_x == 0) {
            p_pos_x += 2
        } else {
        	
        }
    }
})
let random = 0
let score = 0
let time = 0
let die = 0
let p_pos_x = 0
let p_pos_y = 0
p_pos_y = 4
p_pos_x = 2
let π = 3.14
loops.everyInterval(500, function () {
    time += 1
})
basic.forever(function () {
    led.plot(p_pos_x, p_pos_y)
    if (die == 1) {
        basic.clearScreen()
        basic.showString("score")
        basic.showNumber(score)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
        die = 0
        score = 0
        time = 0
    }
})
loops.everyInterval(1100 - time * 100, function () {
    if (die == 0) {
        random = randint(0, 4)
        if (random == 0) {
            for (let index = 0; index < 20; index++) {
                basic.pause(50)
                led.toggle(0, 0)
            }
            led.plot(0, 1)
            basic.pause(50)
            led.plot(0, 2)
            basic.pause(50)
            led.plot(0, 3)
            basic.pause(50)
            led.plot(0, 4)
            if (p_pos_x == 0) {
                die = 1
            }
            basic.pause(50)
            led.unplot(0, 1)
            basic.pause(50)
            led.unplot(0, 2)
            basic.pause(50)
            led.unplot(0, 3)
            basic.pause(50)
            led.unplot(0, 4)
            basic.pause(50)
            score += 1
        } else if (random == 1) {
            for (let index = 0; index < 20; index++) {
                basic.pause(50)
                led.toggle(2, 0)
            }
            led.plot(2, 1)
            basic.pause(50)
            led.plot(2, 2)
            basic.pause(50)
            led.plot(2, 3)
            basic.pause(50)
            led.plot(2, 4)
            if (p_pos_x == 2) {
                die = 1
            }
            basic.pause(50)
            led.unplot(2, 1)
            basic.pause(50)
            led.unplot(2, 2)
            basic.pause(50)
            led.unplot(2, 3)
            basic.pause(50)
            led.unplot(2, 4)
            basic.pause(50)
            score += 1
        } else if (random == 2) {
            for (let index = 0; index < 20; index++) {
                basic.pause(50)
                led.toggle(4, 0)
            }
            led.plot(4, 1)
            basic.pause(50)
            led.plot(4, 2)
            basic.pause(50)
            led.plot(4, 3)
            basic.pause(50)
            led.plot(4, 4)
            if (p_pos_x == 4) {
                die = 1
            }
            basic.pause(50)
            led.unplot(4, 1)
            basic.pause(50)
            led.unplot(4, 2)
            basic.pause(50)
            led.unplot(4, 3)
            basic.pause(50)
            led.unplot(4, 4)
            basic.pause(50)
            score += 1
        } else if (random == 3) {
            for (let index = 0; index < 20; index++) {
                basic.pause(50)
                led.toggle(0, 4)
            }
            led.plot(1, 4)
            basic.pause(50)
            led.plot(2, 4)
            basic.pause(50)
            led.plot(3, 4)
            basic.pause(50)
            led.plot(4, 4)
            if (p_pos_y == 4) {
                die = 1
            }
            basic.pause(50)
            led.unplot(1, 4)
            basic.pause(50)
            led.unplot(2, 4)
            basic.pause(50)
            led.unplot(3, 4)
            basic.pause(50)
            led.unplot(4, 4)
            basic.pause(50)
            score += 1
        } else {
            for (let index = 0; index < 20; index++) {
                basic.pause(50)
                led.toggle(4, 3)
            }
            led.plot(3, 3)
            basic.pause(50)
            led.plot(2, 3)
            basic.pause(50)
            led.plot(1, 3)
            basic.pause(50)
            led.plot(0, 3)
            if (p_pos_x == 3) {
                die = 1
            }
            basic.pause(50)
            led.unplot(3, 3)
            basic.pause(50)
            led.unplot(2, 3)
            basic.pause(50)
            led.unplot(1, 3)
            basic.pause(50)
            led.unplot(0, 3)
            basic.pause(50)
            score += 1
        }
        basic.pause(500)
    }
})
