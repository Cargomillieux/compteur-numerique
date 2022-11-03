person = 0
def on_forever():
    global person
    if input.button_is_pressed(Button.B):
        person = person + 1
        basic.show_number(person)
    elif person:
        person = person

    if input.button_is_pressed(Button.A):
        person = person - 1
        if person < 0:
            person = 0
            basic.show_number(person)
        elif person:
            basic.show_number(person)
    elif person:
        person = person

    if person >= 10:
        basic.show_string("!")
    elif person:
        person = person   

    if input.button_is_pressed(Button.AB):
        person = 0
        basic.show_number(person)
    elif person:
        person = person

basic.forever(on_forever)