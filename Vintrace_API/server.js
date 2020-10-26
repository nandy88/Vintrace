var express = require('express');
var app = express();
var fs = require('fs');

// testing pulling JSON sample files

app.get("/11YVCHAR001", function (req, res) {
  fs.readFile("data/11YVCHAR001.json", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

app.get("/11YVCHAR002", function (req, res) {
  fs.readFile("data/11YVCHAR002.json", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

app.get("/15MPPN002-VK", function (req, res) {
  fs.readFile("data/15MPPN002-VK.json", function (err, data) {
    console.log(data);
    res.end(data);
  });
});

// breakdown "year" data

app.get('/api/breakdown/year/:vintraceID', function (req, res) {
  var resourceID = req.params.vintraceID // get the ID from the request object

  fs.readFile(`data/${resourceID}.json`, function (err, data) { // use the id to dynamically find json file
    if (err) { // if the client sends through something that doesn't match return a 404
      res.status(404).send("Sorry, we can't find that")
    }

    var object = JSON.parse(data)
    var components = object.components
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage ? 1 : -1))
    // remove unwanted fields
    components.forEach((element) => {
      delete element['variety']
      delete element['region']
    })
    var breakDownByYear = {}
    // add "breakdown type" key value pair
    breakDownByYear.breakDownType = 'year'
    // add "breakdown" key value pair where breakdown = components
    breakDownByYear.breakdown = components
    console.log(breakDownByYear)
    res.end(JSON.stringify(breakDownByYear))
  })
});

// // breakdown "variety" data

app.get('/api/breakdown/variety/:vintraceID', function (req, res) {
  var resourceID = req.params.vintraceID // get the ID from the request object

  fs.readFile(`data/${resourceID}.json`, function (err, data) { // use the id to dynamically find json file
    if (err) { // if the client sends through something that doesn't match return a 404
      res.status(404).send("Sorry, we can't find that")
    }

    var object = JSON.parse(data)
    var components = object.components
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage ? 1 : -1))
    // remove unwanted fields
    components.forEach((element) => {
      delete element['year']
      delete element['region']
    })
    var breakDownByYear = {}
    // add "breakdown type" key value pair
    breakDownByYear.breakDownType = 'variety'
    // add "breakdown" key value pair where breakdown = components
    breakDownByYear.breakdown = components
    console.log(breakDownByYear)
    res.end(JSON.stringify(breakDownByYear))
  })
});

// // breakdown "region" data

app.get('/api/breakdown/region/:vintraceID', function (req, res) {
  var resourceID = req.params.vintraceID // get the ID from the request object

  fs.readFile(`data/${resourceID}.json`, function (err, data) { // use the id to dynamically find json file
    if (err) { // if the client sends through something that doesn't match return a 404
      res.status(404).send("Sorry, we can't find that")
    }

    var object = JSON.parse(data)
    var components = object.components
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage ? 1 : -1))
    // remove unwanted fields
    components.forEach((element) => {
      delete element['year']
      delete element['variety']
    })
    var breakDownByYear = {}
    // add "breakdown type" key value pair
    breakDownByYear.breakDownType = 'region'
    // add "breakdown" key value pair where breakdown = components
    breakDownByYear.breakdown = components
    console.log(breakDownByYear)
    res.end(JSON.stringify(breakDownByYear))
  })
});

// // breakdown "year-variety" data

app.get('/api/breakdown/year-variety/:vintraceID', function (req, res) {
  var resourceID = req.params.vintraceID // get the ID from the request object

  fs.readFile(`data/${resourceID}.json`, function (err, data) { // use the id to dynamically find json file
    if (err) { // if the client sends through something that doesn't match return a 404
      res.status(404).send("Sorry, we can't find that")
    }

    var object = JSON.parse(data)
    var components = object.components
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage ? 1 : -1))
    // remove unwanted fields
    components.forEach((element) => {
      delete element['region']
    })
    var breakDownByYear = {}
    // add "breakdown type" key value pair
    breakDownByYear.breakDownType = 'year-variety'
    // add "breakdown" key value pair where breakdown = components
    breakDownByYear.breakdown = components
    console.log(breakDownByYear)
    res.end(JSON.stringify(breakDownByYear))
  })
});

// app running on http://localhost:3000/

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

