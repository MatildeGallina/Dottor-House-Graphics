// const DEATH = "decesso"
// const COMPLICATIONS = "complicazioni"
// const SUCCESS = "successo"


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
    // ul.append(li);
    console.log("legendItem")
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

        //drawing the grid lines
        var gridValue = 0;
        while (gridValue <= maxValue) {
            var gridY = canvasActualHeight * (1 - gridValue / maxValue) + this.options.padding;

            drawLine(
                this.ctx,
                0,
                gridY,
                this.canvas.width,
                gridY,
                this.options.gridColor
            );

            //writing grid markers
            this.ctx.save();
            this.ctx.fillStyle = this.options.gridColor;
            this.ctx.font = "bold 10px Arial";
            this.ctx.fillText(gridValue, 10, gridY - 2);
            this.ctx.restore();

            gridValue += this.options.gridScale;
        }

        //drawing the bars
        var collIndex = 0
        var numberOfBars = Object.keys(this.options.data).length;
        var barSize = (canvasActualWidth - (5 * this.options.padding)) / numberOfBars;

        console.log("numero di colonne: " + numberOfBars)
        console.log("option.data: " + this.options.data)

        for (var dr of this.options.data) {

            var dr_operations = dr.operations.length
            let statistics = [0, 0, 0]
            console.log("lista operazioni")
            for(let o of dr.operations){
                console.log("o " + o)
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
            // for (var o of dr.operations) {
            //     dr_operations += o
            // }

            console.log("[dr]: " + dr)
            console.log("option.data[dr]: " + this.options.data[dr])

            var barIndex = 0;
            var startX = 5 * this.options.padding + collIndex * barSize
            var startY

            console.log("startX: " + startX)
            console.log("startY: " + startY)

            console.log("statistics" + statistics)

            for (var o of statistics) {
                var barHeight = Math.round(canvasActualHeight * (o / dr_operations));
                console.log("altezza barra: " + barHeight)

                console.log("indice barra: " + barIndex)
                if (barIndex == 0)
                    startY = this.canvas.height - barHeight - this.options.padding
                else {
                    startY = startY - barHeight
                }

                console.log("startX: " + startX)
                console.log("startY: " + startY)

                drawBar(
                    this.ctx, // contesto
                    startX, // coordinata x di partenza
                    startY, // coordinata y di partenza
                    barSize - this.options.padding,//this.options.padding, //width
                    barHeight, // height
                    this.colors[barIndex % this.colors.length] //colore barra
                )

                barIndex++;
            }

            // var labelText = dr.name;
            // this.ctx.fillStyle = "black";
            // this.ctx.font = "bold 20px Arial";
            // this.ctx.fillText(labelText, startX, (this.canvas.height));

            collIndex++;
        }

        console.log("legenda:")
        var legend = document.querySelector("legend[for='drCanvas']");
        var ul = document.createElement("ul");
        legend.append(ul);
        // legendItem("% Successi", this.colors[0 % this.colors.length], ul)
        ul.append(legendItem("% Successi", this.colors[0 % this.colors.length], ul));
        // legendItem("% Complicazioni", this.colors[1 % this.colors.length], ul)
        ul.append(legendItem("% Complicazioni", this.colors[1 % this.colors.length], ul));
        // legendItem("% Decessi", this.colors[2 % this.colors.length], ul)
        ul.append(legendItem("% Decessi", this.colors[2 % this.colors.length], ul));
        console.log("ssssss")
    }
}
console.log("ffffff")
var myBarchart = new Barchart(
    {
        canvas: myCanvas,
        padding: 10,
        gridScale: 5,
        gridColor: "#ccc",
        data: doctors,
        colors: ["rgba(62, 185, 62, 0.8)", "rgba(255, 189, 7, 0.8)", "rgba(241, 80, 80, 0.8)"]
    }
);
myBarchart.draw();

console.log("aaaa")
