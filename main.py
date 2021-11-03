y = 0
x = 0 
def logo():
    if y == 0:
            global x
            x = 0
            basic.show_string("1-10")
            global y
            y = 1

    else:
            global x
            x = 0
            basic.show_string("1-6")
            global y
            y = 0
input.on_logo_event(TouchButtonEvent.PRESSED, logo)

def pressA():
    if y == 0:
        global x
        x = randint(1, 6)
        for index in range(x):                          
                            music.play_tone(Note.D3, music.beat(90))
                            
                            
    else:
        global x
        x = randint(0, 10)
        for index in range(x):
                            music.play_tone(Note.D3, music.beat(90))
                            

                            
                            

input.on_button_pressed(Button.A, pressA)



