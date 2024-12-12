def on_button_pressed_a():
    global p_pos_x
    if die == 0:
        basic.clear_screen()
        if p_pos_x == 2:
            p_pos_x += -2
        elif p_pos_x == 4:
            p_pos_x += -2
        else:
            pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global p_pos_y
    if die == 0:
        basic.clear_screen()
        if p_pos_y == 4:
            p_pos_y = 3
        else:
            p_pos_y = 4
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global p_pos_x
    if die == 0:
        basic.clear_screen()
        if p_pos_x == 2:
            p_pos_x += 2
        elif p_pos_x == 0:
            p_pos_x += 2
        else:
            pass
input.on_button_pressed(Button.B, on_button_pressed_b)

random = 0
die = 0
p_pos_x = 0
p_pos_y = 0
p_pos_y = 4
p_pos_x = 2
score = 0
die = 0

def on_every_interval():
    global random, die, score
    if die == 0:
        random = randint(0, 4)
        if random == 0:
            for index in range(20):
                basic.pause(50)
                led.toggle(0, 0)
            led.plot(0, 1)
            basic.pause(50)
            led.plot(0, 2)
            basic.pause(50)
            led.plot(0, 3)
            basic.pause(50)
            led.plot(0, 4)
            if p_pos_x == 0:
                die = 1
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
        elif random == 1:
            for index2 in range(20):
                basic.pause(50)
                led.toggle(2, 0)
            led.plot(2, 1)
            basic.pause(50)
            led.plot(2, 2)
            basic.pause(50)
            led.plot(2, 3)
            basic.pause(50)
            led.plot(2, 4)
            if p_pos_x == 2:
                die = 1
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
        elif random == 2:
            for index3 in range(20):
                basic.pause(50)
                led.toggle(4, 0)
            led.plot(4, 1)
            basic.pause(50)
            led.plot(4, 2)
            basic.pause(50)
            led.plot(4, 3)
            basic.pause(50)
            led.plot(4, 4)
            if p_pos_x == 4:
                die = 1
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
        elif random == 3:
            for index4 in range(20):
                basic.pause(50)
                led.toggle(0, 4)
            led.plot(1, 4)
            basic.pause(50)
            led.plot(2, 4)
            basic.pause(50)
            led.plot(3, 4)
            basic.pause(50)
            led.plot(4, 4)
            if p_pos_y == 4:
                die = 1
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
        else:
            for index5 in range(20):
                basic.pause(50)
                led.toggle(4, 3)
            led.plot(3, 3)
            basic.pause(50)
            led.plot(2, 3)
            basic.pause(50)
            led.plot(1, 3)
            basic.pause(50)
            led.plot(0, 3)
            if p_pos_x == 3:
                die = 1
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
        basic.pause(500)
loops.every_interval(1000, on_every_interval)

def on_forever():
    led.plot(p_pos_x, p_pos_y)
    if die == 1:
        print ("score:", score)
basic.forever(on_forever)
