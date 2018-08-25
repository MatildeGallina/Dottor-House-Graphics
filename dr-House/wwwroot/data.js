function Doctor(name, department, operations){
    this.name = name
    this.department = department
    this.operations = operations
}

var dr1 = new Doctor("Mario", "Neurologia", [50, 25, 25])
var dr2 = new Doctor("Luigi", "Oncologia", [75, 20, 5])
var dr3 = new Doctor("Franco", "Cardiologia", [80, 10, 10])
var dr4 = new Doctor("Gina", "Cardiologia", [75, 20, 5])


var doctors = [dr1, dr2, dr3, dr4]