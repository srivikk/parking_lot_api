const express = require("express");
const bodyParser = require("body-parser");

const parkingRoute = require("./routes/parkingRoutes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', parkingRoute);

app.listen(3000,()=>{
    console.log("Server is running on port 3000!");
});