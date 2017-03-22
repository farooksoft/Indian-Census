var fs = require('fs');
var readline = require('readline');

var i = 0, count = 0;
var indexCountry, indexpurchase13;
var country, purchase13;
var purchaseArray = [];

const rl = readline.createInterface({
    input: fs.createReadStream('datafile.csv')
});


function purchaseChart(country, purchase13) {

    this.country = country;
    this.purchase13 = purchase13;
};

rl.on('line', function(line) {
    //var lineRecords = line.trim().split(',');
    var lineRecords = line.trim().split(",");
    if (i < 1) {
        indexCountry = lineRecords[0];
        indexpurchase13 = lineRecords[17];
                
        i++;
    } else {
        count++;
        country = lineRecords[0].replace(/"/g,"");
        purchase13 = lineRecords[17].replace(/"/g,"");
        
        
        purchaseArray.push(new purchaseChart(country, purchase13));
            
            purchaseArray.sort(function(a, b) {
                // var x = parseFloat(purchase13); 
                // if (a.x > b.x)
                //     return -1;
                // if (a.x < b.x)
                //     return 1;
                // return 0;
                return parseFloat(b.purchase13) - parseFloat(a.purchase13)
            });
         

            fs.writeFileSync("./purchase13.json", JSON.stringify(purchaseArray), encoding = "utf8");
           

        }

    });


