function Patient(name, operationsList) {
    this.name = name,
    this.operationsList = operationsList
}

function Doctor(name, department, operations) {
    this.name = name
    this.department = department
    this.operations = operations
}

function Operation(doctor, date, result, materials) {
    this.doctor = doctor,
    this.date = date,
    this.result = result,
    this.materials = materials
}

function Materials(
    scalpel, scissors, forceps, retractor) {
    this.scalpel = scalpel,
    this.scissors = scissors,
    this.forceps = forceps,
    this.retractor = retractor
}

const DEATH = "death"
const COMPLICATIONS = "complications"
const SUCCESS = "success"

const CARDIOLOGY = "cardiology"
const NEUROLOGY = "neurology"
const ONCOLOGY = "oncology"
const OPHTHALMOLOGY = "ophthalmology"
const PEDIATRICS = "pediatrics"
const GENERAL = "general"
const ORTHOPEDICS = "orthopedics"

var dr1 = new Doctor("Mario", NEUROLOGY, [])
var dr2 = new Doctor("Luigi", ONCOLOGY, [])
var dr3 = new Doctor("Peach", CARDIOLOGY, [])
var dr4 = new Doctor("Todette", PEDIATRICS, [])
var dr5 = new Doctor("Wario", NEUROLOGY, [])
var dr6 = new Doctor("Waluigi", ONCOLOGY, [])
var dr7 = new Doctor("Principessa Daisy", ONCOLOGY, [])
var dr8 = new Doctor("Yoshi", GENERAL, [])
var dr9 = new Doctor("Strutzi", ORTHOPEDICS, [])
var dr10 = new Doctor("Toad", OPHTHALMOLOGY, [])
var dr11 = new Doctor("Donkey Kong", GENERAL, [])
var dr12 = new Doctor("Diddy Kong", PEDIATRICS, [])
var dr13 = new Doctor("Rosalinda", GENERAL, [])
var dr14 = new Doctor("Sfavillotto", NEUROLOGY, [])
var dr15 = new Doctor("Bowser Jr", CARDIOLOGY, [])
var dr16 = new Doctor("Re Boo", ONCOLOGY, [])
var dr17 = new Doctor("Wart", ONCOLOGY, [])
var dr18 = new Doctor("Professor Strambic", GENERAL, [])
var dr19 = new Doctor("Pipino Piranha ", GENERAL, [])
var dr20 = new Doctor("Daisy", GENERAL, [])
var dr21 = new Doctor("Bowser", ORTHOPEDICS, [])
var dr22 = new Doctor("Kamek", OPHTHALMOLOGY, [])
var dr23 = new Doctor("Mastro Toad", ORTHOPEDICS, [])
var dr24 = new Doctor("Magikoopa", OPHTHALMOLOGY, [])
var dr25 = new Doctor("Pesce Smack", PEDIATRICS, [])
var dr26 = new Doctor("Tantatalpa", GENERAL, [])
var dr27 = new Doctor("Tartosso", CARDIOLOGY, [])
var dr28 = new Doctor("Pianta Piranha", OPHTHALMOLOGY, [])
var dr29 = new Doctor("Torcibruco", GENERAL, [])
var dr30 = new Doctor("Snifit", PEDIATRICS, [])

