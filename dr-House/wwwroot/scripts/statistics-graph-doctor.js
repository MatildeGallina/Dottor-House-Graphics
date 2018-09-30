var myCanvas = document.getElementById("drCanvas");
myCanvas.width = 1000;
myCanvas.height = 300;

var ctx = myCanvas.getContext("2d");

function drawLine(ctx, startX, startY, endX, endY, color) {
    ctx.save();
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
    ctx.restore();
}

function drawBar(ctx, upperLeftCornerX, upperLeftCornerY, width, height, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.fillRect(upperLeftCornerX, upperLeftCornerY, width, height);
    ctx.restore();
}

function legendItem(name, color, ul) {
    var li = document.createElement("li");
    li.style.listStyle = "none";
    li.style.borderLeft = "20px solid " + color;
    li.style.padding = "5px";
    li.textContent = name;
    return li
}

var Barchart = function (options) {
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;

    this.draw = function () {
        var maxValue = 100;

        var canvasActualHeight = this.canvas.height - this.options.padding * 2;
        var canvasActualWidth = this.canvas.width - this.options.padding * 2;
        
        var gridValue = 0;
        while (gridValue <= maxValue) {
            let gridY = canvasActualHeight * (1 - gridValue / maxValue) + this.options.padding;

            drawLine(
                this.ctx,
                0,
                gridY,
                this.canvas.width,
                gridY,
                this.options.gridColor
            );

            this.ctx.save();
            this.ctx.fillStyle = this.options.gridColor;
            this.ctx.font = "15px Arial";
            this.ctx.fillText(gridValue, 10, gridY - 2);
            this.ctx.restore();

            gridValue += this.options.gridScale;
        }

        var doctors = []

        for(let patient of this.options.data){
            for(let operation of patient.operationsList){
                if(!doctors.includes(operation.doctor)){
                    doctors.push(operation.doctor)
                }
                let index = doctors.indexOf(operation.doctor)
                doctors[index].operations.push(operation)
            }
        }
        
        var collIndex = 0
        var numberOfBars = doctors.length;
        var barSize = (canvasActualWidth - (5 * this.options.padding)) / numberOfBars;

        var div = document.getElementById("doctorsName")
        div.style.width = canvasActualWidth

        for (let dr of doctors) {
            let dr_operations = dr.operations.length
            let statistics = [0, 0, 0]
            
            for(let o of dr.operations){
                if(o.result === SUCCESS){
                    statistics[0] += 1
                }
                else if (o.result === COMPLICATIONS) {
                    statistics[1] += 1
                }
                else {
                    statistics[2] += 1
                }
            }

            let barIndex = 0;
            let startX = 5 * this.options.padding + collIndex * barSize
            let startY

            for (let o of statistics) {
                let barHeight = Math.round(canvasActualHeight * (o / dr_operations));
                
                if (barIndex == 0)
                    startY = this.canvas.height - barHeight - this.options.padding
                else {
                    startY = startY - barHeight
                }

                drawBar(
                    this.ctx,
                    startX,
                    startY,
                    barSize - this.options.padding,
                    barHeight,
                    this.colors[barIndex % this.colors.length]
                )

                barIndex++;
            }


            let p = document.createElement("p");
            p.textContent = dr.name;
            p.style.padding = "0";
            div.appendChild(p);
            
            collIndex++;
        }

        var legend = document.querySelector("legend[for='drCanvas']");
        var ul = document.createElement("ul");
        legend.append(ul);
        ul.append(legendItem("% Success", this.colors[0 % this.colors.length], ul));
        ul.append(legendItem("% Complications", this.colors[1 % this.colors.length], ul));
        ul.append(legendItem("% Death", this.colors[2 % this.colors.length], ul));
    }
}

var myBarchart = new Barchart(
    {
        canvas: myCanvas,
        padding: 10,
        gridScale: 5,
        gridColor: "#ccc",
        data: patients,
        colors: ["rgba(62, 185, 62, 0.8)", "rgba(255, 189, 7, 0.8)", "rgba(241, 80, 80, 0.8)"]
    }
);
myBarchart.draw();
