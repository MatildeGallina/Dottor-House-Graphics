function setCanvas(canvas){
    canvas.width = 500;
    canvas.height = 500;
}

var cardiologiaCanvas = document.getElementById("cardiologiaCanvas");
var oncologiaCanvas = document.getElementById("oncologiaCanvas");
var neurologiaCanvas = document.getElementById("neurologiaCanvas");
var oculisticChart = document.getElementById("oculisticCanvas");
var pediatriaChart = document.getElementById("pediatriaCanvas");
var generalChart = document.getElementById("generalCanvas");
var ortopediaChart = document.getElementById("ortopediaCanvas");

var canvas = [cardiologiaCanvas, 
        oncologiaCanvas, 
        neurologiaCanvas, 
        oculisticChart, 
        pediatriaChart, 
        generalChart, 
        ortopediaChart]

for(let c of canvas){
    setCanvas(c)
}

function fillColor(options, datas){
    var colors = []
    if(options.mainT == 0){
        let red = 255
        for(let i = 0; i < datas.length; i++){
            let c = "rgb(" + red +", " + options.t1 + ", " + options.t2 + ")"
            colors.push(c)
            if(red > 30)
                red -=30
            else
                options.t2 -=20
        }
    }
    else if(options.mainT == 1){
        let green = 255
        for(let i = 0; i < datas.length; i++){
            let c = "rgb(" + options.t1 +", " + green + ", " + options.t2 + ")"
            colors.push(c)
            if(green > 30)
                green -= 30
            else
                options.t2 += 10
        }
    }
    else{
        let blue = 255
        for(let i = 0; i < datas.length; i++){
            let c = "rgb(" + options.t1 +", " + options.t2 + ", " + blue + ")"
            colors.push(c)
            if(blue > 50)
                blue -=50
            else
                options.t1 += 20
        }
    }
    return colors
}

var ctx = cardiologiaCanvas.getContext("2d");

function drawLine(ctx, startX, startY, endX, endY){
    ctx.beginPath()
    ctx.moveTo(startX, startY)
    ctx.lineTo(endX, endY)
    ctx.stroke()
}

function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, startAngle, endAngle)
    ctx.stroke()
}


function drawPieSlice(ctx, centerX, centerY, radius, startAngle, endAngle, color){
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.arc(centerX, centerY, radius, startAngle, endAngle)
    ctx.closePath()
    ctx.fill()
}