var matOp1 = new Materials(4, 2, 3, 1)
var matOp2 = new Materials(2, 3, 2, 0)
var matOp3 = new Materials(0, 1, 0, 0)
var matOp4 = new Materials(2, 2, 3, 4)
var matOp5 = new Materials(6, 5, 4, 1)
var matOp6 = new Materials(8, 5, 4, 0)
var matOp7 = new Materials(2, 4, 2, 0)
var matOp8 = new Materials(2, 1, 2, 1)
var matOp9 = new Materials(2, 3, 4, 0)
var matOp10 = new Materials(2, 5, 1, 1)
var matOp11 = new Materials(3, 2, 3, 1)
var matOp12 = new Materials(2, 2, 2, 0)
var matOp13 = new Materials(2, 1, 1, 0)
var matOp14 = new Materials(3, 2, 1, 0)
var matOp15 = new Materials(4, 2, 1, 0)
var matOp16 = new Materials(4, 2, 1, 0)
var matOp17 = new Materials(3, 2, 3, 1)
var matOp18 = new Materials(2, 2, 2, 0)
var matOp19 = new Materials(2, 1, 1, 0)
var matOp20 = new Materials(3, 2, 1, 0)
var matOp21 = new Materials(4, 2, 1, 0)
var matOp22 = new Materials(4, 2, 1, 0)
var matOp23 = new Materials(0, 1, 0, 0)
var matOp24 = new Materials(2, 2, 3, 4)
var matOp25 = new Materials(6, 5, 4, 1)
var matOp26 = new Materials(8, 5, 4, 0)
var matOp27 = new Materials(2, 4, 2, 0)
var matOp28 = new Materials(2, 1, 2, 1)
var matOp29 = new Materials(2, 3, 4, 0)
var matOp30 = new Materials(2, 5, 1, 1)
var matOp31 = new Materials(4, 2, 1, 0)
var matOp32 = new Materials(4, 2, 1, 0)
var matOp33 = new Materials(0, 1, 0, 0)
var matOp34 = new Materials(2, 2, 3, 4)
var matOp35 = new Materials(6, 5, 4, 1)
var matOp36 = new Materials(8, 5, 4, 0)
var matOp37 = new Materials(2, 4, 2, 0)
var matOp38 = new Materials(2, 1, 2, 1)
var matOp39 = new Materials(2, 3, 4, 0)
var matOp40 = new Materials(3, 2, 1, 0)
var matOp41 = new Materials(4, 2, 1, 0)
var matOp42 = new Materials(4, 2, 1, 0)
var matOp43 = new Materials(0, 1, 0, 0)
var matOp44 = new Materials(2, 2, 3, 4)
var matOp45 = new Materials(6, 5, 4, 1)
var matOp46 = new Materials(8, 5, 4, 0)
var matOp47 = new Materials(2, 4, 2, 0)
var matOp48 = new Materials(2, 1, 2, 1)
var matOp49 = new Materials(2, 3, 4, 0)
var matOp50 = new Materials(3, 2, 1, 0)
var matOp51 = new Materials(4, 2, 1, 0)
var matOp52 = new Materials(4, 2, 1, 0)
var matOp53 = new Materials(0, 1, 0, 0)
var matOp54 = new Materials(2, 2, 3, 4)
var matOp55 = new Materials(6, 5, 4, 1)
var matOp56 = new Materials(8, 5, 4, 0)
var matOp57 = new Materials(2, 4, 2, 0)
var matOp58 = new Materials(2, 1, 2, 1)
var matOp59 = new Materials(2, 3, 4, 0)
var matOp60 = new Materials(3, 2, 1, 0)
var matOp61 = new Materials(4, 2, 1, 0)
var matOp62 = new Materials(4, 2, 1, 0)
var matOp63 = new Materials(0, 1, 0, 0)
var matOp64 = new Materials(2, 2, 3, 4)
var matOp65 = new Materials(6, 5, 4, 1)
var matOp66 = new Materials(8, 5, 4, 0)
var matOp67 = new Materials(2, 4, 2, 0)
var matOp68 = new Materials(2, 1, 2, 1)
var matOp69 = new Materials(2, 3, 4, 0)
var matOp70 = new Materials(3, 2, 1, 0)
var matOp71 = new Materials(4, 2, 1, 0)
var matOp72 = new Materials(4, 2, 1, 0)
var matOp73 = new Materials(0, 1, 0, 0)
var matOp74 = new Materials(2, 2, 3, 4)
var matOp75 = new Materials(6, 5, 4, 1)
var matOp76 = new Materials(8, 5, 4, 0)
var matOp77 = new Materials(2, 4, 2, 0)
var matOp78 = new Materials(2, 1, 2, 1)
var matOp79 = new Materials(2, 3, 4, 0)
var matOp80 = new Materials(3, 2, 1, 0)
var matOp81 = new Materials(4, 2, 1, 0)
var matOp82 = new Materials(4, 2, 1, 0)
var matOp83 = new Materials(0, 1, 0, 0)
var matOp84 = new Materials(2, 2, 3, 4)
var matOp85 = new Materials(6, 5, 4, 1)
var matOp86 = new Materials(8, 5, 4, 0)
var matOp87 = new Materials(2, 4, 2, 0)
var matOp88 = new Materials(2, 1, 2, 1)
var matOp89 = new Materials(2, 3, 4, 0)
var matOp90 = new Materials(3, 2, 1, 0)
var matOp91 = new Materials(4, 2, 1, 0)
var matOp92 = new Materials(4, 2, 1, 0)
var matOp93 = new Materials(0, 1, 0, 0)
var matOp94 = new Materials(2, 2, 3, 4)
var matOp95 = new Materials(6, 5, 4, 1)
var matOp96 = new Materials(8, 5, 4, 0)
var matOp97 = new Materials(2, 4, 2, 0)
var matOp98 = new Materials(2, 1, 2, 1)
var matOp99 = new Materials(2, 3, 4, 0)
var matOp100 = new Materials(3, 2, 1, 0)
var matOp101 = new Materials(4, 2, 1, 0)
var matOp102 = new Materials(4, 2, 1, 0)
var matOp103 = new Materials(0, 1, 0, 0)
var matOp104 = new Materials(2, 2, 3, 4)
var matOp105 = new Materials(6, 5, 4, 1)
var matOp106 = new Materials(8, 5, 4, 0)
var matOp107 = new Materials(2, 4, 2, 0)
var matOp108 = new Materials(2, 1, 2, 1)
var matOp109 = new Materials(2, 3, 4, 0)
var matOp110 = new Materials(3, 2, 1, 0)
var matOp111 = new Materials(4, 2, 1, 0)
var matOp112 = new Materials(4, 2, 1, 0)
var matOp113 = new Materials(0, 1, 0, 0)
var matOp114 = new Materials(2, 2, 3, 4)
var matOp115 = new Materials(6, 5, 4, 1)
var matOp116 = new Materials(8, 5, 4, 0)
var matOp117 = new Materials(2, 4, 2, 0)
var matOp118 = new Materials(2, 1, 2, 1)
var matOp119 = new Materials(2, 3, 4, 0)
var matOp120 = new Materials(3, 2, 1, 0)
var matOp121 = new Materials(4, 2, 1, 0)
var matOp122 = new Materials(4, 2, 1, 0)
var matOp123 = new Materials(0, 1, 0, 0)
var matOp124 = new Materials(2, 2, 3, 4)
var matOp125 = new Materials(6, 5, 4, 1)
var matOp126 = new Materials(8, 5, 4, 0)
var matOp127 = new Materials(2, 4, 2, 0)
var matOp128 = new Materials(2, 1, 2, 1)
var matOp129 = new Materials(2, 3, 4, 0)

