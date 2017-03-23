var fs = require('fs')
fs.readFile('./output/datafile.json', 'utf8', function (err,data) {
  
//Parsing the JSON file so as to use here
  data = JSON.parse(data);

// Array decleration for further use  
  var population_Data = [];
  var gdp_Data = [];
  var aggregate_Data =[];
  
// creating objects   
  data.forEach ( function(val){
      var obj1 = {};
      var obj2 = {};
      var obj3 = {};
      var temp ={};
      // var asia = {};
      // var sa ={};
      // var northAmerica ={};
      // var australia ={};
      // var europe ={};
      // var africa = {};
  
// Generating population data     
     obj1.country = val['Country Name'];
     obj1.population = val["Population (Millions) - 2013"];
     population_Data.push(obj1);
  
// Generating GDP data
     obj2.country = val['Country Name'];
     obj2.gdp = val["GDP Billions (US$) - 2013"];
     gdp_Data.push(obj2);
     
  });
  
  
  var continents ={
      Argentina:"South America",
      Australia:"Australia",
      Brazil : "South America",
      Canada: "North America",
      China:"Asia",
      France:"Europe",
      Germany:"Europe",
      India:"Asia",
      Indonesia:"Asia",
      Italy:"Europe",
      Japan:"Asia",
      Mexico:"North America",
      'Republic of Korea':"Asia",
      Russia:"Europe",
      'Saudi Arabia':"Asia",
      'South Africa':"Africa",
      Turkey:"Asia",
      'United Kingdom':"Europe",
      USA:"North America",
  }
  var continent_Population ={
    Africa : 0,
    Asia : 0,
    Australia:0,
    Europe:0,
    'North America' : 0,
    'South America':0
  }
  var continent_GDP ={
    Africa : 0,
    Asia : 0,
    Australia:0,
    Europe:0,
    'North America' : 0,
    'South America':0
  }

 for(var i=0;i<population_Data.length;i++){
   continent_Population[continents[population_Data[i].country]] += population_Data[i].population
   continent_GDP[continents[population_Data[i].country]] += gdp_Data[i].gdp;
 }
 
  africa ={};
  africa.CONTINENT = "Africa";
  africa.POPULATION = continent_Population['Africa'];
  africa.GDP =continent_GDP['Africa'];
  aggregate_Data.push(africa);
  
  asia ={};
  asia.Country = "Asia";
  asia.POPULATION = continent_Population['Asia'];
  asia.GDP = continent_GDP["Asia"];
  aggregate_Data.push(asia);
  
  australia ={};
  australia.CONTINENT = "Australia";
  australia.POPULATION = continent_Population['Australia'];
  australia. GDP = continent_GDP['Australia'];
  aggregate_Data.push(australia);
  
  europe ={};
  europe.CONTINENT = "Europe";
  europe.POPULATION = continent_Population['Europe'];
  europe.GDP = continent_GDP['Europe'];
  aggregate_Data.push(europe);
  
  northAmerica ={};
  northAmerica.CONTINENT = "North America";
  northAmerica.POPULATION = continent_Population['North America'];
  northAmerica.GDP = continent_GDP['North America'];
  aggregate_Data.push(northAmerica);
  
  southAmerica ={};
  southAmerica.CONTINENT = "South America";
  southAmerica.POPULATION = continent_Population['South America'];
  southAmerica.GDP = continent_GDP['South America'];
  aggregate_Data.push(southAmerica);
  
  console.log(JSON.stringify(aggregate_Data,null,2));
  fs.writeFileSync("aggregate.json", JSON.stringify(aggregate_Data), encoding = "utf8");
});
