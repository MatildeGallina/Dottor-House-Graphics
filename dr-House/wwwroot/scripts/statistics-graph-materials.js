var materialsCanvas = document.getElementById("materialsCanvas");
materialsCanvas.width = 400;
materialsCanvas.height = 200;

var ctx = materialsCanvas.getContext("2d");

var successCB = document.getElementById("succ");
var complicationsCB = document.getElementById("complic");
var deathCB = document.getElementById("dec");

var yearDiv = document.getElementById("year");
var p = document.createElement("p");
yearDiv.append(p);
var year = 2018

function updateYear(year) {
    p.style.padding = "5px";
    p.textContent = year;
}
updateYear(year)

var filter = []
Array.prototype.removeEl = function (el) {
    this.splice(filter.indexOf(el), 1);
};

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

var Barchart = function (options) {
    this.options = options;
    this.options.padding = 20;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;

    this.draw = function () {
        var maxValue = 0;
        var numberOfCateg = 0

        for (let patient of this.options.data) {
            for (let operation of patient.operationsList) {
                numberOfCateg = Math.max(numberOfCateg, Object.keys(operation.materials).length)
            }
        }

        var finalData = []

        for (let i = numberOfCateg; i > 0; i--) {
            finalData.push(0)
        }

        var barIndex = 0

        for (let patient of this.options.data) {
            for (let operation of patient.operationsList) {
                if (filter.includes(operation.result)) {
                    if (operation.date.getFullYear() === year) {
                        while (barIndex < finalData.length) {
                            for (let category in operation.materials) {
                                finalData[barIndex] += operation.materials[category]
                                barIndex++
                            }
                        }
                    }
                }
                barIndex = 0
            }
        }

        for (let material of finalData) {
            maxValue = Math.max(maxValue, material);
        }

        if (filter.length === 0 || finalData.every(noData)) {
            maxValue = 45
        }

        var canvasActualHeight = this.canvas.height - this.options.padding * 2
        var canvasActualWidth = this.canvas.width - this.options.padding * 2

        var gridValue = 0;
        while (gridValue <= maxValue) {
            var gridX = canvasActualWidth * (1 - gridValue / maxValue) + this.options.padding

            drawLine(
                this.ctx,
                this.canvas.width - gridX,
                0,
                this.canvas.width - gridX,
                this.canvas.height - this.options.padding,
                this.options.gridColor
            );

            this.ctx.save()
            this.ctx.fillStyle = this.options.gridColor
            this.ctx.font = "10px Arial"
            this.ctx.fillText(gridValue, this.canvas.width - gridX + 2, 10)
            this.ctx.restore()

            gridValue += this.options.gridScale
        }

        var numberOfBars = numberOfCateg
        var barSize = (canvasActualHeight) / numberOfBars;

        for (let category of finalData) {
            var barHeight = Math.round(canvasActualWidth * category / maxValue);
            drawBar(
                this.ctx,
                this.options.padding,
                this.options.padding + barIndex * barSize,
                barHeight,
                barSize - (this.options.padding / 2),
                this.colors[barIndex % this.colors.length]
            );

            barIndex++
        }
    }
    this.drawLegend = function(){
        var legendValues = []

        for (let patient of this.options.data) {
            for (let operation of patient.operationsList) {
                for (let material in operation.materials) {
                    if (!legendValues.includes(material))
                        legendValues.push(material)
                }
            }
        }

        barIndex = 0
        var legend = document.querySelector("legend[for='materialsCanvas']")
        var ul = document.createElement("ul")
        legend.append(ul)
        for (let material of legendValues){
            let li = document.createElement("li")
            li.style.listStyle = "none"
            li.style.borderLeft = "20px solid " + this.colors[barIndex % this.colors.length]
            li.style.padding = "5px"
            li.textContent = material
            ul.append(li)
            barIndex++
        }
    }
}

var materialsBarchart = new Barchart(
    {
        canvas: materialsCanvas,
        gridScale: 10,
        gridColor: "#ccc",
        data: patients,
        colors: ["#ce7979", "#7fdac3d7", "#7e8a51", "#974c00", "#a55cf6"]
    }
);

materialsBarchart.drawLegend()

succClicked()
complicClicked()
decClicked()

function succClicked() {
    if (successCB.checked) {
        filter.push(SUCCESS)
    }
    else {
        filter.removeEl(SUCCESS)
    }

    ctx.clearRect(0, 0, materialsCanvas.width, materialsCanvas.height);
    materialsBarchart.draw()
}

function complicClicked() {
    if (complicationsCB.checked) {
        filter.push(COMPLICATIONS)
    }
    else {
        filter.removeEl(COMPLICATIONS)
    }

    ctx.clearRect(0, 0, materialsCanvas.width, materialsCanvas.height);
    materialsBarchart.draw()
}

function decClicked() {
    if (deathCB.checked) {
        filter.push(DEATH)
    }
    else {
        filter.removeEl(DEATH)
    }

    ctx.clearRect(0, 0, materialsCanvas.width, materialsCanvas.height);
    materialsBarchart.draw()
}

function prevYear() {
    year--

    ctx.clearRect(0, 0, materialsCanvas.width, materialsCanvas.height);
    materialsBarchart.draw()
    updateYear(year)
}

function nextYear() {
    year++

    ctx.clearRect(0, 0, materialsCanvas.width, materialsCanvas.height);
    materialsBarchart.draw()
    updateYear(year)
}