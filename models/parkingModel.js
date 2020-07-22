const sql = require("./db.js");

const Parking = function(parking) {
    this.name = parking.name;
    this.latitude = parking.latitude;
    this.longitude = parking.longitude;
    this.gateway_UUID = parking.gateway_UUID;
}

Parking.getALL = result => {
    sql.query("Select name from parking_lot" , (err,res) => {
        if(err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("parking_lot: ", res);
        result(null, res);
    });
};

module.exports = Parking;