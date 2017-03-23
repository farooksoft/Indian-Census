var js = require('fs');
var readline = require('readline');

// Required variable declarations for performing the operation
var country, population10, population13, gdp13, purchase13;
var purchase_power_10, purchase_power_13;
var asia = ['India', 'China', 'Japan', 'Indonesia'];
var australia = ['United Kingdom', 'Australia'];
var africa = ['South Africa', 'Argentina', 'Brazil'];
var europe = ['France', 'Russia', 'UK', 'Italy'];
var northAmerica = ['Japan', 'Mexico', 'canada', 'USA'];
var southAmerica = ['Saudi Arabia', 'Republic of Korea', 'Turkey'];



var continents = [asia, australia, africa, europe, northAmerica, southAmerica ];
var continent_population;
var continent_GDP;

//Arrays to store the resultant
var aggregateArray = [];

// reading the CSV file
var rl = readline.createInterface({
    input: fs.createReadStream('datafile.csv')
});


const rl = readline.createInterface({
    input: fs.createReadStream('datafile.csv')
});

function aggregate(continents, continent_population, continent_GDP) {
    this.continent = continents;
    this.population = continent_population;
    this.GDP = continent_GDP;

}
