function Doctor(name, department, operations){
    this.name = name
    this.department = department
    this.operations = operations
}

function Operation(patient, doctor, date, result, materials){
    this.patient = patient,
    this.doctor = doctor,
    this.date = date,
    this.result = result,
    this.materials = materials
}

function Materials(
    // bisturi, forbici, pinze, divaricatore, enterostati, clip, aghi, placche, bypass, chiodi, protesi, anestetico, sedativo
scalpel, scissors, forceps, retractor, enterostates, clips, needles, plates, bypass, nails, prosthesis, anesthetic, sedative){
    this.scalpel = scalpel,
    this.scissors = scissors,
    this.forceps = forceps,
    this.retractor = retractor
    // this.enterostates = enterostates,
    // this.clips = clips,
    // this.needles = needles,
    // this.plates = plates,
    // this.bypass = bypass,
    // this.nails = nails,
    // this.prosthesis = prosthesis,
    // this.anesthetic = anesthetic,
    // this.sedative = sedative
}

const DECESSO = "decesso"
const COMPLICAZIONI = "complicazioni"
const SUCCESSO = "successo"

const NEUROLOGIA = "Neurologia"
const ONCOLOGIA = "Oncologia"
const CARDIOLOGIA = "Cardiologia"

var dr1 = new Doctor("Mario", NEUROLOGIA, [5, 3, 2])
var dr2 = new Doctor("Luigi", ONCOLOGIA, [12, 7, 2])
var dr3 = new Doctor("Franco", CARDIOLOGIA, [23, 13, 10])
var dr4 = new Doctor("Gina", CARDIOLOGIA, [15, 8, 8])

var matOp1 = new Materials(4, 2, 3, 1)
var op1 = new Operation("paziente", dr1, new Date(2018, 0, 1), DECESSO, matOp1)

var matOp2 = new Materials(2, 3, 2, 0)
var op2 = new Operation("paziente", dr1, new Date(2018, 0, 1), COMPLICAZIONI, matOp2)

var matOp3 = new Materials(0, 1, 0, 0)
var op3 = new Operation("paziente", dr1, new Date(2018, 0, 1), SUCCESSO, matOp3)

var matOp4 = new Materials(2, 2, 3, 4)
var op4 = new Operation("paziente", dr1, new Date(2018, 0, 1), SUCCESSO, matOp4)

var matOp5 = new Materials(6, 5, 4, 1)
var op5 = new Operation("paziente", dr1, new Date(2018, 0, 1), SUCCESSO, matOp5)

var matOp6 = new Materials(8, 5, 4, 0)
var op6 = new Operation("paziente", dr1, new Date(2018, 0, 1), COMPLICAZIONI, matOp6)

var matOp7 = new Materials(2, 4, 2, 0)
var op7 = new Operation("paziente", dr2, new Date(2018, 0, 1), COMPLICAZIONI, matOp7)

var matOp8 = new Materials(2, 1, 2, 1)
var op8 = new Operation("paziente", dr2, new Date(2018, 0, 1), COMPLICAZIONI, matOp8)

var matOp9 = new Materials(2, 3, 4, 0)
var op9 = new Operation("paziente", dr2, new Date(2018, 0, 1), SUCCESSO, matOp9)

var matOp10 = new Materials(2, 5, 1, 1)
var op10 = new Operation("paziente", dr3, new Date(2018, 0, 1), COMPLICAZIONI, matOp10)

var matOp11 = new Materials(3, 2 , 3, 1)
var op11 = new Operation("paziente", dr3, new Date(2018, 0, 1), DECESSO, matOp11)

var matOp12 = new Materials(2, 2, 2, 0)
var op12 = new Operation("paziente", dr3, new Date(2018, 0, 1), DECESSO, matOp12)

var matOp13 = new Materials(2, 1, 1, 0)
var op13 = new Operation("paziente", dr3, new Date(2018, 0, 1), SUCCESSO, matOp13)

var matOp14 = new Materials(3, 2, 1, 0)
var op14 = new Operation("paziente", dr4, new Date(2018, 0, 1), SUCCESSO, matOp14)

var matOp15 = new Materials(4, 2, 1, 0)
var op15 = new Operation("paziente", dr4, new Date(2018, 0, 1), SUCCESSO, matOp15)

var matOp16 = new Materials(4, 2, 1, 0)
var op16 = new Operation("paziente", dr4, new Date(2017, 0, 1), SUCCESSO, matOp16)


var doctors = [dr1, dr2, dr3, dr4]
var oper = [op1, op2, op3, op4, op5, op6, op7, op8, op9, op10, op11, op12, op13, op14, op15, op16]


var d = document.getElementById("doctors")
var dp = document.getElementById("departments")
var m = document.getElementById("materials")

var graphics = [d, dp, m]


function nascondi(){
    for(let g of graphics){
        g.style.display = "none"
        console.log(g)
    }
}

function dgView(){
    for(let g of graphics){
        if(g == d)
            g.style.display = "block"
        else
            g.style.display = "none"
    }
}

function dpView(){
    for(let g of graphics){
        if(g == dp)
            g.style.display = "block"
        else
            g.style.display = "none"
    }
}

function mView(){
    for(let g of graphics){
        if(g == m)
            g.style.display = "block"
        else
            g.style.display = "none"
    }
}

nascondi()