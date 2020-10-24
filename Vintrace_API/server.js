var express = require("express");
var app = express();
var fs = require('fs');

// testing pulling JSON sample files

app.get(`/11YVCHAR001`, function (req, res) {
  fs.readFile(`11YVCHAR001.json`, function (err, data) {
    console.log(data);
    res.end(data);
  });
});

app.get(`/11YVCHAR002`, function (req, res) {
  fs.readFile(`11YVCHAR002.json`, function (err, data) {
    console.log(data);
    res.end(data);
  });
});

app.get(`/15MPPN002-VK`, function (req, res) {
  fs.readFile(`15MPPN002-VK.json`, function (err, data) {
    console.log(data);
    res.end(data);
  });
});

// breakdown "year" data

app.get(`/api/breakdown/year/11YVCHAR001`, function (req, res) {
  fs.readFile(`11YVCHAR001.json`, function (err, data) {
    var object = JSON.parse(data);
    var components = object.components;
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage) ? 1 : -1)
    // remove unwanted fields
    components.forEach(element => {
      delete element["variety"]
      delete element["region"]
    });
    var breakDownByYear = {};
    // add "breakdown type" key value pair
    breakDownByYear.breakDownType = "year"
    // add "breakdown" key value pair where breakdown = components
    breakDownByYear.breakdown = components
    console.log(breakDownByYear);
    res.end(JSON.stringify(breakDownByYear));
  });
});

app.get(`/api/breakdown/year/11YVCHAR002`, function (req, res) {
  fs.readFile(`11YVCHAR002.json`, function (err, data) {
    var object = JSON.parse(data);
    var components = object.components;
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage) ? 1 : -1)
    // remove unwanted fields
    components.forEach(element => {
      delete element["variety"]
      delete element["region"]
    });
    var breakDownByYear = {};
    // add "breakdown type" key value pair
    breakDownByYear.breakDownType = "year"
    // add "breakdown" key value pair where breakdown = components
    breakDownByYear.breakdown = components
    console.log(breakDownByYear);
    res.end(JSON.stringify(breakDownByYear));
  });
});

app.get(`/api/breakdown/year/15MPPN002-VK`, function (req, res) {
  fs.readFile(`15MPPN002-VK.json`, function (err, data) {
    var object = JSON.parse(data);
    var components = object.components;
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage) ? 1 : -1)
    // remove unwanted fields
    components.forEach(element => {
      delete element["variety"]
      delete element["region"]
    });
    var breakDownByYear = {};
    // add "breakdown type" key value pair
    breakDownByYear.breakDownType = "year"
    // add "breakdown" key value pair where breakdown = components
    breakDownByYear.breakdown = components
    console.log(breakDownByYear);
    res.end(JSON.stringify(breakDownByYear));
  });
});

// breakdown "variety" data

app.get(`/api/breakdown/variety/11YVCHAR001`, function (req, res) {
  fs.readFile(`11YVCHAR001.json`, function (err, data) {
    var object = JSON.parse(data);
    var components = object.components;
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage) ? 1 : -1)
    // remove unwanted fields
    components.forEach(element => {
      delete element["year"]
      delete element["region"]
    });
    var breakDownByVariety = {};
    // add "breakdown type" key value pair
    breakDownByVariety.breakDownType = "variety"
    // add "breakdown" key value pair where breakdown = components
    breakDownByVariety.breakdown = components
    console.log(breakDownByVariety);
    res.end(JSON.stringify(breakDownByVariety));
  });
});

app.get(`/api/breakdown/variety/11YVCHAR002`, function (req, res) {
  fs.readFile(`11YVCHAR002.json`, function (err, data) {
    var object = JSON.parse(data);
    var components = object.components;
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage) ? 1 : -1)
    // remove unwanted fields
    components.forEach(element => {
      delete element["year"]
      delete element["region"]
    });
    var breakDownByVariety = {};
    // add "breakdown type" key value pair
    breakDownByVariety.breakDownType = "variety"
    // add "breakdown" key value pair where breakdown = components
    breakDownByVariety.breakdown = components
    console.log(breakDownByVariety);
    res.end(JSON.stringify(breakDownByVariety));
  });
});

app.get(`/api/breakdown/variety/15MPPN002-VK`, function (req, res) {
  fs.readFile(`15MPPN002-VK.json`, function (err, data) {
    var object = JSON.parse(data);
    var components = object.components;
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage) ? 1 : -1)
    // remove unwanted fields
    components.forEach(element => {
      delete element["year"]
      delete element["region"]
    });
    var breakDownByVariety = {};
    // add "breakdown type" key value pair
    breakDownByVariety.breakDownType = "variety"
    // add "breakdown" key value pair where breakdown = components
    breakDownByVariety.breakdown = components
    console.log(breakDownByVariety);
    res.end(JSON.stringify(breakDownByVariety));
  });
});

