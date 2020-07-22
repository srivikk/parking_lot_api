var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "parking_db"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected")
    var p_lot = "CREATE TABLE IF NOT EXISTS PARKING_LOT (name VARCHAR(20) PRIMARY KEY, latitude DECIMAL(8,6), longitude DECIMAL(9,6), gateway_id VARCHAR(20))";
    con.query(p_lot, function (err, result) {
        if (err) throw err;
        console.log("Parking_Lot Table created");
    });

    var sensor = "CREATE TABLE IF NOT EXISTS SENSOR (id VARCHAR(20) PRIMARY KEY, name VARCHAR(20), is_occupied BOOLEAN, timestamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP )";
    con.query(sensor, function (err, result) {
        if (err) throw err;
        console.log("Sensor Table created");
    });

    var bays = "CREATE TABLE IF NOT EXISTS BAYS (parkinglot_name VARCHAR(20), FOREIGN KEY (`parkinglot_name`) REFERENCES `PARKING_LOT` (`name`) ON DELETE CASCADE ,bay_name VARCHAR(20),sensor_id VARCHAR(20), FOREIGN KEY (`sensor_id`) REFERENCES `SENSOR` (`id`) ON DELETE CASCADE, pos_x DECIMAL(4,2), pos_y DECIMAL(4,2))";
    con.query(bays, function (err, result) {
        if (err) throw err;
        console.log("Bays Table created");
    });

});