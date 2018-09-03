console.log("ciao")
var cardiologiaCanvas = document.getElementById("cardiologiaCanvas");
cardiologiaCanvas.width = 500;
cardiologiaCanvas.height = 500;
 
var ctx = cardiologiaCanvas.getContext("2d");

var neurologiaCanvas = document.getElementById("neurologiaCanvas");
neurologiaCanvas.width = 500;
neurologiaCanvas.height = 500;

var oncologiaCanvas = document.getElementById("oncologiaCanvas");
oncologiaCanvas.width = 500;
oncologiaCanvas.height = 500;


function drawLine(ctx, startX, startY, endX, endY){
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}


function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
}


function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}

var Piechart = function(options, department, idLegend){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;
 
    this.draw = function(){

        var total_value = 0;
        var color_index = 0;
        var validData = [];

        for (var dr of this.options.data){
            if(dr.department === department){
                total_value += dr.operations.length;

                // var val = this.options.data[dr];
                validData.push(dr);
            }
        }

        var start_angle = 0;
        
        for (var dr of validData){

            var dr_operations = dr.operations.length
            // for(var o of dr.operations){
            //     dr_operations += o
            // }

            var slice_angle = 2 * Math.PI * dr_operations / total_value;
 
            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                Math.min(this.canvas.width/2,this.canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                this.colors[color_index%this.colors.length]
            );
 
            start_angle += slice_angle;
            color_index++;
        }
 
        //drawing a white circle over the chart
        //to create the doughnut chart
        if (this.options.doughnutHoleSize){
            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                this.options.doughnutHoleSize * Math.min(this.canvas.width/2,this.canvas.height/2),
                0,
                2 * Math.PI,
                "white"
            );
        }

        start_angle = 0;

        for (var dr of validData){
            var dr_operations = dr.operations.length
            // for(var o of dr.operations){
            //     dr_operations += o
            // }

            slice_angle = 2 * Math.PI * dr_operations / total_value;
            var pieRadius = Math.min(this.canvas.width/2,this.canvas.height/2);
            var labelX =
                this.canvas.width/2 + (pieRadius / 2) *
                Math.cos(start_angle + slice_angle/2);
            var labelY =
                this.canvas.height/2 + (pieRadius / 2) *
                Math.sin(start_angle + slice_angle/2);
         
            if (this.options.doughnutHoleSize){
                var offset = (pieRadius * this.options.doughnutHoleSize ) / 2;
                labelX =
                    this.canvas.width/2 + (offset + pieRadius / 2) *
                    Math.cos(start_angle + slice_angle/2);
                labelY =
                    this.canvas.height/2 + (offset + pieRadius / 2) *
                    Math.sin(start_angle + slice_angle/2);               
            }
         
            var labelText = Math.round(100 * dr_operations / total_value);
            this.ctx.fillStyle = "white";
            this.ctx.font = "bold 20px Arial";
            this.ctx.fillText(labelText+"%", labelX,labelY);
            start_angle += slice_angle;
        }

        sliceIndex = 0;
        var legend = document.querySelector("legend[for='" + idLegend + "']");
        var ul = document.createElement("ul");
        legend.append(ul);
        for (var dr of validData){
            var li = document.createElement("li");
            li.style.listStyle = "none";
            li.style.borderLeft = "20px solid "+this.colors[sliceIndex%this.colors.length];
            li.style.padding = "5px";
            li.textContent = dr.name;
            ul.append(li);
            sliceIndex++;
        }
 
    }
}


// torta
var cardiologiaChart = new Piechart(
    {
        canvas:cardiologiaCanvas,
        data:doctors,
        colors:["#fde23e","#f16e23", "#57d9ff","#937e88", "red"],
    },
    "Cardiologia",
    "cardiologiaCanvas"
);

var neurologiaChart = new Piechart(
    {
        canvas:neurologiaCanvas,
        data:doctors,
        colors:["#fde23e","#f16e23", "#57d9ff","#937e88", "red"],
    },
    "Neurologia",
    "neurologiaCanvas"
);

var oncologiaChart = new Piechart(
    {
        canvas:oncologiaCanvas,
        data:doctors,
        colors:["#fde23e","#f16e23", "#57d9ff","#937e88", "red"],
    },
    "Oncologia",
    "oncologiaCanvas"
);
cardiologiaChart.draw();
neurologiaChart.draw();
oncologiaChart.draw();


// // Ciambella
// var myDougnutChart2 = new Piechart(
//     {
//         canvas:myCanvas,
//         data:myVinyls2,
//         colors:["#fde23e","#f16e23", "#57d9ff","#937e88"],
//         doughnutHoleSize:0.5
//     }
// );
// myDougnutChart2.draw();