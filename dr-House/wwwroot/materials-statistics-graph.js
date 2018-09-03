var materialsCanvas = document.getElementById("materialsCanvas");
materialsCanvas.width = 500;
materialsCanvas.height = 300;

var ctx = materialsCanvas.getContext("2d");

var successCB = document.getElementById("succ");
var complicationsCB = document.getElementById("complic");
var deathCB = document.getElementById("dec");

var yearDiv = document.getElementById("year");
var p = document.createElement("p");
yearDiv.append(p);
var year = 2018

function updateYear(year){
    p.style.padding = "5px";
    p.textContent = year;
}
updateYear(year)



var filter = []

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

function noData(currentValue) {
    return currentValue === 0;
  }

var div = document.querySelector("div[for='materialsCanvas']");
div.height = materialsCanvas.height
div.width = materialsCanvas.width

var h2 = document.createElement("h2");
h2.style.padding = "5px";
h2.textContent = "Materiali:";
div.append(h2);

var ul = document.createElement("ul");
div.append(ul);

for (let categ in oper[0].materials) {
    var li = document.createElement("li");
    li.style.listStyle = "none";
    li.style.padding = "5px";
    li.textContent = categ;
    ul.append(li);
}

var Barchart = function (options) {
    this.options = options;
    this.options.padding = 20;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;

    this.draw = function () {
        var maxValue = 0;
        var nCateg = 0

        for (var c in this.options.data[0].materials) {
            nCateg++
        }
        
        var numberOfCateg = Object.keys(this.options.data[0].materials).length;

        var finalData = []

        while (nCateg > 0) {
            finalData.push(0)
            nCateg--
        }

        var barIndex = 0

        for (var op of this.options.data) {
            if (filter.includes(op.result)) {
                if(op.date.getFullYear() === year){
                    while (barIndex < finalData.length) {
                        for (var c in op.materials) {
                            finalData[barIndex] += op.materials[c]
                            barIndex++
                        }
                    }
                }
            }
            barIndex = 0
        }

        for (var i of finalData) {
            maxValue = Math.max(maxValue, i);
        }

        if (filter.length === 0 || finalData.every(noData)) {
            maxValue = 15
        }

        console.log("max value: " + maxValue)

        var canvasActualHeight = this.canvas.height - this.options.padding * 2;
        var canvasActualWidth = this.canvas.width - this.options.padding * 2;

        //drawing the grid lines

        var gridValue = 0;
        while (gridValue <= maxValue) {
            var gridX = canvasActualWidth * (1 - gridValue / maxValue) + this.options.padding;

            drawLine(
                this.ctx,
                this.canvas.width - gridX,
                0,
                this.canvas.width - gridX,
                this.canvas.height - this.options.padding,
                this.options.gridColor
            );

            //writing grid markers
            this.ctx.save();
            this.ctx.fillStyle = this.options.gridColor;
            this.ctx.font = "bold 10px Arial";
            this.ctx.fillText(gridValue, this.canvas.width - gridX + 2, 10);
            this.ctx.restore();

            gridValue += this.options.gridScale;
        }

        //drawing the bars
        
        var numberOfBars = numberOfCateg
        var barSize = (canvasActualHeight) / numberOfBars;

        for (var categ of finalData) {
            var val = categ;
            var barHeight = Math.round(canvasActualWidth * val / maxValue);
            drawBar(
                this.ctx,
                this.options.padding,
                this.options.padding + barIndex * barSize,
                barHeight,
                barSize - (this.options.padding / 2),
                this.colors[barIndex % this.colors.length]
            );

            barIndex++;
        }
    }
}

var materialsBarchart = new Barchart(
    {
        canvas: materialsCanvas,
        gridScale: 5,
        gridColor: "#ccc",
        seriesName: "Materials",
        data: oper,
        colors: ["#a55ca5", "#67b6c7", "#bccd7a", "#eb9743", "#a55cf6"]
    }
);

console.log(filter)

succClicked()
complicClicked()
decClicked()

console.log(filter)

function succClicked() {
    if (successCB.checked) {
        filter.splice(0, 0, "successo")
    }
    else {
        filter.splice(0, 1)
    }
    
    ctx.clearRect(0, 0, materialsCanvas.width, materialsCanvas.height);
    materialsBarchart.draw()
}

function complicClicked() {
    if (filter.includes("successo")) {
        if (complicationsCB.checked) {
            filter.splice(1, 0, "complicazioni")
        }
        else {
            filter.splice(1, 1)
        }
    }
    else {
        if (complicationsCB.checked) {
            filter.splice(0, 0, "complicazioni")
        }
        else {
            filter.splice(0, 1)
        }
    }

    ctx.clearRect(0, 0, materialsCanvas.width, materialsCanvas.height);
    materialsBarchart.draw()
}

function decClicked() {
    if (deathCB.checked) {
        filter.push("decesso")
    }
    else {
        filter.pop()
    }

    ctx.clearRect(0, 0, materialsCanvas.width, materialsCanvas.height);
    materialsBarchart.draw()
}

function prevYear(){
    year--

    ctx.clearRect(0, 0, materialsCanvas.width, materialsCanvas.height);
    materialsBarchart.draw()
    updateYear(year)
}

function nextYear(){
    year++

    ctx.clearRect(0, 0, materialsCanvas.width, materialsCanvas.height);
    materialsBarchart.draw()
    updateYear(year)
}