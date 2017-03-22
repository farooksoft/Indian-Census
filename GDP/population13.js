var fs = require('fs');
var readline = require('readline');

var i = 0, count = 0;
var indexCountry, indexPopulation13;
var country, population13;
var populationArray = [];

const rl = readline.createInterface({
    input: fs.createReadStream('datafile.csv')
});


function populationChart(country, population13) {

    this.country = country;
    this.population13 = population13;
};

rl.on('line', function(line) {
    //var lineRecords = line.trim().split(',');
    var lineRecords = line.trim().split(",");
    if (i < 1) {
        indexCountry = lineRecords[0];
        indexPopulation13 = lineRecords[5];
                
        i++;
    } else {
        count++;
        country = lineRecords[0].replace(/"/g,"");
        population13 = lineRecords[5].replace(/"/g,"");
        
        
        populationArray.push(new populationChart(country, population13));
            
            populationArray.sort(function(a, b) {
                // var x = parseFloat(population13); 
                // if (a.x > b.x)
                //     return -1;
                // if (a.x < b.x)
                //     return 1;
                // return 0;
                return parseFloat(b.population13) - parseFloat(a.population13)
            });
         

            fs.writeFileSync("./population13.json", JSON.stringify(populationArray), encoding = "utf8");
           

        }

    });