var Piechart = function(options, department, mainColor, idLegend){
    this.options = options
    this.canvas = options.canvas
    this.ctx = this.canvas.getContext("2d")
    this.department = department
    this.mainColor = mainColor
    this.idLegend = idLegend
 
    this.draw = function(){

        var total_value = 0
        var color_index = 0
        var validData = []

        for(let patient of this.options.data){
            for(let operation of patient.operationsList){
                if(operation.doctor.department == this.department){
                    if(!validData.includes(operation.doctor)){
                        validData.push(operation.doctor)
                    }
                }
            }
        }
        
        for(let doctor of validData){
            total_value += doctor.operations.length
        }

        var colors = fillColor(this.mainColor, validData)

        var start_angle = 0
        
        for (let dr of validData){

            let dr_operations = dr.operations.length

            let slice_angle = 2 * Math.PI * dr_operations / total_value
 
            drawPieSlice(
                this.ctx,
                this.canvas.width / 2,
                this.canvas.height / 2,
                Math.min(this.canvas.width / 2, this.canvas.height / 2),
                start_angle,
                start_angle + slice_angle,
                colors[color_index % colors.length]
            );
 
            start_angle += slice_angle
            color_index++
        }
 
        if (this.options.doughnutHoleSize){
            drawPieSlice(
                this.ctx,
                this.canvas.width / 2,
                this.canvas.height / 2,
                this.options.doughnutHoleSize * Math.min(this.canvas.width / 2, this.canvas.height / 2),
                0,
                2 * Math.PI,
                "white"
            )
        }

        start_angle = 0

        for (let dr of validData){
            let dr_operations = dr.operations.length

            slice_angle = 2 * Math.PI * dr_operations / total_value
            let pieRadius = Math.min(this.canvas.width / 2, this.canvas.height / 2)
            let labelX =
                this.canvas.width / 2 + (pieRadius / 2) *
                Math.cos(start_angle + slice_angle / 2)
            let labelY =
                this.canvas.height / 2 + (pieRadius / 2) *
                Math.sin(start_angle + slice_angle / 2)
         
            if (this.options.doughnutHoleSize){
                let offset = (pieRadius * this.options.doughnutHoleSize ) / 2
                labelX =
                    this.canvas.width/2 + (offset + pieRadius / 2) *
                    Math.cos(start_angle + slice_angle / 2)
                labelY =
                    this.canvas.height/2 + (offset + pieRadius / 2) *
                    Math.sin(start_angle + slice_angle / 2)              
            }
         
            var labelText = Math.round(100 * dr_operations / total_value)
            this.ctx.fillStyle = "white"
            this.ctx.font = "bold 20px Arial"
            this.ctx.fillText(labelText + " %", labelX, labelY)
            start_angle += slice_angle
        }

        sliceIndex = 0
        var legend = document.querySelector("legend[for='" + idLegend + "']")
        var ul = document.createElement("ul")
        legend.append(ul)
        for (let dr of validData){
            let li = document.createElement("li")
            li.style.listStyle = "none"
            li.style.borderLeft = "20px solid " + colors[sliceIndex % colors.length]
            li.style.padding = "5px"
            li.textContent = dr.name
            ul.append(li)
            sliceIndex++
        }
 
    }
}

var cardiologiaChart = new Piechart(
    {
        canvas : cardiologiaCanvas,
        data : patients,
        doughnutHoleSize:0.4
    },
    CARDIOLOGY,
    {
        mainT : 0,
        t1 : 100,
        t2 : 100
    },
    "cardiologiaCanvas"
);

var neurologiaChart = new Piechart(
    {
        canvas:neurologiaCanvas,
        data:patients,
        doughnutHoleSize:0.4
    },
    NEUROLOGY,
    {
        mainT : 1,
        t1 : 100,
        t2 : 100
    },
    "neurologiaCanvas"
);

var oncologiaChart = new Piechart(
    {
        canvas:oncologiaCanvas,
        data:patients,
        doughnutHoleSize:0.4
    },
    ONCOLOGY,
    {
        mainT : 2,
        t1 : 100,
        t2 : 100
    },
    "oncologiaCanvas"
);
var oculisticChart = new Piechart(
    {
        canvas:oculisticCanvas,
        data:patients,
        doughnutHoleSize:0.4
    },
    OPHTHALMOLOGY,
    {
        mainT : 0,
        t1 : 120,
        t2 : 80
    },
    "oculisticCanvas"
);
var pediatriaChart = new Piechart(
    {
        canvas:pediatriaCanvas,
        data:patients,
        doughnutHoleSize:0.4
    },
    PEDIATRICS,
    {
        mainT : 1,
        t1 : 120,
        t2 : 80
    },
    "pediatriaCanvas"
);
var generalChart = new Piechart(
    {
        canvas:generalCanvas,
        data:patients,
        doughnutHoleSize:0.4
    },
    GENERAL,
    {
        mainT : 2,
        t1 : 120,
        t2 : 80
    },
    "generalCanvas"
);
var ortopediaChart = new Piechart(
    {
        canvas:ortopediaCanvas,
        data:patients,
        doughnutHoleSize:0.4
    },
    ORTHOPEDICS,
    {
        mainT : 0,
        t1 : 200,
        t2 : 200
    },
    "ortopediaCanvas"
);

cardiologiaChart.draw()
neurologiaChart.draw()
oncologiaChart.draw()
oculisticChart.draw()
pediatriaChart.draw()
generalChart.draw()
ortopediaChart.draw()