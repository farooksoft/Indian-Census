var fs = require('fs');
var readline = require('readline');

// Required variable declarations for performing the operation
var country, population10, population13, gdp13, purchase13;
var purchase_power_10, purchase_power_13;

//Arrays to store the resultant
var populationArray = [];
var gdpArray = [];
var purchaseArray = [];
var Growth_Array = [];

// reading the CSV file
var rl = readline.createInterface({
    input: fs.createReadStream('datafile.csv')
});

// functions to split and differentiate the operations
function populationChart(country, population13) {

    this.country = country;
    this.population13 = population13;
};


function gdpChart(country, gdp13) {

    this.country = country;
    this.gdp13 = gdp13;
};

function purchaseChart(country, purchase13) {

    this.country = country;
    this.purchase13 = purchase13;
};

function Growth_Chart(country, population_Growth, purchase_Growth) {
    this.country = country;
    this.population_Growth = population_Growth;
    this.purchase_Growth = purchase_Growth;
};


rl.on('line', function(line) {
    var lineRecords = line.trim().split(",");
        
        country = lineRecords[0].replace(/"/g,"");
        population13 = lineRecords[5].replace(/"/g,"");
        gdp13 = lineRecords[9].replace(/"/g,"");
        purchase13 = lineRecords[17].replace(/"/g,"");


        population_Growth = (parseFloat(lineRecords[5].replace(/"/g,""))*1000) - (parseFloat(lineRecords[2].replace(/"/g,""))*1000);
        //    console.log(population_Growth);
        purchase_Growth = parseFloat(lineRecords[17].replace(/"/g,"")) - parseFloat(lineRecords[14].replace(/"/g,""));
        //    console.log(purchase_Growth);
          
// populating the arrays with the desired result
        populationArray.push(new populationChart(country, population13));
        gdpArray.push(new gdpChart(country, gdp13));
        purchaseArray.push(new purchaseChart(country, purchase13));
        Growth_Array.push(new Growth_Chart(country, population_Growth, purchase_Growth));

// sorting the value stored in an array in descending order
        populationArray.sort(function(a, b) {
               return parseFloat(b.population13) - parseFloat(a.population13)
        });
         
        gdpArray.sort(function(a, b) {
              return parseFloat(b.gdp13) - parseFloat(a.gdp13)
        });    

        purchaseArray.sort(function(a, b) {
           return parseFloat(b.purchase13) - parseFloat(a.purchase13)
        });

// converting the resultant CSV output into relevant JSON File
        fs.writeFileSync("population13.json", JSON.stringify(populationArray), encoding = "utf8");
        fs.writeFileSync("gdp13.json", JSON.stringify(gdpArray), encoding = "utf8");
        fs.writeFileSync("purchase13.json", JSON.stringify(purchaseArray), encoding = "utf8");
        fs.writeFileSync("Growth_Chart.json", JSON.stringify(Growth_Array), encoding = "utf8");   

        

    });


