var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "parking_db"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("connected")
    var p_lot = "CREATE TABLE parking_lot (name VARCHAR(20) PRIMARY KEY, latitude DECIMAL(8,6), longitude DECIMAL(9,6), gateway_UUID VARCHAR(20))";
    con.query(p_lot, function(err,result) {
        if(err) throw err;
        console.log("Parking_Lot Table created");
    });

    var sensor = "CREATE TABLE sensor (UUID VARCHAR(20) PRIMARY KEY, name VARCHAR(20), is_occupied BOOLEAN )";
    con.query(sensor, function(err,result) {
        if(err) throw err;
        console.log("Sensor Table created");
    });

    var bays = "CREATE TABLE bays (parkinglot_name VARCHAR(20), FOREIGN KEY (`parkinglot_name`) REFERENCES `Parking_Lot` (`name`) ON DELETE CASCADE ,bay_name VARCHAR(20),Sensor_UUID VARCHAR(20), FOREIGN KEY (`Sensor_UUID`) REFERENCES `Sensor` (`UUID`) ON DELETE CASCADE, pos_x DECIMAL(4,2), pos_y DECIMAL(4,2))";
    con.query(bays, function(err,result) {
        if(err) throw err;
        console.log("Bays Table created");
    });

});