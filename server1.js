//jshint esversion:6

const express = require("express");
const https = require("https");
// const bodyParser = require("body-parser");
const app = express();
// app.use(bodyParser.urlencoded({extended:true}))
app.get("/", function(request,response){
    //   response.sendFile(__dirname + "/cal.html");
    const url = "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=4d7adbdcc8d68e7e23f7e36691c5b80c&units=metric";
    https.get(url, function(res){
        console.log(res.statusCode);

         res.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            // const weatherDescription = weatherData.weather[0].description
            response.send("<h1>the temperature of delhi is " + temp + " degree calcius</h1>");
         })
    })
})

// app.post("/", function(req, res){
//     var num1 = (req.body.num1);
//     var num2 = (req.body.num2);
//     var re = num1 + num2;
// res.send(re);
// })

app.listen(3000, function(){
    console.log("server start");
});