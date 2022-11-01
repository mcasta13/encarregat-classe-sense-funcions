input.onButtonPressed(Button.A, function () {
    encarregat = disponibles[randint(0, disponibles.length - 1)]
    itemm = disponibles.indexOf(encarregat)
    ocupats.push(itemm)
    basic.showString("" + (encarregat))
    eraser = disponibles.removeAt(itemm)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(ocupats.length)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(disponibles.length)
})
let eraser = ""
let itemm = 0
let encarregat = ""
let ocupats: number[] = []
let disponibles: string[] = []
let A1 = "Pau"
let A2 = "Laia"
let A3 = "Toni"
disponibles = [A1, A2, A3]
ocupats = []
basic.forever(function () {
	
})