var op1 = new Operation(dr1, new Date(2018, 10, 1), DEATH, matOp1)
var op2 = new Operation(dr1, new Date(2018, 0, 1), COMPLICATIONS, matOp2)
var op3 = new Operation(dr1, new Date(2018, 0, 1), SUCCESS, matOp3)
var op4 = new Operation(dr1, new Date(2018, 0, 1), SUCCESS, matOp4)
var op5 = new Operation(dr1, new Date(2018, 0, 1), SUCCESS, matOp5)
var op6 = new Operation(dr1, new Date(2018, 0, 1), COMPLICATIONS, matOp6)
var op7 = new Operation(dr2, new Date(2018, 0, 1), COMPLICATIONS, matOp7)
var op8 = new Operation(dr2, new Date(2018, 0, 1), COMPLICATIONS, matOp8)
var op9 = new Operation(dr2, new Date(2018, 0, 1), SUCCESS, matOp9)
var op10 = new Operation(dr3, new Date(2018, 0, 1), COMPLICATIONS, matOp10)
var op11 = new Operation(dr3, new Date(2018, 10, 1), DEATH, matOp11)
var op12 = new Operation(dr3, new Date(2018, 0, 1), COMPLICATIONS, matOp12)
var op13 = new Operation(dr3, new Date(2018, 0, 1), SUCCESS, matOp13)
var op14 = new Operation(dr4, new Date(2018, 0, 1), SUCCESS, matOp14)
var op15 = new Operation(dr4, new Date(2018, 0, 1), SUCCESS, matOp15)
var op16 = new Operation(dr4, new Date(2017, 0, 1), SUCCESS, matOp16)
var op17 = new Operation(dr2, new Date(2018, 0, 1), COMPLICATIONS, matOp17)
var op18 = new Operation(dr2, new Date(2018, 0, 1), COMPLICATIONS, matOp18)
var op19 = new Operation(dr2, new Date(2018, 0, 1), SUCCESS, matOp19)
var op20 = new Operation(dr4, new Date(2018, 5, 25), SUCCESS, matOp20)
var op21 = new Operation(dr4, new Date(2018, 5, 25), SUCCESS, matOp21)
var op22 = new Operation(dr4, new Date(2018, 5, 25), SUCCESS, matOp22)
var op23 = new Operation(dr5, new Date(2018, 5, 25), COMPLICATIONS, matOp23)
var op24 = new Operation(dr5, new Date(2018, 5, 25), COMPLICATIONS, matOp24)
var op25 = new Operation(dr5, new Date(2018, 5, 25), COMPLICATIONS, matOp25)
var op26 = new Operation(dr5, new Date(2018, 5, 25), SUCCESS, matOp26)
var op27 = new Operation(dr6, new Date(2018, 5, 25), SUCCESS, matOp27)
var op28 = new Operation(dr6, new Date(2018, 5, 25), SUCCESS, matOp28)
var op29 = new Operation(dr6, new Date(2018, 5, 25), COMPLICATIONS, matOp29)
var op30 = new Operation(dr6, new Date(2018, 5, 25), SUCCESS, matOp30)
var op31 = new Operation(dr6, new Date(2017, 6, 13), SUCCESS, matOp31)
var op32 = new Operation(dr7, new Date(2018, 10, 13), DEATH, matOp32)
var op33 = new Operation(dr7, new Date(2017, 6, 13), COMPLICATIONS, matOp33)
var op34 = new Operation(dr7, new Date(2018, 10, 13), DEATH, matOp34)
var op35 = new Operation(dr8, new Date(2017, 6, 13), SUCCESS, matOp35)
var op36 = new Operation(dr8, new Date(2017, 6, 13), SUCCESS, matOp36)
var op37 = new Operation(dr8, new Date(2017, 6, 13), SUCCESS, matOp37)
var op38 = new Operation(dr8, new Date(2017, 2, 3), SUCCESS, matOp38)
var op39 = new Operation(dr8, new Date(2017, 2, 3), COMPLICATIONS, matOp39)
var op40 = new Operation(dr9, new Date(2017, 2, 3), SUCCESS, matOp40)
var op41 = new Operation(dr9, new Date(2017, 2, 3), COMPLICATIONS, matOp41)
var op42 = new Operation(dr9, new Date(2017, 2, 3), SUCCESS, matOp42)
var op43 = new Operation(dr10, new Date(2017, 2, 3), SUCCESS, matOp43)
var op44 = new Operation(dr10, new Date(2017, 2, 3), COMPLICATIONS, matOp44)
var op45 = new Operation(dr10, new Date(2017, 2, 3), SUCCESS, matOp45)
var op46 = new Operation(dr10, new Date(2017, 2, 3), COMPLICATIONS, matOp46)
var op47 = new Operation(dr10, new Date(2017, 2, 3), COMPLICATIONS, matOp47)
var op48 = new Operation(dr10, new Date(2017, 1, 7), COMPLICATIONS, matOp48)
var op49 = new Operation(dr11, new Date(2017, 1, 7), SUCCESS, matOp49)
var op50 = new Operation(dr11, new Date(2017, 1, 7), SUCCESS, matOp50)
var op51 = new Operation(dr11, new Date(2017, 1, 7), SUCCESS, matOp51)
var op52 = new Operation(dr12, new Date(2017, 0, 7), SUCCESS, matOp52)
var op53 = new Operation(dr12, new Date(2017, 0, 13), SUCCESS, matOp53)
var op54 = new Operation(dr12, new Date(2017, 0, 13), COMPLICATIONS, matOp54)
var op55 = new Operation(dr13, new Date(2017, 0, 13), COMPLICATIONS, matOp55)
var op56 = new Operation(dr13, new Date(2017, 0, 13), COMPLICATIONS, matOp56)
var op57 = new Operation(dr13, new Date(2016, 3, 15), SUCCESS, matOp57)
var op58 = new Operation(dr14, new Date(2016, 3, 15), SUCCESS, matOp58)
var op59 = new Operation(dr14, new Date(2016, 3, 15), COMPLICATIONS, matOp59)
var op60 = new Operation(dr14, new Date(2016, 3, 15), SUCCESS, matOp60)
var op61 = new Operation(dr15, new Date(2016, 3, 15), COMPLICATIONS, matOp61)
var op62 = new Operation(dr15, new Date(2016, 3, 15), COMPLICATIONS, matOp62)
var op63 = new Operation(dr15, new Date(2016, 7, 25), SUCCESS, matOp63)
var op64 = new Operation(dr16, new Date(2016, 7, 25), COMPLICATIONS, matOp64)
var op65 = new Operation(dr16, new Date(2016, 7, 25), COMPLICATIONS, matOp65)
var op66 = new Operation(dr16, new Date(2016, 7, 25), SUCCESS, matOp66)
var op67 = new Operation(dr17, new Date(2016, 7, 25), SUCCESS, matOp67)
var op68 = new Operation(dr17, new Date(2016, 7, 25), SUCCESS, matOp68)
var op69 = new Operation(dr17, new Date(2016, 7, 15), COMPLICATIONS, matOp69)
var op70 = new Operation(dr18, new Date(2016, 7, 8), COMPLICATIONS, matOp70)
var op71 = new Operation(dr18, new Date(2016, 7, 8), SUCCESS, matOp71)
var op72 = new Operation(dr18, new Date(2016, 3, 8), COMPLICATIONS, matOp72)
var op73 = new Operation(dr19, new Date(2016, 3, 8), SUCCESS, matOp73)
var op74 = new Operation(dr19, new Date(2016, 3, 8), SUCCESS, matOp74)
var op75 = new Operation(dr19, new Date(2016, 3, 8), SUCCESS, matOp75)
var op76 = new Operation(dr20, new Date(2016, 3, 15), SUCCESS, matOp76)
var op77 = new Operation(dr20, new Date(2016, 3, 15), SUCCESS, matOp77)
var op78 = new Operation(dr20, new Date(2016, 3, 15), SUCCESS, matOp78)
var op79 = new Operation(dr21, new Date(2018, 10, 4), DEATH, matOp79)
var op80 = new Operation(dr21, new Date(2016, 11, 4), COMPLICATIONS, matOp80)
var op81 = new Operation(dr21, new Date(2016, 11, 4), COMPLICATIONS, matOp81)
var op82 = new Operation(dr22, new Date(2016, 11, 4), COMPLICATIONS, matOp82)
var op83 = new Operation(dr22, new Date(2016, 11, 4), COMPLICATIONS, matOp83)
var op84 = new Operation(dr22, new Date(2016, 11, 4), SUCCESS, matOp84)
var op85 = new Operation(dr23, new Date(2015, 6, 18), COMPLICATIONS, matOp85)
var op86 = new Operation(dr23, new Date(2015, 6, 18), SUCCESS, matOp86)
var op87 = new Operation(dr23, new Date(2015, 6, 18), SUCCESS, matOp87)
var op88 = new Operation(dr24, new Date(2015, 6, 18), SUCCESS, matOp88)
var op89 = new Operation(dr24, new Date(2015, 6, 8), SUCCESS, matOp89)
var op90 = new Operation(dr24, new Date(2015, 6, 8), COMPLICATIONS, matOp90)
var op91 = new Operation(dr25, new Date(2015, 6, 8), SUCCESS, matOp91)
var op92 = new Operation(dr25, new Date(2015, 6, 8), SUCCESS, matOp92)
var op93 = new Operation(dr25, new Date(2015, 6, 8), SUCCESS, matOp93)
var op94 = new Operation(dr26, new Date(2015, 6, 8), SUCCESS, matOp94)
var op95 = new Operation(dr26, new Date(2015, 6, 8), SUCCESS, matOp95)
var op96 = new Operation(dr26, new Date(2018, 9, 8), DEATH, matOp96)
var op97 = new Operation(dr27, new Date(2015, 9, 10), SUCCESS, matOp97)
var op98 = new Operation(dr27, new Date(2015, 9, 10), SUCCESS, matOp98)
var op99 = new Operation(dr27, new Date(2015, 9, 10), SUCCESS, matOp99)
var op100 = new Operation(dr28, new Date(2017, 9, 27), COMPLICATIONS, matOp100)
var op101 = new Operation(dr28, new Date(2017, 9, 27), COMPLICATIONS, matOp101)
var op102 = new Operation(dr28, new Date(2018, 9, 27), DEATH, matOp102)
var op103 = new Operation(dr29, new Date(2017, 2, 27), COMPLICATIONS, matOp103)
var op104 = new Operation(dr29, new Date(2017, 2, 23), COMPLICATIONS, matOp104)
var op105 = new Operation(dr29, new Date(2017, 2, 23), SUCCESS, matOp105)
var op106 = new Operation(dr30, new Date(2017, 2, 23), COMPLICATIONS, matOp106)
var op107 = new Operation(dr30, new Date(2017, 2, 13), COMPLICATIONS, matOp107)
var op108 = new Operation(dr30, new Date(2017, 2, 13), SUCCESS, matOp108)
var op109 = new Operation(dr30, new Date(2017, 2, 13), SUCCESS, matOp109)
var op110 = new Operation(dr30, new Date(2017, 7, 13), SUCCESS, matOp110)
var op111 = new Operation(dr30, new Date(2017, 7, 17), COMPLICATIONS, matOp111)
var op112 = new Operation(dr6, new Date(2017, 7, 17), COMPLICATIONS, matOp112)
var op113 = new Operation(dr6, new Date(2017, 7, 1), SUCCESS, matOp113)
var op114 = new Operation(dr5, new Date(2017, 7, 7), SUCCESS, matOp114)
var op115 = new Operation(dr5, new Date(2018, 7, 7), SUCCESS, matOp115)
var op116 = new Operation(dr8, new Date(2018, 7, 5), SUCCESS, matOp116)
var op117 = new Operation(dr8, new Date(2018, 7, 5), SUCCESS, matOp117)
var op118 = new Operation(dr7, new Date(2018, 7, 5), DEATH, matOp118)
var op119 = new Operation(dr7, new Date(2018, 7, 5), SUCCESS, matOp119)
var op120 = new Operation(dr17, new Date(2018, 1, 15), SUCCESS, matOp120)
var op121 = new Operation(dr17, new Date(2018, 1, 15), SUCCESS, matOp121)
var op122 = new Operation(dr17, new Date(2018, 1, 15), SUCCESS, matOp122)
var op123 = new Operation(dr20, new Date(2018, 4, 1), COMPLICATIONS, matOp123)
var op124 = new Operation(dr20, new Date(2018, 4, 7), COMPLICATIONS, matOp124)
var op125 = new Operation(dr10, new Date(2018, 4, 7), COMPLICATIONS, matOp125)
var op126 = new Operation(dr1, new Date(2018, 4, 7), SUCCESS, matOp126)
var op127 = new Operation(dr1, new Date(2018, 4, 7), SUCCESS, matOp127)
var op128 = new Operation(dr6, new Date(2018, 4, 7), COMPLICATIONS, matOp128)
var op129 = new Operation(dr6, new Date(2018, 4, 7), SUCCESS, matOp129)

