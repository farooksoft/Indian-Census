const readline = require('readline');
const fs = require('fs');

var country, population10, population13;
var gdp10, indexgdp1010;
var purchasingPowerByCountry10, purchasingPowerByCountry13;
var populationGrowth, purchasingPowerGrowth;
var limit, limit1, index, index1;

var asiaContinent = ['India', 'China', 'Japan', 'Indonesia'];
var europeContinent = ['France', 'Russia', 'UK', 'Italy'];
var northAmericaContinent = ['Japan', 'Mexico', 'canada', 'USA'];
var southAmericaContinent = ['Saudi Arabia', 'Republic of Korea', 'Turkey'];
var australiaContinent = ['United Kingdom', 'Australia'];
var africaContinent = ['South Africa', 'Argentina', 'Brazil'];


var continentPopulation = [0, 0, 0, 0, 0, 0];
var continentgdp10 = [0, 0, 0, 0, 0, 0];
var continents = ["africa", "europe", "northAmerica", "southAmerica", "australia", "asia"];

var aggregateArray = [];

const rl = readline.createInterface({
    input: fs.createReadStream('datafile.csv')
});

function aggregate(continents, continentPopulation, continentgdp10) {
    this.continent = continents;
    this.population = continentPopulation;
    this.gdp10 = continentgdp10;

}

rl.on('line', function(line) {
    var lineRecords = line.trim().split(',');
   
            country = lineRecords[0].replace(/"/g,""); 
            population10 = lineRecords[2].replace(/"/g,"");
            population13 = lineRecords[5].replace(/"/g,"");
            gdp10 = lineRecords[6].replace(/"/g,"");
            purchasingPowerByCountry10 = lineRecords[14].replace(/"/g,"");
            purchasingPowerByCountry13 = lineRecords[17].replace(/"/g,"");

            populationGrowth = (parseFloat(population13)*1000) - (parseFloat(population10)*1000);
            purchasingPowerGrowth = parseFloat(purchasingPowerByCountry13) - parseFloat(purchasingPowerByCountry10);
            

            
           
            // index = lineRecords[2];
            // index1 = lineRecords[6];

            limitpop = population10 + parseInt(6);
            limitgdp10 = gdp10 + parseInt(6);
        
            //for (index = population10; index < limitpop; index++) {
                if (africaContinent[0] > -1) {
                    continent = continents[0];
                    continentPopulation[0] = parseFloat(continentPopulation[0]) + parseFloat(lineRecords[2]);

                } else if (europeContinent[0] > -1) {
                    continent = continents[1];
                    continentPopulation[1] = parseFloat(continentPopulation[1]) + parseFloat(lineRecords[2]);
                } else if (northAmericaContinent[0] > -1) {
                    continent = continents[2];
                    continentPopulation[2] = parseFloat(continentPopulation[2]) + parseFloat(lineRecords[2]);

                } else if (southAmericaContinent[0] > -1) {
                    continent = continents[3];
                     continentPopulation[3] = parseFloat(continentPopulation[3]) + parseFloat(lineRecords[2]);

                } else if (australiaContinent[0] > -1) {
                    continent = continents[4];
                    continentPopulation[4] = parseFloat(continentPopulation[4]) + parseFloat(lineRecords[2]);

                } else if (asiaContinent[0] > -1) {
                    continent = continents[5];
                    continentPopulation[5] = parseFloat(continentPopulation[5]) + parseFloat(lineRecords[2]);

                }
        // console.log("continentPopulation:", continentPopulation[5]);

            //for (index1 = gdp10; index1 < limitgdp10; index1++) {
                if (africaContinent[0] > -1) {
                    continent = continents[0];
                    continentgdp10[0] = parseFloat(continentgdp10[0]) + parseFloat(lineRecords[index1]);

                } else
                if (europeContinent[0] > -1) {
                    continent = continents[1];
                    continentgdp10[1] = parseFloat(continentgdp10[1]) + parseFloat(lineRecords[index1]);

                } else if (northAmericaContinent[0] > -1) {
                    continent = continents[2];
                    continentgdp10[2] = parseFloat(continentgdp10[2]) + parseFloat(lineRecords[index1]);

                } else if (southAmericaContinent[0] > -1) {
                    continent = continents[3];
                    continentgdp10[3] = parseFloat(continentgdp10[3]) + parseFloat(lineRecords[index1]);

                } else if (australiaContinent[0] > -1) {

                    continent = continents[4];
                    continentgdp10[4] = parseFloat(continentgdp10[4]) + parseFloat(lineRecords[index]);

                } else if (asiaContinent[0] > -1) {
                    continent = continents[5];
                    continentgdp10[5] = parseFloat(continentgdp10[5]) + parseFloat(lineRecords[index]);

                }

            //}

                for (var t = 0; t <= 6; t++) {
                    aggregateArray.push(new aggregate(continents[t], continentPopulation[t], continentgdp10[t]));
                }

                console.log(aggregateArray);
                fs.writeFileSync("aggregate.json", JSON.stringify(aggregateArray), encoding = "utf8");
            

            

        });

    


