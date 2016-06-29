/* 
 * CSCI 2356 Chapter 4- Programming Project 4-6
 * Md.Riad Arifin (A00395462)
 */

//to display the value
var INC = 100;
function display() {
    
    var lowestresistance = parseFloat(document.getElementById("lowestresistance").value);
    var highestresistance = parseFloat(document.getElementById("highestresistance").value);

    var a = [];
    var i = 0;//index
    var val = lowestresistance;
    while (val <= highestresistance) {
        a[i] = val;
        i++;
        val += INC;
    }//end while()

    drawTable(a);
}

//to draw the table
function drawTable(a) {
    var table = document.getElementById("table");
    var voltage = parseFloat(document.getElementById("voltage").value);
    table.innerHTML = "";

    var row = table.insertRow(0);
    var cellNum1 = row.insertCell(0);

    var cellNum2 = row.insertCell(1);
    var cellNum3 = row.insertCell(2);


    cellNum1.outerHTML = "<th>Voltage(v)</th>";
    cellNum2.outerHTML = "<th>Resistance(&#8486)</th>";
    cellNum3.outerHTML = "<th>Power(W)</th>";

    var len = a.length;

    for (var i = 0; i < len; i++) {
        row = table.insertRow(-1);//-1 means at the end
        cellNum1 = row.insertCell(-1);
        cellNum2 = row.insertCell(-1);
        cellNum3 = row.insertCell(-1);
        cellNum1.innerHTML = voltage;
        cellNum2.innerHTML = a[i];
        cellNum3.innerHTML = (voltage * voltage) / a[i];

    }//end for 
}//end drawTable()
