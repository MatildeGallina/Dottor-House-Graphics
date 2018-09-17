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

// var div = document.querySelector("div[for='materialsCanvas']");
// div.height = materialsCanvas.height
// div.width = materialsCanvas.width

// var h2 = document.createElement("h2");
// h2.style.padding = "5px";
// h2.textContent = "Materiali:";
// div.append(h2);

// var ul = document.createElement("ul");
// div.append(ul);

// for (let categ in oper[0].materials) {
//     var li = document.createElement("li");
//     li.style.listStyle = "none";
//     li.style.padding = "5px";
//     li.textContent = categ;
//     ul.append(li);
// }

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

        //drawing the grid lines
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

            //writing grid markers
            this.ctx.save()
            this.ctx.fillStyle = this.options.gridColor
            this.ctx.font = "10px Arial"
            this.ctx.fillText(gridValue, this.canvas.width - gridX + 2, 10)
            this.ctx.restore()

            gridValue += this.options.gridScale
        }

        //drawing the bars
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
        // seriesName: "Materials",
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
        // filter.splice(0, 0, SUCCESS)
        filter.push(SUCCESS)
    }
    else {
        // filter.splice(0, 1)
        filter.removeEl(SUCCESS)
    }

    ctx.clearRect(0, 0, materialsCanvas.width, materialsCanvas.height);
    materialsBarchart.draw()
}

function complicClicked() {
    // if (filter.includes(SUCCESS)) {
    //     if (complicationsCB.checked) {
    //         filter.splice(1, 0, COMPLICATIONS)
    //     }
    //     else {
    //         filter.splice(1, 1)
    //     }
    // }
    // else {
    //     if (complicationsCB.checked) {
    //         filter.splice(0, 0, COMPLICATIONS)
    //     }
    //     else {
    //         filter.splice(0, 1)
    //     }
    // }

    if (complicationsCB.checked) {
        // filter.splice(1, 0, COMPLICATIONS)
        filter.push(COMPLICATIONS)
    }
    else {
        // filter.splice(1, 1)
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
        // filter.pop()
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