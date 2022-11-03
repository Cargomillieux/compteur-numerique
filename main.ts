let person = 0
basic.forever(function on_forever() {
    
    if (input.buttonIsPressed(Button.B)) {
        person = person + 1
        basic.showNumber(person)
    } else if (person) {
        person = person
    }
    
    if (input.buttonIsPressed(Button.A)) {
        person = person - 1
        if (person < 0) {
            person = 0
            basic.showNumber(person)
        } else if (person) {
            basic.showNumber(person)
        }
        
    } else if (person) {
        person = person
    }
    
    if (person >= 10) {
        basic.showString("!")
    } else if (person) {
        person = person
    }
    
    if (input.buttonIsPressed(Button.AB)) {
        person = 0
        basic.showNumber(person)
    } else if (person) {
        person = person
    }
    
})