var p1 = new Patient("Thomas Wayne", [op2, op8, op17, op1])
var p2 = new Patient("Martha Wayne", [op3, op4, op19, op38, op48, op11])
var p3 = new Patient("Aquaman", [op5, op56, op32])
var p4 = new Patient("Atomo", [op34])
var p5 = new Patient("Reflex", [op6, op10, op45, op79])
var p6 = new Patient("Dottor Fato", [op78, op7, op9, op96])
var p7 = new Patient("Fabbricante di Bambole", [op12, op13, op14, op15, op102])
var p8 = new Patient("Flah Nero", [op16, op18, op118])
var p9 = new Patient("Arrow", [op20, op21, op31, op43, op63, op72, op71])
var p10 = new Patient("Cappuccio Rosso", [op22, op23, op55])
var p11 = new Patient("Carmine Falcone", [op35, op36, op37, op59, op54, op74, op75])
var p12 = new Patient("Catwoman", [op26, op27])
var p13 = new Patient("Clayface", [op25, op49, op67, op76, op84, op85, op88])
var p14 = new Patient("Deadshot", [op94, op95, op97, op100])
var p15 = new Patient("Pinguino", [op107, op101, op103, op104])
var p16 = new Patient("Enigmista", [op28, op29, op30])
var p17 = new Patient("James Gordon", [op33, op39, op40, op123, op124])
var p18 = new Patient("Joker", [op111, op112, op113, op117, op127])
var p19 = new Patient("Miles Clancy O'Hara", [op121, op50, op60, op68])
var p20 = new Patient("Poison Ivy", [op41, op42, op44, op46])
var p21 = new Patient("Ra's al Ghul", [op47, op51, op52, op53])
var p22 = new Patient("Harley Quinn", [op129, op128, op126])
var p23 = new Patient("Jimmy Olsen", [op114, op115, op116, op119])
var p24 = new Patient("Kara Zor-El", [op122, op125, op120])
var p25 = new Patient("Clark Kent", [op57, op58, op61])
var p26 = new Patient("Lex Luthor", [op62, op64, op65, op66, op69])
var p27 = new Patient("Mister Mxyzptlk", [op70, op73])
var p28 = new Patient("GENERAL Zod", [op77, op80, op90, op89, op99])
var p29 = new Patient("Perry White", [op87, op86, op83])
var p30 = new Patient("Dottor Cyber", [op81, op82, op91, op110])
var p31 = new Patient("Nemesis", [op92, op93, op98, op108])
var p32 = new Patient("Wonder Woman", [op109, op106, op105, op24])

