let y = 0
let x = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function logo() {
    if (y == 0) {
        
        x = 0
        basic.showString("1-10")
        
        y = 1
    } else {
        
        x = 0
        basic.showString("1-6")
        
        y = 0
    }
    
})
input.onButtonPressed(Button.A, function pressA() {
    let index: number;
    if (y == 0) {
        
        x = randint(1, 6)
        for (index = 0; index < x; index++) {
            music.playTone(Note.D3, music.beat(90))
        }
    } else {
        
        x = randint(0, 10)
        for (index = 0; index < x; index++) {
            music.playTone(Note.D3, music.beat(90))
        }
    }
    
})