// breakdown "region" data

app.get(`/api/breakdown/region/11YVCHAR001`, function (req, res) {
  fs.readFile(`11YVCHAR001.json`, function (err, data) {
    var object = JSON.parse(data);
    var components = object.components;
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage) ? 1 : -1)
    // remove unwanted fields
    components.forEach(element => {
      delete element["year"]
      delete element["variety"]
    });
    var breakDownByRegion = {};
    // add "breakdown type" key value pair
    breakDownByRegion.breakDownType = "region"
    // add "breakdown" key value pair where breakdown = components
    breakDownByRegion.breakdown = components
    console.log(breakDownByRegion);
    res.end(JSON.stringify(breakDownByRegion));
  });
});

app.get(`/api/breakdown/region/11YVCHAR002`, function (req, res) {
  fs.readFile(`11YVCHAR002.json`, function (err, data) {
    var object = JSON.parse(data);
    var components = object.components;
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage) ? 1 : -1)
    // remove unwanted fields
    components.forEach(element => {
      delete element["year"]
      delete element["variety"]
    });
    var breakDownByRegion = {};
    // add "breakdown type" key value pair
    breakDownByRegion.breakDownType = "region"
    // add "breakdown" key value pair where breakdown = components
    breakDownByRegion.breakdown = components
    console.log(breakDownByRegion);
    res.end(JSON.stringify(breakDownByRegion));
  });
});

app.get(`/api/breakdown/region/15MPPN002-VK`, function (req, res) {
  fs.readFile(`15MPPN002-VK.json`, function (err, data) {
    var object = JSON.parse(data);
    var components = object.components;
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage) ? 1 : -1)
    // remove unwanted fields
    components.forEach(element => {
      delete element["year"]
      delete element["variety"]
    });
    var breakDownByRegion = {};
    // add "breakdown type" key value pair
    breakDownByRegion.breakDownType = "region"
    // add "breakdown" key value pair where breakdown = components
    breakDownByRegion.breakdown = components
    console.log(breakDownByRegion);
    res.end(JSON.stringify(breakDownByRegion));
  });
});

// breakdown "year-variety" data

app.get(`/api/breakdown/year-variety/11YVCHAR001`, function (req, res) {
  fs.readFile(`11YVCHAR001.json`, function (err, data) {
    var object = JSON.parse(data);
    var components = object.components;
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage) ? 1 : -1)
    // remove unwanted fields
    components.forEach(element => {
      delete element["region"]
    });
    var breakDownByYearVariety = {};
    // add "breakdown type" key value pair
    breakDownByYearVariety.breakDownType = "year-variety"
    // add "breakdown" key value pair where breakdown = components
    breakDownByYearVariety.breakdown = components
    console.log(breakDownByYearVariety);
    res.end(JSON.stringify(breakDownByYearVariety));
  });
});

app.get(`/api/breakdown/year-variety/11YVCHAR002`, function (req, res) {
  fs.readFile(`11YVCHAR002.json`, function (err, data) {
    var object = JSON.parse(data);
    var components = object.components;
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage) ? 1 : -1)
    // remove unwanted fields
    components.forEach(element => {
      delete element["region"]
    });
    var breakDownByYearVariety = {};
    // add "breakdown type" key value pair
    breakDownByYearVariety.breakDownType = "year-variety"
    // add "breakdown" key value pair where breakdown = components
    breakDownByYearVariety.breakdown = components
    console.log(breakDownByYearVariety);
    res.end(JSON.stringify(breakDownByYearVariety));
  });
});

app.get(`/api/breakdown/year-variety/15MPPN002-VK`, function (req, res) {
  fs.readFile(`15MPPN002-VK.json`, function (err, data) {
    var object = JSON.parse(data);
    var components = object.components;
    // sort component data from highest percentage to lowest percentage
    components.sort((a, b) => (b.percentage > a.percentage) ? 1 : -1)
    // remove unwanted fields
    components.forEach(element => {
      delete element["region"]
    });
    var breakDownByYearVariety = {};
    // add "breakdown type" key value pair
    breakDownByYearVariety.breakDownType = "year-variety"
    // add "breakdown" key value pair where breakdown = components
    breakDownByYearVariety.breakdown = components
    console.log(breakDownByYearVariety);
    res.end(JSON.stringify(breakDownByYearVariety));
  });
});

// app running on http://localhost:3000/

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

