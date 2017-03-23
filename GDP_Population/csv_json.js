var fs = require('fs')
fs.readFile('data/datafile.csv', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }

// removing the double quotes from the data
  data=data.replace(/"/g, "");
// splitting the data in to lines
  var lines=data.split("\n");
// array to store the objects
  var jsonData = [];
// getting the headers in the header line
  var headerLine=lines[0].split(",");
// creating a object for each line
  for(var i=1;i<(lines.length)-2;i++){
    var obj = {};
    var currentLine=lines[i].split(",");
    obj[headerLine[0]] = currentLine[0];
    for(var j=1;j<headerLine.length;j++){
      obj[headerLine[j]] = parseFloat(currentLine[j]);
    }
// pushing the object in array
    jsonData.push(obj);
  }
  
  fs.writeFileSync("output/datafile.json", JSON.stringify(jsonData), encoding = "utf8");
 
});
