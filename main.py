# Change the program so that it is able to take inputs for two intervals: [a,b] and [c,d]. Endpoints should be positive and whole numbers.
# Write a function that determines if they overlap.

def on_button_pressed_a():
    global i
    i += 1
    basic.show_number(i)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global i
    basic.clear_screen()
    interval.append(i)
    i = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

i = 0
interval: List[number] = []
interval = []

def on_forever():
    pass
basic.forever(on_forever)