var patients = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, 
        p11, p12, p13, p14, p15, p16, p17, p18, p19, p20,
        p21, p22, p23, p24, p25, p26, p27, p28, p29, p30, p31, p32]

var d = document.getElementById("doctors")
var dp = document.getElementById("departments")
var m = document.getElementById("materials")
var graphics = [d, dp, m]

var nav_doctors = document.getElementById("nav-doc")
var nav_department = document.getElementById("nav-dep")
var nav_departments_car = document.getElementById("nav-dep-car")
var nav_departments_neu = document.getElementById("nav-dep-neu")
var nav_departments_onco = document.getElementById("nav-dep-onco")
var nav_departments_oph = document.getElementById("nav-dep-oph")
var nav_departments_ped = document.getElementById("nav-dep-ped")
var nav_departments_gen = document.getElementById("nav-dep-gen")
var nav_departments_or = document.getElementById("nav-dep-or")
var nav_departments = [
        nav_department, 
        nav_departments_car,
        nav_departments_neu,
        nav_departments_onco,
        nav_departments_oph,
        nav_departments_ped,
        nav_departments_gen,
        nav_departments_or
    ]
var nav_materials = document.getElementById("nav-mat")

nav_doctors.onclick = function() { ViewSection('doctors') }
for(let nav_li of nav_departments){
    nav_li.onclick = function() { ViewSection('departments') }
}
nav_materials.onclick = function() { ViewSection('materials') }

function ViewSection(sectionId) {
    hideBackgroudImage()

    for (let g of graphics) {
        if (g.id == sectionId)
            g.style.display = "block"
        else
            g.style.display = "none"
    }
}

function hideBackgroudImage(){
    var header = document.getElementById("hd")
    var h1 = document.getElementById("title")
    header.style.backgroundImage = "none"
    header.style.minHeight = "0"
    h1.style.minHeight = "0"
}

function setBackgroudImage(){
    var header = document.getElementById("hd")
    var h1 = document.getElementById("title")
    header.style.backgroundImage = "url(../images/cover.jpg)"
    header.style.backgroundSize = "100%"
    header.style.backgroundRepeat = "no-repeat"
    header.style.minHeight = "40em"
    h1.style.minHeight = "4em"
}

function nascondi() {
    setBackgroudImage()

    for (let g of graphics) {
        g.style.display = "none"
    }
}

function comparsa(){
    var m = document.getElementById("depUl")
    m.style.display = "flex"
    m.style.flexDirection = "column"
    m.style.alignContent = "center"
    m.style.padding = "0"
    m.style.position = "absolute"
    m.style.bottom = "25px"
}

function chiudi(){
    var m = document.getElementById("depUl")
    m.style.display = "none"
}

nascondi()