var fs = require('fs');
var readline = require('readline');

var i = 0;
var indexCountry, indexgdp13;
var country, gdp13;
var gdpArray = [];

const rl = readline.createInterface({
    input: fs.createReadStream('datafile.csv')
});


function gdpChart(country, gdp13) {

    this.country = country;
    this.gdp13 = gdp13;
};

rl.on('line', function(line) {
    //var lineRecords = line.trim().split(',');
    var lineRecords = line.trim().split(",");
    if (i < 1) {
        indexCountry = lineRecords[0];
        indexgdp13 = lineRecords[9];
                
        i++;
    } else {
        
        country = lineRecords[0].replace(/"/g,"");
        gdp13 = lineRecords[9].replace(/"/g,"");
        
        
        gdpArray.push(new gdpChart(country, gdp13));
            
            gdpArray.sort(function(a, b) {
                // var x = parseFloat(population13); 
                // if (a.x > b.x)
                //     return -1;
                // if (a.x < b.x)
                //     return 1;
                // return 0;
                return parseFloat(b.gdp13) - parseFloat(a.gdp13)
            });
         

            fs.writeFileSync("./gdp13.json", JSON.stringify(gdpArray), encoding = "utf8");
           

        }

    });


